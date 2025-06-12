import React from "react";
import { twMerge } from 'tailwind-merge'

export default function Button({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div 
      tabIndex={0} 
      className={twMerge(
        "bg-stone-600 text-white text-xl rounded w-fit py-3 px-6 cursor-pointer hover:bg-stone-500 transition flex gap-3 items-center",
        className
      )}
      {...props} 
    />
  )
}