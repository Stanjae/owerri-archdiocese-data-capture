import React from 'react'
import { CircleCheckBig } from "lucide-react"

import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert"

export default function EmailConfirmPage() {
  return (
    <Alert>
      <CircleCheckBig  className="h-4 w-4" />
      <AlertTitle>Success</AlertTitle>
      <AlertDescription>
      Thanks for signing up! Please check your email for a verification link.
      </AlertDescription>
    </Alert>
  )
}
