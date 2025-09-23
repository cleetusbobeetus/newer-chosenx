"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight, Star, Users, Target, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const features = [
  {
    icon: Target,
    title: "Strategic Focus",
    description: "Targeted solutions that align with your business goals and drive measurable results.",
  },
  {
    icon: Users,
    title: "Expert Team",
    description: "Seasoned professionals with years of experience across diverse industries.",
  },
  {
    icon: Zap,
    title: "Fast Delivery",
    description: "Rapid implementation without compromising on quality or attention to detail.",
  },
  {
    icon: Star,
    title: "Proven Results",
    description: "Track record of success with clients ranging from startups to Fortune 500 companies.",
  },
]

const stats = [
  { number: "500+", label: "Successful Projects" },
  { number: "98%", label: "Client Satisfaction" },
  { number: "50+", label: "Team Members" },
  { number: "10+", label: "Years Experience" },
]

export default function HomePage() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative overflow-hidden hero-gradient min-h-[80vh] flex items-center">
        <div className="container section-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-balance mb-6">
                Elevate Your Business to{" "}
                <span className="gradient-text">New Heights</span>
              </h1>
              <p className="text-lg sm:text-xl text-white/80 mb-8 text-balance">
                We empower businesses and individuals to reach their full potential through 
                innovative marketing solutions, strategic consulting, and exceptional service delivery.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="group">
                  <Link href="/apply">
                    Apply Today!
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/about">Learn More</Link>
                </Button>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="relative aspect-square rounded-2xl bg-gradient-to-br from-gold-400/20 to-teal-400/20 p-1">
                <div className="w-full h-full rounded-2xl bg-navy-800/50 backdrop-blur-sm flex items-center justify-center">
                  <div className="text-center text-white/60">
                    <div className="text-6xl mb-4">🚀</div>
                    <p className="text-lg font-semibold">Your Success Story</p>
                    <p className="text-sm mt-2">Add your hero image here</p>
                  </div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gold-400/20 rounded-full blur-xl animate-pulse" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-teal-400/20 rounded-full blur-xl animate-pulse delay-1000" />
            </motion.div>
          </div>
        </div>

        {/* Background Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-gold-400/10 rounded-full blur-xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-teal-400/10 rounded-full blur-xl animate-pulse delay-1000" />
      </section>

      {/* Stats Section */}
      <section className="bg-white/5 backdrop-blur-sm border-y border-white/10">
        <div className="container py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {stats.map((stat, index) => (
              <div key={stat.label} className="text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="text-3xl lg:text-4xl font-bold gradient-text mb-2">
                    {stat.number}
                  </div>
                  <div className="text-white/70 text-sm lg:text-base">
                    {stat.label}
                  </div>
                </motion.div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container section-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Why Choose <span className="gradient-text">ChosenX</span>?
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto text-balance">
            We combine industry expertise with innovative approaches to deliver 
            exceptional results for our clients.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:scale-105 transition-transform duration-300">
                  <CardHeader className="text-center">
                    <div className="mx-auto mb-4 w-12 h-12 bg-gradient-to-r from-gold-400 to-teal-400 rounded-2xl flex items-center justify-center">
                      <Icon className="h-6 w-6 text-navy-900" />
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <CardDescription className="text-white/70">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="bg-white/5 backdrop-blur-sm border-y border-white/10">
        <div className="container section-padding">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              <span className="gradient-text">Success</span> Stories
            </h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto text-balance">
              See how we've helped businesses achieve remarkable results and growth.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:scale-105 transition-transform duration-300">
                <CardHeader className="text-center">
                  <div className="relative w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-gold-400/20 to-teal-400/20 flex items-center justify-center">
                    <div className="text-2xl">💼</div>
                  </div>
                  <CardTitle className="text-lg">Enterprise Growth</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="text-white/70 mb-4">
                    "ChosenX helped us scale our operations and increase revenue by 300% in just 18 months."
                  </CardDescription>
                  <p className="text-gold-400 text-sm font-medium">- Fortune 500 Client</p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:scale-105 transition-transform duration-300">
                <CardHeader className="text-center">
                  <div className="relative w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-teal-400/20 to-gold-400/20 flex items-center justify-center">
                    <div className="text-2xl">🚀</div>
                  </div>
                  <CardTitle className="text-lg">Startup Success</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="text-white/70 mb-4">
                    "From idea to market leader - ChosenX guided us through every step of our journey."
                  </CardDescription>
                  <p className="text-gold-400 text-sm font-medium">- Tech Startup CEO</p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:scale-105 transition-transform duration-300">
                <CardHeader className="text-center">
                  <div className="relative w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-gold-400/20 to-teal-400/20 flex items-center justify-center">
                    <div className="text-2xl">📈</div>
                  </div>
                  <CardTitle className="text-lg">Digital Transformation</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="text-white/70 mb-4">
                    "Our digital presence transformed completely, leading to 250% increase in online engagement."
                  </CardDescription>
                  <p className="text-gold-400 text-sm font-medium">- Retail Chain Owner</p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-gold-500/10 to-teal-500/10 border-y border-white/10">
        <div className="container section-padding">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8 text-balance">
              Join hundreds of satisfied clients who have transformed their businesses 
              with our innovative solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button asChild size="lg" className="group">
                <Link href="/apply">
                  Apply Now
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button asChild variant="ghost" size="lg">
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
