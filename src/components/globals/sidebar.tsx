"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown, ChevronRight, Menu, X } from "lucide-react"
import Link from "next/link"
import { topics } from "@/lib/topics"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

interface SidebarProps {
  currentTopic: string
  isMobile?: boolean
}

export default function Sidebar({ currentTopic, isMobile = false }: SidebarProps) {

  const [expandedCategories, setExpandedCategories] = useState<string[]>(["Getting Started"])
  const [isOpen, setIsOpen] = useState(false)

  const categories = topics.reduce(
	(acc, topic) => {
	  if (!acc[topic.category]) {
		acc[topic.category] = []
	  }
	  acc[topic.category].push(topic)
	  return acc
	},
	{} as Record<string, typeof topics>,
  )

  const toggleCategory = (category: string) => {
	setExpandedCategories((prev) =>
	  prev.includes(category) ? prev.filter((c) => c !== category) : [...prev, category],
	)
  }

  // Save scroll position
  useEffect(() => {
	const sidebar = document.querySelector("[data-sidebar-scroll]")
	if (!sidebar) return

	const handleScroll = () => {
	  sessionStorage.setItem("sidebar-scroll", sidebar.scrollTop.toString())
	}

	sidebar.addEventListener("scroll", handleScroll)
	return () => sidebar.removeEventListener("scroll", handleScroll)
  }, [])

  // Restore scroll position
  useEffect(() => {
	const sidebar = document.querySelector("[data-sidebar-scroll]")
	if (sidebar) {
	  const savedScroll = sessionStorage.getItem("sidebar-scroll")
	  if (savedScroll) {
		sidebar.scrollTop = Number.parseInt(savedScroll)
	  }
	}
  }, [currentTopic])

  if (isMobile) {
	return (
	  <div className="w-full">
		<Button variant="outline" onClick={() => setIsOpen(!isOpen)} className="w-full justify-between">
		  <span>Documentation Menu</span>
		  {isOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
		</Button>

		<AnimatePresence>
		  {isOpen && (
			<motion.div
			  initial={{ height: 0, opacity: 0 }}
			  animate={{ height: "auto", opacity: 1 }}
			  exit={{ height: 0, opacity: 0 }}
			  className="overflow-hidden bg-white border border-gray-200 rounded-md mt-2"
			>
			  <div className="p-4 max-h-96 overflow-y-auto">
				<SidebarContent
				  categories={categories}
				  expandedCategories={expandedCategories}
				  toggleCategory={toggleCategory}
				  currentTopic={currentTopic}
				  onLinkClick={() => setIsOpen(false)}
				/>
			  </div>
			</motion.div>
		  )}
		</AnimatePresence>
	  </div>
	)
  }

  return (
	<aside className="w-full bg-white border-r border-gray-200 flex flex-col h-full">
	  <div className="flex-1 overflow-y-auto" data-sidebar-scroll>
		<div className="p-6">
		  <h2 className="text-lg font-semibold text-gray-900 mb-6">Documentation</h2>
		  <SidebarContent
			categories={categories}
			expandedCategories={expandedCategories}
			toggleCategory={toggleCategory}
			currentTopic={currentTopic}
		  />
		</div>
	  </div>
	</aside>
  )
}

interface SidebarContentProps {
  categories: Record<string, typeof topics>
  expandedCategories: string[]
  toggleCategory: (category: string) => void
  currentTopic: string
  onLinkClick?: () => void
}

function SidebarContent({
  categories,
  expandedCategories,
  toggleCategory,
  currentTopic,
  onLinkClick,
}: SidebarContentProps) {
  return (
	<nav className="space-y-2">
	  {Object.entries(categories).map(([category, categoryTopics]) => (
		<div key={category}>
		  <button
			onClick={() => toggleCategory(category)}
			className="flex items-center justify-between w-full text-left py-2 px-3 text-sm font-medium text-gray-700 hover:bg-gray-50 rounded-md"
		  >
			<span>{category}</span>
			{expandedCategories.includes(category) ? (
			  <ChevronDown className="w-4 h-4" />
			) : (
			  <ChevronRight className="w-4 h-4" />
			)}
		  </button>

		  <AnimatePresence>
			{expandedCategories.includes(category) && (
			  <motion.div
				initial={{ opacity: 0, height: 0 }}
				animate={{ opacity: 1, height: "auto" }}
				exit={{ opacity: 0, height: 0 }}
				className="ml-4 mt-2 space-y-1 overflow-hidden"
			  >
				{categoryTopics.map((topic) => (
				  <Link
					key={topic.slug}
					href={`/topic/${topic.slug}`}
					onClick={onLinkClick}
					className={cn(
					  "block py-2 px-3 text-sm text-gray-600 hover:text-[#800020] hover:bg-red-50 rounded-md transition-colors",
					  currentTopic === topic.slug && "text-[#800020] bg-red-50 font-medium",
					)}
				  >
					{topic.title}
				  </Link>
				))}
			  </motion.div>
			)}
		  </AnimatePresence>
		</div>
	  ))}
	</nav>
  )
}
