import { Metadata } from "next"
import { CircleCheckBig } from "lucide-react"
import SigninForm from "@/components/ui/forms/SigninForm";
import { AuthAlert } from "@/components/ui/alerts/AuthAlert";

export const metadata: Metadata = {
  title: "reset password",
  description: "Authentication forms built using the components.",
}

export default function ResetPw({
    searchParams,
  }: {
    searchParams: any
  }) {
  return (
    <div className=" text-center space-y-5 max-w-md">
      <div className=" space-y-2">
        <h2 className=" text-2xl font-semibold">Reset Your password</h2>
        <p className=" text-gray-600">Passwords should match</p>
      </div>
      
      <SigninForm/>

      <AuthAlert icon={<CircleCheckBig className=" h-4 w-4"/>} title="Success" message={searchParams} />
    </div>
  );
}
