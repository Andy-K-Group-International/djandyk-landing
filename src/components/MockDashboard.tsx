export default function MockDashboard({ mini }: { mini?: boolean }) {
  if (mini) {
    return (
      <div className="bg-white rounded-xl border border-grid-300 overflow-hidden text-xs">
        <div className="flex items-center gap-2 px-3 py-2 border-b border-grid-300 bg-bg-light">
          <span className="font-medium text-foreground">Quick Stats</span>
        </div>
        <div className="grid grid-cols-3 divide-x divide-grid-300 px-1 py-3">
          <div className="text-center">
            <div className="font-bold text-foreground text-lg">12</div>
            <div className="text-[9px] text-muted-2">Active</div>
          </div>
          <div className="text-center">
            <div className="font-bold text-foreground text-lg">98%</div>
            <div className="text-[9px] text-muted-2">Satisfaction</div>
          </div>
          <div className="text-center">
            <div className="font-bold text-highlight text-lg">4</div>
            <div className="text-[9px] text-muted-2">Languages</div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl border border-grid-300 overflow-hidden text-xs">
      <div className="flex items-center justify-between px-4 py-2.5 border-b border-grid-300 bg-bg-light">
        <span className="font-semibold text-foreground">Contract &amp; Invoice Tracker</span>
        <span className="text-[10px] text-muted-2">Q1 2026</span>
      </div>
      <div className="p-4 space-y-3">
        <div className="grid grid-cols-3 gap-3">
          {[
            { label: "Contracts", val: "47", sub: "+12 this month", hl: true },
            { label: "Invoiced", val: "\u20AC284K", sub: "96% collected", hl: true },
            { label: "Follow-ups", val: "156", sub: "Auto-sent", hl: false },
          ].map((m) => (
            <div key={m.label} className="rounded border border-grid-300 p-2.5">
              <div className="text-[10px] text-muted-2 mb-0.5">{m.label}</div>
              <div className="font-bold text-foreground text-base">{m.val}</div>
              <div className={`text-[9px] ${m.hl ? "text-highlight" : "text-muted-2"}`}>{m.sub}</div>
            </div>
          ))}
        </div>
        <div>
          <div className="text-[10px] text-muted-2 uppercase tracking-wide mb-2">Monthly Revenue</div>
          <div className="flex items-end gap-2 h-20">
            {[45, 62, 38, 71, 55, 80, 68, 90, 74, 85, 92, 78].map((h, i) => (
              <div key={i} className="flex-1 rounded-t-sm bg-highlight/30" style={{ height: `${h}%` }} />
            ))}
          </div>
          <div className="flex justify-between text-[8px] text-muted-2 mt-1">
            <span>Jan</span><span>Mar</span><span>Jun</span><span>Sep</span><span>Dec</span>
          </div>
        </div>
      </div>
    </div>
  );
}
