'use client'
import React, { useState } from 'react'
import { resetPasswordAction } from "@/app/actions";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from '../button';
import { Eye, EyeOff, Loader} from 'lucide-react'
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { InitialStateType } from '@/lib/definitions';
import { ResetPwSchema } from '@/lib/zod';
import { toast } from 'sonner';



export const ResetPwForm =()=>{
    const [isVisible, setIsvisible] = useState<boolean>(false)
   
    const {register, handleSubmit, formState: { errors, isSubmitting }} = useForm<InitialStateType>({
        resolver:zodResolver(ResetPwSchema),
        defaultValues: {confirmPassword:"", password:""},
       })
  
       const onSubmit =async(formData:InitialStateType)=>{
        const response = await resetPasswordAction(formData)
        if(response?.status){
          toast.error(response.message)
        }
       }
    return(
    <form onSubmit={handleSubmit(onSubmit)}className="flex-1 flex flex-col w-full gap-2 text-foreground [&>input]:mb-6 min-w-64 max-w-64 mx-auto">
        <div className="flex flex-col gap-2 [&>input]:mb-3 mt-8">
            <Label htmlFor="password">Password</Label>
            <div className="relative">
                <Input {...register("password")} type={!isVisible ?"password":"text"} placeholder="Enter password" />
                <Button type="button" variant="link" onClick={()=> setIsvisible(prev => !prev)} className="absolute top-0 right-0">{!isVisible ? <EyeOff className=" h-4 w-4"/>:<Eye className="h-4 w-4"/>}</Button>
            </div>
            <Label htmlFor="confirmPassword">Confirm password</Label>
            <div className="relative">
                <Input {...register("confirmPassword")} type={!isVisible ?"password":"text"} placeholder="Confirm password" />
                <Button type="button" variant="link" onClick={()=> setIsvisible(prev => !prev)} className="absolute top-0 right-0">{!isVisible ? <EyeOff className=" h-4 w-4"/>:<Eye className="h-4 w-4"/>}</Button>
            </div>
            <Button disabled={isSubmitting} className=' w-full flex items-center'>
             {isSubmitting && <Loader className=" mr-3 animate-spin h-4 w-4"/>}
                Update Password
                </Button>
         
        </div>
    </form>
    )
}