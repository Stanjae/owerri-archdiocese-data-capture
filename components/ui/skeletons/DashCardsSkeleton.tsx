
import React from 'react'
import { Skeleton } from '../skeleton'
import { Card, CardContent, CardHeader, CardTitle } from '../card'
import { Backpack, GraduationCap, School, Users } from 'lucide-react'

const iconLists = [ 
    <GraduationCap className="h-4 w-4 text-muted-foreground" />,
    <School className="h-4 w-4 text-muted-foreground"/> ,
    <Backpack className="h-4 w-4 text-muted-foreground"/>,
    <Users className="h-4 w-4 text-muted-foreground"/>  
]

export const DashCardsSkeleton =()=>{
    return(
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {iconLists.map((item:any, index:number)=>(
                <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                    <Skeleton className="h-[14px] w-[75px] rounded-xl" />
                </CardTitle>
                {item}
                </CardHeader>
                <CardContent>
                <div className="text-2xl font-bold">
                    <Skeleton className="h-[24px] w-[50px] rounded-xl" />
                </div>
                <Skeleton className="h-[10px] mt-3 w-[250px] rounded-xl" />
                </CardContent>
            </Card>
            ))
            
        }
        </div>
    )
}