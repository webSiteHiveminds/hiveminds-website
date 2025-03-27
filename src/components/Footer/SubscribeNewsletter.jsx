import { ArrowUpRight } from "lucide-react";
import { useState } from "react";

const SubscribeNewsletter = () => {

    const [email, setEmail] = useState("");
    const [error, setError] = useState("");
    const [success, setSuccess] = useState(false);
    const [loading, setLoading] = useState(false);

    const onSubmit = (e) => {
        setLoading(true);
        const data = {
            email: email,
        };
    }

    return (
        <div className="w-full">
            <p className="uppercase tracking-wider text-[1.16vw] text-white font-medium montreal tablet:text-[3.2vw] mobile:text-[5vw] mobile:mb-4">
                Subscribe to get latest insights
            </p>
            <form onSubmit={onSubmit} className="relative">
                <input
                    type="email"
                    placeholder="Email Address*"
                    className="w-[30vw] border-b-[1px] border-white bg-primary mt-[0.5vw] tablet:mt-5 p-[0.5vw] pl-0 outline-none placeholder:text-white placeholder:text-[0.94vw] tablet:w-full tablet:placeholder:text-[2.5vw] tablet:text-[2.5vw] mobile:placeholder:text-lg mobile:text-lg mobile:w-full mobile:pb-3"
                />
                <button type="submit" aria-label="Subscribe Newsletter" className="absolute right-[0%] bottom-[15%] cursor-pointer hover:bg-white py-[0.5vw] px-[1vw] duration-300 rounded-xl group mobile:py-2 mobile:px-4">
                    <ArrowUpRight className="w-[1.5vw] h-[1.5vw] group-hover:text-black duration-300 group-hover:rotate-45 tablet:w-[2.5vw] tablet:h-[2.5vw] mobile:w-[6vw] mobile:h-[6vw] text-white" />
                </button>
            </form>
        </div>
    )
}

export default SubscribeNewsletter;