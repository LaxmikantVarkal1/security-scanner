import { useState, useEffect } from 'react';
import { Sidebar } from './components/Sidebar';
import { TopStatsBar } from './components/TopStatsBar';
import { DashboardToolbar } from './components/DashboardToolbar';
import { ScanTable, ALL_COLUMNS, type ColumnId } from './components/ScanTable';
import { SkeletonLoader } from '@/components/ui/SkeletonLoader';
import { Drawer } from '@/components/ui/drawer';
import { Check } from 'lucide-react';
import { toast } from 'sonner';

const STATUS_OPTIONS = ['Completed', 'Failed', 'Scheduled'];

export function DashboardScreen() {
    const [isLoading, setIsLoading] = useState(true);
    const [searchQuery, setSearchQuery] = useState('');
    const [filterStatus, setFilterStatus] = useState<string | null>(null);
    const [isFilterDrawerOpen, setIsFilterDrawerOpen] = useState(false);
    const [isColumnDrawerOpen, setIsColumnDrawerOpen] = useState(false);

    const [visibleColumns, setVisibleColumns] = useState<Record<ColumnId, boolean>>({
        name: true,
        type: true,
        status: true,
        progress: true,
        vulnerability: true,
        lastScan: true,
    });

    useEffect(() => {
        // Simulate network request
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 1200);
        return () => clearTimeout(timer);
    }, []);

    const toggleColumn = (id: ColumnId) => {
        setVisibleColumns(prev => ({
            ...prev,
            [id]: !prev[id]
        }));
    };

    return (
        <div className="min-h-screen bg-white dark:bg-[#1A1A1A] font-sans flex">
            {/* Fixed Sidebar */}
            <Sidebar />

            {/* Main Content Space */}
            <div className="flex-1 lg:ml-[240px] w-full flex flex-col min-h-screen relative max-w-[1600px]">
                {/* Header Breadcrumbs & Actions */}
                <header className="h-20 flex items-center justify-between pl-16 pr-4 lg:px-8 border-b border-zinc-200 dark:border-zinc-800 bg-white dark:bg-[#1A1A1A] sticky top-0 z-10 w-full overflow-x-auto">
                    <div className="flex items-center gap-3 shrink-0">
                        <span className="text-xl font-bold tracking-tight text-zinc-900 dark:text-white">Scan</span>
                        {/* Simple manual breadcrumb to match exactly */}
                        <div className="flex items-center text-[13px] font-semibold text-zinc-400 gap-2">
                            <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                                <polyline points="9 22 9 12 15 12 15 22" />
                            </svg>
                            <span>/</span>
                            <span>Private Assets</span>
                            <span>/</span>
                            <span className="text-[#0CC8A8]">New Scan</span>
                        </div>
                    </div>

                    <div className="flex items-center gap-4">
                        <button className="h-10 px-5 rounded-[10px] border border-zinc-200 text-zinc-700 font-semibold text-[14px] hover:bg-zinc-50 dark:border-zinc-700 dark:text-zinc-200 dark:hover:bg-zinc-800 shadow-sm transition-colors">
                            Export Report
                        </button>
                        <button onClick={() => toast.success('Scan stopped successfully')} className="h-10 px-5 rounded-[10px] bg-[#FFEAEB] text-[#E52B50] font-semibold text-[14px] hover:bg-[#FFEAEB]/80 dark:bg-[#E52B50]/10 dark:hover:bg-[#E52B50]/20 shadow-sm transition-colors border border-[#E52B50]/10">
                            Stop Scan
                        </button>
                    </div>
                </header>

                {/* Dashboard Body with flex constraints */}
                <main className="flex-1 p-6 lg:p-8 flex flex-col min-h-0 overflow-hidden">
                    <div className="w-full h-full flex flex-col max-w-[1400px] mx-auto min-h-0">
                        <div className="shrink-0 bg-white dark:bg-[#1A1A1A] rounded-[24px]">
                            {isLoading ? (
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-6">
                                    {[...Array(4)].map((_, i) => (
                                        <div key={i} className="flex flex-col gap-3 p-4 bg-zinc-50 dark:bg-zinc-800/20 rounded-xl">
                                            <SkeletonLoader className="h-4 w-24" />
                                            <SkeletonLoader className="h-8 w-16" />
                                            <SkeletonLoader className="h-3 w-32" />
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <TopStatsBar />
                            )}
                        </div>

                        <div className="flex-1 min-h-0 bg-white dark:bg-[#111111] rounded-xl border border-zinc-200 dark:border-zinc-800 p-4 mt-6 shadow-sm flex flex-col overflow-hidden">
                            <div className="shrink-0">
                                <DashboardToolbar
                                    searchQuery={searchQuery}
                                    setSearchQuery={setSearchQuery}
                                    filterStatus={filterStatus}
                                    onOpenFilterDrawer={() => setIsFilterDrawerOpen(true)}
                                    onOpenColumnDrawer={() => setIsColumnDrawerOpen(true)}
                                />
                            </div>
                            {isLoading ? (
                                <div className="flex-1 flex flex-col gap-4 mt-4">
                                    <SkeletonLoader className="h-10 w-full" />
                                    <div className="flex-1 flex flex-col gap-2">
                                        {[...Array(6)].map((_, i) => (
                                            <SkeletonLoader key={i} className="h-14 w-full" />
                                        ))}
                                    </div>
                                </div>
                            ) : (
                                <ScanTable
                                    searchQuery={searchQuery}
                                    filterStatus={filterStatus}
                                    visibleColumns={visibleColumns}
                                />
                            )}
                        </div>
                    </div>
                </main>
            </div>

            {/* Filter Drawer */}
            <Drawer
                isOpen={isFilterDrawerOpen}
                onClose={() => setIsFilterDrawerOpen(false)}
                title="Filter by Status"
            >
                <div className="flex flex-col gap-2">
                    <button
                        onClick={() => {
                            setFilterStatus(null);
                            setIsFilterDrawerOpen(false);
                        }}
                        className={`flex items-center justify-between p-4 rounded-xl border transition-colors ${filterStatus === null
                            ? 'border-[#0CC8A8] bg-[#E6F8F5] dark:bg-[#0BA68B]/10 dark:border-[#0BA68B]'
                            : 'border-zinc-200 hover:border-[#0CC8A8] dark:border-zinc-800 dark:hover:border-zinc-600'
                            }`}
                    >
                        <span className={`font-semibold text-[14px] ${filterStatus === null ? 'text-[#0BA68B] dark:text-[#0CC8A8]' : 'text-zinc-700 dark:text-zinc-300'}`}>All Statuses</span>
                        {filterStatus === null && <Check className="w-5 h-5 text-[#0BA68B] dark:text-[#0CC8A8]" />}
                    </button>

                    {STATUS_OPTIONS.map((status) => (
                        <button
                            key={status}
                            onClick={() => {
                                setFilterStatus(status);
                                setIsFilterDrawerOpen(false);
                            }}
                            className={`flex items-center justify-between p-4 rounded-xl border transition-colors ${filterStatus === status
                                ? 'border-[#0CC8A8] bg-[#E6F8F5] dark:bg-[#0BA68B]/10 dark:border-[#0BA68B]'
                                : 'border-zinc-200 hover:border-[#0CC8A8] dark:border-zinc-800 dark:hover:border-zinc-600'
                                }`}
                        >
                            <span className={`font-semibold text-[14px] ${filterStatus === status ? 'text-[#0BA68B] dark:text-[#0CC8A8]' : 'text-zinc-700 dark:text-zinc-300'}`}>{status}</span>
                            {filterStatus === status && <Check className="w-5 h-5 text-[#0BA68B] dark:text-[#0CC8A8]" />}
                        </button>
                    ))}
                </div>
            </Drawer>

            {/* Column Visibility Drawer */}
            <Drawer
                isOpen={isColumnDrawerOpen}
                onClose={() => setIsColumnDrawerOpen(false)}
                title="Manage Columns"
            >
                <div className="flex flex-col gap-2">
                    <p className="text-[14px] text-zinc-500 mb-2">Select which columns to display in the table.</p>
                    {ALL_COLUMNS.map((column) => (
                        <button
                            key={column.id}
                            onClick={() => toggleColumn(column.id)}
                            className={`flex items-center justify-between p-4 rounded-xl border transition-colors ${visibleColumns[column.id]
                                ? 'border-[#0CC8A8] bg-[#E6F8F5] dark:bg-[#0BA68B]/10 dark:border-[#0BA68B]'
                                : 'border-zinc-200 hover:border-[#0CC8A8] dark:border-zinc-800 dark:hover:border-zinc-600'
                                }`}
                        >
                            <span className={`font-semibold text-[14px] ${visibleColumns[column.id] ? 'text-[#0BA68B] dark:text-[#0CC8A8]' : 'text-zinc-700 dark:text-zinc-300'}`}>
                                {column.label}
                            </span>
                            {visibleColumns[column.id] && <Check className="w-5 h-5 text-[#0BA68B] dark:text-[#0CC8A8]" />}
                        </button>
                    ))}
                </div>
            </Drawer>
        </div>
    );
}
