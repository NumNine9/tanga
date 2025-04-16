"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Code, Globe, Layers, MessageSquare, Rocket } from "lucide-react"
import logo from "../../public/logo-color.svg"
import navlogo from "../../public/logo-no-background.svg"
import nologo from "../../public/logo-no-background.svg"
import ccIcon from "../../public/CCicon.png"
import clIcon from "../../public/commit-log.jpg"
import { useState } from "react"


export default function LandingPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    alert("Message sent to TS!")
    setEmail("")
    setMessage("")
    setName("")
  }
  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <header className="sticky top-0 z-40 w-full border-b bg-gray-900 text-gray-300 ">
        <div className="flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
          <div className="flex gap-2 items-center text-xl font-bold">
            <Image src={navlogo} alt="" className="h-50 w-40 text-purple-600" />
            {/* <span>Tanga Systems</span> */}
          </div>
          <div className="flex flex-1 items-center justify-end space-x-4">
            <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
              <Link href="#services" className="transition-colors hover:text-[#468fe1]">
                Services
              </Link>
              <Link href="#work" className="transition-colors hover:text-[#468fe1]">
                Our Work
              </Link>
              <Link href="#process" className="transition-colors hover:text-[#468fe1]">
                Process
              </Link>
              <Link href="#testimonials" className="transition-colors hover:text-[#468fe1]">
                Testimonials
              </Link>
              <Link href="#team" className="transition-colors hover:text-[#468fe1]">
                Team
              </Link>
              <Link href="#contact" className="transition-colors hover:text-[#468fe1]">
                Contact
              </Link>
            </nav>
            <Link href="#contact">
            <Button
              size="sm"
              className="bg-gradient-to-r from-[#468fe1] to-purple-600 hover:from-purple-600 hover:to-[#468fe1]"
            >
              Get Started
            </Button>
            </Link>
            
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-6  bg-gradient-to-br from-purple-50 via-white to-blue-50">
          <div className=" px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-[#468fe1]">
                    Transforming Ideas into Digital Experiences
                  </h1>
                  <p className="max-w-[600px] text-gray-500 md:text-xl">
                    We design and develop stunning websites and applications that drive growth and deliver exceptional
                    user experiences.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="#contact">
                  <Button className="bg-gradient-to-r  from-purple-600 to-[#468fe1]">
                      Get Started
                  </Button>
                </Link>
                <Link href="#work">
                  <Button variant="outline">View Our Work</Button>
                </Link>
                  
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative w-full h-[350px] md:h-[400px] lg:h-[500px]">
                  <Image
                    // src="https://thumbs.dreamstime.com/t/software-development-word-cloud-concept-grey-background-88535408.jpg"
                    src={logo}
                    alt="Hero Image"
                    // fill
                    className="object-contain"
                    // priority
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className=" px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-purple-100 px-3 py-1 text-sm text-purple-600">
                  Our Services
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">What We Do Best</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  We offer a comprehensive suite of digital services to help your business thrive online.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3">
              <Card className="relative overflow-hidden group border-purple-100 hover:shadow-md transition-all duration-300">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#468fe1] to-purple-600 hover:from-purple-600 hover:to-[#468fe1]"></div>
                <CardContent className="p-6 pt-8">
                  <Globe className="h-12 w-12 mb-4 text-purple-600" />
                  <h3 className="text-xl font-bold mb-2">Web Design</h3>
                  <p className="text-gray-500">
                    Beautiful, responsive websites that captivate your audience and reflect your brand identity.
                  </p>
                </CardContent>
              </Card>
              <Card className="relative overflow-hidden group border-purple-100 hover:shadow-md transition-all duration-300">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#468fe1] to-purple-600 hover:from-purple-600 hover:to-[#468fe1]"></div>
                <CardContent className="p-6 pt-8">
                  <Code className="h-12 w-12 mb-4 text-purple-600" />
                  <h3 className="text-xl font-bold mb-2">Web Development</h3>
                  <p className="text-gray-500">
                    Custom web applications with clean code, optimal performance, and seamless functionality.
                  </p>
                </CardContent>
              </Card>
              <Card className="relative overflow-hidden group border-purple-100 hover:shadow-md transition-all duration-300">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#468fe1] to-purple-600 hover:from-purple-600 hover:to-[#468fe1]"></div>
                <CardContent className="p-6 pt-8">
                  <Layers className="h-12 w-12 mb-4 text-purple-600" />
                  <h3 className="text-xl font-bold mb-2">UI/UX Design</h3>
                  <p className="text-gray-500">
                    User-centered design that enhances usability, accessibility, and overall user satisfaction.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Work Showcase Section */}
        <section id="work" className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
          <div className=" px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-purple-100 px-3 py-1 text-sm text-purple-600">
                  Our Portfolio
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Recent Projects</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Take a look at some of our recent work that showcases our expertise and creativity.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-8 py-12 md:grid-cols-2 lg:grid-cols-3">
              {[{name: "Chicky Chory", image: ccIcon, href: "https://chicky-chory.netlify.app" }, {name: "The Commit Log", image: clIcon, href: "https://the-commit-log.netlify.app" }].map((item) => (
                <div key={item.name} className="group relative overflow-hidden rounded-lg shadow-md">
                  <Link href={item.href} target="_blank">
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={400}
                      height={300}
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                      <div className="p-4 text-white">
                        <h3 className="font-bold">{item.name}</h3>
                        <p className="text-sm text-gray-200">Web Design & Development</p>
                      </div>
                    </div>
                  </Link>
                  
                </div>
              ))}
            </div>
            {/* <div className="flex justify-center">
              <Button className="bg-gradient-to-r from-[#468fe1] to-purple-600 hover:from-purple-600 hover:to-[#468fe1]">
                View All Projects
              </Button>
            </div> */}
          </div>
        </section>

        {/* Process Section */}
        <section id="process" className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className=" px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-purple-100 px-3 py-1 text-sm text-purple-600">
                  Our Process
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">How We Work</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our streamlined process ensures efficient delivery of high-quality results.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-4">
              {[
                {
                  step: 1,
                  title: "Discovery",
                  icon: MessageSquare,
                  description: "We learn about your business, goals, and requirements.",
                },
                {
                  step: 2,
                  title: "Design",
                  icon: Layers,
                  description: "We create wireframes and visual designs for your approval.",
                },
                {
                  step: 3,
                  title: "Development",
                  icon: Code,
                  description: "We build your website or application with clean, efficient code.",
                },
                {
                  step: 4,
                  title: "Deployment",
                  icon: Rocket,
                  description: "We launch your project and provide ongoing support.",
                },
              ].map((item) => (
                <div key={item.step} className="flex flex-col items-center text-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-purple-100 mb-4">
                    <item.icon className="h-8 w-8 text-[#468fe1]" />
                  </div>
                  <div className="space-y-2">
                    <div className="inline-flex items-center justify-center rounded-full bg-purple-600 w-6 h-6 text-xs font-medium text-white">
                      {item.step}
                    </div>
                    <h3 className="text-xl font-bold text-[#468fe1]">{item.title}</h3>
                    <p className="text-[#468fe1]">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section
          id="testimonials"
          className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-purple-50 via-white to-blue-50"
        >
          <div className=" px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-purple-100 px-3 py-1 text-sm text-purple-600">
                  Testimonials
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">What Our Clients Say</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Don't just take our word for it. Here's what our clients have to say about working with us.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  name: "Muno Mlambo",
                  image: "https://images.pexels.com/photos/6584748/pexels-photo-6584748.jpeg?auto=compress&cs=tinysrgb&w=600",
                  role: "Catering",
                  content:
                    "Working with Tanga Systems was a game-changer for our business. They delivered a website that exceeded our expectations and has significantly improved our online presence.",
                },
                {
                  name: "Michael Chen",
                  image: "https://images.pexels.com/photos/2589653/pexels-photo-2589653.jpeg?auto=compress&cs=tinysrgb&w=600",
                  role: "Marketing",
                  content:
                    "The team at Tanga Systems is incredibly talented and professional. They took the time to understand our needs and delivered a product that perfectly aligns with our brand.",
                },
                {
                  name: "Emily Chivanga",                  
                  image: "https://images.pexels.com/photos/4625070/pexels-photo-4625070.jpeg?auto=compress&cs=tinysrgb&w=600",
                  role: "Gardening",
                  content:
                    "I was blown away by the creativity and attention to detail that Tanga Systems brought to our project. They transformed our vision into a stunning website.",
                },
              ].map((item, index) => (
                <Card key={index} className="relative overflow-hidden border-purple-100">
                  <CardContent className="p-6">
                    <div className="text-purple-600 mb-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-10 w-10 opacity-70"
                      >
                        <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" />
                        <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z" />
                      </svg>
                    </div>
                    <p className="mb-4 text-gray-500">{item.content}</p>
                    <div className="flex items-center">
                      <div className="mr-4 h-10 w-10 overflow-hidden rounded-full bg-gray-200">
                        <img
                          src={item.image}                          
                          alt={item.name}
                          width={40}
                          height={40}
                        />
                      </div>
                      <div>
                        <h4 className="font-bold">{item.name}</h4>
                        <p className="text-sm text-gray-500">{item.role}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section id="team" className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className=" px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-purple-100 px-3 py-1 text-sm text-purple-600">Our Team</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Meet the Experts</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our talented team of professionals is dedicated to bringing your vision to life.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-2 lg:grid-cols-4">
              {[
                { name: "Tana Nyagura", role: "Founder & CEO", image: "https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=600" },
                { name: "Jamie Taylor", role: "Lead Designer", image: "https://images.pexels.com/photos/31600507/pexels-photo-31600507/free-photo-of-casual-portrait-of-young-adult-in-state-college.jpeg?auto=compress&cs=tinysrgb&w=600" },
                {
                  name: "Casey Wilson",
                  role: "Senior Developer",
                  image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600",
                },
                { name: "Jordan Mavhundudzo", role: "UX Specialist", image: "https://images.pexels.com/photos/2918513/pexels-photo-2918513.jpeg?auto=compress&cs=tinysrgb&w=600" },
              ].map((member, index) => (
                <div key={index} className="group relative overflow-hidden rounded-lg">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    width={300}
                    height={300}
                    className="aspect-square object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-4 text-white w-full">
                      <h3 className="font-bold">{member.name}</h3>
                      <p className="text-sm text-gray-200">{member.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section
          id="contact"
          className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-[#468fe1] to-purple-600 hover:from-purple-600 hover:to-[#468fe1] text-white transition-opacity duration-400"
        >
          <div className=" px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                    Ready to Transform Your Digital Presence?
                  </h2>
                  <p className="max-w-[600px] text-white/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Let's discuss how we can help you achieve your goals and take your business to the next level.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button className="bg-white text-purple-600 hover:bg-gray-100">Get Started</Button>
                  <Button variant="outline" className="text-green-700 border-white hover:bg-white/10 hover:text-white">
                    Schedule a Call
                  </Button>
                </div>
                {/* <div className="flex items-center space-x-4 pt-4">
                  {["twitter", "facebook", "instagram", "linkedin"].map((social) => (
                    <Link key={social} href={`#${social}`} className="rounded-full bg-white/10 p-2 hover:bg-white/20">
                      <span className="sr-only">{social}</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-5 w-5"
                      >
                        <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                      </svg>
                    </Link>
                  ))}
                </div> */}
              </div>
              <div className="flex items-center justify-center">
                <Card className="w-full max-w-md">
                  <CardContent className="p-6">
                    <form className="space-y-4">
                      <div className="grid gap-4">
                        <div className="grid gap-2">
                          <label htmlFor="name" className="text-sm font-medium leading-none text-gray-700">
                            Name
                          </label>
                          <input
                            id="name"
                            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                            placeholder="Enter your name"
                          />
                        </div>
                        <div className="grid gap-2">
                          <label htmlFor="email" className="text-sm font-medium leading-none text-gray-700">
                            Email
                          </label>
                          <input
                            id="email"
                            type="email"
                            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                            placeholder="Enter your email"
                          />
                        </div>
                        <div className="grid gap-2">
                          <label htmlFor="message" className="text-sm font-medium leading-none text-gray-700">
                            Message
                          </label>
                          <textarea
                            id="message"
                            className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                            placeholder="Enter your message"
                          />
                        </div>
                      </div>
                      <Button className="w-full bg-gradient-to-r from-[#468fe1] to-purple-600 hover:from-purple-600 hover:to-[#468fe1]">
                        Send Message
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className=" px-4 md:px-6">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {[
                { value: "3", label: "Projects Completed" },
                { value: "3", label: "Happy Clients" },
                { value: "4", label: "Years Experience" },
                { value: "3", label: "Team Members" },
              ].map((stat, index) => (
                <div key={index} className="flex flex-col items-center justify-center space-y-2 text-center">
                  <div className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-500">
                    {stat.value}
                  </div>
                  <div className="text-sm font-medium text-gray-500">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
          <div className=" px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Ready to Start Your Project?
                </h2>
                <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Let's create something amazing together. Contact us today to get started.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button className="bg-gradient-to-r from-[#468fe1] to-purple-600 hover:from-purple-600 hover:to-[#468fe1]">
                  Get Started
                </Button>
                <Button variant="outline">Learn More</Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full py-6 bg-gray-900 text-gray-300">
        <div className=" px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="space-y-4">
              <div className="flex gap-2 items-center text-xl font-bold text-white">
                <Rocket className="h-6 w-6 text-purple-500" />
                {/* <span>Tanga Systems</span> */}
                <Image src={nologo} alt="Logo"/>
              </div>
              <p className="text-sm text-gray-400">
                Transforming ideas into digital experiences that drive growth and deliver exceptional user experiences.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-medium text-white">Services</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="hover:text-white">
                    Web Design
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Web Development
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    UI/UX Design
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    E-commerce Solutions
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-medium text-white">Company</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="hover:text-white">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Our Work
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Team
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Careers
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-medium text-white">Contact</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start space-x-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5 text-gray-400 flex-shrink-0"
                  />
                  <span>Momunet Rd, Glen Marais, Johannesburg</span>
                </li>
                <li className="flex items-start space-x-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5 text-gray-400 flex-shrink-0"
                  />
                  <span>nyagura.george@gmail.com</span>
                </li>
                <li className="flex items-start space-x-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5 text-gray-400 flex-shrink-0"
                  />
                  <span>+27 (72) 435-0308</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 border-t border-gray-800 pt-6 flex flex-col-reverse gap-4 sm:flex-row sm:justify-between sm:gap-0">
            <p className="text-xs text-gray-400">© {new Date().getFullYear()} Tanga Systems. All rights reserved.</p>
            {/* <div className="flex items-center space-x-4">
              {["twitter", "facebook", "instagram", "linkedin"].map((social) => (
                <Link key={social} href={`#${social}`} className="text-gray-400 hover:text-white">
                  <span className="sr-only">{social}</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                  </svg>
                </Link>
              ))}
            </div> */}
          </div>
        </div>
      </footer>
    </div>
  )
}
