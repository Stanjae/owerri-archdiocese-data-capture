import React from 'react'
import Image from "next/image"
import Owarch from '@/public/cropped-AB-Ugo-Logo-1-removebg-preview.png'

const LogoBrand = ({ ...props }) => (
    <Image
        src={Owarch}
        alt="Split logo"
        {...props}
        width={86}
        height={48}
        priority
    />
)
export default LogoBrand