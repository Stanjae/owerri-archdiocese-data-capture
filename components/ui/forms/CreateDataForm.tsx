'use client'
import React, { useEffect, useState } from 'react'
import {handleFetchStates, handleFetchLgas} from '@/app/data'
import { Label } from '../label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../select'
import { Input } from '../input'
import { Button } from '../button'
import { schoolClasses, schoolsArms } from '@/lib/classes'
import { useQuery } from '@tanstack/react-query'
import { GenderEnum, StudentData } from '@/lib/definitions'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod';
import { StudentDataSchema } from '@/lib/zod'
import { createStudent } from '@/app/actions'
import { toast } from 'sonner'
import { useData } from '@/lib/Providers/ContextApi'

const CreateDataForm = ({getImageUrl, schools}:{getImageUrl:any; schools:any}) => {
  const user = useData()
    
    const [state, setState] = useState<string>("imo")

    const {data, isFetching} = useQuery({initialData:"", queryKey: ['states'], 
      queryFn:async()=> await handleFetchStates()})

      const {data:lgas, isFetching:loading} = useQuery({initialData: "", queryKey: ['lga', state], 
        queryFn:async()=> await handleFetchLgas(state)})

     const {register,handleSubmit, setValue, formState: { errors, isSubmitting }} = useForm<StudentData>({
      resolver:zodResolver(StudentDataSchema),
      defaultValues: {
        firstname:"", lastname:"", address:"", dob:"", gender:"", stateOfOrigin:"", LGA:"",
        nextOfKin:"", phoneNoNextOfKin:"", school:"", schoolclass:"", classArm: "", userId:""
      },
     })

     const onSubmit =async(formData:StudentData)=>{
      const response = await createStudent({...formData, getImageUrl:getImageUrl?.publicUrl, userId:user?.id})
      if(response?.status == 201){
        toast.success(response.message)
      }else{
          toast.error(response.message)
      }
     }
    
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="grid w-full items-start gap-6">
        <fieldset className="grid gap-6 rounded-lg border p-4">
            <legend className="-ml-1 px-1 text-sm font-medium">Student Data</legend>
                  <div className="grid grid-cols-2 gap-4">
                    <input hidden {...register("userId")} value={user?.id}/>
                    <div className="grid gap-3">
                      <Label htmlFor="firstname">First Name</Label>
                      <Input {...register("firstname")} id="firstname" type="text" placeholder="Enter firstname" />
                      {errors?.firstname && <p className=' text-red-600 dark:text-red-400 text-xs'>{errors?.firstname.message}</p>}
                    </div>
                    <div className="grid gap-3">
                      <Label htmlFor="lastname">Last Name</Label>
                      <Input {...register("lastname")}  id="lastname" type="text" placeholder="Enter lastname" />
                      {errors?.lastname && <p className=' text-red-600 dark:text-red-400 text-xs'>{errors?.lastname.message}</p>}
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="grid gap-3">
                      <Label htmlFor="dob">Date of Birth</Label>
                      <Input {...register("dob")} id="dob" type="date" />
                      {errors?.dob && <p className=' text-red-600 dark:text-red-400 text-xs'>{errors?.dob.message}</p>}
                    </div>
                    <div className="grid gap-3">
                      <Label htmlFor="gender">Gender</Label>
                      <Select onValueChange={(e:string)=> setValue("gender", e)} {...register("gender")}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select gender" />
                        </SelectTrigger>
                        <SelectContent>
                        <SelectItem value="female">Female</SelectItem>
                          <SelectItem value="male">Male</SelectItem>
                        </SelectContent>
                      </Select>
                      {errors?.gender && <p className=' text-red-600 dark:text-red-400 text-xs'>{errors?.gender.message}</p>}
                    </div>
                  </div>
                  <div className="grid gap-3">
                      <Label htmlFor="address">Residential Address</Label>
                      <Input {...register("address")} id="address" type="text" />
                      {errors?.address && <p className=' text-red-600 dark:text-red-400 text-xs'>{errors?.address.message}</p>}
                  </div>                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="grid gap-3">
                      <Label htmlFor="role">State of Origin</Label>
                      <Select {...register("stateOfOrigin")} onValueChange={(e)=>{
                         setState(e);
                         setValue("stateOfOrigin", e);
                         } }>
                        <SelectTrigger>
                          <SelectValue placeholder="Select your state of origin" />
                        </SelectTrigger>
                        <SelectContent>
                          {isFetching && <SelectItem  value={'..loading'}>...loading</SelectItem>}
                        {data && JSON.parse(data)?.map((state:any, index:number)=>(
                          <SelectItem key={index} value={state}>{state}</SelectItem>
                        ))}
                        </SelectContent>
                      </Select>
                      {errors?.stateOfOrigin && <p className=' text-red-600 dark:text-red-400 text-xs'>{errors?.stateOfOrigin.message}</p>}
                    </div>
                    <div className="grid gap-3">
                    <Label htmlFor="role">LGA</Label>
                    <Select onValueChange={(e:string)=> setValue("LGA", e)} {...register("LGA")}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select your LGA" />
                      </SelectTrigger>
                      <SelectContent>
                      {loading && <p>{"...loading"}</p>}
                      {lgas && JSON.parse(lgas)?.map((lga:any, index:number)=>(
                        <SelectItem key={index} value={lga}>{lga}</SelectItem>
                      ))}
                      </SelectContent>
                    </Select>
                    {errors?.LGA && <p className=' text-red-600 dark:text-red-400 text-xs'>{errors?.LGA.message}</p>}
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="grid gap-3">
                      <Label htmlFor="next-of-kin">Name of Next of Kin</Label>
                      <Input id="next-of-kin" type="text" {...register("nextOfKin")} placeholder="Enter next-of-kin Name" />
                      {errors?.nextOfKin && <p className=' text-red-600 dark:text-red-400 text-xs'>{errors?.nextOfKin.message}</p>}
                    </div>
                    <div className="grid gap-3">
                      <Label htmlFor="next-of-kin-phone">Next of Kin Phone Number</Label>
                      <Input id="next-of-kin-phone" {...register("phoneNoNextOfKin")} type="tel" placeholder="+234" />
                      {errors?.phoneNoNextOfKin && <p className=' text-red-600 dark:text-red-400 text-xs'>{errors?.phoneNoNextOfKin.message}</p>}
                    </div>
                  </div>
                </fieldset>
               <fieldset className="grid gap-6 rounded-lg border p-4">
                  <legend className="-ml-1 px-1 text-sm font-medium">
                   Academics
                  </legend>
                  <div className="grid gap-3">
                    <Label htmlFor="role">School</Label>
                    <Select  onValueChange={(e:string)=> setValue("school", e)} {...register("school")}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a school" />
                      </SelectTrigger>
                      <SelectContent>
                      {!schools && <p>...Loading</p>}
                      {schools && schools?.map((school:any, index:number)=>(
                         <SelectItem key={index} value={school?.school_id || "no school"}>{school?.name}</SelectItem>
                      ))}
                      </SelectContent>
                    </Select>
                    {errors?.school && <p className=' text-red-600 dark:text-red-400 text-xs'>{errors?.school.message}</p>}
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="grid gap-3">
                    <Label htmlFor="role">Class</Label>
                    <Select  onValueChange={(e:string)=> setValue("schoolclass", e)} {...register("schoolclass")}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select your Class" />
                      </SelectTrigger>
                      <SelectContent>
                      {schoolClasses?.map((classItem:{value:string; title:string}, index:number) => (
                        <SelectItem key={index} value={classItem.value}>{classItem.title}</SelectItem>
                      ))}
                      </SelectContent>
                    </Select>
                    {errors?.schoolclass && <p className=' text-red-600 dark:text-red-400 text-xs'>{errors?.schoolclass.message}</p>}
                    </div>
                    <div className="grid gap-3">
                    <Label htmlFor="role">Arm</Label>
                    <Select  onValueChange={(e:string)=> setValue("classArm", e)} {...register("classArm")}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select your Class Arm" />
                      </SelectTrigger>
                      <SelectContent>
                      {schoolsArms?.map((item:any, index:number)=>(
                        <SelectItem key={index} value={item.value}>{item.title}</SelectItem>
                      ))}
                      </SelectContent>
                    </Select>
                    {errors?.classArm && <p className=' text-red-600 dark:text-red-400 text-xs'>{errors?.classArm.message}</p>}
                    </div>
                  </div>
                </fieldset>
                <div className='flex justify-end mt-3'>
                  <Button type='submit' size={'lg'} variant={'default'}>{isSubmitting ? "Submitting..." : "Submit Data"}</Button>
                </div>
              </form>
  )
}

export default CreateDataForm