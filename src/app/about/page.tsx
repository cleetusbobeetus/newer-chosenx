"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Linkedin, Twitter } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const values = [
  {
    title: "Innovation",
    description: "We constantly push boundaries and embrace new technologies to deliver cutting-edge solutions.",
    icon: "🚀",
  },
  {
    title: "Excellence",
    description: "We maintain the highest standards in everything we do, from strategy to execution.",
    icon: "⭐",
  },
  {
    title: "Integrity",
    description: "We build trust through transparency, honesty, and ethical business practices.",
    icon: "🤝",
  },
  {
    title: "Collaboration",
    description: "We believe in the power of teamwork and partnership to achieve extraordinary results.",
    icon: "👥",
  },
]

const teamMembers = [
  {
    id: "1",
    name: "Sarah Johnson",
    role: "CEO & Founder",
    bio: "With over 15 years of experience in marketing and business strategy, Sarah leads ChosenX with vision and passion.",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face",
    linkedin: "#",
    twitter: "#",
  },
  {
    id: "2",
    name: "Michael Chen",
    role: "CTO",
    bio: "Michael brings deep technical expertise and innovation to drive our technology initiatives and digital transformation.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
    linkedin: "#",
    twitter: "#",
  },
  {
    id: "3",
    name: "Emily Rodriguez",
    role: "Head of Marketing",
    bio: "Emily's creative vision and strategic thinking have helped hundreds of brands tell their stories effectively.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
    linkedin: "#",
    twitter: "#",
  },
  {
    id: "4",
    name: "David Thompson",
    role: "Senior Consultant",
    bio: "David's analytical approach and industry knowledge help clients navigate complex business challenges.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
    linkedin: "#",
    twitter: "#",
  },
]

export default function AboutPage() {
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
            About <span className="gradient-text">ChosenX</span>
          </h1>
          <p className="text-lg text-white/80 max-w-3xl mx-auto text-balance">
            We&apos;re a team of passionate professionals dedicated to helping businesses 
            and individuals achieve their goals through innovative marketing solutions 
            and strategic consulting.
          </p>
        </motion.div>
      </section>

      {/* Mission Section */}
      <section className="bg-white/5 backdrop-blur-sm border-y border-white/10">
        <div className="container section-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                Our <span className="gradient-text">Mission</span>
              </h2>
              <p className="text-white/80 text-lg mb-6">
                At ChosenX, we believe that every business has the potential to achieve 
                greatness. Our mission is to unlock that potential by providing innovative 
                marketing solutions, strategic consulting, and exceptional service that 
                drives real, measurable results.
              </p>
              <p className="text-white/80">
                We partner with our clients to understand their unique challenges and 
                opportunities, then develop customized strategies that align with their 
                goals and values. Our success is measured by our clients&apos; success.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-gold-400/20 to-teal-400/20 p-1">
                <div className="w-full h-full rounded-2xl bg-navy-900 flex items-center justify-center">
                  <div className="text-6xl">🎯</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="container section-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Our <span className="gradient-text">Values</span>
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto text-balance">
            These core values guide everything we do and shape how we work with 
            our clients and each other.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full text-center hover:scale-105 transition-transform duration-300">
                <CardHeader>
                  <div className="text-4xl mb-4">{value.icon}</div>
                  <CardTitle className="text-xl">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-white/70">
                    {value.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Story Section */}
      <section className="bg-gradient-to-r from-gold-500/10 to-teal-500/10 border-y border-white/10">
        <div className="container section-padding">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold mb-8">
                Our <span className="gradient-text">Story</span>
              </h2>
              <div className="text-white/80 space-y-6 text-lg leading-relaxed">
                <p>
                  ChosenX was founded in 2014 with a simple yet powerful vision: to help 
                  businesses of all sizes achieve their full potential through innovative 
                  marketing and strategic consulting.
                </p>
                <p>
                  What started as a small team of passionate marketers has grown into a 
                  full-service agency with over 50 talented professionals. We&apos;ve had the 
                  privilege of working with startups, Fortune 500 companies, and everything 
                  in between.
                </p>
                <p>
                  Today, we continue to push boundaries, embrace new technologies, and 
                  deliver exceptional results for our clients. Our success is built on 
                  strong relationships, innovative thinking, and an unwavering commitment 
                  to excellence.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Gallery Section */}
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
              Our <span className="gradient-text">Team</span> in Action
            </h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto text-balance">
              See our talented team collaborating, celebrating achievements, and 
              delivering exceptional results for our clients.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-gold-400/20 to-teal-400/20 p-1">
                <div className="w-full h-full rounded-2xl bg-navy-800 flex items-center justify-center">
                  <div className="text-center text-white/60">
                    <div className="text-4xl mb-2">📸</div>
                    <p className="text-sm">Team Photo 1</p>
                    <p className="text-xs mt-1">Replace with your team image</p>
                  </div>
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="font-semibold">Team Collaboration</h3>
                  <p className="text-sm text-white/80">Working together towards success</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-teal-400/20 to-gold-400/20 p-1">
                <div className="w-full h-full rounded-2xl bg-navy-800 flex items-center justify-center">
                  <div className="text-center text-white/60">
                    <div className="text-4xl mb-2">🏆</div>
                    <p className="text-sm">Team Photo 2</p>
                    <p className="text-xs mt-1">Replace with your team image</p>
                  </div>
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="font-semibold">Celebrating Success</h3>
                  <p className="text-sm text-white/80">Recognizing achievements and milestones</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Members Section */}
      <section className="container section-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Meet Our <span className="gradient-text">Leaders</span>
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto text-balance">
            Our diverse team of experts brings together years of experience across 
            multiple industries and disciplines.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:scale-105 transition-transform duration-300">
                <CardHeader className="text-center">
                  <div className="relative w-24 h-24 mx-auto mb-4">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="rounded-2xl object-cover"
                    />
                  </div>
                  <CardTitle className="text-xl">{member.name}</CardTitle>
                  <CardDescription className="text-gold-400 font-medium">
                    {member.role}
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-white/70 text-sm mb-4">{member.bio}</p>
                  <div className="flex justify-center space-x-3">
                    <a
                      href={member.linkedin}
                      className="text-white/60 hover:text-gold-400 transition-colors"
                      aria-label={`${member.name} LinkedIn`}
                    >
                      <Linkedin className="h-4 w-4" />
                    </a>
                    <a
                      href={member.twitter}
                      className="text-white/60 hover:text-gold-400 transition-colors"
                      aria-label={`${member.name} Twitter`}
                    >
                      <Twitter className="h-4 w-4" />
                    </a>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  )
}
