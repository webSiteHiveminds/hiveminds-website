import * as React from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";

const Input = React.forwardRef(({ className, type, placeholderIcon, ...props }, ref) => {
  return (
    <div className="relative w-full flex gap-[1vw]">
      {/* Icon/Image as placeholder */}
      {placeholderIcon && (
       <span className="absolute top-[50%] -translate-y-[50%] left-[4.5%]">
        <Image src={placeholderIcon} alt="form-icons" width={20} height={20} className="object-contain h-5 w-5 mobile:w-[4vw] mobile:h-[4vw]"
               />
       </span>
      )}
      <input
        type={type}
        className={cn(
          "flex h-[2.2vw] w-full bg-white px-2 drop-shadow-md shadow-inner py-1 pl-[1.2vw] mobile:pl-[9vw] text-[1vw] mobile:text-[4vw] mobile:h-[10vw] tablet:h-[5vw] tablet:text-[2.3vw] tablet:pl-[5vw] transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-neutral-950 placeholder:text-[#1C1B1A] focus-visible:outline focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 dark:border-neutral-200 dark:file:text-neutral-50 dark:placeholder:text-neutral-400 dark:focus-visible:ring-neutral-300",
          className
        )}
        ref={ref}
        {...props}
      />
    </div>
  );
});

Input.displayName = "Input";

export { Input };
