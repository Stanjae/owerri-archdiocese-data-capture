import React from 'react'
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
  } from "../card"
import { Backpack, GraduationCap, School, Users } from 'lucide-react'
import { getUserCardAnalysis } from '@/app/data'

const DashCardsWrapper = async() => {
  const {studentsCount, studentsByUserCount, schoolsCount, usersCount}:any =  await getUserCardAnalysis()

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                      Total Students
                    </CardTitle>
                    <GraduationCap className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{studentsCount?.count}</div>
                    <p className="text-xs text-muted-foreground">
                      All time
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                      No of Schools
                    </CardTitle>
                    <School className="h-4 w-4 text-muted-foreground"/>     
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{schoolsCount?.count}</div>
                    <p className="text-xs text-muted-foreground">
                      All time
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium"> No of Students Created by User</CardTitle>
                    <Backpack className="h-4 w-4 text-muted-foreground"/>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{studentsByUserCount?.count}</div>
                    <p className="text-xs text-muted-foreground">
                      All time
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                      No of Users
                    </CardTitle>
                    <Users className="h-4 w-4 text-muted-foreground"/>  
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{usersCount?.count}</div>
                    <p className="text-xs text-muted-foreground">
                      All time
                    </p>
                  </CardContent>
                </Card>
              </div>
  )
}

export default DashCardsWrapper
