'use client'
import React from 'react'
import { createContext, useContext } from 'react'
import { GetUserType } from '../definitions'

const DataContext = createContext<any>(null)

export const ContextApi = ({children, initialData}:{children:any; initialData:GetUserType}) => {
  return (
    <DataContext.Provider value={initialData}>
      {children}
    </DataContext.Provider>
  )
}

export const useData = ()=> useContext(DataContext)
