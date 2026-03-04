
export function ScanStatusBar() {
    return (
        <div className="flex w-full items-center justify-between min-w-0">

            <div className="flex items-center gap-6 text-zinc-500 dark:text-zinc-400 text-[11px]">
                <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-zinc-400" />
                    <span>Sub-Agents: 0</span>
                </div>
                <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-zinc-400" />
                    <span>Parallel Executions: 2</span>
                </div>
                <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-zinc-400" />
                    <span>Operations: 1</span>
                </div>
            </div>

            <div className="flex items-center gap-6 text-[11px] font-bold">
                <div className="text-[#E52B50]">
                    Critical: <span className="ml-[2px] text-zinc-300">0</span>
                </div>
                <div className="text-[#FF9500]">
                    High: <span className="ml-[2px] text-zinc-300">0</span>
                </div>
                <div className="text-[#FFCC00]">
                    Medium: <span className="ml-[2px] text-zinc-300">0</span>
                </div>
                <div className="text-[#34C759]">
                    Low: <span className="ml-[2px] text-zinc-300">0</span>
                </div>
            </div>

        </div>
    );
}
