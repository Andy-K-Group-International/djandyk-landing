"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const ADMIN_EMAIL = "ceo@andykgroup.com";
const ADMIN_PASSWORD = "ANDYK2026";
const ADMIN_KEY = "andyk_lab_admin";

export default function AdminPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (email.trim() === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
      try { localStorage.setItem(ADMIN_KEY, "true"); } catch {}
      router.push("/dashboard");
    } else {
      setError(true);
      setPassword("");
    }
  }

  return (
    <div style={{
      minHeight: "100vh",
      background: "#ffffff",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "24px",
      fontFamily: "var(--font-sans, sans-serif)",
    }}>
      <div style={{ width: "100%", maxWidth: 380 }}>
        <p style={{
          fontSize: 10,
          fontFamily: "var(--font-mono, monospace)",
          fontWeight: 700,
          letterSpacing: "0.18em",
          textTransform: "uppercase",
          color: "#8a8a8a",
          marginBottom: 8,
        }}>
          Andy&apos;K Music Lab
        </p>
        <h1 style={{
          fontSize: 22,
          fontWeight: 700,
          color: "#111111",
          marginBottom: 32,
          letterSpacing: "-0.02em",
        }}>
          Admin Access
        </h1>

        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          <input
            type="email"
            autoComplete="email"
            placeholder="Email"
            value={email}
            onChange={e => { setEmail(e.target.value); setError(false); }}
            required
            style={{
              width: "100%",
              padding: "11px 14px",
              border: `1px solid ${error ? "#ef4444" : "#e5e5e5"}`,
              borderRadius: 10,
              fontSize: 14,
              color: "#111111",
              outline: "none",
              background: "#ffffff",
              boxSizing: "border-box",
              fontFamily: "inherit",
            }}
          />
          <input
            type="password"
            autoComplete="current-password"
            placeholder="Password"
            value={password}
            onChange={e => { setPassword(e.target.value); setError(false); }}
            required
            style={{
              width: "100%",
              padding: "11px 14px",
              border: `1px solid ${error ? "#ef4444" : "#e5e5e5"}`,
              borderRadius: 10,
              fontSize: 14,
              color: "#111111",
              outline: "none",
              background: "#ffffff",
              boxSizing: "border-box",
              fontFamily: "inherit",
            }}
          />

          {error && (
            <p style={{ fontSize: 12, color: "#ef4444", margin: 0 }}>
              Invalid credentials
            </p>
          )}

          <button
            type="submit"
            style={{
              width: "100%",
              padding: "12px",
              background: "#111111",
              color: "#ffffff",
              border: "none",
              borderRadius: 10,
              fontSize: 14,
              fontWeight: 700,
              cursor: "pointer",
              marginTop: 4,
              fontFamily: "inherit",
            }}
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
}
