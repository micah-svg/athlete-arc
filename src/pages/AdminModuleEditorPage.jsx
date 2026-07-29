import { useEffect, useState } from "react";
import AdminGate, { getStoredAdminSecret } from "../components/AdminGate";
import { allElectiveModules, allModulesById } from "../data/course-structure";

async function callAdmin(action, payload) {
  const res = await fetch("/.netlify/functions/admin-data", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ adminSecret: getStoredAdminSecret(), action, payload }),
  });
  if (!res.ok) {
    const text = await res.text().catch(() => "");
    throw new Error(text || `Request failed (${res.status})`);
  }
  return res.json();
}

function ModuleEditor({ moduleId, onSaved }) {
  const [content, setContent] = useState(null);
  const [loadError, setLoadError] = useState("");
  const [status, setStatus] = useState("");

  useEffect(() => {
    let cancelled = false;
    setContent(null);
    setLoadError("");

    (async () => {
      try {
        const fallback = allModulesById[moduleId];
        const { content: liveContent } = await callAdmin("get-module", { moduleId });
        if (cancelled) return;
        setContent(liveContent ? { ...fallback, ...liveContent } : structuredClone(fallback));
      } catch (err) {
        if (!cancelled) setLoadError(err.message || "Couldn't load this module.");
      }
    })();

    return () => { cancelled = true; };
  }, [moduleId]);

  if (loadError) {
    return (
      <div className="card">
        <p>Couldn't load this module: {loadError}</p>
        <p style={{ color: "var(--muted)", fontSize: "0.85rem" }}>
          Double check your admin secret is correct, then try again.
        </p>
      </div>
    );
  }

  if (!content) return <p>Loading module...</p>;

  function updateField(path, value) {
    setContent((prev) => {
      const next = structuredClone(prev);
      const keys = path.split(".");
      let target = next;
      for (let i = 0; i < keys.length - 1; i++) target = target[keys[i]];
      target[keys[keys.length - 1]] = value;
      return next;
    });
  }

  async function handleSave() {
    setStatus("Saving...");
    try {
      await callAdmin("save-module", { moduleId, content });
      setStatus("Saved.");
      onSaved?.();
    } catch (err) {
      setStatus(`Error saving: ${err.message}`);
    }
  }

  return (
    <div className="card">
      <label>
        Title
        <input type="text" value={content.title} onChange={(e) => updateField("title", e.target.value)} />
      </label>

      <label>
        Video Title
        <input type="text" value={content.video?.title || ""} onChange={(e) => updateField("video.title", e.target.value)} />
      </label>
      <label>
        YouTube Video ID (the part after "v=" in a YouTube URL)
        <input type="text" value={content.video?.youtubeId || ""} onChange={(e) => updateField("video.youtubeId", e.target.value)} />
      </label>

      {content.quiz?.questions?.map((q, qi) => (
        <div key={q.id} className="card" style={{ background: "var(--paper)" }}>
          <label>
            Question {qi + 1} Scenario
            <textarea rows={2} value={q.scenario} onChange={(e) => updateField(`quiz.questions.${qi}.scenario`, e.target.value)} />
          </label>
          {q.options.map((opt, oi) => (
            <div key={opt.id}>
              <label>
                Option {opt.id.toUpperCase()} text {opt.correct ? "(correct answer)" : ""}
                <input type="text" value={opt.text} onChange={(e) => updateField(`quiz.questions.${qi}.options.${oi}.text`, e.target.value)} />
              </label>
              <label>
                Explanation shown after picking this option
                <textarea rows={2} value={opt.explanation} onChange={(e) => updateField(`quiz.questions.${qi}.options.${oi}.explanation`, e.target.value)} />
              </label>
            </div>
          ))}
        </div>
      ))}

      {content.thoughtExercise && (
        <label>
          Thought Exercise Prompt
          <textarea rows={3} value={content.thoughtExercise.prompt} onChange={(e) => updateField("thoughtExercise.prompt", e.target.value)} />
        </label>
      )}

      {content.certificationNote && (
        <label>
          Certification Note
          <textarea rows={2} value={content.certificationNote} onChange={(e) => updateField("certificationNote", e.target.value)} />
        </label>
      )}

      <button onClick={handleSave}>Save Changes</button>
      {status && <p>{status}</p>}
    </div>
  );
}

export default function AdminModuleEditorPage() {
  const [selectedId, setSelectedId] = useState(null);

  const allEntries = allElectiveModules;

  return (
    <AdminGate>
      <div className="admin-roster">
        <h1>Edit Course Content</h1>
        {!selectedId ? (
          <ul className="module-list">
            {allEntries.map((m) => (
              <li key={m.id}>
                <button className="module-list-item" style={{ width: "100%" }} onClick={() => setSelectedId(m.id)}>
                  {m.title}
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <>
            <button onClick={() => setSelectedId(null)}>← Back to module list</button>
            <ModuleEditor moduleId={selectedId} onSaved={() => {}} />
          </>
        )}
      </div>
    </AdminGate>
  );
}
