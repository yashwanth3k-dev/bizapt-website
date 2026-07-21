import { useEffect } from "react";

export const SITE_ORIGIN = "https://bizapt-website.vercel.app";
export const DEFAULT_OG_IMAGE = `${SITE_ORIGIN}/og.jpg`;

type PageSeoOptions = {
  title: string;
  description: string;
  path?: string;
  noIndex?: boolean;
  image?: string;
};

function upsertMeta(
  attr: "name" | "property",
  key: string,
  content: string,
) {
  const selector = `meta[${attr}="${key}"]`;
  let el = document.head.querySelector<HTMLMetaElement>(selector);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function upsertLink(rel: string, href: string) {
  let el = document.head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", rel);
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

/** Sets document title, description, Open Graph, Twitter, and canonical. */
export function usePageSeo({
  title,
  description,
  path = "/",
  noIndex = false,
  image = DEFAULT_OG_IMAGE,
}: PageSeoOptions) {
  useEffect(() => {
    const url = path === "/" ? SITE_ORIGIN : `${SITE_ORIGIN}${path.startsWith("/") ? path : `/${path}`}`;

    document.title = title;
    upsertMeta("name", "description", description);
    upsertMeta("name", "robots", noIndex ? "noindex, nofollow" : "index, follow");

    upsertMeta("property", "og:title", title);
    upsertMeta("property", "og:description", description);
    upsertMeta("property", "og:url", url);
    upsertMeta("property", "og:type", "website");
    upsertMeta("property", "og:image", image);
    upsertMeta("property", "og:site_name", "Bizdaptive");

    upsertMeta("name", "twitter:card", "summary_large_image");
    upsertMeta("name", "twitter:title", title);
    upsertMeta("name", "twitter:description", description);
    upsertMeta("name", "twitter:image", image);

    upsertLink("canonical", url);
  }, [title, description, path, noIndex, image]);
}

/** @deprecated Prefer usePageSeo with a description. Kept for gradual migration. */
export function usePageTitle(title: string) {
  usePageSeo({
    title,
    description:
      "Bizdaptive is decision intelligence for growing companies: a living company map, decision receipts, and shared business context.",
    path: typeof window !== "undefined" ? window.location.pathname : "/",
  });
}
