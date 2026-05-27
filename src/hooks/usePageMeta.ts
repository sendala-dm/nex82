import { useEffect } from "react";

const BASE_URL = "https://nex82.lovable.app";

interface PageMetaOptions {
  title: string;
  description?: string;
  canonicalPath?: string;
}

function setMetaProperty(property: string, content: string) {
  let meta = document.querySelector(`meta[property="${property}"]`);
  if (!meta) {
    meta = document.createElement("meta");
    meta.setAttribute("property", property);
    document.head.appendChild(meta);
  }
  meta.setAttribute("content", content);
}

function setMetaName(name: string, content: string) {
  let meta = document.querySelector(`meta[name="${name}"]`);
  if (!meta) {
    meta = document.createElement("meta");
    meta.setAttribute("name", name);
    document.head.appendChild(meta);
  }
  meta.setAttribute("content", content);
}

export function usePageMeta({ title, description, canonicalPath }: PageMetaOptions) {
  useEffect(() => {
    document.title = title;

    setMetaProperty("og:title", title);
    setMetaName("twitter:title", title);

    if (description) {
      setMetaName("description", description);
      setMetaProperty("og:description", description);
      setMetaName("twitter:description", description);
    }

    if (canonicalPath !== undefined) {
      const existing = document.querySelector('link[rel="canonical"]');
      if (existing) existing.remove();

      const link = document.createElement("link");
      link.setAttribute("rel", "canonical");
      link.setAttribute("href", `${BASE_URL}${canonicalPath}`);
      document.head.appendChild(link);

      setMetaProperty("og:url", `${BASE_URL}${canonicalPath}`);
    }
  }, [title, description, canonicalPath]);
}
