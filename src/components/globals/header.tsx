"use client";
import React from "react";
import { Link } from "@/i18n/navigation";
import Image from "next/image";
import { Search, User } from "lucide-react";
import { Input } from "@/components/ui/input";
import LocaleSwitcher from "./locale-switcher";
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import { topics } from "@/lib/topics";

const Header = () => {
  const router = useRouter();
  const t = useTranslations("Header");
  const [scrolled, setScrolled] = React.useState(false);
  const [searchQuery, setSearchQuery] = React.useState("");

  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const suggestions = React.useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    if (!q) return [];

    return topics
      .filter((topic) => {
        const inTitle = topic.title.toLowerCase().includes(q);
        const inDescription = topic.description.toLowerCase().includes(q);
        const inCategory = topic.category.toLowerCase().includes(q);
        const inTags = topic.tags?.some((tag) => tag.toLowerCase().includes(q));
        return inTitle || inDescription || inCategory || inTags;
      })
      .slice(0, 8);
  }, [searchQuery]);

  const handleSuggestionSelect = (slug: string) => {
    setSearchQuery("");
    router.push(`/topic/${slug}`);
  };

  return (
    <header
      className={`${
        scrolled ? "bg-white" : "bg-zinc-950"
      } sticky top-0 inset-x-0 z-50 transition-colors duration-300`}
    >
      <div className="px-4 sm:px-6 lg:px-10">
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between py-3 md:h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="size-10 relative">
              <Image
                src={scrolled ? "/logo-dark.png" : "/logo-light.png"}
                alt="Logo"
                fill
                className="w-full h-full"
              />
            </div>
            <div className="flex flex-col">
              <span
                className={`text-base lg:text-lg font-semibold ${
                  scrolled ? "text-gray-900" : "text-gray-200"
                }`}
              >
                1 Market Philippines
              </span>
              <span
                className={`text-xs ${
                  scrolled ? "text-gray-800" : "text-gray-400"
                } hidden sm:block`}
              >
                {t("title")}
              </span>
            </div>
          </Link>

          {/* Right Side */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 lg:gap-4 w-full md:w-auto">
            {/* Search Bar */}
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                placeholder={t("placeholder")}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && suggestions.length > 0) {
                    e.preventDefault();
                    handleSuggestionSelect(suggestions[0].slug);
                  }
                }}
                className={`pl-10 rounded-none lg:w-[420px] w-full ${
                  scrolled
                    ? "bg-white text-black"
                    : "bg-zinc-800 text-white border-none"
                }`}
              />

              {searchQuery.trim() && (
                <div
                  className={`absolute left-0 right-0 mt-1 max-h-80 overflow-y-auto rounded-md border shadow-lg z-50 text-sm ${
                    scrolled ? "bg-white" : "bg-zinc-900 border-zinc-700"
                  }`}
                >
                  {suggestions.length === 0 && (
                    <div className="px-3 py-2 text-xs text-gray-500">
                      No matching topics. Try a different keyword.
                    </div>
                  )}

                  {suggestions.length > 0 &&
                    suggestions.map((topic) => (
                      <button
                        key={topic.slug}
                        type="button"
                        onMouseDown={(e) => {
                          e.preventDefault();
                          handleSuggestionSelect(topic.slug);
                        }}
                        className={`w-full text-left px-3 py-2 flex flex-col gap-0.5 ${
                          scrolled
                            ? "text-gray-900 hover:bg-gray-100"
                            : "text-gray-100 hover:bg-zinc-800"
                        }`}
                      >
                        <span className="text-sm font-medium line-clamp-1">
                          {topic.title}
                        </span>
                        <span className="text-[11px] opacity-80 line-clamp-1">
                          {topic.category} · {topic.readTime}
                        </span>
                      </button>
                    ))}

                  <div
                    className={`border-t mt-1 ${
                      scrolled ? "border-gray-200" : "border-zinc-700"
                    }`}
                  />

                  <button
                    type="button"
                    onMouseDown={(e) => {
                      e.preventDefault();
                      const q = searchQuery.trim();
                      if (!q) return;
                      router.push(`/search?q=${encodeURIComponent(q)}`);
                      setSearchQuery("");
                    }}
                    className={`w-full text-left px-3 py-2 text-xs font-medium ${
                      scrolled
                        ? "text-[#800020] hover:bg-gray-100"
                        : "text-red-200 hover:bg-zinc-800"
                    }`}
                  >
                    View all results for
                    <span className="font-semibold"> "{searchQuery.trim()}"</span>
                  </button>
                </div>
              )}
            </div>
            <div className="flex items-center justify-end gap-2 lg:gap-4">
              <LocaleSwitcher scrolled={scrolled} />
              <Button
                onClick={() =>
                  router.push(
                    "https://seller.onemarketphilippines.com/sign-in"
                  )
                }
                className="bg-[#800020] rounded-none hover:bg-[#600018]"
              >
                <User className="w-4 h-4" />
                <span className="hidden sm:inline">Seller Portal</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
