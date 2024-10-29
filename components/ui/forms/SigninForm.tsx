'use client'
import React from 'react'
import { signInAction } from "@/app/actions";
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { LoginType } from '@/lib/definitions';
import { toast } from 'sonner';
import { Input } from '../input';
import { Button } from '../button';
import { LoginSchema } from '@/lib/zod';
import { Loader } from 'lucide-react';
import { useRouter } from 'next/navigation';

const SigninForm = () => {
    const {register, handleSubmit, formState: { errors, isSubmitting }} = useForm<LoginType>({
        resolver:zodResolver(LoginSchema),
        defaultValues: {email:"", password:""},
       })
    const router = useRouter()
  
       const onSubmit =async(formData:LoginType)=>{
        const response = await signInAction(formData)
        if(response?.status == 200){
          toast.success(response?.message)
          setTimeout(()=> (router.push('/dashboard')), 2000)
        }else{
            toast.error(response?.message)
        }
       }
  return (
    <div>
      <form className=" space-y-5" onSubmit={handleSubmit(onSubmit)}>
        <div>
            <Input  {...register("email")} type="email" placeholder=" Enter your Email" />
            {errors?.email && (<p className=' mt-1 text-left text-xs text-red-600'>{errors?.email.message}</p>)}
        </div>
        <div>
            <Input {...register("password")} type="password" placeholder="Enter password" />
            {errors?.password && (<p className=' text-left text-xs mt-1 text-red-600'>{errors?.password.message}</p>)}
        </div>
        <Button disabled={isSubmitting} className=' w-full flex items-center'> {isSubmitting && <Loader className=" mr-3 animate-spin h-4 w-4"/>}
        Sign in</Button>
      </form>
    </div>
  )
}

export default SigninForm
