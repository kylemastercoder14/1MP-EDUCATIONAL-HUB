"use client";

import Link from "next/link";

interface UnderConstructionTopicProps {
  slug: string;
}

export default function UnderConstructionTopic({
  slug,
}: UnderConstructionTopicProps) {
  return (
    <div className="max-w-4xl w-full bg-white border border-gray-200 shadow-sm rounded-2xl p-8 mx-auto">
      {/* Badge */}
      <div className="inline-flex items-center rounded-full bg-amber-50 px-3 py-1 text-xs font-medium text-amber-700 mb-4">
        <span className="mr-2 h-2 w-2 rounded-full animate-pulse bg-amber-500" />
        Work in progress
      </div>

      {/* Icon + Title */}
      <div className="flex items-start gap-4 mb-4">
        <div className="mt-1 flex h-10 w-10 items-center justify-center rounded-full bg-amber-100 text-amber-700">
          <span className="text-xl font-semibold">!</span>
        </div>
        <div>
          <h1 className="text-2xl font-semibold text-gray-900">
            This topic is still under construction
          </h1>
          <p className="mt-2 text-sm text-gray-600">
            We&apos;re preparing detailed educational content for this topic.
            It isn&apos;t ready yet, but it will be available soon.
          </p>
        </div>
      </div>

      {/* Slug / technical info */}
      <div className="rounded-md bg-gray-50 px-3 py-2 text-xs text-gray-500 mb-6">
        <span className="font-medium text-gray-700">Reference ID:</span>{" "}
        <code className="font-mono text-[11px] break-all">{slug}</code>
      </div>

      {/* Actions */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <Link
          href="/"
          className="inline-flex items-center justify-center rounded-md bg-blue-600 px-4 py-2.5 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
        >
          Back to home
        </Link>

        <p className="text-xs text-gray-500 sm:text-right">
          Looking for something specific? Try another topic from the sidebar
          or return to the main documentation.
        </p>
      </div>
    </div>
  );
}
