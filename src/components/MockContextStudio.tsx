export default function MockContextStudio() {
  return (
    <div className="bg-white rounded-xl border border-grid-300 overflow-hidden text-xs">
      <div className="flex items-center gap-2 px-4 py-2.5 border-b border-grid-300 bg-bg-light">
        <span className="font-semibold text-foreground">Context Studio</span>
        <span className="text-[10px] text-muted-2 ml-auto">3 models active</span>
      </div>
      <div className="grid grid-cols-[1fr_1fr] divide-x divide-grid-300">
        {/* Left: Agent observability */}
        <div className="p-3">
          <div className="text-[10px] text-muted-2 uppercase tracking-wide mb-2">Agent Activity</div>
          <div className="space-y-1.5">
            {[
              { client: "TechVentures", action: "Proposal sent", time: "12 min", status: "done" },
              { client: "Borough Council", action: "Contract review", time: "2 hrs", status: "done" },
              { client: "Nova Logistics", action: "Follow-up pending", time: "4 hrs", status: "pending" },
            ].map((r) => (
              <div key={r.client} className="flex items-center gap-2 text-[11px]">
                <div className={`w-1.5 h-1.5 rounded-full ${r.status === "done" ? "bg-highlight" : "bg-rose"}`} />
                <span className="text-foreground font-medium flex-1 truncate">{r.client}</span>
                <span className="text-muted truncate">{r.action}</span>
                <span className="text-muted-2 shrink-0">{r.time}</span>
              </div>
            ))}
          </div>
          <div className="mt-3 pt-2 border-t border-grid-300 grid grid-cols-3 gap-2 text-center">
            <div>
              <div className="font-bold text-foreground text-sm">24</div>
              <div className="text-[9px] text-muted-2">Clients</div>
            </div>
            <div>
              <div className="font-bold text-foreground text-sm">156</div>
              <div className="text-[9px] text-muted-2">Messages</div>
            </div>
            <div>
              <div className="font-bold text-rose text-sm">2</div>
              <div className="text-[9px] text-muted-2">Warnings</div>
            </div>
          </div>
        </div>
        {/* Right: Semantic model / config */}
        <div className="p-3">
          <div className="text-[10px] text-muted-2 uppercase tracking-wide mb-2">Service Model</div>
          <div className="bg-grid-300/40 rounded p-2 font-mono text-[10px] text-muted leading-relaxed">
            <div><span className="text-highlight">model</span>: b2b_pipeline</div>
            <div>&nbsp;&nbsp;<span className="text-highlight">stages</span>:</div>
            <div>&nbsp;&nbsp;&nbsp;&nbsp;- onboarding</div>
            <div>&nbsp;&nbsp;&nbsp;&nbsp;- strategy</div>
            <div>&nbsp;&nbsp;&nbsp;&nbsp;- proposal</div>
            <div>&nbsp;&nbsp;&nbsp;&nbsp;- contract</div>
            <div>&nbsp;&nbsp;<span className="text-highlight">auto_followup</span>: true</div>
            <div>&nbsp;&nbsp;<span className="text-highlight">languages</span>: [en, de, pt]</div>
          </div>
        </div>
      </div>
    </div>
  );
}
