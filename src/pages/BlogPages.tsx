import { Link, useParams, Navigate } from "react-router-dom";
import { useEffect } from "react";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { PageHero } from "../components/PageHero";
import { BlogStory } from "../components/BlogStory";
import { easeOut } from "../components/motion";
import { usePageSeo } from "../hooks/usePageTitle";
import { blogPosts, getBlogPost } from "../content/stories";

export function BlogHubPage() {
  usePageSeo({
    title: "Blog & Guides | Bizdaptive Decision Intelligence",
    description:
      "Guides on Company Graph, decision receipts, and how growing companies keep governed shared context — from the Bizdaptive team.",
    path: "/blog",
  });

  return (
    <div style={{ background: "var(--bg)" }}>
      <PageHero
        eyebrow="Blog"
        title="Go deeper on decision intelligence."
        lead="Problem-first guides on governed operating pictures, decision receipts, and the fog growing companies hit — written from how the product actually works."
      />

      <section className="px-5 pb-20 sm:px-8">
        <div className="blog-hub-grid mx-auto max-w-6xl">
          {blogPosts.map((post, i) => {
            const Icon = post.icon;
            return (
              <motion.div
                key={post.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ delay: i * 0.07, duration: 0.5, ease: easeOut }}
              >
                <Link to={`/blog/${post.slug}`} className="blog-hub-card blog-hub-card--text">
                  <div className="blog-hub-card__body">
                    <div className="blog-hub-card__meta">
                      <span className="blog-hub-card__badge">{post.kind}</span>
                      <span>{post.tags.join(" · ")}</span>
                      <span aria-hidden>·</span>
                      <span>{post.minutes} min</span>
                    </div>
                    <h2 className="blog-hub-card__title">{post.title}</h2>
                    <p className="blog-hub-card__excerpt">{post.excerpt}</p>
                    <span className="blog-hub-card__cta">
                      Read guide
                      <ArrowRight aria-hidden />
                      <Icon className="blog-hub-card__icon" strokeWidth={1.6} aria-hidden />
                    </span>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>

        <div className="mx-auto mt-14 max-w-xl text-center">
          <Link
            to="/use-cases"
            className="inline-flex items-center gap-2 text-sm font-semibold underline-offset-2 hover:underline"
            style={{ color: "var(--accent)" }}
          >
            Browse use cases
            <ArrowRight className="size-4" aria-hidden />
          </Link>
        </div>
      </section>
    </div>
  );
}

export function BlogPostPage() {
  const { slug = "" } = useParams();
  const post = getBlogPost(slug);

  usePageSeo({
    title: post ? `${post.title} | Bizdaptive` : "Blog | Bizdaptive",
    description: post?.excerpt ?? "Bizdaptive guides on decision intelligence.",
    path: post ? `/blog/${post.slug}` : "/blog",
  });

  useEffect(() => {
    document.documentElement.dataset.blogHero = "1";
    return () => {
      delete document.documentElement.dataset.blogHero;
    };
  }, []);

  if (!post) return <Navigate to="/blog" replace />;

  return (
    <div className="blog-story-page">
      <BlogStory post={post} />
    </div>
  );
}
