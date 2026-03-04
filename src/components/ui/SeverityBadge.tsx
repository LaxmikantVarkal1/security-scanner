export function SeverityBadge({ severity }: { severity: 'Critical' | 'High' | 'Medium' | 'Low' | string }) {
    let colors = '';
    switch (severity) {
        case 'Critical':
            colors = 'bg-[#E52B50] text-white';
            break;
        case 'High':
            colors = 'bg-[#FF9500] text-white';
            break;
        case 'Medium':
            colors = 'bg-[#FFCC00] text-white';
            break;
        case 'Low':
            colors = 'bg-[#34C759] text-white';
            break;
        default:
            colors = 'bg-zinc-400 text-white dark:bg-zinc-600';
    }

    return (
        <span className={`px-2 py-[3px] rounded-full text-[10px] uppercase font-bold shrink-0 ${colors}`}>
            {severity}
        </span>
    );
}
