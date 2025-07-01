import { useTranslations } from "next-intl";
import Header from "@/components/globals/header";
import Hero from "@/components/globals/hero";
import TopicsGrid from "@/components/globals/topics-grid";

export default function Home() {
  const t = useTranslations("Home");

  const resources: { title: string; description: string; iconKey: "book" | "growth"; }[] = [
    {
      title: t("resources.0.title"),
      description: t("resources.0.description"),
      iconKey: "book",
    },
    {
      title: t("resources.1.title"),
      description: t("resources.1.description"),
      iconKey: "growth",
    },
  ];
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        <Hero
          subTitle={t("subTitle")}
          title={t.rich("title", {
            span: (chunks) => <span className="text-[#eb254c]">{chunks}</span>,
          })}
          description={t("description")}
          resources={resources}
        />
        <TopicsGrid />
      </main>
    </div>
  );
}
