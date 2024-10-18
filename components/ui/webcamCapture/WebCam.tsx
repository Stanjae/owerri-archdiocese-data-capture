'use client'
import Image from 'next/image';
import React from 'react'
import Webcam from 'react-webcam';
import { Button } from '../button';
import { Camera } from 'lucide-react';

const videoConstraints = {
    width: 1280,
    height: 720,
    facingMode: "user"
  };
  
 export const WebcamCapture = () => {
    const webcamRef = React.useRef(null);
    const [imgSrc, setImgSrc] = React.useState<any>();

    const capture = React.useCallback(() => {
        const imageSrc = webcamRef?.current?.getScreenshot();
        setImgSrc(imageSrc)
      },
      [webcamRef]
    );

    return (
      <div>
      {imgSrc && <Image width={500} height={500} src={imgSrc} alt="jus"/>}
        <div className=" border-4 border-primary">
            <Webcam
            audio={false}
            height={720}
            ref={webcamRef}
            screenshotFormat="image/jpeg"
            width={1280}
            videoConstraints={videoConstraints}
            />
        </div>
        <div className=' py-2 flex gap-3 justify-center items-center'>
            <Button onClick={()=> setImgSrc("")} variant={'destructive'} size={'default'}>Cancel Photo</Button>
            <Button onClick={capture} variant={'outline'} size={'default'}>
            <Camera className="mr-4 h-4 w-4" />Capture</Button>
        </div>
        <WebcamCapture02/>
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