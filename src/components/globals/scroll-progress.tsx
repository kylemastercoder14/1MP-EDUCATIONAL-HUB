"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"

export default function ScrollProgress() {
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
	const updateScrollProgress = () => {
	  const mainContent = document.querySelector("[data-main-content]")
	  if (!mainContent) return

	  const scrollTop = mainContent.scrollTop
	  const scrollHeight = mainContent.scrollHeight - mainContent.clientHeight
	  const progress = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0

	  setScrollProgress(progress)
	}

	const mainContent = document.querySelector("[data-main-content]")
	if (mainContent) {
	  mainContent.addEventListener("scroll", updateScrollProgress)
	  return () => mainContent.removeEventListener("scroll", updateScrollProgress)
	}
  }, [])

  return (
	<div className="fixed top-16 left-0 right-0 h-1 bg-gray-200 z-50">
	  <motion.div
		className="h-full bg-gradient-to-r from-[#800020] to-[#a00028]"
		style={{ width: `${scrollProgress}%` }}
		initial={{ width: 0 }}
		animate={{ width: `${scrollProgress}%` }}
		transition={{ duration: 0.1 }}
	  />
	</div>
  )
}
