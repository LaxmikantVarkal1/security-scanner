import { Workflow, FlaskConical, FileCheck2, FileText } from 'lucide-react';

const SpideringIcon = ({ className, strokeWidth }: { className?: string; strokeWidth?: string | number }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={strokeWidth || 2}
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
    >
        {/* Globe Outline */}
        <path d="M12 2a10 10 0 0 0-9.8 12.2" />
        <path d="M22 12A10 10 0 0 0 12 2" />
        <path d="M2.2 14A10 10 0 0 0 14 21.8" />
        {/* Longitude and Latitude */}
        <path d="M12 2a14.5 14.5 0 0 0 0 20" />
        <path d="M2 12h11" />
        {/* Search magnifying glass in bottom right */}
        <circle cx="17" cy="17" r="3" />
        <path d="m21 21-1.5-1.5" />
    </svg>
);

export function ScanProgressTracker() {
    const steps = [
        { icon: SpideringIcon, label: 'Spidering', active: true },
        { icon: Workflow, label: 'Mapping', active: false },
        { icon: FlaskConical, label: 'Testing', active: false },
        { icon: FileCheck2, label: 'Validating', active: false },
        { icon: FileText, label: 'Reporting', active: false },
    ];

    return (
        <div className="flex flex-col md:flex-row items-center w-full pb-8 border-b border-zinc-200 dark:border-zinc-800 mb-8">
            {/* 0% Progress Circle */}
            <div className="shrink-0 flex items-center justify-center pr-8 lg:pr-12 md:border-r border-zinc-200 dark:border-zinc-800">
                <div className="relative w-[110px] h-[110px] rounded-full bg-[#1A1C23] dark:bg-[#111111] flex flex-col items-center justify-center border-[8px] border-[#2A2D3A] dark:border-zinc-800 shadow-inner">
                    <span className="text-[28px] font-bold text-white tracking-tight leading-none">0%</span>
                    <span className="text-[10px] font-bold text-zinc-400 mt-1 uppercase tracking-wider">In Progress</span>
                </div>
            </div>

            {/* Step Tracker */}
            <div className="flex-1 w-full relative pl-8 lg:pl-12 mt-8 md:mt-0">
                <div className="relative w-full">
                    {/* Connecting Line */}
                    <div className='absolute w-[95%] top-5 left-10 bg-gray-200 h-[1px]' />
                    <div className="flex justify-between w-full mx-auto">
                        {steps.map((step, index) => {
                            const Icon = step.icon;
                            return (
                                <div key={index} className="flex flex-col items-center gap-3">
                                    <div
                                        className={`w-11 h-11 rounded-full flex items-center justify-center border-[2px] shadow-sm bg-white dark:bg-[#1A1A1A] z-10 transition-all ${step.active
                                            ? 'border-[#0CC8A8] bg-[#0CC8A8] text-white dark:bg-[#0CC8A8] ring-[8px] ring-[#0CC8A8]/20'
                                            : 'border-zinc-200 text-zinc-400 dark:border-zinc-700'
                                            }`}
                                    >
                                        <Icon className="w-5 h-5 text-gray-400" strokeWidth={2.5} />
                                    </div>
                                    <span className={`text-[12px] font-bold ${step.active ? 'text-zinc-800 dark:text-zinc-200' : 'text-zinc-400 dark:text-zinc-500'
                                        }`}>
                                        {step.label}
                                    </span>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}
