

import * as ToastPrimitive from "@radix-ui/react-toast"
import { X } from "lucide-react"
import { cn } from "../lib/utils"
import React from "react"


export function Toast({
  open,
  onOpenChange,
  title,
  description,
  variant = "default",
  duration = 3000,
  position = "bottom-right",
  className,
}) {
  return (
    <ToastPrimitive.Provider swipeDirection="right" duration={duration}>
      <ToastPrimitive.Root
        open={open}
        onOpenChange={onOpenChange}
        className={cn(
          "group pointer-events-auto relative flex lg:w-[25vw] w-[90vw] max-w-sm items-start justify-between space-x-2 overflow-hidden rounded-[12px] border-none p-4 pr-6 shadow-md transition-all",
          "data-[state=open]:animate-in data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-bottom-full",
          "data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none",
          "data-[swipe=cancel]:translate-x-0 data-[swipe=cancel]:transition-all",
          "data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=end]:transition-all data-[swipe=end]:duration-300 data-[swipe=end]:ease-out",
          position.includes("top") && "animate-in-from-top",
          position.includes("bottom") && "animate-in-from-bottom",
          !open && position.includes("top") && "animate-out-to-top",
          !open && position.includes("bottom") && "animate-out-to-bottom",
          variant === "destructive" && "border-red-800 bg-red-800 text-zinc-200",
          variant === "default" && "border bg-zinc-200 text-zinc-950",
          variant === "dark" && "bg-zinc-900 text-zinc-100",
          className
        )}
      >
        <div className="flex flex-col gap-1 text-sm">
          {title && <div className="font-semibold">{title}</div>}
          {description && <div className="opacity-90">{description}</div>}
        </div>
        <ToastPrimitive.Close
          className={cn(
            "absolute right-2 top-2 rounded-md p-1 transition-opacity opacity-0 group-hover:opacity-100 group-hover:delay-0 focus:outline-none cursor-pointer",
            variant === "default" ? "text-zinc-900/50 hover:text-zinc-950" : "text-zinc-300 hover:text-zinc-100"
          )}
        >
          <X className="h-4 w-4" />
        </ToastPrimitive.Close>
      </ToastPrimitive.Root>

      <ToastPrimitive.Viewport
        className={cn(
          "fixed z-[100] flex flex-col-reverse gap-1",
          position === "bottom-right" && "bottom-4 lg:right-4  transform lg:-translate-x-0 -translate-x-1/2  ",
          position === "bottom-left" && "bottom-4 lg:left-4 transform lg:-translate-x-0 -translate-x-1/2  ",
          position === "top-right" && "top-4 lg:right-4  transform lg:-translate-x-0 -translate-x-1/2 ",
          position === "top-left" && "top-4 lg:left-4 left-1/2 transform lg:-translate-x-0 -translate-x-1/2  ",
          position === "bottom" && "bottom-4 left-1/2 transform -translate-x-1/2",
          position === "top" && "top-4 left-1/2 transform -translate-x-1/2"
        )}
      />
    </ToastPrimitive.Provider>
  )
}
