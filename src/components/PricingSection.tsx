import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function PricingSection() {
  return (
    <section id="pricing" className="md:py-10 bg-gray-50">
      <div className="px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Pricing</h2>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Choose the perfect plan for your needs. 
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-8 md:mt-12">
          {/* Basic Plan */}
          <Card className="flex flex-col">
            <CardHeader className="flex flex-col space-y-1.5 p-6">
              <CardTitle className="text-2xl font-bold">Basic</CardTitle>
              <CardDescription>Essential features for individuals and small businesses</CardDescription>
            </CardHeader>
            <CardContent className="p-6 pt-0 flex-1">
              <div className="flex items-baseline text-3xl font-bold">
                R3000
                {/* <span className="ml-1 text-sm font-normal text-gray-500">/month</span> */}
              </div>
              <ul className="mt-6 space-y-3">
                <li className="flex items-center">
                  <Check className="mr-2 h-4 w-4 text-green-500" />
                  <span>1 Website w/o custom domain</span>
                </li>
                <li className="flex items-center">
                  <Check className="mr-2 h-4 w-4 text-green-500" />
                  <span>1 Admin Dashboard</span>
                </li>
                <li className="flex items-center">
                  <Check className="mr-2 h-4 w-4 text-green-500" />
                  <span>Basic analytics</span>
                </li>
                <li className="flex items-center">
                  <Check className="mr-2 h-4 w-4 text-green-500" />
                  <span>Landing Page</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter className="p-6 pt-0">
              <Button className="w-full bg-gradient-to-r from-[#468fe1] to-purple-600 hover:cursor-pointer text-white" variant="outline">
                Get Started
              </Button>
            </CardFooter>
          </Card>

          {/* Pro Plan - Highlighted */}
          <Card className="flex flex-col border-2 border-[#FFD700] relative">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#FFD700] text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
              Most Popular
            </div>
            <CardHeader className="flex flex-col space-y-1.5 p-6">
              <CardTitle className="text-2xl font-bold">Pro</CardTitle>
              <CardDescription>Advanced features for growing businesses</CardDescription>
            </CardHeader>
            <CardContent className="p-6 pt-0 flex-1">
              <div className="flex items-baseline text-3xl font-bold">
                R5000
                {/* <span className="ml-1 text-sm font-normal text-gray-500">/month</span> */}
              </div>
              <ul className="mt-6 space-y-3">
                <li className="flex items-center">
                  <Check className="mr-2 h-4 w-4 text-green-500" />
                  <span>Custom Domain & Branding</span>
                </li>
                <li className="flex items-center">
                  <Check className="mr-2 h-4 w-4 text-green-500" />
                  <span>Enhanced Admin Dashboard</span>
                </li>
                <li className="flex items-center">
                  <Check className="mr-2 h-4 w-4 text-green-500" />
                  <span>Enhanced Admin Dashboard</span>
                </li>
                <li className="flex items-center">
                  <Check className="mr-2 h-4 w-4 text-green-500" />
                  <span>Priority support</span>
                </li>
                <li className="flex items-center">
                  <Check className="mr-2 h-4 w-4 text-green-500" />
                  <span>Custom integrations</span>
                </li>
                <li className="flex items-center">
                  <Check className="mr-2 h-4 w-4 text-green-500" />
                  <span>Expanded Landing Page Features</span>
                </li>
                {/* <li className="flex items-center">
                  <Check className="mr-2 h-4 w-4 text-green-500" />
                  <span></span>
                </li> */}
              </ul>
            </CardContent>
            <CardFooter className="p-6 pt-0">
              <Button className="w-full bg-gradient-to-r from-[#468fe1] to-purple-600 hover:cursor-pointer text-white">Get Started</Button>
            </CardFooter>
          </Card>

          {/* Enterprise Plan */}
          <Card className="flex flex-col">
            <CardHeader className="flex flex-col space-y-1.5 p-6">
              <CardTitle className="text-2xl font-bold">Enterprise</CardTitle>
              <CardDescription>Custom solutions for organizations</CardDescription>
            </CardHeader>
            <CardContent className="p-6 pt-0 flex-1">
              <div className="flex items-baseline text-3xl font-bold">
                Project Specific
                {/* <span className="ml-1 text-sm font-normal text-gray-500">/month</span> */}
              </div>
              <ul className="mt-6 space-y-3">
                <li className="flex items-center">
                  <Check className="mr-2 h-4 w-4 text-green-500" />
                  <span>Custom Software Development</span>
                </li>
                <li className="flex items-center">
                  <Check className="mr-2 h-4 w-4 text-green-500" />
                  <span>UI/UX Design and Prototypingr</span>
                </li>
                <li className="flex items-center">
                  <Check className="mr-2 h-4 w-4 text-green-500" />
                  <span>Software Consultancy & Strategy</span>
                </li>
                <li className="flex items-center">
                  <Check className="mr-2 h-4 w-4 text-green-500" />
                  <span>Quality Assurance and Testing</span>
                </li>
                <li className="flex items-center">
                  <Check className="mr-2 h-4 w-4 text-green-500" />
                  <span>Maintenance, Support, and Upgrades</span>
                </li>
                <li className="flex items-center">
                  <Check className="mr-2 h-4 w-4 text-green-500" />
                  <span>24/7 phone support</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter className="p-6 pt-0">
              <Button className="w-full bg-gradient-to-r from-[#468fe1] to-purple-600 hover:cursor-pointer text-white" variant="outline">
                Contact Sales
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  )
}
