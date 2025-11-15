/* eslint-disable react/no-unescaped-entities */
import Header from "@/components/globals/header";
import { topics } from "@/lib/topics";
import { Link } from "@/i18n/navigation";

interface SearchPageProps {
  params: Promise<{ locale: string }>;
  searchParams?: { q?: string };
}

export default function SearchPage({ searchParams }: SearchPageProps) {
  const query = (searchParams?.q ?? "").trim();
  const normalized = query.toLowerCase();

  const results = query
    ? topics.filter((topic) => {
        const inTitle = topic.title.toLowerCase().includes(normalized);
        const inDescription = topic.description
          .toLowerCase()
          .includes(normalized);
        const inCategory = topic.category.toLowerCase().includes(normalized);
        const inTags = topic.tags?.some((tag) =>
          tag.toLowerCase().includes(normalized)
        );
        return inTitle || inDescription || inCategory || inTags;
      })
    : [];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="max-w-5xl mx-auto px-4 py-8">
        <h1 className="text-2xl font-semibold mb-2">
          {query ? (
            <>
              Search results for <span className="text-[#800020]">"{query}"</span>
            </>
          ) : (
            "Search"
          )}
        </h1>

        {query ? (
          <p className="text-sm text-gray-600 mb-6">
            {results.length} result{results.length === 1 ? "" : "s"} found.
          </p>
        ) : (
          <p className="text-sm text-gray-600 mb-6">
            Type a keyword in the search box above to find topics in the Seller
            Educational Hub.
          </p>
        )}

        {query && results.length === 0 && (
          <p className="text-sm text-gray-500">
            No topics matched your search. Try using different keywords like
            "payment", "onboarding", or "marketing".
          </p>
        )}

        {results.length > 0 && (
          <ul className="space-y-4 mt-2">
            {results.map((topic) => (
              <li
                key={topic.slug}
                className="bg-white rounded-md border shadow-sm p-4 hover:shadow-md transition-shadow"
              >
                <Link href={`/topic/${topic.slug}`}>
                  <div className="flex flex-col gap-1">
                    <h2 className="text-base font-semibold text-gray-900">
                      {topic.title}
                    </h2>
                    <div className="text-xs text-gray-500">
                      {topic.category} · {topic.readTime} · {topic.difficulty}
                    </div>
                    <p className="text-sm text-gray-700 line-clamp-2">
                      {topic.description}
                    </p>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </main>
    </div>
  );
}
