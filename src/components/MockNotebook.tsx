export default function MockNotebook({ compact }: { compact?: boolean }) {
  if (compact) {
    return (
      <div className="bg-white rounded-xl border border-grid-300 overflow-hidden text-xs">
        <div className="flex items-center gap-2 px-3 py-2 border-b border-grid-300 bg-bg-light">
          <div className="w-2 h-2 rounded-full bg-highlight" />
          <span className="font-medium text-foreground">Client Onboarding</span>
        </div>
        <div className="p-3 space-y-2.5">
          <div>
            <span className="text-muted-2 text-[10px] uppercase tracking-wide">Company</span>
            <div className="mt-0.5 h-7 rounded border border-grid-300 px-2 flex items-center text-muted">Acme Corp Ltd</div>
          </div>
          <div>
            <span className="text-muted-2 text-[10px] uppercase tracking-wide">Sector</span>
            <div className="mt-0.5 h-7 rounded border border-grid-300 px-2 flex items-center text-muted">Technology</div>
          </div>
          <div>
            <span className="text-muted-2 text-[10px] uppercase tracking-wide">Challenge</span>
            <div className="mt-0.5 h-12 rounded border border-grid-300 px-2 pt-1 text-muted leading-tight">Need to automate proposal generation and client follow-ups...</div>
          </div>
          <div className="flex gap-2 pt-1">
            <div className="h-6 px-3 rounded bg-foreground text-white flex items-center text-[10px] font-medium">Submit</div>
            <div className="h-6 px-3 rounded border border-grid-500 flex items-center text-[10px] text-muted">Save Draft</div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full bg-white rounded-xl border border-grid-300 overflow-hidden text-xs">
      <div className="flex items-center justify-between px-4 py-2.5 border-b border-grid-300 bg-bg-light">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-highlight" />
          <span className="font-semibold text-foreground">A.D.A.M. Framework</span>
        </div>
        <span className="text-muted-2 text-[10px]">Last updated: 2 min ago</span>
      </div>
      <div className="grid grid-cols-4 border-b border-grid-300">
        {[
          { label: "Active Clients", val: "24" },
          { label: "Proposals Sent", val: "18" },
          { label: "Contracts Signed", val: "12" },
          { label: "Revenue", val: "\u20AC847K" },
        ].map((s) => (
          <div key={s.label} className="px-3 py-3 border-r border-grid-300 last:border-r-0">
            <div className="text-[10px] text-muted-2 mb-0.5">{s.label}</div>
            <div className="font-bold text-foreground text-sm">{s.val}</div>
          </div>
        ))}
      </div>
      <div className="px-4 py-3">
        <div className="text-[10px] text-muted-2 uppercase tracking-wide mb-2">Framework Flow</div>
        <div className="flex items-center gap-1.5 flex-wrap mb-3">
          {["Onboarding", "Strategy", "Proposal", "Contract", "Invoice", "Follow-up"].map((step, i) => (
            <div key={step} className="flex items-center gap-1.5">
              <div className={`h-6 px-2 rounded-sm flex items-center text-[10px] font-medium ${i < 3 ? "bg-highlight/10 text-highlight" : "bg-grid-300 text-muted"}`}>
                {step}
              </div>
              {i < 5 && <span className="text-grid-500">&rarr;</span>}
            </div>
          ))}
        </div>
        <div className="text-[10px] text-muted-2 uppercase tracking-wide mb-1.5">Recent Activity</div>
        <table className="w-full text-[11px]">
          <thead>
            <tr className="text-left text-muted-2 border-b border-grid-300">
              <th className="pb-1 font-medium">Client</th>
              <th className="pb-1 font-medium">Stage</th>
              <th className="pb-1 font-medium">Status</th>
            </tr>
          </thead>
          <tbody className="text-muted">
            <tr className="border-b border-grid-300/50">
              <td className="py-1.5 text-foreground font-medium">TechVentures GmbH</td>
              <td>Proposal</td>
              <td><span className="text-highlight">Sent</span></td>
            </tr>
            <tr className="border-b border-grid-300/50">
              <td className="py-1.5 text-foreground font-medium">London Borough Council</td>
              <td>Contract</td>
              <td><span className="text-highlight">Signed</span></td>
            </tr>
            <tr>
              <td className="py-1.5 text-foreground font-medium">Nova Logistics BR</td>
              <td>Onboarding</td>
              <td><span className="text-muted-2">In Progress</span></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
