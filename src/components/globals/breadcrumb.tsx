"use client"

import Link from "next/link"
import { ChevronRight, Home } from "lucide-react"
import { topics } from "@/lib/topics"

interface BreadcrumbProps {
  currentTopic: string
}

export default function Breadcrumb({ currentTopic }: BreadcrumbProps) {
  const topic = topics.find((t) => t.slug === currentTopic)

  if (!topic) return null

  return (
	<nav className="flex items-center space-x-2 text-sm text-gray-600 mb-6">
	  <Link href="/" className="flex items-center hover:text-[#800020] transition-colors">
		<Home className="w-4 h-4" />
	  </Link>
	  <ChevronRight className="w-4 h-4" />
	  <span className="text-gray-400">{topic.category}</span>
	  <ChevronRight className="w-4 h-4" />
	  <span className="text-[#800020] font-medium">{topic.title}</span>
	</nav>
  )
}
