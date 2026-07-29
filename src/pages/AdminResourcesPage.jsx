import { useEffect, useState } from "react";
import AdminGate, { getStoredAdminSecret } from "../components/AdminGate";

async function callAdmin(action, payload) {
  const res = await fetch("/.netlify/functions/admin-data", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ adminSecret: getStoredAdminSecret(), action, payload }),
  });
  return res.json();
}

const EMPTY_FORM = { resourceId: null, title: "", url: "", notes: "", category: "General" };

function ResourceForm({ initial, onSaved, onCancel }) {
  const [form, setForm] = useState(initial);
  const [saving, setSaving] = useState(false);

  function update(key, value) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setSaving(true);
    await callAdmin("save-resource", form);
    setSaving(false);
    onSaved();
  }

  return (
    <form className="card" onSubmit={handleSubmit}>
      <label>
        Title
        <input type="text" value={form.title} onChange={(e) => update("title", e.target.value)} required />
      </label>
      <label>
        Link (URL) — leave blank if this is just a note with no link
        <input type="text" value={form.url} onChange={(e) => update("url", e.target.value)} placeholder="https://..." />
      </label>
      <label>
        Category
        <select value={form.category} onChange={(e) => update("category", e.target.value)}>
          <option>General</option>
          <option>Forms & Paperwork</option>
          <option>Video / Film</option>
          <option>Reading</option>
          <option>Handbook / Policy</option>
          <option>Other</option>
        </select>
      </label>
      <label>
        Notes
        <textarea rows={3} value={form.notes} onChange={(e) => update("notes", e.target.value)} />
      </label>
      <div style={{ display: "flex", gap: "0.6rem" }}>
        <button type="submit" disabled={saving}>{saving ? "Saving..." : "Save"}</button>
        <button type="button" onClick={onCancel} style={{ background: "transparent", border: "1px solid var(--line)", color: "var(--muted)" }}>
          Cancel
        </button>
      </div>
    </form>
  );
}

export default function AdminResourcesPage() {
  const [resources, setResources] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editing, setEditing] = useState(null); // null = closed, EMPTY_FORM = adding, or a resource = editing

  async function load() {
    setLoading(true);
    const res = await callAdmin("list-resources");
    setResources(res.resources || []);
    setLoading(false);
  }

  useEffect(() => { load(); }, []);

  async function handleDelete(resourceId) {
    if (!confirm("Delete this resource? This can't be undone.")) return;
    await callAdmin("delete-resource", { resourceId });
    load();
  }

  return (
    <AdminGate>
      <div className="admin-roster">
        <h1>Resources</h1>

        {editing ? (
          <ResourceForm
            initial={editing}
            onSaved={() => { setEditing(null); load(); }}
            onCancel={() => setEditing(null)}
          />
        ) : (
          <button onClick={() => setEditing(EMPTY_FORM)}>+ Add Resource</button>
        )}

        {loading && <p>Loading...</p>}
        {!loading && resources.map((r) => (
          <div key={r.id} className="card">
            <p className="unit-label">{r.category}</p>
            <p style={{ fontWeight: 700 }}>{r.title}</p>
            {r.url && <p><a href={r.url} target="_blank" rel="noreferrer">{r.url}</a></p>}
            {r.notes && <p>{r.notes}</p>}
            <div style={{ display: "flex", gap: "0.6rem" }}>
              <button onClick={() => setEditing({ resourceId: r.id, title: r.title, url: r.url, notes: r.notes, category: r.category })}>
                Edit
              </button>
              <button onClick={() => handleDelete(r.id)} style={{ background: "#B23A3A" }}>
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </AdminGate>
  );
}
