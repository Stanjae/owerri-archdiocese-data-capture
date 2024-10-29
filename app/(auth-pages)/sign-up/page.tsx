import SignupForm from "@/components/ui/forms/SignupForm"
import { Metadata } from "next"
import Link from "next/link"


export const metadata: Metadata = {
  title: "Register",
  description: "Authentication forms built using the components.",
}

export default function AuthenticationPage() {
  return (
    <div className=" text-center space-y-5 max-w-sm ">
      <div className=" space-y-2">
        <h2 className=" text-2xl font-bold">Create an Account</h2>
        <p className=" text-gray-600">Get started by creating your account</p>
      </div>
      
      <SignupForm/>
      <div>
      <p className="px-8 text-center text-sm text-muted-foreground">
              By clicking continue, you agree to our{" "}
              <Link
                href="/"
                className="underline underline-offset-4 hover:text-primary"
              >
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link
                href="/"
                className="underline underline-offset-4 hover:text-primary"
              >
                Privacy Policy
              </Link>
              .
            </p>
      </div>
    </div>
  
            
  )
}