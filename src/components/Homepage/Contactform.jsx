"use client";

import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "../ui/checkbox";
import { Input } from "@/components/ui/input";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "../ui/button";
import styles from "../Button/styles.module.css";
import { useState } from "react";

const formSchema = z.object({
  name: z.string().min(3, { message: "Name must be at least 3 characters." }),
  email: z.string().email({ message: "Invalid email address." }),
  email: z.string().email({ message: "Invalid email address." }),
  number: z.string().min(10, {
    message: "Contact number must be at least 10 digits.",
  }),
  company: z.string().min(2, { message: "Company name is required." }),
  services: z.string().min(1, { message: "Please select a service." }),
  message: z.string().optional(),
  terms: z.boolean().refine((val) => val, {
    message: "You must agree to receive communication.",
  }),
});

export default function ContactForm() {
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      number:"",
      services: "",
      message: "",
      terms: false,
    },
  });

  const onSubmit = async (data) => {
    setIsLoading(true);

    try {
      const res = await fetch("/api/contactform", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!res.ok) throw new Error("Failed to send message");
      form.reset();
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full h-full p-[2vw] pb-[3vw] rounded-[0.5vw] fadein">
      <Form {...form}>
        <form className="space-y-4" onSubmit={form.handleSubmit(onSubmit)}>
          {/* Name */}
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem className="required">
                <FormControl>
                <Input placeholder="Name *" {...field} className="h-[4vw] rounded-[0.5vw] border drop-shadow-none shadow-none mobile:h-full mobile:py-3.5 mobile:px-6 mobile:rounded-xl tablet:h-[8vw] tablet:rounded-[1.5vw]" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Email */}
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="required">
                <FormControl>
                <Input placeholder="Email Address *" {...field} className="h-[4vw] rounded-[0.5vw] border drop-shadow-none  shadow-none mobile:h-full mobile:py-3.5 mobile:px-6 mobile:rounded-xl  tablet:h-[8vw] tablet:rounded-[1.5vw]" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="number"
            render={({ field }) => (
              <FormItem className="required">
                <FormControl>
                <Input placeholder="Phone number *" type="number" {...field} className="h-[4vw] rounded-[0.5vw] border drop-shadow-none  shadow-none mobile:h-full mobile:py-3.5 mobile:px-6 mobile:rounded-xl  tablet:h-[8vw] tablet:rounded-[1.5vw]" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Company */}
          <FormField
            control={form.control}
            name="company"
            render={({ field }) => (
              <FormItem className="required">
                <FormControl>
                <Input placeholder="Company Name *" {...field} className="h-[4vw] rounded-[0.5vw] border drop-shadow-none  shadow-none mobile:h-full mobile:py-3.5 mobile:px-6 mobile:rounded-xl  tablet:h-[8vw] tablet:rounded-[1.5vw]" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Services */}
          <FormField
            control={form.control}
            name="services"
            render={({ field }) => (
              <FormItem className="required">
                <Select  onValueChange={field.onChange} value={field.value}>
                  <FormControl>
                  <SelectTrigger aria-label="services dropdown" className="w-full h-[4vw] drop-shadow-none border  shadow-none mobile:h-full mobile:py-3.5 mobile:px-6 mobile:rounded-xl tablet:px-[5vw]  tablet:h-[8vw] tablet:rounded-[1.5vw]">
                      <SelectValue placeholder="Services" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Services Offered</SelectLabel>
                      <SelectItem value="performance-marketing">Performance Marketing</SelectItem>
                      <SelectItem value="seo">Search Engine Optimization</SelectItem>
                      <SelectItem value="branding">Branding</SelectItem>
                      <SelectItem value="influencer">Influencer Marketing</SelectItem>
                      <SelectItem value="orm">Online Reputation Management</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Message */}
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                <Textarea  placeholder="Message" {...field} className="h-[6vw] rounded-[0.5vw] px-[1vw] placeholder:text-[#111111] placeholder:text-[1vw] bg-white drop-shadow-none shadow-none mobile:h-full mobile:py-3.5 mobile:px-6 mobile:rounded-xl tablet:placeholder:text-[1.8vw] tablet:px-[5vw] tablet:h-[12vw] tablet:py-[2vw] tablet:rounded-[1.5vw]" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Checkbox */}
                <div className="w-full flex gap-[1vw] justify-center mobile:justify-start mobile:items-start mobile:gap-3 tablet:block tablet:w-4/5 ">
          <FormField
            control={form.control}
            name="terms"
            render={({ field }) => (
              <FormItem className="flex items-start gap-3 tablet:gap-1">
                <Checkbox aria-label="checkbox" checked={field.value} onCheckedChange={field.onChange} className="mobile:mt-[2vw] tablet:mt-[2vw]" />
                <span className="text-[1.1vw] text-black/70  capitalize mobile:text-[1rem] tablet:text-[2vw] tablet:px-[3vw]">
                  Sign me up to receive future marketing communications regarding Hiveminds.
                </span>
                <FormMessage />
              </FormItem>
            )}
          />

          </div>

          {/* Submit */}
          <div className="pt-[2vw]">
            <Button type="submit" aria-label="submit form" disabled={isLoading} className={`${styles.btn}`}>
              <div aria-hidden="true" className={styles.btnCircle}>
              <div className={styles.btnCircleText}>
                <div>
                    <svg viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg" className={`${styles.btnIcon} `}>
                        <path data-v-f4363f2a fillRule="evenodd" clipRule="evenodd" d="M3.82475e-07 5.625L7.625 5.625L4.125 9.125L5 10L10 5L5 -4.37114e-07L4.125 0.874999L7.625 4.375L4.91753e-07 4.375L3.82475e-07 5.625Z" className={`${styles.btnPath}`}/>
                        <path data-v-f4363f2a fillRule="evenodd" clipRule="evenodd" d="M3.82475e-07 5.625L7.625 5.625L4.125 9.125L5 10L10 5L5 -4.37114e-07L4.125 0.874999L7.625 4.375L4.91753e-07 4.375L3.82475e-07 5.625Z" className={`${styles.btnPath}`} />
                    </svg>

                </div>
                    <span className={`${styles.btnText}  !ml-[-1vw] mobile:!ml-[-2vw] mobile:!mt-[0.5vw]`}>{isLoading ? "Submitting..." : "Submit"}</span>
                </div>
              </div>
              <span className={styles.btnText}>{isLoading ? "Submitting..." : "Submit"}</span>
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
