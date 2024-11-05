import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from '../avatar'
import { Skeleton } from '../skeleton'

const guntry  =  Array(5).fill("_", 0,5)
  
  export function RecentSalesSkeleton() {
    return (
      <div className="space-y-8">
        {guntry.map((item:any)=>(
           <div key={item} className="flex items-center">
          <Avatar className="h-9 w-9">
            <Skeleton className="h-[100%] w-full rounded-full" />
          </Avatar>
          <div className="ml-4 space-y-1">
            <Skeleton className="text-sm font-medium leading-none h-[14px] w-[75px] rounded-xl" />
            <Skeleton   className="text-sm font-medium leading-none h-[12px] w-[50px] rounded-xl"/>
          </div>
          <div className="ml-auto font-medium">
            <Skeleton className="h-[8px] w-[16px] rounded-xl"/>
          </div>
        </div> 
        ))}
        
      </div>
    )
  }