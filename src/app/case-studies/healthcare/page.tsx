import type { Metadata } from "next";
import HealthcareCaseStudy from "@/components/HealthcareCaseStudy";

export const metadata: Metadata = {
  description:
    "How Andy'K Group designed a structured operations system for a physiotherapy clinic, integrating A.D.A.M. Healthcare.",
  alternates: { canonical: "/case-studies/healthcare" },
};

export default function HealthcareCaseStudyPage() {
  return <HealthcareCaseStudy />;
}
