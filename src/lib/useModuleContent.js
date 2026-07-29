import { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "./firebase";
import { allModulesById } from "../data/course-structure";

/**
 * Every module has a static "default" (the content files we wrote). Once
 * Coach Micah edits a module in the admin panel, a Firestore doc at
 * modules/{id} is created and takes over as the live version. Until then,
 * students just see the default — nothing breaks pre-editing.
 */
export function useModuleContent(moduleId) {
  const [content, setContent] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;
    setLoading(true);

    (async () => {
      const fallback = allModulesById[moduleId] || null;
      try {
        const snap = await getDoc(doc(db, "modules", moduleId));
        if (!cancelled) {
          setContent(snap.exists() ? { ...fallback, ...snap.data() } : fallback);
          setLoading(false);
        }
      } catch {
        if (!cancelled) {
          setContent(fallback);
          setLoading(false);
        }
      }
    })();

    return () => { cancelled = true; };
  }, [moduleId]);

  return { content, loading };
}
