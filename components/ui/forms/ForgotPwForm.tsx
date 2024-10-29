'use client'
import React from 'react'
import { forgotPasswordAction } from "@/app/actions";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from '../button';
import {useFormState} from 'react-dom'
import { SubmitBtnForServer } from '../customBtns/SubmitBtnForServer';

const initialState ={message:''}

export const ForgotPwForm =()=>{
    const [state, formAction] = useFormState(forgotPasswordAction, initialState)
    return(
    <form action={formAction} className="flex-1 flex flex-col w-full gap-2 text-foreground [&>input]:mb-6 min-w-64 max-w-64 mx-auto">
        <div className="flex flex-col gap-2 [&>input]:mb-3 mt-8">
          <Label htmlFor="email">Email</Label>
          <Input name="email" placeholder="you@example.com" required />
          <SubmitBtnForServer btnText="Reset Password"/>
         
        </div>
    </form>
    )
}