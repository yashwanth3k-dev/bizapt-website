import { Link, useParams, Navigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { PageHero } from "../components/PageHero";
import { Button } from "../components/Button";
import { BlogVisual } from "../components/StoryVisuals";
import { easeOut } from "../components/motion";
import { usePageSeo } from "../hooks/usePageTitle";
import { blogPosts, getBlogPost } from "../content/stories";

export function BlogHubPage() {
  usePageSeo({
    title: "Blog & Guides | Bizdaptive Decision Intelligence",
    description:
      "Guides on living company maps, decision receipts, and how growing companies keep shared context — from the Bizdaptive team.",
    path: "/blog",
  });

  return (
    <div style={{ background: "var(--bg)" }}>
      <PageHero
        eyebrow="Blog"
        title="Go deeper on decision intelligence."
        lead="Short guides on living company maps, decision receipts, and the fog growing companies hit — written from how Bizdaptive actually works."
      />

      <section className="px-5 pb-20 sm:px-8">
        <div className="blog-card-list mx-auto max-w-3xl">
          {blogPosts.map((post, i) => {
            const Icon = post.icon;
            return (
              <motion.div
                key={post.slug}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: i * 0.08, duration: 0.5, ease: easeOut }}
              >
                <Link to={`/blog/${post.slug}`} className="blog-card">
                  <span className="blog-card__rail" aria-hidden />
                  <div className="blog-card__row">
                    <div className="blog-card__copy">
                      <div className="blog-card__meta">
                        <span className="blog-card__kind">{post.kind}</span>
                        <span className="blog-card__mins">{post.minutes} min read</span>
                      </div>
                      <h2 className="blog-card__title">{post.title}</h2>
                      <p className="blog-card__excerpt">{post.excerpt}</p>
                      <span className="blog-card__cta">
                        Read guide
                        <ArrowRight aria-hidden />
                      </span>
                    </div>
                    <span className="blog-card__icon" aria-hidden>
                      <Icon strokeWidth={1.6} />
                    </span>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>

        <div className="mx-auto mt-12 max-w-xl text-center">
          <Button to="/use-cases" variant="ghost" showArrow>
            Browse use cases
          </Button>
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

  if (!post) return <Navigate to="/blog" replace />;

  const related = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 3);
  const Icon = post.icon;
  const lead = post.sections.find((s) => s.heading === "Lead");
  const rest = post.sections.filter((s) => s.heading !== "Lead");

  return (
    <div style={{ background: "var(--bg)" }}>
      <header className="mx-auto max-w-3xl px-5 pb-8 pt-16 text-center sm:px-8 sm:pt-20">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: easeOut }}
          className="mx-auto mb-5 flex justify-center"
        >
          <span className="story-card__icon story-card__icon--lg" aria-hidden>
            <Icon strokeWidth={1.6} />
          </span>
        </motion.div>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.04, duration: 0.45, ease: easeOut }}
          className="text-xs font-semibold uppercase tracking-[0.2em]"
          style={{ color: "var(--accent)" }}
        >
          {post.kind} · {post.minutes} min read
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.08, duration: 0.55, ease: easeOut }}
          className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl md:leading-tight"
          style={{ color: "var(--fg)" }}
        >
          {post.title}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.14, duration: 0.55, ease: easeOut }}
          className="mx-auto mt-5 max-w-2xl text-base leading-relaxed"
          style={{ color: "var(--fg-muted)" }}
        >
          {post.excerpt}
        </motion.p>
      </header>

      <article className="px-5 pb-12 sm:px-8">
        <div className="mx-auto max-w-2xl">
          <motion.div
            className="story-visual mb-10"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.18, duration: 0.5, ease: easeOut }}
          >
            <BlogVisual type={post.visual} />
          </motion.div>

          {lead && (
            <motion.p
              className="blog-lead"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.22, duration: 0.45, ease: easeOut }}
            >
              {lead.body}
            </motion.p>
          )}

          <div className="blog-sections">
            {rest.map((section, i) => (
              <motion.section
                key={section.heading}
                className="blog-section"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ delay: i * 0.04, duration: 0.4, ease: easeOut }}
              >
                <h2 className="blog-section__heading">{section.heading}</h2>
                <p className="blog-section__body">{section.body}</p>
                {section.bullets && section.bullets.length > 0 && (
                  <ul className="blog-section__list">
                    {section.bullets.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                )}
              </motion.section>
            ))}
          </div>
        </div>

        <div
          className="mx-auto mt-12 flex max-w-2xl flex-wrap gap-3 border-t pt-10"
          style={{ borderColor: "var(--line)" }}
        >
          <Button to="/contact?intent=waitlist" showArrow>
            Join the waitlist
          </Button>
          <Button to="/blog" variant="ghost">
            All guides
          </Button>
          <Button to="/use-cases" variant="ghost">
            Use cases
          </Button>
        </div>
      </article>

      {related.length > 0 && (
        <section className="px-5 pb-20 sm:px-8" style={{ background: "var(--bg-soft)" }}>
          <div className="mx-auto max-w-3xl pt-12">
            <p
              className="text-xs font-semibold uppercase tracking-[0.16em]"
              style={{ color: "var(--accent)" }}
            >
              Keep reading
            </p>
            <div className="blog-card-list mt-5">
              {related.map((item, i) => {
                const RelIcon = item.icon;
                return (
                  <motion.div
                    key={item.slug}
                    initial={{ opacity: 0, y: 14 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.07, duration: 0.45, ease: easeOut }}
                  >
                    <Link to={`/blog/${item.slug}`} className="blog-card">
                      <span className="blog-card__rail" aria-hidden />
                      <div className="blog-card__row">
                        <div className="blog-card__copy">
                          <div className="blog-card__meta">
                            <span className="blog-card__kind">{item.kind}</span>
                            <span className="blog-card__mins">{item.minutes} min</span>
                          </div>
                          <h2 className="blog-card__title">{item.title}</h2>
                          <span className="blog-card__cta">
                            Read guide
                            <ArrowRight aria-hidden />
                          </span>
                        </div>
                        <span className="blog-card__icon" aria-hidden>
                          <RelIcon strokeWidth={1.6} />
                        </span>
                      </div>
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
