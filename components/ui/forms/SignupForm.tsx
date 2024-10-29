'use client'
import { signUpAction } from '@/app/actions'
import { LoginType } from '@/lib/definitions'
import { LoginSchema } from '@/lib/zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Eye, EyeOff, Loader } from 'lucide-react'
import { Input } from '../input'
import React, {useState} from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { Button } from '../button'

const SignupForm =()=>{
    const [isVisible, setIsvisible] = useState<boolean>(false)
    const {register, handleSubmit, formState: { errors, isSubmitting }} = useForm<LoginType>({
        resolver:zodResolver(LoginSchema),
        defaultValues: {email:"", password:""},
       })
  
       const onSubmit =async(formData:LoginType)=>{
        const response = await signUpAction(formData)
        if(response?.status){
          toast.error(response.message)
        }
       }
  return (
    <div>
      <form className=" space-y-5" onSubmit={handleSubmit(onSubmit)}>
        <div>
            <Input  {...register("email")} type="email" placeholder=" Enter your Email" />
            {errors?.email && (<p className=' mt-1 text-left text-xs text-red-600'>{errors?.email.message}</p>)}
        </div>
        <div className="relative">
            <Input {...register("password")} type={!isVisible ?"password":"text"} placeholder="Enter password" />
            <Button type="button" variant="link" onClick={()=> setIsvisible(prev => !prev)} className="absolute top-0 right-0">{!isVisible ? <EyeOff className=" h-4 w-4"/>:<Eye className="h-4 w-4"/>}</Button>
            {errors?.password && (<p className=' text-left text-xs mt-1 text-red-600'>{errors?.password.message}</p>)}
        </div>
        <Button disabled={isSubmitting} className=' w-full flex items-center'> {isSubmitting && <Loader className=" mr-3 animate-spin h-4 w-4"/>}
        Sign up</Button>
      </form>
    </div>
  )
}

export default SignupForm