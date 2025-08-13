/* eslint-disable @next/next/no-html-link-for-pages */
"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { topics, getAllCategories } from "@/lib/topics";
import {
  Clock,
  BookOpen,
  ArrowRight,
  Rocket,
  Compass,
  Package,
  Truck,
  Megaphone,
  BarChart,
  FileText,
  Wrench,
  Settings,
  Smile,
  ShieldCheckIcon,
} from "lucide-react";
import { JSX, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useRouter } from "next/navigation";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

const tabs = [
  {
    title: "Courses",
    description: "Learn about increasing sales.",
    icon: "/tabs/01.svg",
    iconDark: "/tabs/01-dark.svg",
  },
  {
    title: "Webinars",
    description: "Get to know more for sellers.",
    icon: "/tabs/02.svg",
    iconDark: "/tabs/02-dark.svg",
  },
  {
    title: "Policy Center",
    description: "Check the latest policies and news.",
    icon: "/tabs/03.svg",
    iconDark: "/tabs/03-dark.svg",
  },
];

export default function TopicsGrid() {
  const router = useRouter();
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8; // Adjust this number based on your grid layout
  const categories = ["All", ...getAllCategories()];
  const paginationRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const filteredTopics =
    selectedCategory === "All"
      ? topics
      : topics.filter((topic) => topic.category === selectedCategory);

  // Pagination logic
  const totalPages = Math.ceil(filteredTopics.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedTopics = filteredTopics.slice(startIndex, endIndex);

  const topicsLeft = [
    "How to register and verify your seller account",
    "Creating attractive product listings",
    "Understanding the order flow",
    "Creating store coupons and product discounts",
    "Conversion rate and traffic sources",
  ];

  const topicsRight = [
    "Seller do's and don'ts",
    "Understanding platform fees",
    "Community standards and prohibited items",
    "Copyright and intellectual property guidelines",
    "Terms of service for digital products",
  ];

  const categoryIcons: Record<string, JSX.Element> = {
    "Getting Started": <Rocket className="size-4 mr-1" />,
    "Product Management": <Package className="size-4 mr-1" />,
    "Order Management": <Truck className="size-4 mr-1" />,
    Marketing: <Megaphone className="size-4 mr-1" />,
    Analytics: <BarChart className="size-4 mr-1" />,
    Policies: <FileText className="size-4 mr-1" />,
    "Advanced Topics": <Wrench className="size-4 mr-1" />,
    "Tools and Resources": <Settings className="size-4 mr-1" />,
    "Success Stories": <Smile className="size-4 mr-1" />,
    Support: <ShieldCheckIcon className="size-4 mr-1" />,
  };

  const handlePageChange = (page: number) => {
    // Save current scroll position relative to the pagination component
    const scrollPosition = window.scrollY;
    const paginationPosition =
      paginationRef.current?.getBoundingClientRect().top || 0;
    const relativePosition = scrollPosition + paginationPosition;

    setCurrentPage(page);

    // After state update, restore scroll position
    setTimeout(() => {
      const newPaginationPosition =
        paginationRef.current?.getBoundingClientRect().top || 0;
      const newScrollPosition = relativePosition - newPaginationPosition;
      window.scrollTo({ top: newScrollPosition });
    }, 0);
  };

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="grid lg:grid-cols-2 mb-12 grid-cols-1 gap-10">
            <div className="bg-white shadow border rounded-md px-5 py-3">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold">
                  Hot Topics to Get You Started
                </h2>
                <a
                  href="/hot-topics"
                  className="text-red-600 text-sm font-medium flex items-center gap-1 hover:underline"
                >
                  Learn More <ArrowRight size={16} />
                </a>
              </div>
              <div className="flex gap-4">
                <div className="relative w-[50%] h-60">
                  <Image
                    src="/featured-topics/1.png"
                    alt="Hot topics"
                    fill
                    className="rounded-lg size-full object-cover"
                  />
                </div>
                <ul className="space-y-2 w-[50%] text-sm">
                  {topicsLeft.map((topic, idx) => (
                    <li
                      onClick={() =>
                        router.push(
                          `/topic/${topic.toLowerCase().replace(/\s+/g, "-")}`
                        )
                      }
                      key={idx}
                      className={`cursor-pointer px-2 py-1 hover:bg-red-100 hover:text-red-600 rounded`}
                    >
                      {topic}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="bg-white shadow border rounded-md px-5 py-3">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold">
                  Policies and Guidelines
                </h2>
                <a
                  href="/policies"
                  className="text-red-600 font-medium flex text-sm items-center gap-1 hover:underline"
                >
                  Learn More <ArrowRight size={16} />
                </a>
              </div>
              <div className="flex gap-4">
                <div className="relative w-[50%] h-60">
                  <Image
                    src="/featured-topics/2.png"
                    alt="Policies"
                    fill
                    className="rounded-lg size-full object-cover"
                  />
                </div>
                <ul className="space-y-2 w-[50%] text-sm">
                  {topicsRight.map((topic, idx) => (
                    <li
                      onClick={() =>
                        router.push(
                          `/topic/${topic.toLowerCase().replace(/\s+/g, "-")}`
                        )
                      }
                      key={idx}
                      className={`cursor-pointer px-2 py-1 hover:bg-red-100 hover:text-red-600 rounded`}
                    >
                      {topic}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white mb-12 shadow border rounded-xl grid lg:grid-cols-3 grid-cols-1">
            {tabs.map((tab, index) => {
              const isActive = index === activeIndex;
              const isLast = index === tabs.length - 1;

              return (
                <div
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`p-5 flex items-center gap-3 cursor-pointer transition-all
                    ${
                      isActive
                        ? "bg-gradient-to-tl from-[#800020] to-red-400 text-white"
                        : "bg-white text-black"
                    }
                    ${index === 0 ? "rounded-tl-xl rounded-bl-xl" : ""}
                    ${isLast ? "rounded-tr-xl rounded-br-xl" : ""}
                  `}
                >
                  <div className="relative size-20">
                    <Image
                      src={isActive ? tab.icon : tab.iconDark}
                      alt={tab.title}
                      fill
                      className="size-full object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">{tab.title}</h3>
                    <p className="font-medium text-sm">{tab.description}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Category Filter */}
          {activeIndex === 0 && (
            <Carousel opts={{ align: "center" }} className="w-full px-2">
              <CarouselContent className="flex items-center">
                {categories.map((category) => (
                  <CarouselItem key={category} className="basis-auto">
                    <Button
                      variant={
                        selectedCategory === category ? "default" : "outline"
                      }
                      size="sm"
                      onClick={() => {
                        setSelectedCategory(category);
                        setCurrentPage(1); // Reset to first page when category changes
                      }}
                      className={`whitespace-nowrap rounded-full px-4 py-2 flex items-center gap-1
                        ${
                          selectedCategory === category
                            ? "bg-[#800020] text-white hover:bg-[#600018]"
                            : ""
                        }
                      `}
                    >
                      {categoryIcons[category] ?? (
                        <Compass className="w-4 h-4 mr-1" />
                      )}
                      {category}
                    </Button>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="rounded-full border bg-white shadow" />
              <CarouselNext className="rounded-full border bg-white shadow" />
            </Carousel>
          )}
        </motion.div>

        {activeIndex === 0 && (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {paginatedTopics.map((topic, index) => (
                <motion.div
                  key={topic.slug}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Link href={`/topic/${topic.slug}`}>
                    <Card className="h-full p-0 hover:shadow-lg transition-shadow cursor-pointer group">
                      <CardContent className="p-0">
                        <div className="h-60 w-full rounded-t-lg relative overflow-hidden">
                          <Image
                            src={topic.image || ""}
                            alt={topic.title}
                            fill
                            className="size-full"
                          />
                          <div className="absolute top-2 right-2">
                            <Badge
                              variant="secondary"
                              className="bg-[#800020] hover:bg-[#800020] text-white border-0 text-xs"
                            >
                              {topic.category}
                            </Badge>
                          </div>
                        </div>
                        <div className="p-4">
                          <h3 className="text-black font-semibold line-clamp-2">
                            {topic.title}
                          </h3>
                          <p className="text-gray-600 text-sm mb-2 line-clamp-2">
                            {topic.description}
                          </p>

                          <div className="flex items-center justify-between text-xs text-gray-500">
                            <div className="flex items-center gap-1">
                              <Clock className="w-3 h-3" />
                              {topic.readTime}
                            </div>
                            <div className="flex items-center gap-1">
                              <BookOpen className="w-3 h-3" />
                              {topic.sections.length} sections
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                </motion.div>
              ))}
            </div>

            {filteredTopics.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-500">
                  No topics found in this category.
                </p>
              </div>
            )}

            {/* Pagination */}
            {filteredTopics.length > itemsPerPage && (
              <div className="mt-8 flex justify-center" ref={paginationRef}>
                <Pagination>
                  <PaginationContent>
                    <PaginationItem>
                      <PaginationPrevious
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                          if (currentPage > 1) {
                            handlePageChange(currentPage - 1);
                          }
                        }}
                        className={
                          currentPage === 1
                            ? "pointer-events-none opacity-50"
                            : ""
                        }
                      />
                    </PaginationItem>

                    {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                      (page) => (
                        <PaginationItem key={page}>
                          <PaginationLink
                            href="#"
                            onClick={(e) => {
                              e.preventDefault();
                              handlePageChange(page);
                            }}
                            isActive={page === currentPage}
                          >
                            {page}
                          </PaginationLink>
                        </PaginationItem>
                      )
                    )}

                    <PaginationItem>
                      <PaginationNext
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                          if (currentPage < totalPages) {
                            handlePageChange(currentPage + 1);
                          }
                        }}
                        className={
                          currentPage === totalPages
                            ? "pointer-events-none opacity-50"
                            : ""
                        }
                      />
                    </PaginationItem>
                  </PaginationContent>
                </Pagination>
              </div>
            )}
          </>
        )}

        {activeIndex === 1 && (
          <div>TODO: Webinar List</div>
        )}

        {activeIndex === 2 && (
          <div>TODO: Policies and News List</div>
        )}
      </div>
    </section>
  );
}
