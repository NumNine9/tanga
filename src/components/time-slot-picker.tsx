"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"

interface TimeSlotPickerProps {
  date: Date
  onSelectTime: (time: string) => void
  selectedTime?: string
}

// This would typically come from an API based on the selected date
const generateTimeSlots = (date: Date) => {
  // Example time slots - in a real app, these would be fetched from a backend
  const slots = []
  const startHour = 9 // 9 AM
  const endHour = 17 // 5 PM

  // Generate slots every 30 minutes
  for (let hour = startHour; hour < endHour; hour++) {
    for (const minute of [0, 30]) {
      const time = `${hour.toString().padStart(2, "0")}:${minute.toString().padStart(2, "0")}`

      // Randomly mark some slots as unavailable for demo purposes
      const isAvailable = Math.random() > 0.3

      slots.push({
        time,
        isAvailable,
      })
    }
  }

  return slots
}

export function TimeSlotPicker({ date, onSelectTime, selectedTime }: TimeSlotPickerProps) {
  const [timeSlots, setTimeSlots] = useState<Array<{ time: string; isAvailable: boolean }>>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulate API call to get available time slots
    setLoading(true)
    setTimeout(() => {
      setTimeSlots(generateTimeSlots(date))
      setLoading(false)
    }, 500)
  }, [date])

  if (loading) {
    return <div className="flex justify-center py-8">Loading available time slots...</div>
  }

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
      {timeSlots.map((slot) => (
        <Button
          key={slot.time}
          variant={selectedTime === slot.time ? "default" : "outline"}
          disabled={!slot.isAvailable}
          onClick={() => slot.isAvailable && onSelectTime(slot.time)}
          className="h-12"
        >
          {slot.time}
        </Button>
      ))}
      {timeSlots.length === 0 && (
        <p className="col-span-full text-center py-4 text-muted-foreground">No time slots available for this date.</p>
      )}
    </div>
  )
}
