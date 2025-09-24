"use client";

import * as React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "./utils";
import { buttonVariants } from "./button";

interface CalendarProps {
  className?: string;
  children?: React.ReactNode;
}

function Calendar({ className, children, ...props }: CalendarProps) {
  return (
    <div
      className={cn(
        "p-3 border border-gray-200 rounded-md bg-white",
        className
      )}
      {...props}
    >
      <div className="flex items-center justify-between mb-4">
        <button className={cn(buttonVariants({ variant: "outline", size: "sm" }))}>
          <ChevronLeft className="h-4 w-4" />
        </button>
        <div className="text-sm font-medium">Calendar</div>
        <button className={cn(buttonVariants({ variant: "outline", size: "sm" }))}>
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>
      {children}
    </div>
  );
}

export { Calendar };