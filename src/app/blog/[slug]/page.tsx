import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/page-hero";
import { blogPosts, getPost } from "@/data/content";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return blogPosts.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  return { title: getPost(slug)?.title ?? "Blog" };
}

export default async function BlogPost({ params }: Props) {
  const { slug } = await params;
  const a = getPost(slug);
  if (!a) notFound();
  return (
    <>
      <PageHero
        eyebrow={a.category}
        title={a.title}
        lede={a.summary}
        crumbs={[
          { href: "/", label: "Home" },
          { href: "/blog", label: "Blog" },
          { href: `/blog/${a.slug}`, label: a.title },
        ]}
      />
      <article className="container-site max-w-3xl py-12">
        {a.body.map((p) => (
          <p key={p.slice(0, 40)} className="mt-4 leading-relaxed text-muted-foreground">
            {p}
          </p>
        ))}
        <Link href="/blog" className="mt-10 inline-block text-sm font-semibold text-primary">
          ← All posts
        </Link>
      </article>
    </>
  );
}
