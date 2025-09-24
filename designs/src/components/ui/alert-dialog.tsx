"use client";

import * as React from "react";
import { cn } from "./utils";
import { buttonVariants } from "./button";

interface AlertDialogProps {
  children: React.ReactNode;
}

function AlertDialog({ children }: AlertDialogProps) {
  return <div className="fixed inset-0 z-50 flex items-center justify-center">{children}</div>;
}

interface AlertDialogTriggerProps {
  children: React.ReactNode;
  onClick?: () => void;
}

function AlertDialogTrigger({ children, onClick }: AlertDialogTriggerProps) {
  return (
    <button onClick={onClick} className="inline-flex">
      {children}
    </button>
  );
}

interface AlertDialogContentProps {
  children: React.ReactNode;
  className?: string;
}

function AlertDialogContent({ children, className }: AlertDialogContentProps) {
  return (
    <div
      className={cn(
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 sm:rounded-lg",
        className
      )}
    >
      {children}
    </div>
  );
}

interface AlertDialogHeaderProps {
  children: React.ReactNode;
  className?: string;
}

function AlertDialogHeader({ children, className }: AlertDialogHeaderProps) {
  return <div className={cn("flex flex-col space-y-2 text-center sm:text-left", className)}>{children}</div>;
}

interface AlertDialogFooterProps {
  children: React.ReactNode;
  className?: string;
}

function AlertDialogFooter({ children, className }: AlertDialogFooterProps) {
  return (
    <div className={cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className)}>
      {children}
    </div>
  );
}

interface AlertDialogTitleProps {
  children: React.ReactNode;
  className?: string;
}

function AlertDialogTitle({ children, className }: AlertDialogTitleProps) {
  return <h2 className={cn("text-lg font-semibold", className)}>{children}</h2>;
}

interface AlertDialogDescriptionProps {
  children: React.ReactNode;
  className?: string;
}

function AlertDialogDescription({ children, className }: AlertDialogDescriptionProps) {
  return <p className={cn("text-sm text-muted-foreground", className)}>{children}</p>;
}

interface AlertDialogActionProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

function AlertDialogAction({ children, className, onClick }: AlertDialogActionProps) {
  return (
    <button
      className={cn(buttonVariants(), className)}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

interface AlertDialogCancelProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

function AlertDialogCancel({ children, className, onClick }: AlertDialogCancelProps) {
  return (
    <button
      className={cn(buttonVariants({ variant: "outline" }), "mt-2 sm:mt-0", className)}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogFooter,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogAction,
  AlertDialogCancel,
};