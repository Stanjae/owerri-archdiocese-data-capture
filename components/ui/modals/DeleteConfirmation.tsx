'use client'

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
import {
    ContextMenu,
    ContextMenuContent,
    ContextMenuItem,
    ContextMenuTrigger,
  } from "@/components/ui/context-menu"
  
import { toast } from "sonner"
import { useState } from "react"

export function DeleteConfirmation({btnText, deleteFn, id, title}:
    {btnText:string; deleteFn:any; title:string |undefined, id:string | undefined}) {

        const [open, setOpen] = useState(false);

        const handleDelete = async()=>{
            const response = await deleteFn(id)
            if(response?.code == 201){
                toast.success(response.message)
            }else{
                toast.error(response.message)
            }
            setOpen(false)
        }
  return (
    <Dialog open={open} onOpenChange={setOpen}>
        <ContextMenu>
            <ContextMenuContent>
                <DialogTrigger asChild>
                    <ContextMenuItem>
                    <span>Hunt</span>
                    </ContextMenuItem>
                </DialogTrigger>
            </ContextMenuContent>
        </ContextMenu>
        <DialogTrigger asChild>
        <Button className="block w-full" size="sm" variant="link">{btnText}</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Delete Confirmation</DialogTitle>
          <DialogDescription>
            Do you want to want to Permanaetly Delete {title}
          </DialogDescription>
        </DialogHeader>
        <div className="flex items-center space-x-2">
         
        </div>
        <DialogFooter className="sm:justify-start">
          <DialogClose asChild>
            <Button type="button" variant="secondary">
              Cancel
            </Button>
          </DialogClose>
          <Button onClick={handleDelete} className=" bg-red-600 text-white hover:bg-400 dark:bg-red-400">Delete</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
