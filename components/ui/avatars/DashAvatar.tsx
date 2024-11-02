import React from 'react'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '../dropdown-menu'
import AvatarBtn from '../customBtns/AvatarBtn'
import { Button } from '../button'
import { signOutAction } from '@/app/actions'



const DashAvatar = () => {
 
  return (
    <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline"
                  size="icon"
                  className="overflow-hidden rounded-full"
                >
                  <AvatarBtn/>
                </Button>
                
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Settings</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <form action={signOutAction}>
                    <Button variant="ghost" size={'sm'} className=' text-destructive' type='submit'>Logout</Button>
                    </form>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
  )
}

export default DashAvatar