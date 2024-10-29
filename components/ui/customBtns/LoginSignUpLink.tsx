'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import { Button } from '../button'

const LoginSignUpLink = () => {
    const pathname = usePathname()
    console.log(pathname)
  return (
    <>
    {pathname.includes('/sign-in') ? (
        <Link href="/sign-up">
          <Button variant={'ghost'}>Sign up</Button>
        </Link>
      )
    :(
      <Link href="/sign-in">
        <Button variant={'ghost'}>Sign in</Button>
      </Link>
    )}
    </>
  )
}

export default LoginSignUpLink
