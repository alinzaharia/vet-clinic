"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { format } from "date-fns"
import { CalendarIcon, Loader2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { toast } from "@/hooks/use-toast"
import { cn } from "@/lib/utils"

const formSchema = z.object({
  ownerName: z.string().min(2, {
    message: "Numele trebuie sa contina minim 2 caractere.",
  }),
  email: z.string().email({
    message: "Introduceti o adresa de email valida.",
  }),
  phone: z.string().min(10, {
    message: "Introduceti un numar de telefon valid.",
  }),
  petName: z.string().min(1, {
    message: "Numele animalului este necesar.",
  }),
  petType: z.string().min(1, {
    message: "Alegeti specia",
  }),
  petAge: z.string().min(1, {
    message: "Varsta animalului este necesara.",
  }),
  appointmentDate: z.date({
    required_error: "Alegeti o data",
  }),
  appointmentType: z.string({
    required_error: "Alegeti tipul programarii",
  }),
  message: z.string().optional(),
})

export default function BookingForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const router = useRouter()

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      ownerName: "",
      email: "",
      phone: "",
      petName: "",
      petType: "",
      petAge: "",
      appointmentType: "",
      message: "",
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true)

    try {
      // In a real application, you would send this data to your backend
      // For this example, we'll simulate a successful submission
      console.log(values)

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500))

      toast({
        title: "Cererea dumneavoastra a fost primita",
        description: "Va vom contacta in curand sa confirmam programarea.",
      })

      // Reset form
      form.reset()

      // Redirect to confirmation page
      router.push("/booking/confirmation")
    } catch (error) {
      toast({
        title: "Ceva nu a mers",
        description: "NU am reusit sa primim formularul dumneavoastra. Incercati din nou mai tarziu.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <div className="grid gap-4 sm:grid-cols-2">
          <FormField
            control={form.control}
            name="ownerName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nume</FormLabel>
                <FormControl>
                  <Input placeholder="Stapanul lui Grivei" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input type="email" placeholder="you@example.com" {...field} />
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
                  <Input placeholder="+40 743 123 456" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="petName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Numele animalului</FormLabel>
                <FormControl>
                  <Input placeholder="Grivei" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="petType"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Specie</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Selectati specia animalutului dumneavoastra" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="dog">Caine</SelectItem>
                    <SelectItem value="cat">Pisica</SelectItem>
                    <SelectItem value="bird">Pasare</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="petAge"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Varsta animalului</FormLabel>
                <FormControl>
                  <Input placeholder="2 ani" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="appointmentDate"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel>Data</FormLabel>
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant={"outline"}
                        className={cn("w-full pl-3 text-left font-normal", !field.value && "text-muted-foreground")}
                      >
                        {field.value ? format(field.value, "PPP") : <span>Alegeti o data</span>}
                        <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={field.value}
                      onSelect={field.onChange}
                      disabled={
                        (date) =>
                          date < new Date() ||
                          date.getDay() === 0 || // Sunday
                          date.getDay() === 6 // Saturday
                      }
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="appointmentType"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Tipul programarii</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Selectati scopul vizitei" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="consult">Consult</SelectItem>
                    <SelectItem value="control">Control periodic</SelectItem>
                    <SelectItem value="vaccination">Vaccinare</SelectItem>
                    <SelectItem value="illness">Deparazitare</SelectItem>
                    <SelectItem value="treatment">Tratament</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Informatii aditionale</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Adaugati orice informatii extre despre starea pacientului."
                  className="min-h-[120px]"
                  {...field}
                />
              </FormControl>
              <FormDescription>Aici puteti adauga orice simptome, ingrijorari sau cerinte speciale.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" className="w-full" disabled={isSubmitting}>
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Se trimite
            </>
          ) : (
            "Cere o programare"
          )}
        </Button>
      </form>
    </Form>
  )
}

