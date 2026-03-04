
import { ArrowUpRight, ArrowDownRight, RefreshCcw } from 'lucide-react';

export function TopStatsBar() {
    return (
        <div className="mb-8">
            {/* Top Breadcrumb/Org info row */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-8 text-[13px] font-medium text-zinc-500 mb-8 dark:text-zinc-400 pb-4 border-b border-zinc-100 dark:border-zinc-800">
                <div className="flex items-center gap-2">
                    <span>Org:</span>
                    <span className="text-zinc-900 font-bold dark:text-white">Project X</span>
                </div>
                <div className="h-4 w-px bg-zinc-200 dark:bg-zinc-700 hidden sm:block"></div>

                <div className="flex items-center gap-2">
                    <span>Owner:</span>
                    <span className="text-zinc-900 font-bold dark:text-white">Nammagiri</span>
                </div>
                <div className="h-4 w-px bg-zinc-200 dark:bg-zinc-700 hidden sm:block"></div>

                <div className="flex items-center gap-2">
                    <span>Total Scans:</span>
                    <span className="text-zinc-900 font-bold dark:text-white">100</span>
                </div>

                <div className="flex items-center gap-2">
                    <span>Scheduled:</span>
                    <span className="text-zinc-900 font-bold dark:text-white">1000</span>
                </div>

                <div className="flex items-center gap-2">
                    <span>Rescans:</span>
                    <span className="text-zinc-900 font-bold dark:text-white">100</span>
                </div>

                <div className="flex items-center gap-2">
                    <span>Failed Scans:</span>
                    <span className="text-zinc-900 font-bold dark:text-white">100</span>
                </div>

                <div className="ml-auto flex items-center gap-1.5 text-[#0BA68B] font-semibold">
                    <RefreshCcw className="w-3.5 h-3.5" />
                    <span>10 mins ago</span>
                </div>
            </div>

            {/* 4 Severity Columns */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

                {/* Critical */}
                <div className="flex flex-col">
                    <div className="flex justify-between items-start mb-2">
                        <span className="text-[16px] font-medium text-zinc-600 dark:text-zinc-400">Critical Severity</span>
                        <div className="w-8 h-8 rounded-md bg-[#FFEAEB] dark:bg-red-500/10 flex items-center justify-center">
                            {/* Ban icon roughly matching ref */}
                            <svg className="w-4 h-4 text-[#FF3B30]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                <circle cx="12" cy="12" r="10" />
                                <line x1="4.93" y1="4.93" x2="19.07" y2="19.07" />
                            </svg>
                        </div>
                    </div>
                    <div className="flex flex-row items-baseline gap-3">
                        <span className="text-4xl font-bold text-zinc-900 dark:text-white">86</span>
                        <div className="flex items-center text-[12px] font-bold text-[#E52B50]">
                            <ArrowUpRight className="w-3.5 h-3.5 mr-0.5" strokeWidth={3} />
                            +2% increase than yesterday
                        </div>
                    </div>
                </div>

                {/* High */}
                <div className="flex flex-col">
                    <div className="flex justify-between items-start mb-2">
                        <span className="text-[16px] font-medium text-zinc-600 dark:text-zinc-400">High Severity</span>
                        <div className="w-8 h-8 rounded-md bg-[#FFF5EB] dark:bg-orange-500/10 flex items-center justify-center">
                            <svg className="w-4 h-4 text-[#FF9500]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
                                <line x1="12" y1="9" x2="12" y2="13" />
                                <line x1="12" y1="17" x2="12.01" y2="17" />
                            </svg>
                        </div>
                    </div>
                    <div className="flex flex-row items-baseline gap-3">
                        <span className="text-4xl font-bold text-zinc-900 dark:text-white">16</span>
                        <div className="flex items-center text-[12px] font-bold text-[#E52B50]">
                            <ArrowUpRight className="w-3.5 h-3.5 mr-0.5" strokeWidth={3} />
                            +0.9% increase than yesterday
                        </div>
                    </div>
                </div>

                {/* Medium */}
                <div className="flex flex-col">
                    <div className="flex justify-between items-start mb-2">
                        <span className="text-[16px] font-medium text-zinc-600 dark:text-zinc-400">Medium Severity</span>
                        <div className="w-8 h-8 rounded-md bg-[#FFFBEA] dark:bg-yellow-500/10 flex items-center justify-center">
                            <svg className="w-4 h-4 text-[#FFCC00]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
                                <line x1="12" y1="9" x2="12" y2="13" />
                                <line x1="12" y1="17" x2="12.01" y2="17" />
                            </svg>
                        </div>
                    </div>
                    <div className="flex flex-row items-baseline gap-3">
                        <span className="text-4xl font-bold text-zinc-900 dark:text-white">26</span>
                        <div className="flex items-center text-[12px] font-bold text-[#34C759]">
                            <ArrowDownRight className="w-3.5 h-3.5 mr-0.5" strokeWidth={3} />
                            -0.9% decrease than yesterday
                        </div>
                    </div>
                </div>

                {/* Low */}
                <div className="flex flex-col">
                    <div className="flex justify-between items-start mb-2">
                        <span className="text-[16px] font-medium text-zinc-600 dark:text-zinc-400">Low Severity</span>
                        <div className="w-8 h-8 rounded-md bg-[#EEF2FC] dark:bg-blue-500/10 flex items-center justify-center">
                            <svg className="w-4 h-4 text-[#007AFF]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                <circle cx="11" cy="11" r="8" />
                                <line x1="21" y1="21" x2="16.65" y2="16.65" />
                            </svg>
                        </div>
                    </div>
                    <div className="flex flex-row items-baseline gap-3">
                        <span className="text-4xl font-bold text-zinc-900 dark:text-white">16</span>
                        <div className="flex items-center text-[12px] font-bold text-[#E52B50]">
                            <ArrowUpRight className="w-3.5 h-3.5 mr-0.5" strokeWidth={3} />
                            +0.9% increase than yesterday
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}
