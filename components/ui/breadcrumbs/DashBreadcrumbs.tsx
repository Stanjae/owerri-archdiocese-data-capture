'use client'
import React from 'react'
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '../breadcrumb'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const DashBreadcrumbs = () => {
    const pathname = usePathname()
    const breads = pathname.split("/")
  return (
    <div>
        <Breadcrumb className="hidden md:flex">
              <BreadcrumbList>
              {breads.map((bread, index) => (
                <div className=" flex items-center" key={index}>
                  <BreadcrumbItem>
                    <BreadcrumbLink asChild>
                    <Link className='capitalize' href={`${breads.slice(0, index + 1).join("/")}`}>{bread}</Link>
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                 {bread != "" && <BreadcrumbSeparator />}
                </div>
              ))
              }
              </BreadcrumbList>
        </Breadcrumb>
    </div>
  )
}

export default DashBreadcrumbs