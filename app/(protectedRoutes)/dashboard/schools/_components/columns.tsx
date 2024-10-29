"use client"

import { ColumnDef } from "@tanstack/react-table"
import { ArrowUpDown, MoreHorizontal } from "lucide-react"
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
import { deleteSchool } from "@/app/actions";
import { EditSchoolModal } from "@/components/ui/modals/EditSchoolModal";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Payment = {
  school_id: string | undefined
  location: string | undefined;
  name: string | undefined;
  created_at:string | undefined
}

dayjs.extend(relativeTime)


export const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: "SN",
    header: "S/N",
    cell: ({ row }) => {
      //console.log("maya: ",row)
      /* const amount = parseFloat(row.getValue("amount"))
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(amount) */
 
      return <div className="text-left font-medium">{row?.index + 1}</div>
    },
  },
  {
    accessorKey: "name",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          School
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
  },
  {
    accessorKey: "location",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
        >
          Location
        </Button>
      )
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
      const payment = row.original
      
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu </span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuSeparator />
              <EditSchoolModal name={payment?.name} location={payment?.location} school_id={payment?.school_id}/>
              <DeleteConfirmation deleteFn={deleteSchool} id={payment?.school_id} title={payment?.name} btnText={'Delete'}/>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
  },
]
