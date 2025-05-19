"use client"

import { useState } from "react"
import { format } from "date-fns"
import { Calendar } from "@/components/ui/calendar"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { TimeSlotPicker } from "./time-slot-picker"
import { BookingForm } from "@/components/booking-form"
import { CheckCircle2 } from "lucide-react"

type BookingStep = "date" | "time" | "details" | "confirmation"

export function BookingSection() {
  const [step, setStep] = useState<BookingStep>("date")
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined)
  const [selectedTime, setSelectedTime] = useState<string | undefined>(undefined)
//   const [name, setName] = useState<string>("");
//   const [email, setEmail] = useState<string>("");
//   const [phone, setPhone] = useState<string>("");
//   const [notes, setNotes] = useState<string>("");
  const [bookingDetails, setBookingDetails] = useState<{
    name: string
    email: string
    phone: string
    notes: string
  } | null>(null)

  const handleDateSelect = (date: Date | undefined) => {
    setSelectedDate(date)
  }

  const handleTimeSelect = (time: string) => {
    setSelectedTime(time)
  }

//   const handleDetailsSubmit = (details: typeof bookingDetails) => {
//     setBookingDetails(details)
//     setStep("confirmation")
//   }

  const resetBooking = () => {
    setStep("date")
    setSelectedDate(undefined)
    setSelectedTime(undefined)
    setBookingDetails(null)
  }

  return (
    <Card className="w-full max-w-3xl mx-auto">
      <CardHeader>
        <CardTitle>Schedule Your Appointment</CardTitle>
        <CardDescription>Select a date and time that works for you, and we'll take care of the rest.</CardDescription>
      </CardHeader>
      <CardContent>
        {step === "date" && (
          <div className="space-y-4">
            <div className="flex justify-center">
              <Calendar
                mode="single"
                selected={selectedDate}
                onSelect={handleDateSelect}
                disabled={(date) => {
                  // Disable past dates and weekends in this example
                  return date < new Date(new Date().setHours(0, 0, 0, 0))
                }}
                // className="rounded-md border color-[#468fe1]"
                className="rounded-md border"
                classNames={{
                    day_selected: "bg-[#468fe1] hover:bg-[#468fe1] text-white focus:bg-[#468fe1]",
                }}
              />
            </div>
            <div className="flex justify-end">
              <Button className="bg-[#468fe1]" onClick={() => setStep("time")} disabled={!selectedDate}>
                Next
              </Button>
            </div>
          </div>
        )}

        {step === "time" && (
          <div className="space-y-4">
            <div className="flex items-center mb-4">
              <Button className="bg-[#468fe1] hover:bg-[#468fe1]/60 mr-2 hover:text-white text-white" variant="ghost" onClick={() => setStep("date")} >
                Back
              </Button>
              <p className="font-medium">
                Selected date: {selectedDate ? format(selectedDate, "EEEE, MMMM do, yyyy") : ""}
              </p>
            </div>

            <TimeSlotPicker date={selectedDate!} onSelectTime={handleTimeSelect} selectedTime={selectedTime} />

            <div className="flex justify-end">
              <Button className="bg-[#468fe1] hover:bg-[#468fe1]/60" onClick={() => setStep("details")} disabled={!selectedTime}>
                Next
              </Button>
            </div>
          </div>
        )}

        {step === "details" && (
          <div className="space-y-4">
            <div className="flex items-center mb-4">
              <Button className="bg-[#468fe1] hover:bg-[#468fe1]/60 mr-2 hover:text-white text-white" variant="ghost" onClick={() => setStep("time")}>
                Back
              </Button>
              <div>
                <p className="font-medium">
                  Selected date: {selectedDate ? format(selectedDate, "EEEE, MMMM do, yyyy") : ""}
                </p>
                <p className="font-medium">Selected time: {selectedTime}</p>
              </div>
            </div>

            <BookingForm selectedDate={selectedDate} selectedTime={selectedTime} />
          </div>
        )}

        {step === "confirmation" && (
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
                <span className="font-medium">Name:</span> {bookingDetails?.name}
              </p>
              <p>
                <span className="font-medium">Email:</span> {bookingDetails?.email}
              </p>
              <p>
                <span className="font-medium">Phone:</span> {bookingDetails?.phone}
              </p>
              {bookingDetails?.notes && (
                <p>
                  <span className="font-medium">Notes:</span> {bookingDetails.notes}
                </p>
              )}
            </div>
            <Button onClick={resetBooking} className="mt-4">
              Book Another Appointment
            </Button>
          </div>
        )}
      </CardContent>
      <CardFooter className="flex justify-between border-t p-4">
        <p className="text-sm text-muted-foreground">Need help? Contact us at support@example.com</p>
      </CardFooter>
    </Card>
  )
}
