"use client"

import { useEffect, useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Loader2 } from "lucide-react"
import ReCAPTCHA from "react-google-recaptcha"

import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { toast } from "@/hooks/use-toast"
import emailjs from "emailjs-com"

// Validation schema
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
  const [captchaToken, setCaptchaToken] = useState<string | null>(null)

  // Initialize EmailJS
  useEffect(() => {
    emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "") // Use the public key from the environment variable
  }, [])

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
    // console.log("Form submitted with values:", values) // Debug log

    if (!captchaToken) {
      // console.log("Captcha token is missing") // Debug log
      toast({
        title: "Captcha invalid",
        description: "Va rugam sa completati captcha pentru a trimite formularul.",
        variant: "destructive",
      })
      return
    }

    setIsSubmitting(true)
    // console.log("Submitting form...") // Debug log

    try {
      const response = await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "", // Use the service ID from the environment variable
        process.env.NEXT_PUBLIC_EMAILJS_CONTACT_TEMPLATE_ID || "", // Use the template ID from the environment variable
        {
          name: values.name,
          email: values.email,
          phone: values.phone,
          subject: values.subject,
          message: values.message,
        }
      )

      // console.log("EmailJS response:", response) // Debug log

      if (response.status === 200) {
        toast({
          title: "Am primit mesajul dumneavoastra",
          description: "Multumim pentru mesaj! Va vom contacta in curand.",
        })
        form.reset()
        setCaptchaToken(null) // Reset the captcha token
      } else {
        throw new Error("Email sending failed")
      }
    } catch (error) {
      // console.error("Error sending email:", error) // Debug log
      toast({
        title: "Ceva nu a mers bine",
        description: "Nu am reusit sa trimitem mesajul dumneavoastra. Incercati din nou mai tarziu.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
      // console.log("Form submission completed") // Debug log
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

        {/* Google reCAPTCHA */}
        <div className="flex justify-center">
          <ReCAPTCHA
            sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || ""} // Use the site key from the environment variable
            onChange={(token: string | null) => {
              // console.log("Captcha token received:", token) // Debug log
              setCaptchaToken(token)
            }}
            onExpired={() => {
              // console.log("Captcha token expired") // Debug log
              setCaptchaToken(null)
            }}
          />
        </div>

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

