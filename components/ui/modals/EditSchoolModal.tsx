'use client'
import { editSchool } from "@/app/actions"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { SchoolDataType, EditSchoolType } from "@/lib/definitions"
import { SchoolDataSchema } from "@/lib/zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { toast } from "sonner"

export function EditSchoolModal({name, location, school_id}:{name:string | undefined; location:string | undefined; 
    school_id:string | undefined}) {

    const [open, setOpen] = useState(false);

    const {register,handleSubmit, formState: { errors, isSubmitting }} = useForm<SchoolDataType>({
        resolver:zodResolver(SchoolDataSchema),
        defaultValues: {
          name, location
        },
       })

       const onSubmit =async(formData:SchoolDataType)=>{
            const response = await editSchool({...formData, school_id})
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
        <Button className="block w-full" size="sm" variant="link">
            Edit
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Edit a School</DialogTitle>
          <DialogDescription>
            Update School here. Click save when you're done.
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
                <DialogClose asChild>
                        <Button type="button" variant="secondary">Cancel</Button>
                </DialogClose>
                <Button type="submit">{isSubmitting ? "Saving...":"Save changes"}</Button>
            </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
