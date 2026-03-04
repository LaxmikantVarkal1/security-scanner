import { FINDINGS } from '@/data/mockData';

export function FindingLog() {
    return (
        <div className="flex-1 flex flex-col h-full bg-transparent">
            {/* Align height exact with console tabs which is h-[46px] */}
            <div className="h-[46px] shrink-0 px-5 border-b border-zinc-100 dark:border-zinc-800 flex items-center bg-transparent">
                <span className="text-[12px] font-bold text-zinc-900 dark:text-white tracking-wide">Finding Log</span>
            </div>

            <div className="flex-1 min-h-0 overflow-y-auto p-4 space-y-3 bg-transparent custom-scrollbar">
                {FINDINGS.map((finding) => (
                    <div key={finding.id} className="bg-white dark:bg-[#1A1A1A] border border-zinc-200 dark:border-zinc-800 rounded-[12px] p-4 shadow-sm shrink-0">

                        <div className="flex items-center justify-between mb-2.5">
                            <span className={`px-2 py-[3px] rounded-full text-[10px] uppercase font-bold text-white ${finding.severity === 'Critical' ? 'bg-[#E52B50]' :
                                finding.severity === 'High' ? 'bg-[#FF9500]' : 'bg-[#FFCC00]'
                                }`}>
                                {finding.severity}
                            </span>
                            <span className="text-[11px] font-medium text-zinc-400">{finding.time}</span>
                        </div>

                        <h4 className="text-[13px] font-bold text-zinc-900 dark:text-[#E2E8F0] leading-snug mb-1">
                            {finding.title}
                        </h4>

                        <p className="text-[13px] font-bold text-[#0CC8A8] mb-3">
                            {finding.path}
                        </p>

                        <p className="text-[12px] text-zinc-600 dark:text-zinc-400 leading-relaxed font-medium">
                            {finding.desc}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}
