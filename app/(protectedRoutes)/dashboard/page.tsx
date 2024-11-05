import { Metadata } from "next"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
//import { CalendarDateRangePicker } from "@/app/(app)/examples/dashboard/components/date-range-picker"
//import { MainNav } from "@/components/ui/dashboard/main-nav"
import { Overview } from "@/components/ui/dashboard/overview"
import { RecentSales } from "@/components/ui/dashboard/recent-sales"
//import { Search } from "@/components/ui/dashboard/search-input"
//import TeamSwitcher from "@/components/ui/dashboard/team-switcher"
//import { UserNav } from "@/components/ui/dashboard/user-nav"
import DashCardsWrapper from "@/components/ui/ServerWrappers/DashCardsWrapper"
import { Suspense } from "react"
import { DashCardsSkeleton } from "@/components/ui/skeletons/DashCardsSkeleton"
import { getRecentDataCaptureCount } from "@/app/data"
import { RecentSalesSkeleton } from "@/components/ui/skeletons/RecentSalesSkeleton"
import WelcomeText from "@/components/ui/Typography/WelcomeText"

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Example dashboard app built using the components.",
}

export default async function DashboardPage() {
    const {rangeCount} = await getRecentDataCaptureCount()
  return (
    <>
      <div className="hidden flex-col md:flex">
        
        <div className="flex-1 space-y-4 p-8 pt-6">
          <div className="flex items-center justify-between space-y-2">
            <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
            <div className="flex items-center space-x-2">
              {/* <CalendarDateRangePicker /> */}
              <WelcomeText/>
            </div>
          </div>
          <Tabs defaultValue="overview" className="space-y-4">
            <TabsList>
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="analytics" disabled>
                Analytics
              </TabsTrigger>
              <TabsTrigger value="reports" disabled>
                Reports
              </TabsTrigger>
              <TabsTrigger value="notifications" disabled>
                Notifications
              </TabsTrigger>
            </TabsList>
            <TabsContent value="overview" className="space-y-4">
              <Suspense fallback={<DashCardsSkeleton/>}>
                <DashCardsWrapper/>
              </Suspense>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                <Card className="col-span-4">
                  <CardHeader>
                    <CardTitle>Overview</CardTitle>
                  </CardHeader>
                  <CardContent className="pl-2">
                    <Overview />
                  </CardContent>
                </Card>
                <Card className="col-span-3">
                  <CardHeader>
                    <CardTitle>Recent Data Capture</CardTitle>
                    <CardDescription>
                      You made {rangeCount} inserts this month.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Suspense fallback={<RecentSalesSkeleton/>}>
                      <RecentSales />
                    </Suspense>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </>
  )
}