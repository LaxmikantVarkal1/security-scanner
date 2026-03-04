import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { SCANS_DATA } from '@/data/mockData';
import { StatusChip } from '@/components/ui/StatusChip';

export const ALL_COLUMNS = [
    { id: 'name', label: 'Scan Name' },
    { id: 'type', label: 'Type' },
    { id: 'status', label: 'Status' },
    { id: 'progress', label: 'Progress' },
    { id: 'vulnerability', label: 'Vulnerability' },
    { id: 'lastScan', label: 'Last Scan' },
] as const;

export type ColumnId = typeof ALL_COLUMNS[number]['id'];

interface ScanTableProps {
    searchQuery: string;
    filterStatus: string | null;
    visibleColumns: Record<ColumnId, boolean>;
}

export function ScanTable({ searchQuery, filterStatus, visibleColumns }: ScanTableProps) {
    const navigate = useNavigate();
    const [currentPage, setCurrentPage] = useState(1);
    const ITEMS_PER_PAGE = 10;

    useEffect(() => {
        setCurrentPage(1);
    }, [searchQuery, filterStatus]);

    const filteredScans = SCANS_DATA.filter((scan) => {
        const matchesSearch = scan.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            scan.type.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesStatus = filterStatus ? scan.status === filterStatus : true;
        return matchesSearch && matchesStatus;
    });

    const totalPages = Math.max(1, Math.ceil(filteredScans.length / ITEMS_PER_PAGE));
    const safeCurrentPage = Math.min(Math.max(1, currentPage), totalPages);
    const paginatedScans = filteredScans.slice((safeCurrentPage - 1) * ITEMS_PER_PAGE, safeCurrentPage * ITEMS_PER_PAGE);

    return (
        <div className="w-full flex-1 min-h-0 flex flex-col">
            <div className="flex-1 overflow-y-auto overflow-x-auto min-h-0 custom-scrollbar border border-zinc-200 dark:border-zinc-800/80 rounded-[10px]">
                <table className="w-full text-left border-collapse min-w-[800px]">
                    <thead className="sticky top-0 z-10 bg-zinc-50/95 dark:bg-[#151515]/95 backdrop-blur-sm">
                        <tr className="border-b border-zinc-200 dark:border-zinc-800">
                            {visibleColumns.name && <th className="pb-4 pt-2 px-4 text-[13px] font-semibold text-zinc-500">Scan Name</th>}
                            {visibleColumns.type && <th className="pb-4 pt-2 px-4 text-[13px] font-semibold text-zinc-500">Type</th>}
                            {visibleColumns.status && <th className="pb-4 pt-2 px-4 text-[13px] font-semibold text-zinc-500">Status</th>}
                            {visibleColumns.progress && <th className="pb-4 pt-2 px-4 text-[13px] font-semibold text-zinc-500">Progress</th>}
                            {visibleColumns.vulnerability && <th className="pb-4 pt-2 px-4 text-[13px] font-semibold text-zinc-500">Vulnerability</th>}
                            {visibleColumns.lastScan && <th className="pb-4 pt-2 px-4 text-[13px] font-semibold text-zinc-500 text-right">Last Scan</th>}
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-zinc-100 dark:divide-zinc-800/50">
                        {paginatedScans.length === 0 ? (
                            <tr>
                                <td colSpan={Object.values(visibleColumns).filter(Boolean).length} className="py-12 text-center text-zinc-500 font-medium">
                                    No scans match your criteria.
                                </td>
                            </tr>
                        ) : (
                            paginatedScans.map((scan) => (
                                <tr
                                    key={scan.id}
                                    onClick={() => navigate('/scan-detail')}
                                    className="group hover:bg-zinc-50 dark:hover:bg-zinc-800/20 transition-colors cursor-pointer"
                                >
                                    {visibleColumns.name && (
                                        <td className="py-4 px-4 whitespace-nowrap">
                                            <span className="font-bold text-[14px] text-zinc-900 dark:text-white">{scan.name}</span>
                                        </td>
                                    )}
                                    {visibleColumns.type && (
                                        <td className="py-4 px-4 whitespace-nowrap">
                                            <span className="font-medium text-[14px] text-zinc-700 dark:text-zinc-300">{scan.type}</span>
                                        </td>
                                    )}
                                    {visibleColumns.status && (
                                        <td className="py-4 px-4 whitespace-nowrap">
                                            <StatusChip status={scan.status} />
                                        </td>
                                    )}
                                    {visibleColumns.progress && (
                                        <td className="py-4 px-4 whitespace-nowrap">
                                            <div className="flex items-center gap-3">
                                                <div className="w-[100px] h-[6px] rounded-full bg-zinc-100 dark:bg-zinc-800 overflow-hidden relative">
                                                    <div
                                                        className={`absolute top-0 left-0 h-full rounded-full ${scan.status === 'Failed' ? 'bg-[#FF3B30]' : 'bg-[#0CC8A8]'
                                                            }`}
                                                        style={{ width: `${scan.progress}%` }}
                                                    />
                                                </div>
                                                <span className="text-[13px] font-bold text-zinc-900 dark:text-white">{scan.progress}%</span>
                                            </div>
                                        </td>
                                    )}
                                    {visibleColumns.vulnerability && (
                                        <td className="py-4 px-4 whitespace-nowrap">
                                            <div className="flex items-center gap-1.5">
                                                {scan.vulns.critical > 0 && <span className="w-6 h-6 rounded-[6px] bg-[#E52B50] flex items-center justify-center text-[11px] font-bold text-white shrink-0">{scan.vulns.critical}</span>}
                                                {scan.vulns.high > 0 && <span className="w-6 h-6 rounded-[6px] bg-[#FF9500] flex items-center justify-center text-[11px] font-bold text-white shrink-0">{scan.vulns.high}</span>}
                                                {scan.vulns.medium > 0 && <span className="w-6 h-6 rounded-[6px] bg-[#FFCC00] flex items-center justify-center text-[11px] font-bold text-white shrink-0">{scan.vulns.medium}</span>}
                                                {scan.vulns.low > 0 && <span className="w-6 h-6 rounded-[6px] bg-[#34C759] flex items-center justify-center text-[11px] font-bold text-white shrink-0">{scan.vulns.low}</span>}
                                            </div>
                                        </td>
                                    )}
                                    {visibleColumns.lastScan && (
                                        <td className="py-4 px-4 whitespace-nowrap text-right">
                                            <span className="text-[14px] font-medium text-zinc-500 dark:text-zinc-400">{scan.lastScan}</span>
                                        </td>
                                    )}
                                </tr>
                            )))}
                    </tbody>
                </table>
            </div>

            {/* Pagination Controls */}
            {filteredScans.length > 0 && (
                <div className="flex items-center justify-between shrink-0 pt-4 px-1">
                    <span className="text-[13px] text-zinc-500 font-medium hidden sm:block">
                        Showing {(safeCurrentPage - 1) * ITEMS_PER_PAGE + 1} to {Math.min(safeCurrentPage * ITEMS_PER_PAGE, filteredScans.length)} of {filteredScans.length} scans
                    </span>
                    <div className="flex items-center gap-2 ml-auto">
                        <button
                            aria-label="Previous page"
                            disabled={safeCurrentPage === 1}
                            onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                            className="p-1.5 rounded-lg border border-zinc-200 dark:border-zinc-800 text-zinc-500 hover:bg-zinc-50 dark:hover:bg-zinc-800 disabled:opacity-50 disabled:cursor-not-allowed transition-colors focus:outline-none focus:ring-2 focus:ring-[#0CC8A8]/50"
                        >
                            <ChevronLeft className="w-4 h-4" />
                        </button>
                        <span className="text-[13px] font-bold text-zinc-700 dark:text-zinc-300 px-2 text-center min-w-[2.5rem]">
                            {safeCurrentPage} / {totalPages}
                        </span>
                        <button
                            aria-label="Next page"
                            disabled={safeCurrentPage === totalPages}
                            onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
                            className="p-1.5 rounded-lg border border-zinc-200 dark:border-zinc-800 text-zinc-500 hover:bg-zinc-50 dark:hover:bg-zinc-800 disabled:opacity-50 disabled:cursor-not-allowed transition-colors focus:outline-none focus:ring-2 focus:ring-[#0CC8A8]/50"
                        >
                            <ChevronRight className="w-4 h-4" />
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
