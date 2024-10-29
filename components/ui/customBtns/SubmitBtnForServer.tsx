'use client'
import React from "react";
import { Button } from "../button";
import { Loader } from "lucide-react";
import { useFormStatus } from "react-dom";


export const SubmitBtnForServer =({btnText}:{btnText:string})=>{
    const {pending:isSubmitting} = useFormStatus()
    return(
        <Button disabled={isSubmitting} className=' w-full flex items-center'>
             {isSubmitting && <Loader className=" mr-3 animate-spin h-4 w-4"/>}
        {btnText}
        </Button>
    )
}