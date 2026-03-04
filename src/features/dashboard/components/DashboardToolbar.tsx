import { Search, ListFilter, Columns3, Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useNavigate } from 'react-router-dom';

interface DashboardToolbarProps {
    searchQuery: string;
    setSearchQuery: (val: string) => void;
    filterStatus: string | null;
    onOpenFilterDrawer: () => void;
    onOpenColumnDrawer: () => void;
}

export function DashboardToolbar({ searchQuery, setSearchQuery, filterStatus, onOpenFilterDrawer, onOpenColumnDrawer }: DashboardToolbarProps) {
    const navigate = useNavigate();
    return (
        <div className="flex flex-col sm:flex-row items-center gap-4 py-4 mb-2 bg-white dark:bg-[#1A1A1A]">
            <div className="relative flex-1 w-full max-w-[600px]">
                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-[18px] h-[18px] text-zinc-400" />
                <Input
                    type="text"
                    placeholder="Search scans by name or type..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full ml-2 pl-10 h-11 border-zinc-200 focus:border-[#0CC8A8] focus:ring-[#0CC8A8] rounded-[10px] text-[14px] shadow-sm dark:border-zinc-800 dark:bg-zinc-900"
                />
            </div>

            <div className="flex items-center gap-3 w-full sm:w-auto overflow-x-auto pb-2 sm:pb-0 sm:ml-auto">
                <Button
                    variant="outline"
                    onClick={onOpenFilterDrawer}
                    className={`h-11 px-4 gap-2 border-zinc-200 hover:bg-zinc-50 rounded-[10px] shadow-sm transition-colors ${filterStatus
                        ? 'bg-[#E6F8F5] text-[#0BA68B] border-[#0BA68B]/20 hover:bg-[#E6F8F5]'
                        : 'text-zinc-600 dark:border-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-800'
                        }`}
                >
                    <ListFilter className="w-4 h-4" />
                    <span className="font-semibold text-[14px]">{filterStatus ? `Status: ${filterStatus}` : 'Filter Status'}</span>
                </Button>

                <Button
                    variant="outline"
                    onClick={onOpenColumnDrawer}
                    className="h-11 px-4 gap-2 text-zinc-600 border-zinc-200 hover:bg-zinc-50 rounded-[10px] shadow-sm dark:border-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-800 shrink-0"
                >
                    <Columns3 className="w-4 h-4" />
                    <span className="font-semibold text-[14px]">Column</span>
                </Button>

                <Button
                    onClick={() => navigate('/scan-detail')}
                    className="h-11 px-5 gap-2 bg-[#0CC8A8] hover:bg-[#0BA68B] text-white rounded-[10px] shadow-sm shrink-0"
                >
                    <Plus className="w-4 h-4 rounded-sm border border-white" />
                    <span className="font-semibold text-[14px]">New scan</span>
                </Button>
            </div>
        </div>
    );
}
