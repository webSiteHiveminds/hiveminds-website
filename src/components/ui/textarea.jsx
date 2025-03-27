import * as React from "react"

import { cn } from "@/lib/utils"

const Textarea = React.forwardRef(({ className, ...props }, ref) => {
  return (
    <textarea
      className={cn(
        "flex min-h-[60px] text-[1.1vw] w-full border pl-0 bg-transparent placeholder:text-[1.1vw] mobile:placeholder:text-[4vw]  py-2 text-base placeholder:text-muted-foreground focus-visible:outline-none focus:border-black/10 focus-visible:ring-0 disabled:cursor-not-allowed disabled:opacity-50 mobile:text-[4vw] tablet:text-[2.3vw] tablet:placeholder:!text-[2.3vw]",
        className
      )}
      ref={ref}
      {...props} />
  );
})
Textarea.displayName = "Textarea"

export { Textarea }
