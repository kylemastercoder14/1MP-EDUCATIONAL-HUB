import { useLocale, useTranslations } from "next-intl";
import LocaleSwitcherSelect from "./locale-switcher-select";

export default function LocaleSwitcher({scrolled}: {scrolled?: boolean}) {
  const t = useTranslations("LocaleSwitcher");
  const locale = useLocale();

  return (
    <LocaleSwitcherSelect
    scrolled={scrolled}
      defaultValue={locale}
      label={t("label")}
    />
  );
}
