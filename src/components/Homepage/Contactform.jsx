"use client";

import { Controller, useForm } from "react-hook-form";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import gsap from "gsap";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "../ui/checkbox";
import { Input } from "@/components/ui/input";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "../ui/button";
import styles from "../Button/styles.module.css";
import { useEffect, useState } from "react";
import { MultiSelect } from "@/components/ui/multi-select";

const formSchema = z.object({
  firstName: z.string().min(2, { message: "First name must be at least 2 characters." }),
  lastName: z.string().min(2, { message: "Last name must be at least 2 characters." }),
  email: z.string().email({ message: "Invalid email address." }),
  number: z.string().regex(/^\d{10,15}$/, { message: "Phone number must be 10-15 digits." }),
  company: z.string().min(2, { message: "Company name is required." }),
  services: z.array(z.string()).min(1, { message: "Please select at least one service." }),
  message: z.string().optional(),
  terms: z.boolean().refine((val) => val, { message: "You must agree to terms." }),
  pageURL: z.string(),
});

const servicesList = [
  { value: "performance-marketing", label: "Performance Marketing" },
  { value: "retail-marketing", label: "Retail Marketing" },
  { value: "seo", label: "Search Engine Optimization" },
  { value: "online-reputation-management", label: "Online Reputation Management" },
  { value: "content-management-creative", label: "Content Management & Creative" },
  { value: "consumer-insights", label: "Consumer Insights" },
  { value: "influencer-marketing", label: "Influencer Marketing" },
  { value: "affiliate-marketing", label: "Affiliate Marketing" },
  { value: "social-media-marketing", label: "Social Media Marketing" },
  { value: "data-analytics", label: "Data & Analytics" },
  { value: "branding-services", label: "Branding Services" },
];

export default function ContactForm() {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      number: "",
      company: "",
      services: [],
      message: "",
      terms: false,
      pageURL: typeof window !== 'undefined' ? window.location.href : '',
    },
  });

  const [isLoading, setIsLoading] = useState(false);
  const [submitted, setIsSubmitted] = useState(false);
  const [notsubmitted, setIsNotSubmitted] = useState(false);
  const [blockedDomains, setBlockedDomains] = useState([]);
  const [domainsLoaded, setDomainsLoaded] = useState(false);
  const { control, handleSubmit } = form;

  // Load blocked domains from public folder
  useEffect(() => {
    const fetchBlockedDomains = async () => {
      try {
        const response = await fetch("/BlockedDomains.json");
        const data = await response.json();
        // Extract the first value from each object and convert to lowercase
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

  const onSubmit = async (data) => {
    if (!domainsLoaded) {
      form.setError("email", { type: "manual", message: "Please wait until the page is fully loaded." });
      return;
    }

    const emailDomain = data.email.split("@")[1]?.toLowerCase();
    if (!emailDomain || blockedDomains.includes(emailDomain)) {
      form.setError("email", { type: "manual", message: "Enter a business email." });
      return;
    }

    setIsLoading(true);

    const formattedData = {
      ...data,
      services: data.services.join(", "),
    };

    try {
      const res = await fetch("/api/contactform", {
        method: "POST",
        body: JSON.stringify(formattedData),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!res.ok) throw new Error("Failed to send message");

      setIsSubmitted(true);
      setTimeout(() => setIsSubmitted(false), 7000);
      form.reset();
    } catch (error) {
      setIsNotSubmitted(true);
      setTimeout(() => setIsNotSubmitted(false), 7000);
      // console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (submitted || notsubmitted) {
        gsap.from(".form-submission", {
          opacity: 0,
          duration: 1.5,
        });
        gsap.to(".form-submission", {
          opacity: 0,
          duration: 1.5,
          delay: 4,
        });
      }
    });
    return () => ctx.revert();
  }, [submitted, notsubmitted]);

  return (
    <div className="w-full h-full p-[2vw] pb-[3vw] rounded-[0.5vw] fadein">
      <Form {...form}>
        <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
          {/* First Name */}
          <FormField
            control={control}
            name="firstName"
            render={({ field }) => (
              <FormItem className="required">
                <FormControl>
                  <Input placeholder="First Name *" {...field} className="h-[4vw] rounded-[0.5vw] border drop-shadow-none shadow-none mobile:h-full mobile:py-3.5 mobile:px-3 mobile:rounded-xl tablet:h-[8vw] tablet:rounded-[1.5vw]" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Last Name */}
          <FormField
            control={control}
            name="lastName"
            render={({ field }) => (
              <FormItem className="required">
                <FormControl>
                  <Input placeholder="Last Name *" {...field} className="h-[4vw] rounded-[0.5vw] border drop-shadow-none shadow-none mobile:h-full mobile:py-3.5 mobile:px-3 mobile:rounded-xl tablet:h-[8vw] tablet:rounded-[1.5vw]" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Email */}
          <FormField
            control={control}
            name="email"
            render={({ field }) => (
              <FormItem className="required">
                <FormControl>
                  <Input placeholder="Email Address*" {...field} className="h-[4vw] rounded-[0.5vw] border drop-shadow-none shadow-none mobile:h-full mobile:py-3.5 mobile:px-3 mobile:rounded-xl tablet:h-[8vw] tablet:rounded-[1.5vw]" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Phone Number */}
          <FormField
            control={control}
            name="number"
            render={({ field }) => (
              <FormItem className="required">
                <FormControl>
                  <Input type="number" placeholder="Phone Number*" {...field} className="h-[4vw] rounded-[0.5vw] border drop-shadow-none shadow-none mobile:h-full mobile:py-3.5 mobile:px-3 mobile:rounded-xl tablet:h-[8vw] tablet:rounded-[1.5vw]" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Company */}
          <FormField
            control={control}
            name="company"
            render={({ field }) => (
              <FormItem className="required">
                <FormControl>
                  <Input placeholder="Company Name*" {...field} className="h-[4vw] rounded-[0.5vw] border drop-shadow-none shadow-none mobile:h-full mobile:py-3.5 mobile:px-3 mobile:rounded-xl tablet:h-[8vw] tablet:rounded-[1.5vw]" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Services */}
          <Controller
            control={control}
            name="services"
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <FormItem>
                <MultiSelect
                  variant="default"
                  options={servicesList}
                  value={value}
                  onValueChange={(selected) => onChange(selected)}
                  placeholder="Select Services"
                  animation={2}
                  maxCount={2}
                />
                {error && <FormMessage>{error.message}</FormMessage>}
              </FormItem>
            )}
          />

          {/* Message */}
          <FormField
            control={control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Textarea placeholder="Message" {...field} className="h-[6vw] rounded-[0.5vw] px-[1vw] placeholder:text-[#111111] placeholder:text-[1vw] bg-white drop-shadow-none shadow-none mobile:h-full mobile:py-3.5 mobile:px-3 mobile:rounded-xl tablet:placeholder:text-[1.8vw] tablet:px-[2vw] tablet:h-[12vw] tablet:py-[2vw] tablet:rounded-[1.5vw]" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Terms & Conditions */}
          <div className="w-full flex gap-[1vw] justify-start mobile:justify-start mobile:items-start mobile:gap-3 tablet:block tablet:w-4/5 ">
            <FormField
              control={control}
              name="terms"
              render={({ field }) => (
                <FormItem className="space-y-2">
                  <div className="flex items-start justify-start gap-3 tablet:gap-1">
                    <Checkbox aria-label="checkbox" checked={field.value} onCheckedChange={field.onChange} className="mobile:mt-[2vw] tablet:mt-[2vw]" />
                    <label className="text-[1.1vw] text-black/70 capitalize mobile:text-[1rem] tablet:text-[2vw] tablet:px-[3vw]">Sign me up to receive future marketing communications regarding Hiveminds.</label>
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          {/* Submission Status */}
          {submitted && (
            <div className="fixed top-0 left-0 flex justify-center pt-[4vw] w-screen h-screen z-[9999] mobile:pt-[15vw] tablet:pt-[7vw] form-submission">
              <div className="w-fit h-fit px-[3vw] py-[1vw] rounded-[0.5vw] mobile:rounded-[1.5vw] tablet:rounded-[1vw] mobile:text-[4vw] mobile:px-[7vw] mobile:py-[1.5vw] tablet:text-[2.2vw] text-white bg-green-500">
                Form submitted successfully!
              </div>
            </div>
          )}
          {notsubmitted && (
            <div className="fixed top-0 left-0 flex justify-center pt-[4vw] w-screen h-screen z-[9999] mobile:pt-[15vw] tablet:pt-[7vw] form-submission">
              <div className="w-fit h-fit px-[3vw] py-[1vw] rounded-[0.5vw] mobile:rounded-[1.5vw] tablet:rounded-[1vw] mobile:text-[4vw] mobile:px-[7vw] mobile:py-[1.5vw] tablet:text-[2.2vw] text-white bg-red-500">
                Please try again later.
              </div>
            </div>
          )}

          {/* Submit */}
          <div className="pt-[2vw]">
            <Button
              type="submit"
              aria-label="submit form"
              disabled={isLoading}
              className={`${styles.btn}`}
            >
              <div aria-hidden="true" className={styles.btnCircle}>
                <div className={styles.btnCircleText}>
                  <div>
                    <svg
                      viewBox="0 0 10 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className={`${styles.btnIcon}`}
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M0 5.625L7.625 5.625L4.125 9.125L5 10L10 5L5 0L4.125 0.875L7.625 4.375L0 4.375L0 5.625Z"
                        className={`${styles.btnPath}`}
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M0 5.625L7.625 5.625L4.125 9.125L5 10L10 5L5 0L4.125 0.875L7.625 4.375L0 4.375L0 5.625Z"
                        className={`${styles.btnPath}`}
                      />
                    </svg>
                  </div>
                  <span className={`${styles.btnText} !ml-[-1vw] mobile:!ml-[-2vw] mobile:!mt-[0.5vw]`}>
                    {isLoading ? "Submitting..." : "Submit"}
                  </span>
                </div>
              </div>
              <span className={styles.btnText}>
                {isLoading ? "Submitting..." : "Submit"}
              </span>
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
