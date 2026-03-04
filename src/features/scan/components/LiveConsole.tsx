import { useState, useEffect, useRef } from 'react';

import { ACTIVITY_LOG, VERIFICATION_LOOPS } from '@/data/mockData';

export function LiveConsole() {
    const [activeTab, setActiveTab] = useState<'Activity Log' | 'Verification Loops'>('Activity Log');
    const scrollRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [activeTab]);

    const activeData = activeTab === 'Activity Log' ? ACTIVITY_LOG : VERIFICATION_LOOPS;

    return (
        <div className="flex-1 flex flex-col h-full bg-transparent">

            {/* Console Tabs */}
            <div className="h-[46px] shrink-0 px-6 border-b border-zinc-100 dark:border-zinc-800 flex items-end">
                <div className="flex gap-8 h-full">
                    <button
                        onClick={() => setActiveTab('Activity Log')}
                        className={`h-full flex items-center px-1 font-bold text-[12px] border-b-2 transition-colors ${activeTab === 'Activity Log'
                            ? 'border-[#0CC8A8] text-[#0CC8A8]'
                            : 'border-transparent text-zinc-400 dark:text-zinc-500 hover:text-zinc-600 dark:hover:text-zinc-300'
                            }`}
                    >
                        Activity Log
                    </button>
                    <button
                        onClick={() => setActiveTab('Verification Loops')}
                        className={`h-full flex items-center px-1 font-bold text-[12px] border-b-2 transition-colors ${activeTab === 'Verification Loops'
                            ? 'border-[#0CC8A8] text-[#0CC8A8]'
                            : 'border-transparent text-zinc-400 dark:text-zinc-500 hover:text-zinc-600 dark:hover:text-zinc-300'
                            }`}
                    >
                        Verification Loops
                    </button>
                </div>
            </div>
            {/* Terminal Output */}
            <div ref={scrollRef} className="flex-1 min-h-0 overflow-y-auto p-6 font-mono text-[13px] leading-[1.6] text-zinc-800 dark:text-zinc-200 custom-scrollbar">

                {activeData.map((log: any, index: number) => {

                    let content = log.content;

                    // Basic string replacement for highlights
                    if (log.highlight) {
                        if (log.type === 'critical' && log.highlight === '**IDOR vulnerability**') {
                            content = content.replace(log.highlight, `<span class="font-bold text-[#E52B50] mx-0">${log.highlight}</span>`);
                        } else {
                            content = content.replace(log.highlight, `<span class="font-bold text-[#0CC8A8] mx-0">${log.highlight}</span>`);
                        }
                    }

                    if (log.badge) {
                        content = content.replace(log.badge, `<span class="px-[5px] py-[2px] rounded-[4px] bg-[#E6F8F5] text-[#0BA68B] dark:bg-[#0BA68B]/10 dark:text-[#0CC8A8] border border-transparent dark:border-[#0BA68B]/20 font-bold mx-[2px] text-[12px]">${log.badge}</span>`);
                    }

                    return (
                        <div key={index} className="mb-[22px] flex items-start gap-3">
                            <span className="text-zinc-400 dark:text-[#8a99a8] shrink-0 font-[600]">[{log.time}]</span>

                            {log.type === 'result' ? (
                                <div className="flex flex-col">
                                    <span>{content.split('\n')[0]}</span>
                                    <div className="pl-4 py-2 my-2 text-[#8a99a8]">
                                        {content.split('\n')[1]}
                                    </div>
                                    <span>{content.split('\n')[2]}</span>
                                </div>
                            ) : (
                                <span dangerouslySetInnerHTML={{ __html: content }} />
                            )}
                        </div>
                    );
                })}

            </div>

        </div>
    );
}
