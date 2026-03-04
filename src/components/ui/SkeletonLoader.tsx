export function SkeletonLoader({ className, width, height, rounded = 'rounded-[8px]' }: { className?: string; width?: string | number; height?: string | number; rounded?: string }) {
    return (
        <div
            className={`animate-pulse bg-zinc-200 dark:bg-zinc-800 shrink-0 ${rounded} ${className || ''}`}
            style={{ width, height }}
        />
    );
}
