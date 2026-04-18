/* eslint-disable @next/next/no-img-element */
import { COMPANY } from "@/lib/data";

export default function MockSlack() {
  return (
    <div className="bg-white rounded-xl border border-grid-300 overflow-hidden text-[13px]">
      <div className="px-4 py-3 border-b border-grid-300 flex items-center gap-2">
        <img src={COMPANY.adamLogoUrl} alt="A.D.A.M." className="h-5 w-auto rounded" />
        <span className="font-semibold text-foreground text-[13px]">A.D.A.M. Follow-ups</span>
        <span className="ml-auto text-[10px] text-highlight border border-highlight/30 px-2 py-0.5 rounded">Active</span>
      </div>
      <div className="px-4 py-3 space-y-3 text-xs">
        <div className="flex gap-2.5">
          <div className="w-7 h-7 rounded bg-rose/30 flex items-center justify-center text-[10px] font-bold text-foreground shrink-0">AD</div>
          <div>
            <div className="flex items-center gap-2 mb-0.5">
              <span className="font-semibold text-foreground">A.D.A.M.</span>
              <span className="text-[10px] text-muted-2">Scheduled follow-up</span>
            </div>
            <p className="text-muted leading-relaxed">
              Hi Sarah, following up on the B2G tender proposal we sent last week. The submission deadline is March 15th. Would you like me to schedule a review call with the team?
            </p>
            <div className="flex gap-2 mt-2">
              <div className="h-5 px-2 rounded bg-highlight/10 text-highlight flex items-center text-[9px] font-medium">Schedule Call</div>
              <div className="h-5 px-2 rounded border border-grid-300 flex items-center text-[9px] text-muted">Remind Later</div>
            </div>
          </div>
        </div>
        <div className="border-t border-grid-300 pt-3 flex gap-2.5">
          <div className="w-7 h-7 rounded bg-grid-300 flex items-center justify-center text-[10px] font-bold text-muted shrink-0">SM</div>
          <div>
            <div className="flex items-center gap-2 mb-0.5">
              <span className="font-semibold text-foreground">Sarah M.</span>
              <span className="text-[10px] text-muted-2">Just now</span>
            </div>
            <p className="text-muted leading-relaxed">
              Yes please! Can you also attach the latest compliance checklist?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
