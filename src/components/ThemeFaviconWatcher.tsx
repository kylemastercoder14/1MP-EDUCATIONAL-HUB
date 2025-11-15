"use client";

import { useEffect } from "react";

export function ThemeFaviconWatcher() {
  useEffect(() => {
    const lightIcon = "/logo-light.png";
    const darkIcon = "/logo-dark.png";

    function updateFavicon(isDark: boolean) {
      const existing = document.querySelector<HTMLLinkElement>(
        'link[rel="icon"]'
      );

      const link = document.createElement("link");
      link.rel = "icon";
      link.type = "image/png";
      link.href = isDark ? darkIcon : lightIcon;

      if (existing && existing.parentNode) {
        existing.parentNode.replaceChild(link, existing);
      } else {
        document.head.appendChild(link);
      }
    }

    const mql = window.matchMedia("(prefers-color-scheme: dark)");
    updateFavicon(mql.matches);

    const listener = (e: MediaQueryListEvent) => updateFavicon(e.matches);

    if (typeof mql.addEventListener === "function") {
      mql.addEventListener("change", listener);
      return () => mql.removeEventListener("change", listener);
    } else {
      // Safari <= 14
      mql.addListener(listener);
      return () => mql.removeListener(listener);
    }
  }, []);

  return null;
}
