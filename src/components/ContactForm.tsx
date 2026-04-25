"use client";

import { useState } from "react";
import { COMPANY } from "@/lib/data";
import { useLanguage } from "@/context/LanguageContext";

function UserIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5 text-muted-2">
      <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5 text-muted-2">
      <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function MessageIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5 text-muted-2">
      <path d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function SendIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5">
      <path d="M3.478 2.405a.75.75 0 00-.926.94l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.218A60.517 60.517 0 003.478 2.405z" fill="currentColor" stroke="none" />
    </svg>
  );
}

export default function ContactForm() {
  const { t } = useLanguage();
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = data.get("name") as string;
    const email = data.get("email") as string;
    const message = data.get("message") as string;

    const subject = encodeURIComponent(`Message from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);

    window.location.href = `mailto:${COMPANY.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  }

  return (
    <section id="contact" className="relative pt-10 pb-20 px-8">
      <div className="max-w-[720px] mx-auto">
        <div className="border border-grid-300 rounded-2xl p-8 sm:p-10 bg-white shadow-sm">
          <div className="text-center mb-10">
            <span className="text-[10px] uppercase tracking-[0.3em] text-highlight font-mono block mb-3">
              {t.contact.label}
            </span>
            <h2 className="text-[clamp(1.5rem,1.2rem+1vw,2rem)] font-bold tracking-tight text-foreground mb-2">
              {(t.contact.heading + " " + t.contact.headingItalic).split(" ").map((word, i) => (
                <span key={i} className={i % 2 === 0 ? "font-serif italic" : ""}>{i > 0 ? " " : ""}{word}</span>
              ))}
            </h2>
            <p className="text-sm text-muted">{t.contact.description}</p>
          </div>

          {submitted ? (
            <div className="text-center py-12">
              <div className="w-14 h-14 rounded-full bg-highlight/10 flex items-center justify-center mx-auto mb-4">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-7 h-7 text-highlight">
                  <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <p className="text-base font-medium text-foreground">{t.contact.success}</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="contact-name" className="block text-sm font-medium text-foreground mb-2">
                    {t.contact.labelName} <span className="text-deep-teal">{t.contact.required}</span>
                  </label>
                  <div className="relative">
                    <div className="absolute left-3 top-1/2 -translate-y-1/2">
                      <UserIcon />
                    </div>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      required
                      placeholder={t.contact.placeholderName}
                      className="w-full h-11 pl-10 pr-4 text-sm border border-grid-500 rounded-lg bg-white text-foreground placeholder:text-muted-2 focus:outline-none focus:ring-2 focus:ring-highlight/30 focus:border-highlight transition-colors"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="contact-email" className="block text-sm font-medium text-foreground mb-2">
                    {t.contact.labelEmail} <span className="text-deep-teal">{t.contact.required}</span>
                  </label>
                  <div className="relative">
                    <div className="absolute left-3 top-1/2 -translate-y-1/2">
                      <MailIcon />
                    </div>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      required
                      placeholder={t.contact.placeholderEmail}
                      className="w-full h-11 pl-10 pr-4 text-sm border border-grid-500 rounded-lg bg-white text-foreground placeholder:text-muted-2 focus:outline-none focus:ring-2 focus:ring-highlight/30 focus:border-highlight transition-colors"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label htmlFor="contact-message" className="block text-sm font-medium text-foreground mb-2">
                  {t.contact.labelMessage} <span className="text-deep-teal">{t.contact.required}</span>
                </label>
                <div className="relative">
                  <div className="absolute left-3 top-3">
                    <MessageIcon />
                  </div>
                  <textarea
                    id="contact-message"
                    name="message"
                    required
                    rows={5}
                    placeholder={t.contact.placeholderMessage}
                    className="w-full pl-10 pr-4 py-3 text-sm border border-grid-500 rounded-lg bg-white text-foreground placeholder:text-muted-2 focus:outline-none focus:ring-2 focus:ring-highlight/30 focus:border-highlight transition-colors resize-none"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="relative w-full h-12 flex items-center justify-center gap-2 text-sm font-medium text-foreground btn-primary-gradient cursor-pointer"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <SendIcon />
                  {t.contact.submit}
                </span>
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
