import * as React from "react"
import { cn } from "@/lib/utils"

export function Marquee({
  children,
  pauseOnHover = false,
  direction = "left",
  speed = 30,
  className,
  ...props
}) {
  return (
    (<div
      className={cn("w-full overflow-hidden sm:mt-5 z-10", className)}
      {...props}>
      <div className="relative flex max-w-[100vw] overflow-hidden">
        <div
          className={cn(
            "flex w-max animate-marquee",
            pauseOnHover && "hover:[animation-play-state:paused]",
            direction === "right" && "animate-marquee-reverse"
          )}
          style={{
            "--duration": `${speed}s`
          }}>
          {children}
          {children}
        </div>
      </div>
    </div>)
  );
}