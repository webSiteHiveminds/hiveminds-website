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
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "../ui/button";
import styles from "../Button/styles.module.css";
import { useEffect, useState } from "react";

const formSchema = z.object({
  name: z.string().min(3, { message: "Name must be at least 3 characters." }),
  email: z.string().email({ message: "Invalid email address." }),
  phone: z.string().min(10, { message: "Phone must be at least 10 digits." }),
  company: z.string().min(2, { message: "Company name is required." }),
  city: z.string().min(2, { message: "City is required." }),
  mode: z.string().min(1, { message: "Please select a mode." }),
});

export default function BrochureForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [submitted, setisSubmitted] = useState(false);
  const [notsubmitted , setisNotSubmitted] = useState(false);


  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      company: "",
      city: "",
      mode: "",
    },
  });

  const onSubmit = async (data) => {
    setIsLoading(true);
    try {
      const res = await fetch("/api/sodform", {
        method: "POST",
        body: JSON.stringify(data),
        headers: { "Content-Type": "application/json" },
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
      // console.log(error);
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
    <div className="w-full h-full p-[2vw] pb-[3vw] rounded-[0.5vw] fadein bg-white mobile:rounded-[4.5vw] mobile:py-[7vw] mobile:bg-[#F2F2F2] tablet:rounded-[3vw] tablet:px-[4vw]">
      <p className="text-[2vw] font-medium text-center py-[2vw] mobile:text-[5vw] mobile:w-[80%] mobile:ml-[2vw] mobile:text-left mobile:mb-[4vw] tablet:text-[3vw] tablet:py-[3vw]">
        Fill in the Details and Get your Brochure Now!
      </p>

      <Form {...form}>
        <form className="space-y-4" onSubmit={form.handleSubmit(onSubmit)}>

          {/* Name */}
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem className="required ">
                <FormControl>
                  <Input
                    {...field}
                    id="name"
                    name="name"
                    placeholder="First Name *"
                    className="h-[4vw] rounded-[0.5vw] shadow-none mobile:h-full mobile:py-3.5 mobile:px-6 mobile:rounded-xl bg-[#F2F2F2] mobile:bg-white mobile:shadow-md tablet:!h-[7vw] tablet:rounded-[1.5vw]"
                  />
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
              <FormItem className="required ">
                <FormControl>
                  <Input
                    {...field}
                    id="email"
                    name="email"
                    placeholder="Email Address *"
                    className="h-[4vw] rounded-[0.5vw] shadow-none mobile:h-full mobile:py-3.5 mobile:px-6 mobile:rounded-xl bg-[#F2F2F2] mobile:bg-white mobile:shadow-md tablet:!h-[7vw] tablet:rounded-[1.5vw]"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Phone */}
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem className="required ">
                <FormControl>
                  <Input
                    {...field}
                    id="phone"
                    name="phone"
                    placeholder="Phone Number *"
                    type="tel"
                    className="h-[4vw] rounded-[0.5vw] shadow-none mobile:h-full mobile:py-3.5 mobile:px-6 mobile:rounded-xl bg-[#F2F2F2] mobile:bg-white mobile:shadow-md tablet:!h-[7vw] tablet:rounded-[1.5vw]"
                  />
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
              <FormItem className="required ">
                <FormControl>
                  <Input
                    {...field}
                    id="company"
                    name="company"
                    placeholder="Company Name *"
                    className="h-[4vw] rounded-[0.5vw] shadow-none mobile:h-full mobile:py-3.5 mobile:px-6 mobile:rounded-xl bg-[#F2F2F2] mobile:bg-white mobile:shadow-md tablet:!h-[7vw] tablet:rounded-[1.5vw]"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* City */}
          <FormField
            control={form.control}
            name="city"
            render={({ field }) => (
              <FormItem className="required ">
                <FormControl>
                  <Input
                    {...field}
                    id="city"
                    name="city"
                    placeholder="City *"
                    className="h-[4vw] rounded-[0.5vw] shadow-none mobile:h-full mobile:py-3.5 mobile:px-6 mobile:rounded-xl bg-[#F2F2F2] mobile:bg-white mobile:shadow-md tablet:!h-[7vw] tablet:rounded-[1.5vw]"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Mode */}
          <FormField
            control={form.control}
            name="mode"
            render={({ field }) => (
              <FormItem className="required ">
                <Select onValueChange={field.onChange} value={field.value}>
                  <FormControl>
                    <SelectTrigger className="w-full h-[4vw] shadow-none mobile:h-full mobile:py-3.5 mobile:px-6 mobile:rounded-xl bg-[#F2F2F2] mobile:bg-white mobile:shadow-md tablet:!h-[7vw] tablet:rounded-[1.5vw]">
                      <SelectValue placeholder="Mode of Class" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Modes Offered</SelectLabel>
                      <SelectItem value="1">Mode 1</SelectItem>
                      <SelectItem value="2">Mode 2</SelectItem>
                      <SelectItem value="3">Mode 3</SelectItem>
                      <SelectItem value="4">Mode 4</SelectItem>
                      <SelectItem value="5">Mode 5</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
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
            <Button
              type="submit"
              disabled={isLoading}
              className={styles.btn}
            >
              <div aria-hidden="true" className={styles.btnCircle}>
                <div className={styles.btnCircleText}>
                  <svg
                    viewBox="0 0 10 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className={styles.btnIcon}
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M0 5.625H7.625L4.125 9.125L5 10L10 5L5 0L4.125 0.875L7.625 4.375H0V5.625Z"
                      className={styles.btnPath}
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M0 5.625H7.625L4.125 9.125L5 10L10 5L5 0L4.125 0.875L7.625 4.375H0V5.625Z"
                      className={styles.btnPath}
                    />
                  </svg>
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
