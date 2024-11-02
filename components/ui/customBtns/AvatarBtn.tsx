'use client'
import { useData } from '@/lib/Providers/ContextApi'
import { Avatar, AvatarFallback } from '../avatar'
import React from 'react'
import { Button } from '../button'

const AvatarBtn = () => {
    const user = useData()
  return (
    
    <Avatar>
      <AvatarFallback className=' uppercase'>{user?.email?.slice(0,2)}</AvatarFallback>
    </Avatar>
            
  )
}

export default AvatarBtn
