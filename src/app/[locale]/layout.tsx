import { Inter } from "next/font/google";
import "./globals.css";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { routing } from "@/i18n/routing";
import { notFound } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { locales } from "@/config";
import { ThemeFaviconWatcher } from "@/components/ThemeFaviconWatcher";

const inter = Inter({
  subsets: ["latin"],
});

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata ({
  params
}: Omit<Props, 'children'>) {
  const { locale } = await params;
  const t = await getTranslations({locale, namespace: "LocaleLayout"});

  return {
    title: t("title"),
    icons: {
      icon: [
        { url: '/logo-light.png', media: '(prefers-color-scheme: light)' },
        { url: '/logo-dark.png', media: '(prefers-color-scheme: dark)' },
      ],
    },
  }
}

export default async function RootLayout({
  children,
  params,
}: Readonly<Props>) {
  // Ensure that the incoming `locale` is valid
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);
  return (
    <html lang={locale}>
      <body className={`${inter.className} antialiased`}>
        <NextIntlClientProvider>
          <ThemeFaviconWatcher />
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
