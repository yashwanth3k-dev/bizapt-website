import { Link } from "react-router-dom";
import { ArrowLeft, Check } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "./Button";
import { easeOut } from "./motion";
import type { BlogPost, BlogSection } from "../content/types";

function SectionBlock({ section }: { section: BlogSection }) {
  return (
    <section className="blog-read-section">
      <h2>{section.heading}</h2>
      <p>{section.body}</p>

      {section.callouts && section.callouts.length > 0 && (
        <ul className="blog-read-callouts">
          {section.callouts.map((c) => (
            <li key={c}>{c}</li>
          ))}
        </ul>
      )}

      {section.layout === "flow" && section.bullets && section.bullets.length > 0 ? (
        <p className="blog-read-flow">{section.bullets.join(" → ")}</p>
      ) : section.layout === "checks" && section.bullets && section.bullets.length > 0 ? (
        <ul className="blog-read-checks">
          {section.bullets.map((b) => (
            <li key={b}>
              <Check className="blog-read-checks__icon" strokeWidth={2.4} aria-hidden />
              <span>{b}</span>
            </li>
          ))}
        </ul>
      ) : (
        section.bullets &&
        section.bullets.length > 0 && (
          <ul>
            {section.bullets.map((b) => (
              <li key={b}>{b}</li>
            ))}
          </ul>
        )
      )}
    </section>
  );
}

export function BlogStory({ post }: { post: BlogPost }) {
  return (
    <div className="blog-read">
      <header className="blog-read-hero">
        <div className="blog-read-hero__inner mx-auto max-w-6xl px-5 sm:px-8">
          <Link to="/blog" className="story-back">
            <ArrowLeft aria-hidden />
            All guides
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: easeOut }}
          >
            <div className="blog-read-tags">
              {post.tags.map((tag) => (
                <span key={tag} className="blog-read-tag">
                  {tag}
                </span>
              ))}
            </div>
            <h1 className="blog-read-hero__title">{post.title}</h1>
            <p className="blog-read-byline">
              {post.author}
              <span aria-hidden>·</span>
              {post.date}
              <span aria-hidden>·</span>
              {post.minutes} min read
            </p>
          </motion.div>
        </div>
      </header>

      <article className="blog-read-article mx-auto max-w-6xl px-5 pb-20 sm:px-8">
        <p className="blog-read-lead">{post.excerpt}</p>

        <div className="blog-read-body">
          {post.sections.map((section) => (
            <SectionBlock key={section.heading} section={section} />
          ))}
        </div>

        <footer className="blog-read-footer">
          <p className="blog-read-close">{post.closing}</p>
          <div className="blog-read-actions">
            <Button to={post.cta.to} showArrow>
              {post.cta.label}
            </Button>
            <Button to="/blog" variant="ghost">
              View more guides
            </Button>
          </div>
        </footer>
      </article>
    </div>
  );
}
