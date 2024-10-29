'use client'
import { createSchool } from "@/app/actions"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { SchoolDataType } from "@/lib/definitions"
import { SchoolDataSchema } from "@/lib/zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { PlusCircle } from "lucide-react"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { toast } from "sonner"

export function CreateSchoolModal() {

    const [open, setOpen] = useState(false);
    const {register,handleSubmit, formState: { errors, isSubmitting }} = useForm<SchoolDataType>({
        resolver:zodResolver(SchoolDataSchema),
        defaultValues: {
          name:"", location:""
        },
       })

       const onSubmit =async(formData:SchoolDataType)=>{
        const response = await createSchool(formData)
        if(response?.status == 201){
            toast.success(response.message)
        }else{
            toast.error(response.message)
        }
        setOpen(false)
       }
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {/* <Button variant="outline">Create School</Button> */}
        <Button>
            <PlusCircle className="h-3.5 w-3.5 mr-3" />
            Create School
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Add a New School</DialogTitle>
          <DialogDescription>
            Add a new School here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="name" className="text-right">
                    School Name
                    </Label>
                    <Input id="name" {...register("name")} placeholder="eg. Holy Rosary.." className="col-span-3" />
                    {errors?.name && <p className=' col-span-4 text-right text-red-600 dark:text-red-400 text-xs'>{errors?.name.message}</p>}
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="location" className="text-right">
                    Location
                    </Label>
                    <Input id="location" {...register("location")} className="col-span-3" />
                    {errors?.location && <p className=' col-span-4 text-right text-red-600 dark:text-red-400 text-xs'>{errors?.location.message}</p>}
                </div>
            </div>
            <DialogFooter>
            <Button type="submit">{isSubmitting ? "Saving...":"Save changes"}</Button>
            </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
