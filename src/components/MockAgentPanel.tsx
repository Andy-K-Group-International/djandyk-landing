export default function MockAgentPanel() {
  return (
    <div className="w-full bg-white rounded-xl border border-grid-300 overflow-hidden">
      <div className="flex items-center gap-2 px-4 py-3 border-b border-grid-300 text-sm font-medium text-foreground">
        <div className="w-2 h-2 rounded-full bg-highlight" />
        A.D.A.M. Agent
        <span className="ml-auto text-[10px] text-muted-2 font-normal">Active</span>
      </div>
      <div className="p-3 space-y-2.5 text-xs">
        <div className="flex gap-2">
          <div className="w-5 h-5 rounded-full bg-grid-300 flex items-center justify-center text-[8px] font-bold text-muted shrink-0">U</div>
          <div className="bg-grid-300/50 rounded-lg px-3 py-2 text-muted">
            Generate a proposal for TechVentures based on their onboarding data
          </div>
        </div>
        <div className="flex gap-2">
          <div className="w-5 h-5 rounded-full bg-highlight/20 flex items-center justify-center text-[8px] font-bold text-highlight shrink-0">A</div>
          <div className="bg-highlight/5 rounded-lg px-3 py-2 text-muted">
            <p className="text-[10px] text-muted-2 mb-1">Analysed client profile in 4s</p>
            Proposal generated with 3 service packages: B2B Lead Gen (&euro;15K), A.D.A.M. License (&euro;8K/mo), and Market Entry Strategy (&euro;22K).
          </div>
        </div>
        <div className="flex gap-1.5 pl-7">
          <div className="h-5 px-2 rounded bg-foreground text-white flex items-center text-[9px] font-medium">Review &amp; Send</div>
          <div className="h-5 px-2 rounded border border-grid-500 flex items-center text-[9px] text-muted">Edit</div>
        </div>
      </div>
    </div>
  );
}
