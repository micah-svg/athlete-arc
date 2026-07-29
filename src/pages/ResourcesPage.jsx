import { useEffect, useState } from "react";
import { collection, getDocs, query, orderBy } from "firebase/firestore";
import { db } from "../lib/firebase";

export default function ResourcesPage() {
  const [resources, setResources] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const snap = await getDocs(query(collection(db, "resources"), orderBy("createdAt", "desc")));
      setResources(snap.docs.map((d) => ({ id: d.id, ...d.data() })));
      setLoading(false);
    })();
  }, []);

  const grouped = resources.reduce((acc, r) => {
    const cat = r.category || "General";
    acc[cat] = acc[cat] || [];
    acc[cat].push(r);
    return acc;
  }, {});

  return (
    <div className="dashboard-page">
      <h1>Resources</h1>
      {loading && <p>Loading...</p>}
      {!loading && resources.length === 0 && <p>Nothing here yet.</p>}

      {Object.entries(grouped).map(([category, items]) => (
        <section key={category} className="unit-section">
          <h2>{category}</h2>
          {items.map((r) => (
            <div key={r.id} className="card">
              <p style={{ fontWeight: 700, margin: 0 }}>{r.title}</p>
              {r.url && (
                <p>
                  <a href={r.url} target="_blank" rel="noreferrer">Open link →</a>
                </p>
              )}
              {r.notes && <p style={{ color: "var(--muted)" }}>{r.notes}</p>}
            </div>
          ))}
        </section>
      ))}
    </div>
  );
}
