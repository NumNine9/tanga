"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useState } from "react"
import { CheckCircle2 } from "lucide-react"
import { format } from "date-fns"
import emailjs from '@emailjs/browser';

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  phone: z.string().min(10, {
    message: "Please enter a valid phone number.",
  }),
  notes: z.string().optional(),
  selectedDate: z.string(), // Add these to your schema
  selectedTime: z.string(),
})

type BookingFormValues = z.infer<typeof formSchema>

interface BookingFormProps {
  selectedDate: Date | undefined,
  selectedTime: string | undefined
}

export function BookingForm({ selectedDate, selectedTime }: BookingFormProps) {
  const [confirm, setConfirm] = useState<boolean>(false)
  
  const form = useForm<BookingFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      notes: "",
      selectedDate: selectedDate ? format(selectedDate, "yyyy-MM-dd") : "",
      selectedTime: selectedTime || "",
    },
  })

  async function onSubmit(data: BookingFormValues) {
    try {
      await emailjs.send(
        'service_noq34nd', 
        'template_qd0w5ve', 
        {
          ...data,
          selectedDate: selectedDate ? format(selectedDate, "yyyy-MM-dd") : "",
          selectedTime: selectedTime || "",
        },
        {
          publicKey: '-Lli44EcuUTFDAsnV',
        }
      );
  
      setConfirm(true);
      setTimeout(() => setConfirm(false), 7000);
    } catch (error) {
      console.error('Failed to send email:', error);
    }
  }

  return (
    <>
      {confirm ? (
        <div className="flex flex-col items-center justify-center py-6 space-y-4">
          <div className="rounded-full bg-green-100 p-3">
            <CheckCircle2 className="h-12 w-12 text-green-600" />
          </div>
          <h3 className="text-xl font-semibold text-center">Booking Confirmed!</h3>
          <p className="text-center text-muted-foreground">
            Your appointment has been scheduled for {selectedDate ? format(selectedDate, "MMMM do, yyyy") : ""} at{" "}
            {selectedTime}.
          </p>
          <div className="bg-muted p-4 rounded-lg w-full max-w-md mt-4">
            <h4 className="font-medium mb-2">Booking Details</h4>
            <p>
              <span className="font-medium">Name:</span> {form.getValues("name")}
            </p>
            <p>
              <span className="font-medium">Email:</span> {form.getValues("email")}
            </p>
            <p>
              <span className="font-medium">Phone:</span> {form.getValues("phone")}
            </p>
            {form.getValues("notes") && (
              <p>
                <span className="font-medium">Notes:</span> {form.getValues("notes")}
              </p>
            )}
          </div>
        </div>
      ) : (
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            {/* Add hidden fields for date and time */}
            <input type="hidden" {...form.register("selectedDate")} />
            <input type="hidden" {...form.register("selectedTime")} />

            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Full Name</FormLabel>
                  <FormControl>
                    <Input placeholder="John Doe" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input type="email" placeholder="john@example.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Phone Number</FormLabel>
                    <FormControl>
                      <Input placeholder="(123) 456-7890" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="notes"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Additional Notes</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Any special requests or information we should know about?"
                      className="resize-none"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>Optional: Include any special requirements or questions.</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit" className="w-full bg-[#468fe1] hover:bg-[#468fe1]/60">
              Confirm Booking
            </Button>
          </form>
        </Form>
      )}
    </>
  )
}