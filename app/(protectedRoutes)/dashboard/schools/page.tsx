import { DataTable } from '@/components/ui/dataTable/DataTable'
import React from 'react'
import { columns } from './_components/columns'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ListFilter } from 'lucide-react'
import { DropdownMenu, DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { CreateSchoolModal } from '@/components/ui/modals/CreateSchoolModal'
import { getSchools } from '@/app/data'
import { SchoolType } from '@/lib/definitions'
  


export default async function AllSchoolsPage(){
  const data:SchoolType = await getSchools()
    return(
      <div  className=' min-h-screen w-full bg-muted/40'>
        <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-2">
          <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
          <div className="ml-auto flex items-center gap-2">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" size="sm" className="h-7 gap-1">
                      <ListFilter className="h-3.5 w-3.5" />
                      <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                        Filter
                      </span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuLabel>Filter by</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuCheckboxItem  checked>
                      Active
                    </DropdownMenuCheckboxItem>
                    <DropdownMenuCheckboxItem>Draft</DropdownMenuCheckboxItem>
                    <DropdownMenuCheckboxItem>
                      Archived
                    </DropdownMenuCheckboxItem>
                  </DropdownMenuContent>
                </DropdownMenu>
                
               {/*  <Button size="sm" className="h-7 gap-1">
                  <PlusCircle className="h-3.5 w-3.5" />
                  <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                    Add Product
                  </span>
                </Button> */}
                <CreateSchoolModal/>
              
                
              </div>
            <Card x-chunk="dashboard-06-chunk-0">
                  <CardHeader>
                    <CardTitle>Schools ({data?.length})</CardTitle>
                    <CardDescription>
                      Manage your Schools and view their data.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <DataTable columns={columns} data={data} />
                  </CardContent>
            </Card>
        </main>
        </div>
        
      </div>
    )
}