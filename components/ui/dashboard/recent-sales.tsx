import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from '../avatar'
import { getRecentDataCaptureCount } from '@/app/data'
  
  export async function RecentSales() {
    const {data} = await getRecentDataCaptureCount()
    return (
      <div className="space-y-8">
        {data?.map((item:any, index:number)=>(
              <div  key={index} className="flex items-center">
              <Avatar className="h-9 w-9  uppercase">
                <AvatarImage src="/avatars/01.png" alt="Avatar" />
                <AvatarFallback>{item?.fullname?.slice(0,2)}</AvatarFallback>
              </Avatar>
              <div className="ml-4 space-y-1">
                <p className="text-sm font-medium leading-none">{item?.fullname}</p>
                <p className="text-sm text-muted-foreground">
                  {item?.school_id?.name}
                </p>
              </div>
              <div className="ml-auto font-medium">{item?.schoolclass + " "+  item?.class_arm}</div>
            </div>
        ))}
        
      </div>
    )
  }