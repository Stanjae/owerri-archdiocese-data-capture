'use client'
import relativeTime from "dayjs/plugin/relativeTime";
import dayjs from "dayjs";
import React from 'react'

dayjs.extend(relativeTime)

const AgeTypography = ({age}:any) => {
  return (
    <>
      {dayjs(age).fromNow(true)}
    </>
  )
}

export default AgeTypography
