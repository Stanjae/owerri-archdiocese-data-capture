import React from 'react'
import { CircleCheckBig } from "lucide-react"
import {AuthAlert} from '@/components/ui/alerts/AuthAlert'



export default function EmailConfirmPage() {
  return (
    <>
    <AuthAlert title={"Success"} message={"Thanks for signing up! Please check your email for a verification link."}
     icon={<CircleCheckBig  className="h-4 w-4" />}/>
    </>
    
  )
}
