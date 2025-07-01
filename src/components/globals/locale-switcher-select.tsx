/* eslint-disable @typescript-eslint/ban-ts-comment */
"use client";

import { useTransition } from "react";
import { usePathname, useRouter } from "@/i18n/navigation";
import { useParams } from "next/navigation";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import Image from "next/image";

type Props = {
  defaultValue: string;
  label: string;
  scrolled?: boolean;
};

export default function LocaleSwitcherSelect({
  defaultValue,
  label,
  scrolled,
}: Props) {
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams();
  const [isPending, startTransition] = useTransition();

  function handleLocaleChange(locale: string) {
    startTransition(() => {
      router.replace(
        // @ts-ignore
        { pathname, params },
        { locale }
      );
    });
  }

  return (
    <div className="w-[160px]">
      <Select
        defaultValue={defaultValue}
        onValueChange={handleLocaleChange}
        disabled={isPending}
      >
        <SelectTrigger
          className={`w-full rounded-none ${
            scrolled ? "bg-white text-black" : "bg-zinc-800 text-white border-none"
          }`}
        >
          <SelectValue placeholder={label} />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="en">
            <Image src="/united-states.png" alt="US" width={15} height={15} />{" "}
            English
          </SelectItem>
          <SelectItem value="tl">
            <Image src="/philippines.png" alt="PH" width={15} height={15} />{" "}
            Tagalog
          </SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}
