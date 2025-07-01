"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Clock, User, ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Breadcrumb from "./breadcrumb";
import { cn } from "@/lib/utils";
import { topics, getRelatedTopics } from "@/lib/topics";

interface Section {
  id: string;
  title: string;
  content: string;
}

interface Topic {
  slug: string;
  title: string;
  description: string;
  category: string;
  readTime: string;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  tags: string[];
  sections: Section[];
}

interface MainContentProps {
  topic: Topic;
  isMobile?: boolean;
}

export default function MainContent({
  topic,
  isMobile = false,
}: MainContentProps) {
  const currentIndex = topics.findIndex((t) => t.slug === topic.slug);
  const previousTopic = currentIndex > 0 ? topics[currentIndex - 1] : null;
  const nextTopic =
    currentIndex < topics.length - 1 ? topics[currentIndex + 1] : null;
  const relatedTopics = getRelatedTopics(topic.slug);

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Beginner":
        return "bg-green-100 text-green-800";
      case "Intermediate":
        return "bg-yellow-100 text-yellow-800";
      case "Advanced":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  // Save scroll position
  useEffect(() => {
    const mainContent = document.querySelector("[data-main-content]");
    if (!mainContent) return;

    const handleScroll = () => {
      sessionStorage.setItem(
        `content-scroll-${topic.slug}`,
        mainContent.scrollTop.toString()
      );
    };

    mainContent.addEventListener("scroll", handleScroll);
    return () => mainContent.removeEventListener("scroll", handleScroll);
  }, [topic.slug]);

  // Restore scroll position
  useEffect(() => {
    const mainContent = document.querySelector("[data-main-content]");
    if (mainContent) {
      const savedScroll = sessionStorage.getItem(
        `content-scroll-${topic.slug}`
      );
      if (savedScroll) {
        setTimeout(() => {
          mainContent.scrollTop = Number.parseInt(savedScroll);
        }, 100);
      }
    }
  }, [topic.slug]);

  return (
    <main
      className={cn(
        "bg-white flex flex-col h-full",
        isMobile ? "w-full" : "w-full"
      )}
    >
      <div className="flex-1 overflow-y-auto" data-main-content>
        <div className="p-4 lg:p-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Breadcrumb currentTopic={topic.slug} />

            <div className="mb-6">
              <div className="flex flex-wrap items-center gap-2 mb-4">
                <Badge variant="secondary" className="text-xs">
                  {topic.category}
                </Badge>
                <Badge
                  className={`text-xs ${getDifficultyColor(topic.difficulty)}`}
                >
                  {topic.difficulty}
                </Badge>
              </div>

              <h1 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                {topic.title}
              </h1>
              <p className="text-base lg:text-lg text-gray-600 mb-6">
                {topic.description}
              </p>

              <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-6">
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-1" />
                  {topic.readTime}
                </div>
                <div className="flex items-center">
                  <User className="w-4 h-4 mr-1" />1 Market Philippines Team
                </div>
                <div className="text-xs">{topic.sections.length} sections</div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-8">
                {topic.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded-full"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="prose prose-sm lg:prose-lg max-w-none">
              {topic.sections.map((section, index) => (
                <motion.section
                  key={section.id}
                  id={section.id}
                  data-section
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="mb-8 scroll-mt-8"
                >
                  <h2 className="text-xl lg:text-2xl font-semibold text-gray-900 mb-4">
                    {section.title}
                  </h2>
                  <div
                    className="text-gray-700 leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: section.content }}
                  />
                </motion.section>
              ))}
            </div>

            {/* Navigation Footer */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <div className="text-sm text-gray-500">
                <p className="font-medium mb-1">Keyboard shortcuts:</p>
                <p>
                  Use <kbd className="bg-gray-100 px-2 py-1 rounded">←</kbd> to
                  go to the previous topic and{" "}
                  <kbd className="bg-gray-100 px-2 py-1 rounded">→</kbd> to go
                  to the next topic.
                </p>
              </div>
              <div className="flex flex-col mt-5 lg:flex-row justify-between items-start lg:items-center gap-6">
                {previousTopic && (
                  <Link href={`/topic/${previousTopic.slug}`}>
                    <Button variant="outline" className="w-full sm:w-auto">
                      <ArrowLeft className="w-4 h-4 mr-2" />
                      Previous: {previousTopic.title}
                    </Button>
                  </Link>
                )}
                {nextTopic && (
                  <Link href={`/topic/${nextTopic.slug}`}>
                    <Button className="w-full sm:w-auto bg-[#800020] hover:bg-[#600018]">
                      Next: {nextTopic.title}
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                )}
              </div>
            </div>

            {/* Related Topics */}
            {relatedTopics.length > 0 && (
              <div className="mt-12 pt-8 border-t border-gray-200">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">
                  Related Topics
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {relatedTopics.map((relatedTopic) => (
                    <Link
                      key={relatedTopic.slug}
                      href={`/topic/${relatedTopic.slug}`}
                    >
                      <div className="p-4 border border-gray-200 rounded-lg hover:border-[#800020] hover:shadow-md transition-all">
                        <h4 className="font-medium text-gray-900 mb-2">
                          {relatedTopic.title}
                        </h4>
                        <p className="text-sm text-gray-600 mb-2 line-clamp-2">
                          {relatedTopic.description}
                        </p>
                        <div className="flex items-center justify-between text-xs text-gray-500">
                          <span>{relatedTopic.readTime}</span>
                          <Badge
                            className={`text-xs ${getDifficultyColor(
                              relatedTopic.difficulty
                            )}`}
                          >
                            {relatedTopic.difficulty}
                          </Badge>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </main>
  );
}
