'use client'
import React, { useState } from 'react'
import { WebcamCapture } from '../webcamCapture/WebCam'
import CreateDataForm from '../forms/CreateDataForm'

const CretePageWrapper = ({schools}:any) => {
  const [newImageUrl, setGetImageUrl] = useState<any>()

  console.log("wrapper:", newImageUrl)
  return (
    <main className="grid flex-1 gap-4 overflow-auto p-4 md:grid-cols-2 lg:grid-cols-3">
            <div
              className="relative hidden flex-col items-start gap-8 md:flex" x-chunk="dashboard-03-chunk-0"
            >
            <WebcamCapture setGetImageUrl={setGetImageUrl}/>
            </div>
            <div className="relative rounded-xl bg-muted/50 p-4 lg:col-span-2">
              <CreateDataForm schools={schools} getImageUrl={newImageUrl}/>
            </div>
          </main>
  )
}

export default CretePageWrapper
