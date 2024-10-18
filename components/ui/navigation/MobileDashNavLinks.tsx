'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import { DashNavs } from './DashNavLinks'

const MobileDashNavLinks = () => {
    const pathname = usePathname()
  return (
    <div className="space-y-6">
        {DashNavs.map((item:{title:string; icon:any; url:string})=>(
            <Link key={item.title} href={item.url}
                    className={`flex items-center gap-4 px-2.5 ${pathname ? "text-foreground":"text-muted-foreground"}
                    hover:text-foreground`}
                  >
                    {item.icon}
                    {item.title}
            </Link>
        ))}
    </div>
  )
}

export default MobileDashNavLinks