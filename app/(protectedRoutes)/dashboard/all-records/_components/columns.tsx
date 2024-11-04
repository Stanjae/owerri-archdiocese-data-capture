"use client"

import { ColumnDef } from "@tanstack/react-table"
import { ArrowUpDown, MoreHorizontal ,LockKeyhole} from "lucide-react"
import dayjs from 'dayjs'
import relativeTime from "dayjs/plugin/relativeTime";
 
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { DeleteConfirmation } from "@/components/ui/modals/DeleteConfirmation";
import { deleteStudent } from "@/app/actions";
import Image from "next/image";
import { TableStudentData } from "@/lib/definitions";
import Link from "next/link";
import { useData } from "@/lib/Providers/ContextApi";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want. 
// firstname, lastname, schoolclass, imageUrl, class_arm,  school_id


dayjs.extend(relativeTime)


export const columns: ColumnDef<TableStudentData>[] = [
  {
    accessorKey: "StudentImage",
    header: "Student Image",
    cell: ({ row }) => {
      const newData = row.original
     
      return <div className="text-left font-medium"><Image
      alt="Product image"
      className="aspect-square w-[64px] h-[64px] rounded-md object-cover"
      height={100}
      src={newData.imageUrl}
      width={100}
    /></div>
    },
  },
  {
    accessorKey: "fullname",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Fullname
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
    cell: ({ row }) => {
      const newData = row.original
 
      return <div className="text-left font-medium">{newData.fullname}</div>
    },
  },
  {
    accessorKey: "school",
    header: () => {
      return (
        <div
        >
          School
        </div>
      )
    },
    cell: ({ row }) => {
      const newData = row.original
 
      return <div className="text-left font-medium">{newData.school_id.name}</div>
    },
  },

  {
    accessorKey: "class",
    header: () => {
      return (
        <div
        >
          Class
        </div>
      )
    },
    cell: ({ row }) => {
      const newData = row.original
 
      return <div className="text-left font-medium">{newData.schoolclass + " " + newData?.class_arm}</div>
    },
  },

  {
    accessorKey: "created_at",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Date Created
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
    cell: ({ row }) => {
      const datary = row.original;
      const formattedDate = dayjs(datary.created_at).fromNow()

      /* const amount = parseFloat(row.getValue("amount"))
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(amount) */
 
      return <div className="text-left font-medium">{formattedDate}</div>
    },
  },
  

  {
    id: "actions",
    cell: ({ row }) => {
      const newData = row.original
      const user  = useData()
      
      return (
        <DropdownMenu>
          {user?.userRole !=  "admin" &&  newData?.author_id  !=  user?.id &&(<LockKeyhole className="h-4  w-4 text-yellow-600"/>)}
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu </span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuSeparator />
              <Link href={`student-profile/${newData?.id}`}>
                <Button className="block w-full" size="sm" variant="link">View Profile</Button>
              </Link>
             {(user?.userRole  =="admin" ||  user?.id  ==  newData?.author_id)  &&(<>              
              <Link href={`edit-data/${newData?.id}`}>
                <Button className="block w-full" size="sm" variant="link">Edit</Button>
              </Link>
              <DeleteConfirmation deleteFn={deleteStudent} id={newData?.id} title={newData?.firstname} 
              btnText={'Delete'}/>
              </>)}

           </DropdownMenuContent>
        </DropdownMenu>
      )
    },
  },
]
