import * as React from "react"
import { Check } from "lucide-react"
import { cn } from "@/lib/utils"

const Checkbox = React.forwardRef<
    HTMLInputElement,
    React.InputHTMLAttributes<HTMLInputElement>
>(({ className, ...props }, ref) => {
    return (
        <div className="relative flex items-center justify-center shrink-0">
            <input
                type="checkbox"
                ref={ref}
                className={cn(
                    "peer h-5 w-5 shrink-0 appearance-none rounded-md border border-input bg-transparent ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 checked:bg-primary checked:border-primary",
                    className
                )}
                {...props}
            />
            <Check className="pointer-events-none absolute h-3.5 w-3.5 text-primary-foreground opacity-0 peer-checked:opacity-100 transition-opacity" strokeWidth={3} />
        </div>
    )
})
Checkbox.displayName = "Checkbox"

export { Checkbox }
