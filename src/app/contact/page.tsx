"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { validateEmail } from "@/lib/utils"

interface ContactFormData {
  name: string
  email: string
  message: string
}

interface FormErrors {
  name?: string
  email?: string
  message?: string
}

const contactInfo = [
  {
    icon: MapPin,
    title: "Address",
    content: "123 Business Ave, Suite 100\nCity, State 12345",
    link: "https://maps.google.com/?q=123+Business+Ave+Suite+100+City+State+12345"
  },
  {
    icon: Phone,
    title: "Phone",
    content: "(555) 123-4567",
    link: "tel:+15551234567"
  },
  {
    icon: Mail,
    title: "Email",
    content: "contact@chosenx.com",
    link: "mailto:contact@chosenx.com"
  },
  {
    icon: Clock,
    title: "Business Hours",
    content: "Mon - Fri: 9:00 AM - 6:00 PM\nSat: 10:00 AM - 2:00 PM",
    link: null
  }
]

export default function ContactPage() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    message: "",
  })
  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}

    if (!formData.name.trim()) {
      newErrors.name = "Name is required"
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Please enter a valid email address"
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required"
    } else if (formData.message.length < 10) {
      newErrors.message = "Message must be at least 10 characters long"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsSubmitting(false)
    setIsSubmitted(true)
    
    // Reset form after successful submission
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({ name: "", email: "", message: "" })
    }, 3000)
  }

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
    if (errors[name as keyof FormErrors]) {
      setErrors({ ...errors, [name]: undefined })
    }
  }

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="container section-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            Get In <span className="gradient-text">Touch</span>
          </h1>
          <p className="text-lg text-white/80 max-w-3xl mx-auto text-balance">
            Ready to start your next project or have questions about our services? 
            We&apos;d love to hear from you. Reach out and let&apos;s discuss how we can help.
          </p>
        </motion.div>
      </section>

      {/* Contact Info Cards */}
      <section className="container pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactInfo.map((info, index) => {
            const Icon = info.icon
            const content = info.content.split('\n')
            
            return (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full text-center hover:scale-105 transition-transform duration-300">
                  <CardHeader>
                    <div className="mx-auto mb-4 w-12 h-12 bg-gradient-to-r from-gold-400 to-teal-400 rounded-2xl flex items-center justify-center">
                      <Icon className="h-6 w-6 text-navy-900" />
                    </div>
                    <CardTitle className="text-lg">{info.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-1">
                      {content.map((line, lineIndex) => (
                        <p key={lineIndex} className="text-white/70 text-sm">
                          {info.link && lineIndex === 0 ? (
                            <a 
                              href={info.link} 
                              className="hover:text-gold-400 transition-colors"
                              target={info.link.startsWith('http') ? '_blank' : undefined}
                              rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                            >
                              {line}
                            </a>
                          ) : (
                            line
                          )}
                        </p>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card>
              <CardHeader>
                <CardTitle>Send us a Message</CardTitle>
                <CardDescription>
                  Fill out the form below and we&apos;ll get back to you within 24 hours.
                </CardDescription>
              </CardHeader>
              <CardContent>
                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-8"
                  >
                    <div className="mx-auto mb-4 w-16 h-16 bg-gradient-to-r from-gold-400 to-teal-400 rounded-full flex items-center justify-center">
                      <CheckCircle className="h-8 w-8 text-navy-900" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">Message Sent!</h3>
                    <p className="text-white/70">
                      Thank you for your message. We&apos;ll get back to you soon.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Name Field */}
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-white mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-gold-400 focus:border-transparent transition-all"
                        placeholder="Enter your full name"
                      />
                      {errors.name && (
                        <p className="mt-2 text-sm text-red-400">{errors.name}</p>
                      )}
                    </div>

                    {/* Email Field */}
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-gold-400 focus:border-transparent transition-all"
                        placeholder="Enter your email address"
                      />
                      {errors.email && (
                        <p className="mt-2 text-sm text-red-400">{errors.email}</p>
                      )}
                    </div>

                    {/* Message Field */}
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-white mb-2">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={6}
                        value={formData.message}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-gold-400 focus:border-transparent transition-all resize-none"
                        placeholder="Tell us about your project or ask us a question..."
                      />
                      {errors.message && (
                        <p className="mt-2 text-sm text-red-400">{errors.message}</p>
                      )}
                    </div>

                    {/* Submit Button */}
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full group"
                      size="lg"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-4 w-4 border-2 border-navy-900 border-t-transparent mr-2" />
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message
                          <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </>
                      )}
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </motion.div>

          {/* Map Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="h-full">
              <CardHeader>
                <CardTitle>Find Us</CardTitle>
                <CardDescription>
                  Visit our office or schedule a virtual meeting.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="aspect-video bg-white/5 rounded-xl border border-white/10 flex items-center justify-center mb-6">
                  {/* Placeholder for Google Maps embed */}
                  <div className="text-center">
                    <MapPin className="h-12 w-12 text-gold-400 mx-auto mb-4" />
                    <p className="text-white/70 text-sm">
                      Interactive map would be embedded here
                    </p>
                    <p className="text-white/50 text-xs mt-2">
                      Replace with actual Google Maps embed
                    </p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-white mb-2">Office Address</h4>
                    <p className="text-white/70 text-sm">
                      123 Business Ave, Suite 100<br />
                      City, State 12345
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-white mb-2">Parking</h4>
                    <p className="text-white/70 text-sm">
                      Free parking available in the building garage. 
                      Visitor passes can be obtained at the front desk.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-medium text-white mb-2">Public Transport</h4>
                    <p className="text-white/70 text-sm">
                      Conveniently located near Metro Station with easy 
                      access to all major bus routes.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
