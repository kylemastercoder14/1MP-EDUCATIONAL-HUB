"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { topics } from "@/lib/topics"

interface KeyboardNavigationProps {
  currentTopic: string
}

export default function KeyboardNavigation({ currentTopic }: KeyboardNavigationProps) {
  const router = useRouter()

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      // Only handle if no input is focused
      if (document.activeElement?.tagName === "INPUT" || document.activeElement?.tagName === "TEXTAREA") {
        return
      }

      const currentIndex = topics.findIndex((topic) => topic.slug === currentTopic)

      switch (event.key) {
        case "ArrowLeft":
        case "h":
          event.preventDefault()
          if (currentIndex > 0) {
            router.push(`/topic/${topics[currentIndex - 1].slug}`)
          }
          break
        case "ArrowRight":
        case "l":
          event.preventDefault()
          if (currentIndex < topics.length - 1) {
            router.push(`/topic/${topics[currentIndex + 1].slug}`)
          }
          break
        case "Home":
        case "g":
          if (event.ctrlKey || event.metaKey) {
            event.preventDefault()
            router.push("/")
          }
          break
        case "j":
          event.preventDefault()
          scrollToNextSection()
          break
        case "k":
          event.preventDefault()
          scrollToPreviousSection()
          break
      }
    }

    const scrollToNextSection = () => {
      const mainContent = document.querySelector("[data-main-content]") as HTMLElement | null
      const sections = document.querySelectorAll("[data-section]")
      const currentScroll = mainContent?.scrollTop || 0

      for (const section of sections) {
        const htmlSection = section as HTMLElement
        if (htmlSection.offsetTop > currentScroll + 100) {
          mainContent?.scrollTo({ top: htmlSection.offsetTop - 100, behavior: "smooth" })
          break
        }
      }
    }

    const scrollToPreviousSection = () => {
      const mainContent = document.querySelector("[data-main-content]") as HTMLElement | null
      const sections = Array.from(document.querySelectorAll("[data-section]")).reverse()
      const currentScroll = mainContent?.scrollTop || 0

      for (const section of sections) {
        const htmlSection = section as HTMLElement
        if (htmlSection.offsetTop < currentScroll - 100) {
          mainContent?.scrollTo({ top: htmlSection.offsetTop - 100, behavior: "smooth" })
          break
        }
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [currentTopic, router])

  return null
}
