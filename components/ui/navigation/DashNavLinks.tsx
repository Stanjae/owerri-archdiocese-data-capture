'use client'
import React from 'react'
import { Tooltip, TooltipContent, TooltipTrigger } from '../tooltip'
import Link from 'next/link'
import {Home,Archive,SquarePen,University,Shapes,} from "lucide-react"
import { usePathname } from 'next/navigation'

export const DashNavs = [
    {title:"Dashboard", icon: <Home className="h-5 w-5" />, url:'/dashboard'},
    {title:"Create Record", icon:<SquarePen className="h-5 w-5"/>, url:"/dashboard/create-data"},
    {title:'All Records', icon:<Archive className="h-5 w-5"/>, url:"/dashboard/all-records"},
    {title:'Schools', icon:<University className="h-5 w-5"/>, url:"/dashboard/schools"},
    {title:"Classes", icon:<Shapes className=" h-5 w-5" />, url:"/dashboard/classes"}
]

const DashNavLinks = () => {
    const pathname = usePathname()
  return (
    <div className=' space-y-5'>
        {DashNavs.map((item:{title:string; icon:any; url:string}, index: number) => (
             <Tooltip key={index}>
              <TooltipTrigger asChild>
                <Link
                  href={item.url}
                  className={` ${pathname === item.url ? 'bg-accent text-foreground' : 'text-muted-foreground hover:bg-muted'} flex h-9 w-9 items-center justify-center rounded-lg
                  transition-colors md:h-8 md:w-8`}
                >
                  {item.icon}
                  <span className="sr-only">{item.title}</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">{item.title}</TooltipContent>
        </Tooltip>
        ))}
       
    </div>
  )
}

export default DashNavLinks