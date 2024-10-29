import React from 'react';
import {
    Alert,
    AlertDescription,
    AlertTitle,
  } from "@/components/ui/alert"

export const AuthAlert =({icon, title, message}:{icon:any; title:string; message:string})=>{
    return(
        <Alert>
            {icon}
      <AlertTitle>{title}</AlertTitle>
      <AlertDescription>
      {message}
      </AlertDescription>
    </Alert>
    )
}