"use client"

import { useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Loader2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { toast } from "@/hooks/use-toast"

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Numele trebuie sa contina minim 2 caractere.",
  }),
  email: z.string().email({
    message: "Introduceti o adresa de email valida.",
  }),
  phone: z.string().min(10, {
    message: "Introduceti un numar de telefon valid.",
  }),
  subject: z.string().min(1, {
    message: "Alegeti o categorie.",
  }),
  message: z.string().min(10, {
    message: "Mesajul trebuie sa contina minim 10 caractere.",
  }),
})

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      subject: "",
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
        title: "Am primit mesajul dumneavoastra",
        description: "Multumim pentru mesaj! Va vom contacta in curand.",
      })

      // Reset form
      form.reset()
    } catch (error) {
      toast({
        title: "Ceva nu a mers bine",
        description: "Nu am reusit sa primim mesajul dumneavoastra. Incercati din nou mai tarziu.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="name"
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

        <div className="grid gap-4 sm:grid-cols-2">
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
                <FormLabel>Telefon</FormLabel>
                <FormControl>
                  <Input placeholder="+40 743 123 456" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="subject"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Subiect</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a subject" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="general">Intrebari generale</SelectItem>
                  <SelectItem value="appointment">Intrebari despre programari</SelectItem>
                  <SelectItem value="services">Servicii</SelectItem>
                  <SelectItem value="feedback">Sugestii si reclamatii</SelectItem>
                  <SelectItem value="other">Altele</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Mesaj</FormLabel>
              <FormControl>
                <Textarea placeholder="Cum va putem ajuta?" className="min-h-[120px]" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" className="w-full" disabled={isSubmitting}>
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Se trimite mesajul...
            </>
          ) : (
            "Trimite mesajul"
          )}
        </Button>
      </form>
    </Form>
  )
}

