"use client"

import { motion } from "framer-motion"
import { MessageCircle, HelpCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Accordion } from "@/components/ui/accordion"
import Link from "next/link"

const faqData = [
  {
    id: "1",
    question: "What services do you offer?",
    answer: "We offer a comprehensive range of services including digital marketing, brand strategy, content creation, social media management, SEO optimization, web development, and business consulting. Our team works closely with each client to develop customized solutions that meet their specific needs and goals."
  },
  {
    id: "2",
    question: "Where are you located?",
    answer: "Our headquarters is located at 123 Business Ave, Suite 100, in the heart of the business district. We also work with clients remotely and have team members across multiple time zones to provide flexible service options. We're always available for virtual meetings and consultations."
  },
  {
    id: "3",
    question: "How do I apply to work with ChosenX?",
    answer: "You can apply through our online application form by clicking the 'Apply Today!' button in our navigation menu. We'll need your contact information, resume, and a brief message about your goals. Our team reviews all applications within 2-3 business days and will reach out to discuss next steps."
  },
  {
    id: "4",
    question: "What is your pricing structure?",
    answer: "Our pricing varies depending on the scope and complexity of each project. We offer both project-based pricing and monthly retainer options. During our initial consultation, we'll discuss your budget and create a customized proposal that delivers maximum value within your investment range."
  },
  {
    id: "5",
    question: "How long does a typical project take?",
    answer: "Project timelines vary based on scope and complexity. Simple projects like website updates might take 1-2 weeks, while comprehensive marketing campaigns or brand overhauls can take 2-6 months. We provide detailed timelines during the planning phase and keep you updated throughout the process."
  },
  {
    id: "6",
    question: "Do you work with small businesses or only large corporations?",
    answer: "We work with businesses of all sizes, from startups and small local businesses to Fortune 500 companies. Our approach is scalable and we tailor our services to match your business size, budget, and growth stage. Every client receives the same level of attention and expertise."
  },
  {
    id: "7",
    question: "What makes ChosenX different from other agencies?",
    answer: "Our unique combination of strategic thinking, creative execution, and data-driven results sets us apart. We focus on building long-term partnerships rather than just completing projects. Our team's diverse expertise, proven track record, and commitment to innovation ensure that our clients stay ahead of the competition."
  },
  {
    id: "8",
    question: "Do you provide ongoing support after project completion?",
    answer: "Yes, we believe in long-term partnerships. We offer various ongoing support options including monthly retainers, maintenance packages, and performance monitoring. We're always available to help optimize your results, make updates, or expand your marketing efforts as your business grows."
  },
  {
    id: "9",
    question: "How do you measure success?",
    answer: "Success metrics are defined collaboratively with each client based on their specific goals. Common metrics include increased website traffic, lead generation, conversion rates, brand awareness, and ROI. We provide regular reports and analytics to track progress and continuously optimize performance."
  },
  {
    id: "10",
    question: "Can you help with both online and offline marketing?",
    answer: "Absolutely! While we specialize in digital marketing, we also have experience with traditional marketing channels including print advertising, event marketing, public relations, and direct mail campaigns. We can create integrated marketing strategies that leverage both online and offline touchpoints."
  }
]

export default function FAQPage() {
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
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-gold-400 to-teal-400 rounded-2xl mb-6">
            <HelpCircle className="h-8 w-8 text-navy-900" />
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h1>
          <p className="text-lg text-white/80 max-w-3xl mx-auto text-balance">
            Find answers to the most common questions about our services, process, 
            and how we can help your business grow.
          </p>
        </motion.div>
      </section>

      {/* FAQ Section */}
      <section className="container pb-16">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Accordion items={faqData} allowMultiple={false} />
          </motion.div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="bg-gradient-to-r from-gold-500/10 to-teal-500/10 border-y border-white/10">
        <div className="container section-padding">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-gold-400 to-teal-400 rounded-2xl mb-6">
              <MessageCircle className="h-8 w-8 text-navy-900" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Still Have Questions?
            </h2>
            <p className="text-lg text-white/80 mb-8 text-balance">
              Can&apos;t find the answer you&apos;re looking for? Our team is here to help. 
              Reach out to us and we&apos;ll get back to you as soon as possible.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button asChild size="lg">
                <Link href="/contact">Contact Us</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/apply">Apply Today</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="container section-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-2xl sm:text-3xl font-bold mb-8">
            Explore More
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:bg-white/10 transition-all">
              <h3 className="font-semibold text-white mb-2">Learn About Us</h3>
              <p className="text-white/70 text-sm mb-4">
                Discover our mission, values, and the team behind ChosenX.
              </p>
              <Button asChild variant="ghost" size="sm">
                <Link href="/about">About Us</Link>
              </Button>
            </div>
            <div className="p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:bg-white/10 transition-all">
              <h3 className="font-semibold text-white mb-2">Get In Touch</h3>
              <p className="text-white/70 text-sm mb-4">
                Ready to start your project? Contact us for a consultation.
              </p>
              <Button asChild variant="ghost" size="sm">
                <Link href="/contact">Contact</Link>
              </Button>
            </div>
            <div className="p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:bg-white/10 transition-all">
              <h3 className="font-semibold text-white mb-2">Join Our Team</h3>
              <p className="text-white/70 text-sm mb-4">
                Looking for a career opportunity? Apply to join ChosenX.
              </p>
              <Button asChild variant="ghost" size="sm">
                <Link href="/apply">Apply</Link>
              </Button>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  )
}
