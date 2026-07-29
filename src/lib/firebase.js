// Firebase client-side initialization.
// These values come from your Firebase project settings (Project Settings > General > Your apps).
// They are safe to expose in client code; Firebase security rules (not secrecy) protect your data.

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);

// --- Username <-> synthetic email helpers ---
// Students only ever see/type a username. Firebase Auth needs an email-shaped
// string under the hood, so we deterministically derive one. This never
// touches a real inbox and nothing is ever emailed to it.

const SYNTHETIC_DOMAIN = "athlete-arc.internal";

export function usernameToSyntheticEmail(username) {
  const normalized = username.trim().toLowerCase().replace(/[^a-z0-9._-]/g, "");
  return `${normalized}@${SYNTHETIC_DOMAIN}`;
}
