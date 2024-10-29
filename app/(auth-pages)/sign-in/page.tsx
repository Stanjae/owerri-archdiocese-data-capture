import { Metadata } from "next"
import SigninForm from "@/components/ui/forms/SigninForm";

export const metadata: Metadata = {
  title: "Login",
  description: "Authentication forms built using the components.",
}

export default function Login() {
  return (
    <div className=" text-center space-y-5 max-w-md">
      <div className=" space-y-2">
        <h2 className=" text-2xl font-bold">Login into your Account</h2>
        <p className=" text-gray-600">Welcome back to your account</p>
      </div>
      
      <SigninForm/>
    </div>
  );
}
