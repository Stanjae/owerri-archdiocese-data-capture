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
import Image from "next/image"

export default function PreviewImage({imageUrl}:any) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Preview Image</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Preview Snapshot</DialogTitle>
          <DialogDescription>
          </DialogDescription>
        </DialogHeader>
        <div className=" py-4">
          <Image src={imageUrl} alt="image-peview" width={600} height={600} className=" object-cover w-full h-auto"/>
        </div>
      </DialogContent>
    </Dialog>
  )
}
