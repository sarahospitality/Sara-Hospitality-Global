"use client";

import * as React from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { cn } from "./utils";
import { Button } from "./button";

interface CarouselProps {
  className?: string;
  children: React.ReactNode;
}

function Carousel({ className, children, ...props }: CarouselProps) {
  return (
    <div
      className={cn("relative overflow-hidden", className)}
      {...props}
    >
      {children}
    </div>
  );
}

interface CarouselContentProps {
  className?: string;
  children: React.ReactNode;
}

function CarouselContent({ className, children, ...props }: CarouselContentProps) {
  return (
    <div
      className={cn("flex", className)}
      {...props}
    >
      {children}
    </div>
  );
}

interface CarouselItemProps {
  className?: string;
  children: React.ReactNode;
}

function CarouselItem({ className, children, ...props }: CarouselItemProps) {
  return (
    <div
      className={cn("min-w-0 shrink-0 grow-0 basis-full", className)}
      {...props}
    >
      {children}
    </div>
  );
}

interface CarouselPreviousProps {
  className?: string;
  onClick?: () => void;
}

function CarouselPrevious({ className, onClick, ...props }: CarouselPreviousProps) {
  return (
    <Button
      variant="outline"
      size="icon"
      className={cn("absolute left-2 top-1/2 -translate-y-1/2", className)}
      onClick={onClick}
      {...props}
    >
      <ArrowLeft className="h-4 w-4" />
    </Button>
  );
}

interface CarouselNextProps {
  className?: string;
  onClick?: () => void;
}

function CarouselNext({ className, onClick, ...props }: CarouselNextProps) {
  return (
    <Button
      variant="outline"
      size="icon"
      className={cn("absolute right-2 top-1/2 -translate-y-1/2", className)}
      onClick={onClick}
      {...props}
    >
      <ArrowRight className="h-4 w-4" />
    </Button>
  );
}

export {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
};