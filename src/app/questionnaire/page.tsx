import UnifiedQuestionnaireFlow from "@/components/questionnaire/UnifiedQuestionnaireFlow";

export const metadata = {
  title: "Strategic Questionnaire | Andy\u0027K Group International",
  description: "Complete the strategic pre-qualification and questionnaire to begin your engagement with Andy\u0027K Group International.",
};

export default function QuestionnairePage() {
  return (
    <main className="min-h-screen bg-background relative">
      <div className="cartesian-grid" />
      <div className="relative z-10 py-16 px-6">
        <UnifiedQuestionnaireFlow />
      </div>
    </main>
  );
}
