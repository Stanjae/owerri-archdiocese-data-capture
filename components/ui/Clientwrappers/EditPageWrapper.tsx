'use client'
import React, { useState } from 'react'
import { WebcamCapture } from '../webcamCapture/WebCam'
import EditDataForm from '../forms/EditDataForm'
import { Button } from '../button';
import Image from 'next/image';
import { RefreshCcw } from 'lucide-react';


const EditPageWrapper = ({schools, student}:any) => {
  const [newImageUrl, setGetImageUrl] = useState<any>({publicUrl:student?.imageUrl})

  //console.log("wrapper:", newImageUrl)
  return (
    <main className="grid flex-1 gap-4 overflow-auto p-4 md:grid-cols-2 lg:grid-cols-3">
        <div className="relative hidden flex-col items-start gap-8 md:flex" x-chunk="dashboard-03-chunk-0">
           {newImageUrl ? <div className="space-y-3 p-2">
                <Image width={500} height={250} className=" object-cover w-64 h-32" src={newImageUrl?.publicUrl} alt="Preview"/>
                <Button onClick={()=> setGetImageUrl(null)}>
                <RefreshCcw className=" h-3 w-3 mr-3"/>Replace Image</Button>
            </div> 
            :
            <WebcamCapture setGetImageUrl={setGetImageUrl}/>}
        </div>
        <div className="relative rounded-xl bg-muted/50 p-4 lg:col-span-2">
              <EditDataForm student={student} schools={schools} getImageUrl={newImageUrl}/>
        </div>
    </main>
  )
}

export default EditPageWrapper
