

import React, { createContext, useContext, useState } from "react"
import { Toast } from "../component/Toast.jsx"


const ToastContext = createContext();


export function ToastProvider({ children }) {
  const [open, setOpen] = useState(false);
  const [toastData, setToastData] = useState({
    title: "",
    description: "",
    variant: "default",
    duration: 3000,
    position: "bottom-right",
    className:"",
  });

  const showToast = ({ title, description, variant = "default", duration = 3000, position = "bottom-right",className }) => {
    setOpen(false);
    setTimeout(() => {
      setToastData({ title, description, variant, duration, position,className });
      setOpen(true);
    }, 10);
  };

  return (
    <ToastContext.Provider value={{ showToast,setOpen }}>
      <Toast open={open} onOpenChange={setOpen} {...toastData} />
      {children}
    </ToastContext.Provider>
  );
}

// Hook
export const useToast = () => useContext(ToastContext);
