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

const Header = () => {
  const router = useRouter();
  const t = useTranslations("Header");
  const [scrolled, setScrolled] = React.useState(false);

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
  return (
    <header
      className={`${
        scrolled ? "bg-white" : "bg-zinc-950"
      } sticky top-0 inset-x-0 z-50 transition-colors duration-300`}
    >
      <div className="px-4 sm:px-6 lg:px-10">
        <div className="flex items-center justify-between h-16">
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
          <div className="flex items-center space-x-2 lg:space-x-4">
            {/* Search Bar */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                placeholder={t("placeholder")}
                className={`pl-10 rounded-none lg:w-[420px] w-full ${
                  scrolled
                    ? "bg-white text-black"
                    : "bg-zinc-800 text-white border-none"
                }`}
              />
            </div>
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
    </header>
  );
};

export default Header;
