"use client"

import React, { createContext, useContext, useState } from "react"
import { Toast } from "../component/Toast"



const ToastContext = createContext()

export const ToastProvider = ({ children }) => {
  const [open, setOpen] = useState(false)
  const [toastData, setToastData] = useState({
    title: "",
    description: "",
    variant: "default",
    duration: 3000,
    position: "bottom-right",
  })

  const showToast = () => {
    setOpen(false)
    setTimeout(() => {
      setToastData(data)
      setOpen(true)
    }, 10)
  }

  return (
    <ToastContext.Provider value={{ showToast, setOpen }}>
      <Toast open={open} onOpenChange={setOpen} {...toastData} />
      {children}
    </ToastContext.Provider>
  )
}

export const useToast = () => {
  const context = useContext(ToastContext)
  if (!context) {
    throw new Error("useToast must be used within a ToastProvider")
  }
  return context
}
