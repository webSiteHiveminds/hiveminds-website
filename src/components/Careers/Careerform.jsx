"use client";

import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import gsap from "gsap";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "../ui/checkbox";
import { Input } from "@/components/ui/input";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "../ui/button";
import styles from "../Button/styles.module.css";
import { useEffect, useState } from "react";

const formSchema = z.object({
  name: z.string().min(3, { message: "Name must be at least 3 characters." }),
  email: z.string().email({ message: "Invalid email address." }),
  email: z.string().email({ message: "Invalid email address." }),
  number: z.string().min(10, {
    message: "Contact number must be at least 10 digits.",
  }),

  message: z.string().optional(),
  terms: z.boolean().refine((val) => val, {
    message: "You must agree to receive communication.",
  }),
});

export default function Careerform() {
  const [isLoading, setIsLoading] = useState(false);
  const [submitted, setisSubmitted] = useState(false);
  const [notsubmitted , setisNotSubmitted] = useState(false);

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
  
      number:"",
   
      message: "",
      terms: false,
    },
  });

  const onSubmit = async (data) => {
    setIsLoading(true);

    try {
      const res = await fetch("/api/careerform", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!res.ok) throw new Error("Failed to send message");
      setisSubmitted(true);
      setTimeout(() => {
        setisSubmitted(false);
      }, 7000);

      form.reset();
    } catch (error) {
      setisNotSubmitted(true)
      setTimeout(() => {
        setisNotSubmitted(false);
      }, 7000);
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (submitted||notsubmitted) {
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
  });

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
                <div className="w-full flex gap-[1vw] justify-start mobile:justify-start mobile:items-start mobile:gap-3 tablet:block tablet:w-4/5 ">
          <FormField
            control={form.control}
            name="terms"
            render={({ field }) => (
              <FormItem className="flex items-start gap-3 tablet:gap-1">
                <Checkbox aria-label="checkbox" checked={field.value} onCheckedChange={field.onChange} className="mobile:mt-[2vw] tablet:mt-[2vw]" />
                <span className="text-[1.1vw] text-black/70  capitalize mobile:text-[1rem] tablet:text-[2vw] tablet:px-[3vw]">
                  Agree to Terms and Conditions.
                </span>
                <FormMessage />
              </FormItem>
            )}
          />

          </div>
          {submitted && (
            <div className="fixed top-0 left-0 flex justify-center pt-[4vw] w-screen h-screen z-[9999] mobile:pt-[15vw] tablet:pt-[7vw] form-submission ">
              <div className="w-fit h-fit px-[3vw] py-[1vw] rounded-[0.5vw] mobile:rounded-[1.5vw] tablet:rounded-[1vw] mobile:text-[4vw] mobile:px-[7vw] mobile:py-[1.5vw] tablet:text-[2.2vw]  text-white bg-green-500">
                form submitted
              </div>
            </div>
          )}
           {notsubmitted && (
            <div className="fixed top-0 left-0 flex justify-center pt-[4vw] w-screen h-screen z-[9999] mobile:pt-[15vw] tablet:pt-[7vw] form-submission ">
              <div className="w-fit h-fit px-[3vw] py-[1vw] rounded-[0.5vw] mobile:rounded-[1.5vw] tablet:rounded-[1vw] mobile:text-[4vw] mobile:px-[7vw] mobile:py-[1.5vw] tablet:text-[2.2vw]  text-white bg-red-500">
                form is not submitted
              </div>
            </div>
          )}
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
