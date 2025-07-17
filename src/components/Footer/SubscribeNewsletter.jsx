import { ArrowUpRight, LoaderCircle } from "lucide-react";
import { useState, useEffect } from "react";

const SubscribeNewsletter = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [blockedDomains, setBlockedDomains] = useState([]);
  const [domainsLoaded, setDomainsLoaded] = useState(false);

  useEffect(() => {
    const fetchBlockedDomains = async () => {
      try {
        const response = await fetch("/BlockedDomains.json");
        const data = await response.json();
        // Extract the first (and only) value from each object and convert it to lowercase
        const domains = data.map((item) => {
          const domainValue = Object.values(item)[0];
          return typeof domainValue === "string" ? domainValue.toLowerCase() : "";
        }).filter(Boolean);
        setBlockedDomains(domains);
      } catch (err) {
        // console.error("Error loading blocked domains:", err);
      } finally {
        setDomainsLoaded(true);
      }
    };
    fetchBlockedDomains();
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();

    // Prevent submission if blocked domains haven't loaded yet
    if (!domainsLoaded) {
      setError("Please wait until the page is fully loaded.");
      hideMessage();
      return;
    }

    setLoading(true);
    setError("");
    setSuccess(false);

    if (!email) {
      setError("Please enter a valid email address.");
      setLoading(false);
      hideMessage();
      return;
    }

    // Extract domain from email and convert to lowercase
    const emailDomain = email.split("@")[1]?.toLowerCase();
    // console.log("Entered Email Domain:", emailDomain);

    // Check if email domain is in the blocked list
    if (!emailDomain || blockedDomains.includes(emailDomain)) {
      setError("Enter a valid business email.");
      setLoading(false);
      hideMessage();
      return;
    }

    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        setSuccess(true);
        setEmail(""); // Clear input after success
        hideMessage();
      } else {
        setError(data.message || "Something went wrong. Try again.");
        hideMessage();
      }
    } catch (err) {
      setError("Network error. Please try again later.");
      hideMessage();
    } finally {
      setLoading(false);
    }
  };

  // Hide messages after 5 seconds
  const hideMessage = () => {
    setTimeout(() => {
      setError("");
      setSuccess(false);
    }, 5000);
  };

  return (
    <div className="w-full relative">
      <p className="uppercase tracking-wider text-[1.16vw] text-white font-medium montreal tablet:text-[3.2vw] mobile:text-[5vw] mobile:mb-4">
        Subscribe to get latest insights
      </p>
      <form onSubmit={onSubmit} className="relative">
        <input
          type="email"
          placeholder="Email Address*"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-[30vw] border-b-[1px] border-white bg-primary mt-[0.5vw] tablet:mt-5 p-[0.5vw] pl-0 outline-none placeholder:text-white placeholder:text-[0.94vw] tablet:w-full tablet:placeholder:text-[2.5vw] tablet:text-[2.5vw] mobile:placeholder:text-lg mobile:text-lg mobile:w-full mobile:pb-3"
        />
        <button 
          type="submit" 
          aria-label="Subscribe Newsletter" 
          disabled={loading || !domainsLoaded} 
          className={`absolute right-[0%] bottom-[15%] cursor-pointer hover:bg-white py-[0.5vw] px-[1vw] duration-300 rounded-full group mobile:py-2 mobile:px-4 ${loading ? "bg-white" : ""}`}
        >
          {loading ? (
            <LoaderCircle className="w-[1.5vw] h-[1.5vw] animate-spin text-black" />
          ) : (
            <ArrowUpRight className="w-[1.5vw] h-[1.5vw] group-hover:text-black duration-300 group-hover:rotate-45 tablet:w-[2.5vw] tablet:h-[2.5vw] mobile:w-[6vw] mobile:h-[6vw] text-white" />
          )}
        </button>
      </form>

      <div className="absolute bottom-[-45%] font-medium tablet:bottom-[-25%] mobile:-bottom-8">
        {error && <p className="text-red-500 mt-2">{error}</p>}
        {success &&  <p className="text-green-500 mt-2">Subscription successful!</p> }
      </div>
    </div>
  );
};

export default SubscribeNewsletter;

