"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { ChevronUp, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";

interface Section {
  id: string;
  title: string;
  content: string;
}

interface TableOfContentsProps {
  sections: Section[];
  isMobile?: boolean;
}

export default function TableOfContents({
  sections,
  isMobile = false,
}: TableOfContentsProps) {
  const t = useTranslations("Common");
  const [activeSection, setActiveSection] = useState<string>("");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const mainContent = document.querySelector("[data-main-content]");
    if (!mainContent) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        root: mainContent,
        rootMargin: "-20% 0px -80% 0px",
      }
    );

    sections.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [sections]);

  // Save scroll position
  useEffect(() => {
    const toc = document.querySelector("[data-toc-scroll]");
    if (!toc) return;

    const handleScroll = () => {
      sessionStorage.setItem("toc-scroll", toc.scrollTop.toString());
    };

    toc.addEventListener("scroll", handleScroll);
    return () => toc.removeEventListener("scroll", handleScroll);
  }, []);

  // Restore scroll position
  useEffect(() => {
    const toc = document.querySelector("[data-toc-scroll]");
    if (toc) {
      const savedScroll = sessionStorage.getItem("toc-scroll");
      if (savedScroll) {
        toc.scrollTop = Number.parseInt(savedScroll);
      }
    }
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    const mainContent = document.querySelector("[data-main-content]");

    if (element && mainContent) {
      const elementTop = element.offsetTop;
      const offset = 100;

      mainContent.scrollTo({
        top: elementTop - offset,
        behavior: "smooth",
      });
    }
  };

  if (isMobile) {
    return (
      <div className="bg-gray-50 border-t border-gray-200 p-4">
        <Button
          variant="outline"
          onClick={() => setIsOpen(!isOpen)}
          className="w-full justify-between"
        >
          <span>{t("tableContentTitle")}</span>
          {isOpen ? (
            <ChevronUp className="w-4 h-4" />
          ) : (
            <ChevronDown className="w-4 h-4" />
          )}
        </Button>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="overflow-hidden mt-2"
            >
              <TableOfContentsContent
                sections={sections}
                activeSection={activeSection}
                scrollToSection={scrollToSection}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  }

  return (
    <aside className="w-full bg-gray-50 border-l border-gray-200 flex flex-col h-full">
      <div className="flex-1 overflow-y-auto" data-toc-scroll>
        <div className="p-6">
          <h3 className="text-sm font-semibold text-gray-900 mb-4">
            {t("tableContentTitle")}
          </h3>
          <TableOfContentsContent
            sections={sections}
            activeSection={activeSection}
            scrollToSection={scrollToSection}
          />
        </div>
      </div>
    </aside>
  );
}

interface TableOfContentsContentProps {
  sections: Section[];
  activeSection: string;
  scrollToSection: (sectionId: string) => void;
}

function TableOfContentsContent({
  sections,
  activeSection,
  scrollToSection,
}: TableOfContentsContentProps) {
  return (
    <nav className="space-y-2">
      {sections.map((section, index) => (
        <motion.button
          key={section.id}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, delay: index * 0.05 }}
          onClick={() => scrollToSection(section.id)}
          className={cn(
            "block w-full text-left py-2 px-3 text-sm rounded-md transition-colors",
            activeSection === section.id
              ? "text-[#800020] bg-red-50 font-medium border-l-2 border-[#800020]"
              : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
          )}
        >
          {section.title}
        </motion.button>
      ))}
    </nav>
  );
}
