import React from "react"
import Image from "next/image"
import Link from "next/link"
import Logo from '@/public/cropped-AB-Ugo-Logo-1-removebg-preview.png'
import {Home,
  LineChart,
  Package,
  Package2,
  PanelLeft,
  Search,
  Settings,
} from "lucide-react"

import { Button } from "@/components/ui/button"

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider
} from "@/components/ui/tooltip"
import DashNavLinks from "@/components/ui/navigation/DashNavLinks"
import MobileDashNavLinks from "@/components/ui/navigation/MobileDashNavLinks"
import DashBreadcrumbs from "@/components/ui/breadcrumbs/DashBreadcrumbs"
import SearchField from "@/components/ui/Inputs/SearchField"
import DashAvatar from "@/components/ui/avatars/DashAvatar"





export default async function DashBoardRootLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    
    return (
        <div className="flex min-h-screen w-full flex-col bg-muted/40">
        <aside className="fixed inset-y-0 left-0 z-10 hidden w-14 flex-col border-r bg-background sm:flex">
          <TooltipProvider>
          <nav className="flex flex-col items-center gap-4 px-2 sm:py-4">
            <Link
              href="#"
              className="group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full text-lg font-semibold text-primary-foreground md:h-8 md:w-8 md:text-base"
            >
              <Image priority alt="logo" width={32} height={32} src={Logo} className="h-7 w-7 transition-all group-hover:scale-110" />
              <span className="sr-only">ArchDiocese Cathedral</span>
            </Link>
        
           <DashNavLinks/>

          </nav>
          <nav className="mt-auto flex flex-col items-center gap-4 px-2 sm:py-4">
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="#"
                  className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                >
                  <Settings className="h-5 w-5" />
                  <span className="sr-only">Settings</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">Settings</TooltipContent>
            </Tooltip>
          </nav>
          </TooltipProvider>
        </aside>
        <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
          <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
            <Sheet>
              <SheetTrigger asChild>
                <Button size="icon" variant="outline" className="sm:hidden">
                  <PanelLeft className="h-5 w-5" />
                  <span className="sr-only">Toggle Menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="sm:max-w-xs">
                <nav className="grid gap-6 text-lg font-medium">
                  <Link
                    href="/"
                    className="group flex h-10 w-10 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:text-base"
                  >
                    <Image src={Logo} alt="logo" className="h-5 w-5 transition-all group-hover:scale-110" />
                    <span className="sr-only">Data Collection</span>
                  </Link>

                <MobileDashNavLinks/>
                  <Link
                    href="#"
                    className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                  >
                    <LineChart className="h-5 w-5" />
                    Settings
                  </Link>
                </nav>
              </SheetContent>
            </Sheet>
            <DashBreadcrumbs/>
            <SearchField/>
            <DashAvatar/>
          </header>
          {children}
        </div>
      </div>
    )
}