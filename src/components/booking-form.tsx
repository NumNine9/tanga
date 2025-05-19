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
})

type BookingFormValues = z.infer<typeof formSchema>

interface BookingFormProps {
//   onSubmit: (values: BookingFormValues) => void
  selectedDate: Date | undefined,
  selectedTime: string | undefined
}

export function BookingForm({ selectedDate, selectedTime }: BookingFormProps) {
    const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [notes, setNotes] = useState<string>("");
    const [confirm , setConfirm] = useState<boolean>(false)
  const form = useForm<BookingFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      notes: "",
    },
  })
  const handleSubmit =async(e: React.FormEvent)=>{
    e.preventDefault()
    console.log({name, selectedDate, selectedTime, email, phone, notes})
    setConfirm(true)
    setTimeout(()=>setConfirm(false), 7000)
  }
  return (
    <>
    {confirm ? 

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
        <span className="font-medium">Name:</span> {name}
      </p>
      <p>
        <span className="font-medium">Email:</span> {email}
      </p>
      <p>
        <span className="font-medium">Phone:</span> {phone}
      </p>
      {notes && (
        <p>
          <span className="font-medium">Notes:</span> {notes}
        </p>
      )}
    </div>
    {/* <Button onClick={resetBooking} className="mt-4">
      Book Another Appointment
    </Button> */}
    </div>    

    : <Form {...form}>
      <form onSubmit={handleSubmit} className="space-y-6">
        <FormField
          control={form.control}
          name="name"
          render={() => (
            <FormItem>
              <FormLabel>Full Name</FormLabel>
              <FormControl>
                <Input placeholder="John Doe" onChange={(e) => setName( e.target.value)} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="email"
            render={() => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input type="email" placeholder="john@example.com" onChange={(e) => setEmail(e.target.value)} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="phone"
            render={() => (
              <FormItem>
                <FormLabel>Phone Number</FormLabel>
                <FormControl>
                  <Input placeholder="(123) 456-7890" onChange={(e) => setPhone(e.target.value)} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="notes"
          render={() => (
            <FormItem>
              <FormLabel>Additional Notes</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Any special requests or information we should know about?"
                  className="resize-none"
                  onChange={(e) => setNotes(e.target.value)}
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
    </Form>}
    </>
    
  )
}
