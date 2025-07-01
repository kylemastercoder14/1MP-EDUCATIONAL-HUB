"use client";

import Header from "@/components/globals/header";
import Sidebar from "@/components/globals/sidebar";
import MainContent from "@/components/globals/main-content";
import TableOfContents from "@/components/globals/table-of-contents";
import ScrollProgress from "@/components/globals/scroll-progress";
import KeyboardNavigation from "@/components/globals/keyboard-navigation";
import { notFound } from "next/navigation";
import { useTranslations } from "next-intl";
import { getTopicData } from '@/lib/topics';
import { useParams } from "next/navigation";

export default function TopicPage() {
  const params = useParams<{ slug: string }>();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const t = useTranslations("Topics");
  const topicData = getTopicData(params.slug)

  if (!topicData) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <ScrollProgress />
      <KeyboardNavigation currentTopic={params.slug} />

      {/* Mobile Layout */}
      <div className="lg:hidden">
        <div className="bg-white border-b border-gray-200 p-4">
          <Sidebar currentTopic={params.slug} isMobile={true} />
        </div>
        <MainContent topic={topicData} isMobile={true} />
      </div>

      {/* Desktop Layout */}
      <div className="hidden lg:flex h-[calc(100vh-4rem)] relative">
        <div className="w-[20%] fixed left-0 top-16 h-[calc(100vh-4rem)] z-10">
          <Sidebar currentTopic={params.slug} />
        </div>
        <div className="w-[60%] ml-[20%] mr-[20%] relative">
          <MainContent topic={topicData} />
        </div>
        <div className="w-[20%] fixed right-0 top-16 h-[calc(100vh-4rem)] z-10">
          <TableOfContents
            sections={topicData?.sections}
          />
        </div>
      </div>
    </div>
  );
}
