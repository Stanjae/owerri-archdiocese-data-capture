'use client'
import Image from 'next/image';
import React, { useState } from 'react'
import Webcam from 'react-webcam';
import { Button } from '../button';
import { Camera, SaveIcon, } from 'lucide-react';
import { Label } from '../label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../select';

import { supabase } from '@/utils/supabase/client';
import { base64ToBlob} from '@/lib/clientFuntions';
import PreviewImage from '../modals/PreviewImage';
import { toast } from 'sonner';
import { supaStoreImageUpload } from '@/lib/definitions';
import dayjs from 'dayjs'

const videoConstraints = {
    width: 1280,
    height: 720,
  };
  
  const promise = () => new Promise((resolve) => setTimeout(() => resolve({ name: 'Sonner' }), 2000));
  
 export const WebcamCapture = ({setGetImageUrl}:any) => {
    const webcamRef = React.useRef<Webcam>(null);
    const [imgSrc, setImgSrc] = useState<any>();

    const [newdeviceId, setDeviceId] = useState<any>(null);
    const [devices, setDevices] = useState([]);

    const [previewImage, setPreviewImage] = useState<any>();

    const [fileName, setFileName] = useState<any>("");

  
    const handleDevices = React.useCallback(
      (mediaDevices:any) =>
        setDevices(mediaDevices.filter(({ kind }:any) => kind === "videoinput")),
      [setDevices]
    );
  
    React.useEffect(
      () => {
        navigator.mediaDevices.enumerateDevices().then(handleDevices);
      },
      [handleDevices]
    );

    const capture = React.useCallback(async() => {
        const imageSrc = webcamRef?.current?.getScreenshot();
        const mimeType = 'image/jpeg';
        const blob = await base64ToBlob(imageSrc, mimeType);
        setPreviewImage(imageSrc)
        setFileName(imageSrc?.slice(30,45) + dayjs().format('HH-mm-ss').toString() + ".jpg");
        setImgSrc(blob)
      },
      [webcamRef]
    );

    const saveToBucket: supaStoreImageUpload =async()=>{
      const file = new File([imgSrc], `${fileName}`, { type: 'image/jpeg' });
        const { data, error } = await supabase.storage.from('student-images').upload(`student-profile-images/${fileName}`, file, {
            cacheControl: '3600',
            upsert: false
          })
        return data?.path
    }
   
    const getImageUrl = async(filepath:any) => {
      const { data } = await supabase.storage
        .from('student-images')
        .getPublicUrl(filepath);
      console.log("a knight: ", data)
      setGetImageUrl(data)
    };

    const saveImageTransaction =async()=>{
       try{
         const getImagePath = await saveToBucket()
         await getImageUrl(getImagePath);
         toast.promise(promise, {
          loading: 'Loading...',
          success: () => {
            return `Student Image has been Uploaded Sucessfully`;
          },
          error: 'Something went wrong',
        });
      }catch(err){
        toast.error("A bug was detected!")
      }
    }
    
    return (
      <div>
        <div className=" border-4 border-primary">
          {newdeviceId ?
            <Webcam
            audio={false}
            height={720}
            ref={webcamRef}
            screenshotFormat="image/jpeg"
            width={1280}
            mirrored={true}
            videoConstraints={{...videoConstraints, deviceId:newdeviceId}}
            
            />:
            <Image width={500} height={500} className=" h-32 w-full" src="https://fakeimg.pl/500x500"alt="no image"/>
            }
        </div>
        <div className=' py-2 flex gap-3 justify-center items-center'>
            <Button onClick={()=> setImgSrc("")} variant={'destructive'} size={'default'}>Cancel Photo</Button>
            <Button onClick={capture} variant={'outline'} size={'default'}>
              <Camera className="mr-4 h-4 w-4" />Capture
            </Button>
        </div>
        {imgSrc && (
          <div className=' py-2 flex gap-3 justify-center items-center'>
           <PreviewImage imageUrl={previewImage}/>
          <Button className=' bg-green-600 text-white hover:bg-green-400' onClick={saveImageTransaction} variant={'default'} size={'default'}>
            <SaveIcon className="mr-4 h-4 w-4" />Save
          </Button>
      </div>
        )}

        <form className="grid w-full items-start gap-6">
            
          <fieldset className="grid gap-6 rounded-lg border p-4">
            <legend className="-ml-1 px-1 text-sm font-medium">
              Choose Camera Model
            </legend>
            <div className="grid gap-3">
              <Label htmlFor="role">Model</Label>
              <Select onValueChange={(e)=> setDeviceId(e)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select a camera model" />
                </SelectTrigger>
                <SelectContent>
                {devices && devices?.map((device:any, index:number) => (
                   <SelectItem key={index} value={device?.deviceId || "hay"}>{device?.label}</SelectItem>
                ))}
                </SelectContent>
              </Select>
            </div>
          </fieldset> 
        </form>
      </div>
    );
  };




  const WebcamCapture02 = () => {
    const [deviceId, setDeviceId] = React.useState({});
    const [devices, setDevices] = React.useState([]);
  
    const handleDevices = React.useCallback(
      (mediaDevices:any) =>
        setDevices(mediaDevices.filter(({ kind }:any) => kind === "videoinput")),
      [setDevices]
    );
  
    React.useEffect(
      () => {
        navigator.mediaDevices.enumerateDevices().then(handleDevices);
      },
      [handleDevices]
    );
    console.log("sansa: ",devices)
    return (
      <>
        {devices.map((device:any, key:any) => (
            <div>
              <Webcam audio={false} videoConstraints={{ deviceId: device?.deviceId }} />
              {device?.label || `Device ${key + 1}`}
            </div>
  
          ))}
      </>
    );
  };