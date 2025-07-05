"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useServerAction } from "zsa-react";
import { WaitlistForm } from "../action";
import states from "@/data/index.json";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Heart, Sparkles, Users, CheckCircle, ArrowLeft } from "lucide-react";
import { toast } from "sonner";
import Link from "next/link";
import { format, parse } from "date-fns";
import { Calendar } from "@/components/ui/calendar";
import "react-day-picker/dist/style.css";
import { CalendarIcon } from "lucide-react"; // optional, for calendar icon
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";


const formatDate = (date: Date) => format(date, "dd/MM/yyyy");

const formSchema = z.object({
  fullName: z.string().min(2, "Full name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  // phone: z.string().min(10, "Please enter a valid phone number"),
  dateOfBirth: z.string(),
  city: z.string().min(2, "City is required"),
  state: z.string().min(1, "Please select your state"),
  gender: z.string().min(1, "Please select your gender"),
  lookingFor: z.string().min(1, "Please select what you&apos;re looking for"),
});

const Waitlist = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      dateOfBirth: "",
      city: "",
      state: "",
      gender: "",
      lookingFor: "",
    },
  });

  const { execute: submit } = useServerAction(WaitlistForm);

  const onSubmit = async (values: z.infer<typeof formSchema>) => {

    
    const formData = {
      email: values.email,
      name: values.fullName,
      dateOfBirth: values.dateOfBirth,
      city: values.city,
      state: values.state,
      gender: values.gender,
      lookingFor: values.lookingFor,
    };
    console.log(formData);
    const [result, error] = await submit(formData);

    if (error) {
      console.log(error);
      toast.error(error.message);
      return;
    }

    setIsSubmitted(true);

    toast.success(
      <div className="flex items-center gap-3">
        <div>
          <div className="font-bold text-slate-800">
            You&apos;re on the waitlist! 🎉
          </div>
          <div className="text-slate-600 text-sm">
            We&apos;ll notify you as soon as DesiBandhan launches. Thank you for
            joining!
          </div>
        </div>
      </div>,
      {
        duration: 5000,
        className:
          "bg-white border border-brand-primary/30 shadow-lg rounded-xl px-4 py-3",
        position: "top-center",
      }
    );
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center px-4">
        <div className="max-w-2xl mx-auto p-8">
          <div className="text-center animate-fade-in">
            <div className="w-20 h-20 bg-gradient-to-br from-brand-primary to-brand-secondary rounded-full flex items-center justify-center mx-auto mb-6 animate-bounce">
              <CheckCircle className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-3xl font-bold text-slate-800 mb-4">
              You&apos;re on the list! 🎉
            </h3>
            <p className="text-lg text-slate-600 mb-6">
              Thank you for joining DesiBandhan&apos;s exclusive waitlist. We&apos;ll keep
              you updated on our launch and send you early access when we&apos;re
              ready!
            </p>
            <div className="flex items-center justify-center gap-4 text-sm text-slate-500 mb-8">
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4" />
                <span>1000+ people waiting</span>
              </div>
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4" />
                <span>Early access guaranteed</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <header className="p-4 md:p-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2 md:space-x-3">
            <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-brand-primary to-brand-secondary rounded-2xl flex items-center justify-center shadow-lg">
              <Heart className="w-5 h-5 md:w-6 md:h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl md:text-2xl font-bold text-slate-800">
                DesiBandhan
              </h1>
              <p className="text-xs md:text-sm text-slate-600 -mt-1 hidden sm:block">
                Where connections begin
              </p>
            </div>
          </Link>

          <Link href="/">
            <Button
              variant="outline"
              className="flex items-center gap-2 text-sm"
            >
              <ArrowLeft className="w-4 h-4" />
              Back
            </Button>
          </Link>
        </div>
      </header>

      {/* Waitlist Form */}
      <div className="flex items-center justify-center min-h-[calc(100vh-100px)] px-4">
        <div className="max-w-2xl mx-auto p-6 md:p-8 animate-slide-up">
          <div className="text-center mb-8 animate-fade-in">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Heart className="w-8 h-8 text-brand-primary animate-pulse" />
              <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-brand-primary to-brand-secondary bg-clip-text text-transparent">
                Join the Waitlist
              </h2>
              <Heart className="w-8 h-8 text-brand-secondary animate-pulse" />
            </div>
            <p className="text-slate-600 text-lg">
              Be among the first to experience meaningful connections on
              DesiBandhan
            </p>
            <div className="inline-flex items-center gap-2 mt-4 px-4 py-2 bg-gradient-to-r from-brand-primary/10 to-brand-secondary/10 rounded-full">
              <Sparkles className="w-4 h-4 text-brand-primary" />
              <span className="text-sm font-medium text-slate-700">
                Early access + exclusive features
              </span>
            </div>
          </div>

          <div className="bg-white rounded-3xl shadow-xl border border-slate-100 p-8 animate-scale-in">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-6"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="fullName"
                    render={({ field }) => (
                      <FormItem className="space-y-2">
                        <FormLabel className="text-slate-700 font-medium">
                          Full Name
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Enter your full name"
                            className="h-12 rounded-xl border-slate-200 focus:border-brand-primary focus:ring-brand-primary/20 transition-all duration-300"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem className="space-y-2">
                        <FormLabel className="text-slate-700 font-medium">
                          Email Address
                        </FormLabel>
                        <FormControl>
                          <Input
                            type="email"
                            placeholder="your@email.com"
                            className="h-12 rounded-xl border-slate-200 focus:border-brand-primary focus:ring-brand-primary/20 transition-all duration-300"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="dateOfBirth"
                    render={({ field }) => (
                      <FormItem className="space-y-2">
                        <FormLabel className="text-slate-700 font-medium">Date of Birth</FormLabel>
                        <Popover>
                          <PopoverTrigger asChild>
                            <FormControl>
                              <Button
                                variant="outline"
                                className={cn(
                                  "w-full h-12 justify-start text-left font-normal rounded-xl border-slate-200",
                                  !field.value && "text-muted-foreground"
                                )}
                              >
                                <CalendarIcon className="mr-2 h-4 w-4" />
                                {field.value ? formatDate(new Date(field.value)) : "Pick a date"}
                              </Button>
                            </FormControl>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0">
                          <Calendar
                              mode="single"
                              selected={field.value ? new Date(field.value) : undefined}
                              onSelect={(date) => {
                                field.onChange(date ? formatDate(date) : ""); // formatted to dd/MM/yyyy
                              }}
                              className="rounded-lg border"
                            />
                          </PopoverContent>
                        </Popover>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="city"
                    render={({ field }) => (
                      <FormItem className="space-y-2">
                        <FormLabel className="text-slate-700 font-medium">
                          City
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Your city"
                            className="h-12 rounded-xl border-slate-200 focus:border-brand-primary focus:ring-brand-primary/20 transition-all duration-300"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="state"
                    render={({ field }) => (
                      <FormItem className="space-y-2">
                        <FormLabel className="text-slate-700 font-medium">
                          State
                        </FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger className="h-24 w-full rounded-xl border-slate-200 focus:border-brand-primary focus:ring-brand-primary/20">
                              <SelectValue placeholder="Select your state" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent className="max-h-96 overflow-y-auto">
                          {states.map((state) => {
                            const value = state.name.toLowerCase().replace(/\s+/g, '-');
                            return (
                              <SelectItem key={value} value={value}>
                                {state.name}
                              </SelectItem>
                            );
                          })}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="gender"
                    render={({ field }) => (
                      <FormItem className="space-y-2">
                        <FormLabel className="text-slate-700 font-medium">
                          Gender
                        </FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger className="h-24 w-full rounded-xl border-slate-200 focus:border-brand-primary focus:ring-brand-primary/20">
                              <SelectValue placeholder="Select gender" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="male">Male</SelectItem>
                            <SelectItem value="female">Female</SelectItem>
                            <SelectItem value="non-binary">
                              Non-binary
                            </SelectItem>
                            <SelectItem value="prefer-not-to-say">
                              Prefer not to say
                            </SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="lookingFor"
                  render={({ field }) => (
                    <FormItem className="space-y-2">
                      <FormLabel className="text-slate-700 font-medium">
                        What are you looking for?
                      </FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger className="h-24 w-full rounded-xl border-slate-200 focus:border-brand-primary focus:ring-brand-primary/20">
                            <SelectValue placeholder="Select your preference" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="serious-relationship">
                            Serious Relationship
                          </SelectItem>
                          <SelectItem value="casual-dating">
                            Casual Dating
                          </SelectItem>
                          <SelectItem value="friendship">Friendship</SelectItem>
                          <SelectItem value="marriage">Marriage</SelectItem>
                          <SelectItem value="networking">
                            Professional Networking
                          </SelectItem>
                          <SelectItem value="exploring">
                            Still Exploring
                          </SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button
                  type="submit"
                  className="w-full h-14 text-lg font-semibold bg-gradient-to-r from-brand-primary to-brand-secondary hover:from-brand-primary/90 hover:to-brand-secondary/90 text-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]"
                  disabled={form.formState.isSubmitting}
                >
                  {form.formState.isSubmitting ? (
                    <div className="flex items-center gap-2">
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Joining Waitlist...
                    </div>
                  ) : (
                    <div className="flex items-center gap-2">
                      <Heart className="w-5 h-5" />
                      Join the Waitlist
                      <Sparkles className="w-5 h-5" />
                    </div>
                  )}
                </Button>

                <div className="text-center">
                  <p className="text-sm text-slate-500">
                    By joining, you agree to receive updates about DesiBandhan&apos;s
                    launch.
                    <br />
                    We respect your privacy and won&apos;t spam you.
                  </p>
                </div>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Waitlist;
