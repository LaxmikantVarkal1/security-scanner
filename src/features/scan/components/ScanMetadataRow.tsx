

export function ScanMetadataRow() {
    const metadata = [
        { label: 'Scan Type', value: 'Grey Box' },
        { label: 'Targets', value: 'google.com' },
        { label: 'Started At', value: 'Nov 22, 09:00AM' },
        { label: 'Credentials', value: '2 Active' },
        { label: 'Files', value: 'Control.pdf' },
        { label: 'Checklists', value: '40/350', highlight: true },
    ];

    return (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 pt-6 dark:border-zinc-800">
            {metadata.map((item, index) => (
                <div key={index} className="flex flex-col gap-1.5">
                    <span className="text-[12px] font-bold text-zinc-400 dark:text-zinc-500 uppercase tracking-widest">{item.label}</span>
                    <span className={`text-[15px] font-bold ${item.highlight ? 'text-[#0CC8A8]' : 'text-zinc-900 dark:text-white'
                        }`}>
                        {item.value}
                    </span>
                </div>
            ))}
        </div>
    );
}
