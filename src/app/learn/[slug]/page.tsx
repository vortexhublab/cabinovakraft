import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/page-hero";
import { getLearn, learnArticles } from "@/data/content";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return learnArticles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  return { title: getLearn(slug)?.title ?? "Learn" };
}

export default async function LearnArticle({ params }: Props) {
  const { slug } = await params;
  const a = getLearn(slug);
  if (!a) notFound();
  return (
    <>
      <PageHero
        eyebrow={a.category}
        title={a.title}
        lede={a.summary}
        crumbs={[
          { href: "/", label: "Home" },
          { href: "/learn", label: "Learn" },
          { href: `/learn/${a.slug}`, label: a.title },
        ]}
      />
      <article className="container-site max-w-3xl py-12">
        {a.body.map((p) => (
          <p key={p.slice(0, 40)} className="mt-4 leading-relaxed text-muted-foreground">
            {p}
          </p>
        ))}
        <Link href="/learn" className="mt-10 inline-block text-sm font-semibold text-primary">
          ← All articles
        </Link>
      </article>
    </>
  );
}
