import { CircleCheckBig } from "lucide-react"
import Link from "next/link";
import { AuthAlert } from "@/components/ui/alerts/AuthAlert";
import { ForgotPwForm } from "@/components/ui/forms/ForgotPwForm";

export default function ForgotPassword({
  searchParams,
}: {
  searchParams: any
}) {
  return (
    <div className=" text-center space-y-5 max-w-md">
      <div className=" space-y-2">
        <h1 className="text-2xl font-medium">Reset Password</h1>
        <p className="text-sm text-secondary-foreground">
            Already have an account?{" "}
            <Link className="text-primary underline" href="/sign-in">
              Sign in
            </Link>
          </p>
      </div>
      <ForgotPwForm/>
      <AuthAlert icon={<CircleCheckBig className=" h-4 w-4"/>} title="Success" message={searchParams} />
    </div>
      
  );
}
