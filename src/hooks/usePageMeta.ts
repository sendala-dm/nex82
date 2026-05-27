import { useEffect } from "react";

const BASE_URL = "https://nex82.lovable.app";

interface PageMetaOptions {
  title: string;
  description?: string;
  canonicalPath?: string;
}

export function usePageMeta({ title, description, canonicalPath }: PageMetaOptions) {
  useEffect(() => {
    document.title = title;

    if (description) {
      let meta = document.querySelector('meta[name="description"]');
      if (!meta) {
        meta = document.createElement("meta");
        meta.setAttribute("name", "description");
        document.head.appendChild(meta);
      }
      meta.setAttribute("content", description);
    }

    if (canonicalPath !== undefined) {
      // Remove any existing canonical link
      const existing = document.querySelector('link[rel="canonical"]');
      if (existing) existing.remove();

      const link = document.createElement("link");
      link.setAttribute("rel", "canonical");
      link.setAttribute("href", `${BASE_URL}${canonicalPath}`);
      document.head.appendChild(link);
    }
  }, [title, description, canonicalPath]);
}
