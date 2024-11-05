'use client'
import { useData } from '@/lib/Providers/ContextApi'
import  React from  'react'

export default function WelcomeText(){
    const  {email} = useData()
    return(
        <span  className="text-2xl font-semibold tracking-tight">Welcome back, {email?.split('@').at(0)}</span>
    )
}