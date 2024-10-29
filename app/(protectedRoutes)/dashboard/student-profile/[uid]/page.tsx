import React from 'react'
import {
    Bird,
    Rabbit,
    Settings,
    Share,
   
    Turtle,
  } from "lucide-react"
  
  import { Badge } from "@/components/ui/badge"
  import { Button } from "@/components/ui/button"
  import {
    Drawer,
    DrawerContent,
    DrawerDescription,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
  } from "@/components/ui/drawer"
  import { Input } from "@/components/ui/input"
  import { Label } from "@/components/ui/label"
  import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
  import { Textarea } from "@/components/ui/textarea"


import { getDetailedStudent } from "@/app/data"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { bgImages } from "@/lib/classes"
import Image from 'next/image'
import AgeTypography from "@/components/ui/Typography/AgeTypography"
import { Separator } from "@/components/ui/separator"
import { DetailedStudentType } from "@/lib/definitions"
import { Metadata } from "next"
  
export const metadata: Metadata = {
  title: "Create Record | Dashboard",
  description: "Authentication forms built using the components.",
}

  
const imageIndex = Math.random() * bgImages.length;

  
  export default async function StudentProfilePage({params}:{params:{uid:string | number}}) {
    const studentData:DetailedStudentType = await getDetailedStudent(params.uid)
   
    return (
      <div className="grid min-h-dvh w-full pl-[53px]">
        <div className="flex flex-col">
          <header className="sticky top-0 z-10 flex h-[53px] items-center gap-1 border-b bg-background px-4">
            <h1 className="text-xl font-semibold">Student Profile</h1>
            <Drawer>
              <DrawerTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Settings className="size-4" />
                  <span className="sr-only">Settings</span>
                </Button>
              </DrawerTrigger>
              <DrawerContent className="max-h-[80vh]">
                <DrawerHeader>
                  <DrawerTitle>Configuration</DrawerTitle>
                  <DrawerDescription>
                    Configure the settings for the model and messages.
                  </DrawerDescription>
                </DrawerHeader>
                <form className="grid w-full items-start gap-6 overflow-auto p-4 pt-0">
                  <fieldset className="grid gap-6 rounded-lg border p-4">
                    <legend className="-ml-1 px-1 text-sm font-medium">
                      Settings
                    </legend>
                    <div className="grid gap-3">
                      <Label htmlFor="model">Model</Label>
                      <Select>
                        <SelectTrigger
                          id="model"
                          className="items-start [&_[data-description]]:hidden"
                        >
                          <SelectValue placeholder="Select a model" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="genesis">
                            <div className="flex items-start gap-3 text-muted-foreground">
                              <Rabbit className="size-5" />
                              <div className="grid gap-0.5">
                                <p>
                                  Neural{" "}
                                  <span className="font-medium text-foreground">
                                    Genesis
                                  </span>
                                </p>
                                <p className="text-xs" data-description>
                                  Our fastest model for general use cases.
                                </p>
                              </div>
                            </div>
                          </SelectItem>
                          <SelectItem value="explorer">
                            <div className="flex items-start gap-3 text-muted-foreground">
                              <Bird className="size-5" />
                              <div className="grid gap-0.5">
                                <p>
                                  Neural{" "}
                                  <span className="font-medium text-foreground">
                                    Explorer
                                  </span>
                                </p>
                                <p className="text-xs" data-description>
                                  Performance and speed for efficiency.
                                </p>
                              </div>
                            </div>
                          </SelectItem>
                          <SelectItem value="quantum">
                            <div className="flex items-start gap-3 text-muted-foreground">
                              <Turtle className="size-5" />
                              <div className="grid gap-0.5">
                                <p>
                                  Neural{" "}
                                  <span className="font-medium text-foreground">
                                    Quantum
                                  </span>
                                </p>
                                <p className="text-xs" data-description>
                                  The most powerful model for complex
                                  computations.
                                </p>
                              </div>
                            </div>
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="grid gap-3">
                      <Label htmlFor="temperature">Temperature</Label>
                      <Input id="temperature" type="number" placeholder="0.4" />
                    </div>
                    <div className="grid gap-3">
                      <Label htmlFor="top-p">Top P</Label>
                      <Input id="top-p" type="number" placeholder="0.7" />
                    </div>
                    <div className="grid gap-3">
                      <Label htmlFor="top-k">Top K</Label>
                      <Input id="top-k" type="number" placeholder="0.0" />
                    </div>
                  </fieldset>
                  <fieldset className="grid gap-6 rounded-lg border p-4">
                    <legend className="-ml-1 px-1 text-sm font-medium">
                      Messages
                    </legend>
                    <div className="grid gap-3">
                      <Label htmlFor="role">Role</Label>
                      <Select defaultValue="system">
                        <SelectTrigger>
                          <SelectValue placeholder="Select a role" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="system">System</SelectItem>
                          <SelectItem value="user">User</SelectItem>
                          <SelectItem value="assistant">Assistant</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="grid gap-3">
                      <Label htmlFor="content">Content</Label>
                      <Textarea id="content" placeholder="You are a..." />
                    </div>
                  </fieldset>
                </form>
              </DrawerContent>
            </Drawer>
            <Button
              variant="outline"
              size="sm"
              className="ml-auto gap-1.5 text-sm"
            >
              <Share className="size-3.5" />
              Share
            </Button>
          </header>
          {/* student details */}

          <main className="grid flex-1 gap-4 overflow-auto p-4 md:grid-cols-2 lg:grid-cols-3">
              <div className="relative hidden flex-col items-start gap-8 md:flex" x-chunk="dashboard-03-chunk-0">
                <Card className=" w-full text-center">
                    <div className={` bg07 h-44  bg-cover bg-no-repeat`}/>
                    <Image className=" object-cover z-40 rounded-full w-[160px] -mt-[88px] h-[160px] block mx-auto" width={500} 
                    height={500} src={studentData?.imageUrl} alt="profile picture"/>
                  <CardHeader>
                    <CardTitle>{studentData?.fullname}</CardTitle>
                    <CardDescription><AgeTypography age={studentData?.date_of_birth}/></CardDescription>
                    <CardDescription>{studentData?.gender}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className=" text-sm ">Student at {studentData?.school_id?.name}</p>
                  </CardContent>
                </Card>

              </div>
              <div className="relative rounded-xl space-y-4 bg-muted/50 px-4 lg:col-span-2">
                <Card className=" w-full">
                  <CardHeader className=" flex justify-between flex-row items-center">
                    <CardTitle className=" text-xl">Student Information</CardTitle>
                    <Badge variant="destructive">Posted by Stephen hawkins</Badge>
                  </CardHeader>
                  <Separator/>
                  <CardContent>
                    <ul className=" py-4">
                      <li className=" flex p-2 gap-x-3 items-center">
                        <span className=" font-semibold">FullName :</span> <p>{studentData?.fullname}</p>
                      </li>
                      <li className=" flex p-2 gap-x-3 items-center">
                        <span className=" font-semibold">Date of Birth :</span> <p>{studentData?.date_of_birth}</p>
                      </li>
                      <li className=" flex p-2 gap-x-3 items-center">
                        <span className=" font-semibold">Gender :</span> <p>{studentData?.gender}</p>
                      </li>
                      <li className=" flex p-2 gap-x-3 items-center">
                        <span className=" font-semibold">Residential Address :</span> <p>{studentData?.address}</p>
                      </li>
                      <li className=" flex p-2 gap-x-5 justify-between items-center">
                          <div className=" flex py-2 gap-x-3 items-center">
                            <span className=" font-semibold">State of Origin:</span> <p>{studentData?.state_of_origin}</p>
                          </div>
                          <div className=" flex px-2 gap-x-3 items-center">
                            <span className=" font-semibold">LGA:</span> <p>{studentData?.lga}</p>
                          </div>
                      </li>
                      <li className=" flex p-2 gap-x-5 justify-between items-center">
                          <div className=" flex py-2 gap-x-3 items-center">
                            <span className=" font-semibold">Next of Kin</span> <p>{studentData?.next_of_kin}</p>
                          </div>
                          <div className=" flex px-2 gap-x-3 items-center">
                            <span className=" font-semibold">Phone no. of Next of Kin</span> <p>{studentData?.phone_next_of_kin}</p>
                          </div>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className=" w-full">
                  <CardHeader>
                    <CardTitle className=" text-xl">Academic Information</CardTitle>
                  </CardHeader>
                  <Separator/>
                  <CardContent>
                    <ul className=" py-4">
                      <li className=" flex p-2 gap-x-3 items-center">
                        <span className=" font-semibold">School:</span> <p>{studentData?.school_id?.name}</p>
                      </li>
                      <li className=" flex p-2 gap-x-3 items-center">
                        <span className=" font-semibold">Class:</span> <p>{studentData?.schoolclass + " "+ studentData?.class_arm}</p>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
          </main>
        </div>
      </div>
    )
  }
  