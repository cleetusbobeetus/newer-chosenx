"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Upload, Send, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { validateEmail } from "@/lib/utils"

interface FormData {
  name: string
  email: string
  resume: File | null
  message: string
}

interface FormErrors {
  name?: string
  email?: string
  resume?: string
  message?: string
}

export default function ApplyPage() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    resume: null,
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

    if (!formData.resume) {
      newErrors.resume = "Resume is required"
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
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null
    setFormData({ ...formData, resume: file })
    if (file && errors.resume) {
      setErrors({ ...errors, resume: undefined })
    }
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

  if (isSubmitted) {
    return (
      <div className="pt-16 min-h-screen flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Card className="max-w-md mx-4">
            <CardHeader className="text-center">
              <div className="mx-auto mb-4 w-16 h-16 bg-gradient-to-r from-gold-400 to-teal-400 rounded-full flex items-center justify-center">
                <CheckCircle className="h-8 w-8 text-navy-900" />
              </div>
              <CardTitle className="text-2xl">Application Submitted!</CardTitle>
              <CardDescription>
                Thank you for your interest in joining ChosenX. We&apos;ll review your application and get back to you within 2-3 business days.
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <Button asChild className="w-full">
                <a href="/">Return Home</a>
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="pt-16">
      <section className="container section-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto"
        >
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">
              Apply to Join <span className="gradient-text">ChosenX</span>
            </h1>
            <p className="text-lg text-white/80 text-balance">
              Ready to take the next step in your career? We&apos;re looking for talented 
              individuals to join our growing team.
            </p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Application Form</CardTitle>
              <CardDescription>
                Please fill out all fields below. We&apos;ll review your application and get back to you soon.
              </CardDescription>
            </CardHeader>
            <CardContent>
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

                {/* Resume Upload */}
                <div>
                  <label htmlFor="resume" className="block text-sm font-medium text-white mb-2">
                    Resume *
                  </label>
                  <div className="relative">
                    <input
                      type="file"
                      id="resume"
                      name="resume"
                      onChange={handleFileChange}
                      accept=".pdf,.doc,.docx"
                      className="hidden"
                    />
                    <label
                      htmlFor="resume"
                      className="flex items-center justify-center w-full px-4 py-6 bg-white/5 border-2 border-dashed border-white/20 rounded-xl text-white/70 hover:border-gold-400 hover:text-gold-400 transition-all cursor-pointer"
                    >
                      <Upload className="h-6 w-6 mr-2" />
                      {formData.resume ? formData.resume.name : "Click to upload your resume"}
                    </label>
                  </div>
                  <p className="mt-1 text-xs text-white/50">
                    Accepted formats: PDF, DOC, DOCX (Max size: 5MB)
                  </p>
                  {errors.resume && (
                    <p className="mt-2 text-sm text-red-400">{errors.resume}</p>
                  )}
                </div>

                {/* Message Field */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-white mb-2">
                    Cover Letter / Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-gold-400 focus:border-transparent transition-all resize-none"
                    placeholder="Tell us about yourself, your experience, and why you'd like to join ChosenX..."
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
                      Submitting...
                    </>
                  ) : (
                    <>
                      Submit Application
                      <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </motion.div>
      </section>
    </div>
  )
}
