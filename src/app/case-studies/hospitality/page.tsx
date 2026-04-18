import type { Metadata } from "next";
import HospitalityCaseStudy from "@/components/HospitalityCaseStudy";

export const metadata: Metadata = {
  description:
    "How Andy'K Group built a full digital operating system for a hospitality group — from strategy to execution.",
  alternates: { canonical: "/case-studies/hospitality" },
};

export default function HospitalityCaseStudyPage() {
  return <HospitalityCaseStudy />;
}
