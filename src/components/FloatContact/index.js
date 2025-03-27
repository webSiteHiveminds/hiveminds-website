import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function FloatContact() {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    }

    const handleMouseLeave = () => {
        setIsHovered(false);
    }

    return (
        <div className="fixed bottom-3 right-3 h-fit w-fit fadeup group z-[10] bg-white/50 backdrop-blur-sm rounded-full overflow-hidden">
            <Link
                className="w-full h-full"
           
                aria-label="Connect With Us"
                href="/contact-us"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <Image
                    width={120}
                    height={120}
                    className='animate-spin transition-transform object-cover duration-5000 w-[6vw] h-[6vw] tablet:w-[12vw] tablet:h-[12vw] mobile:w-[20vw] mobile:h-[20vw]'
                    alt='PopUp Form HireUs Image'
                    src="/assets/icons/talk-to-us.svg"
                    priority={true}
                />
                <Image
                    
                    height={50}
                    width={50}
                    alt="Whatsapp Icon"
                    className='absolute rounded-full top-1/2 left-1/2 -translate-x-1/2 opacity-90 -translate-y-1/2 w-[28%] h-full object-contain group-hover:scale-110 duration-300'
                    src={'/assets/icons/telephone.png'}
                />
            </Link>
        </div>
    )
}