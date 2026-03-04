import { Sidebar } from '../dashboard/components/Sidebar';
import { ScanProgressTracker } from './components/ScanProgressTracker';
import { ScanMetadataRow } from './components/ScanMetadataRow';
import { FindingLog } from './components/FindingLog';
import { ScanStatusBar } from './components/ScanStatusBar';
import { toast } from 'sonner';
import { ChevronDown, X } from 'lucide-react';
import { LiveConsole } from './components/LiveConsole';

export function ScanDetailScreen() {
    return (
        <div className="min-h-screen bg-[#F8F9FA] dark:bg-[#111111] font-sans flex text-zinc-900 dark:text-zinc-100">
            <Sidebar />

            <div className="flex-1 lg:ml-[240px] w-full flex flex-col min-h-screen overflow-x-hidden">
                {/* Same Sticky Header as Dashboard */}
                <header className="fixed top-0 right-0 left-0 lg:left-[240px] h-[72px] shrink-0 flex items-center justify-between pl-16 pr-4 lg:px-8 border-b border-zinc-200 dark:border-zinc-800/60 bg-white dark:bg-[#111111] z-20 shadow-sm overflow-x-auto">
                    <div className="flex items-center gap-3 shrink-0">
                        <span className="text-[18px] font-bold tracking-tight">Scan</span>
                        <div className="flex items-center text-[13px] font-semibold text-zinc-400 gap-2">
                            <svg className="w-[15px] h-[15px] ml-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                                <polyline points="9 22 9 12 15 12 15 22" />
                            </svg>
                            <span>/</span>
                            <span>Private Assets</span>
                            <span>/</span>
                            <span className="text-[#0CC8A8]">New Scan</span>
                        </div>
                    </div>

                    <div className="flex items-center gap-3">
                        <button
                            onClick={() => toast.success('Report successfully exported and sent to your email.')}
                            className="h-9 px-4 rounded-[8px] border border-zinc-200 bg-white text-zinc-700 font-bold text-[13px] hover:bg-zinc-50 dark:bg-transparent dark:border-zinc-700 dark:text-zinc-200 dark:hover:bg-zinc-800 transition-colors"
                        >
                            Export Report
                        </button>
                        <button
                            onClick={() => toast.error('Scan has been forcibly stopped.')}
                            className="h-9 px-4 rounded-[8px] bg-[#FFEAEB] text-[#E52B50] font-bold text-[13px] hover:bg-[#FFEAEB]/80 dark:bg-transparent dark:text-[#E52B50] dark:hover:bg-[#E52B50]/10 border border-[#E52B50]/10 dark:border-[#E52B50]/30 transition-colors"
                        >
                            Stop Scan
                        </button>
                    </div>
                </header>

                <main className="flex-1 p-6 lg:p-8 max-w-[1600px] w-full mx-auto relative mt-[72px] flex flex-col pb-12">
                    <div className="flex flex-col gap-6 flex-1 min-h-0">
                        {/* Top Container */}
                        <div className="bg-white h-[23%] dark:bg-[#151515] border border-zinc-200 dark:border-zinc-800 rounded-[12px] p-8 shadow-sm shrink-0">
                            <ScanProgressTracker />
                            <ScanMetadataRow />
                        </div>

                        {/* Unified Live Scan Console Container */}
                        <div className="flex flex-col border border-zinc-200 dark:border-zinc-800 rounded-[12px] w-full overflow-hidden bg-white dark:bg-[#151515] shadow-sm mb-8 flex-1 h-[300px] overflow-y-auto">
                            {/* Master Header */}
                            <div className="h-14 shrink-0 px-5 border-b border-zinc-200 dark:border-zinc-800 flex items-center justify-between bg-zinc-50 dark:bg-transparent">
                                <div className="flex items-center gap-4">
                                    <div className="flex items-center gap-2">
                                        <div className="w-2.5 h-2.5 rounded-full bg-[#0CC8A8]" />
                                        <span className="text-[13px] font-bold text-zinc-900 dark:text-white tracking-wide">Live Scan Console</span>
                                    </div>
                                    <div className="flex items-center gap-1.5 px-3 py-1 rounded-[16px] bg-white dark:bg-white text-zinc-900 shadow-sm leading-none h-[28px] mt-0.5">
                                        {/* Running Spinner / Icon icon */}
                                        <svg className="w-3.5 h-3.5 text-zinc-500 animate-[spin_3s_linear_infinite]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M21 12a9 9 0 1 1-6.219-8.56" /></svg>
                                        <span className="text-[11px] font-bold text-zinc-600">Running...</span>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4 text-zinc-400">
                                    <ChevronDown className="w-[15px] h-[15px] cursor-pointer hover:text-zinc-600 dark:hover:text-zinc-200 transition-colors" />
                                    <X className="w-[15px] h-[15px] cursor-pointer hover:text-zinc-600 dark:hover:text-zinc-200 transition-colors" />
                                </div>
                            </div>

                            {/* Main Split Content */}
                            <div className="flex flex-col xl:flex-row flex-1 min-h-0 overflow-hidden">
                                {/* Left: Console */}
                                <div className="flex-1 min-w-0 border-r-0 xl:border-r border-zinc-200 dark:border-zinc-800 flex flex-col overflow-hidden">
                                    <LiveConsole />
                                </div>
                                {/* Right: Findings */}
                                <div className="w-full xl:w-[420px] shrink-0 flex flex-col overflow-hidden border-t xl:border-t-0 border-zinc-200 dark:border-zinc-800">
                                    <FindingLog />
                                </div>
                            </div>

                            {/* Footer integrated into Container */}
                            <div className="h-[42px] shrink-0 border-t border-zinc-200 dark:border-zinc-800 px-5 flex items-center bg-zinc-50 dark:bg-transparent">
                                <ScanStatusBar />
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}
