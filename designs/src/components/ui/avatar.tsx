"use client";

import * as React from "react";
import { cn } from "./utils";

interface AvatarProps {
  className?: string;
  children: React.ReactNode;
}

function Avatar({ className, children, ...props }: AvatarProps) {
  return (
    <div
      className={cn(
        "relative flex size-10 shrink-0 overflow-hidden rounded-full",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

interface AvatarImageProps {
  className?: string;
  src?: string;
  alt?: string;
}

function AvatarImage({ className, src, alt, ...props }: AvatarImageProps) {
  return (
    <img
      className={cn("aspect-square size-full", className)}
      src={src}
      alt={alt}
      {...props}
    />
  );
}

interface AvatarFallbackProps {
  className?: string;
  children: React.ReactNode;
}

function AvatarFallback({ className, children, ...props }: AvatarFallbackProps) {
  return (
    <div
      className={cn(
        "bg-muted flex size-full items-center justify-center rounded-full",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export { Avatar, AvatarImage, AvatarFallback };