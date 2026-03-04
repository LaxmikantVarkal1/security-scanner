export function StatusChip({ status }: { status: string }) {
    let colors = '';
    switch (status) {
        case 'Completed':
            colors = 'bg-[#E6F8F5] text-[#0BA68B] border border-[#0BA68B]/20 dark:bg-[#0BA68B]/10 dark:text-[#0CC8A8]';
            break;
        case 'Failed':
            colors = 'bg-[#FFEAEB] text-[#E52B50] border border-[#E52B50]/20 dark:bg-[#E52B50]/10 dark:text-[#FF3B30]';
            break;
        case 'Scheduled':
            colors = 'bg-[#EEF2FC] text-[#4169E1] border border-[#4169E1]/20 dark:bg-[#4169E1]/10 dark:text-[#4169E1]';
            break;
        case 'In Progress':
        case 'Running':
            colors = 'bg-[#E3EFFF] text-[#0066FF] border border-[#0066FF]/20 dark:bg-[#0066FF]/10 dark:text-[#3388FF]';
            break;
        default:
            colors = 'bg-zinc-100 text-zinc-600 border border-zinc-200 dark:bg-zinc-800 dark:text-zinc-400 dark:border-zinc-700';
    }

    return (
        <span className={`inline-flex items-center px-2.5 py-1 rounded-[6px] text-[12px] font-bold whitespace-nowrap ${colors}`}>
            {status}
        </span>
    );
}
