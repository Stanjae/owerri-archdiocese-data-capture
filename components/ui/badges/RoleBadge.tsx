'use client'
import React from 'react'
import { Badge } from '../badge'
import { useData } from '@/lib/Providers/ContextApi'


export  const RoleBadge=()=>{
    const user  =  useData()
    return(
        <>
        {user?.userRole ==  "admin" &&
        <Badge className="outline-green-400 border-green-400 text-green-600" 
        variant="outline">{user?.userRole}</Badge>}
        
        {user?.userRole ==  "editor" &&<Badge className="outline-red-400 border-red-400 text-red-600" 
        variant="outline">{user?.userRole}</Badge>
        }
        </>
        
    )
}