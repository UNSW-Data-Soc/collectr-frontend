import React from "react";
import { cn } from "../../lib/utils";

export default function PageHeading({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) {
  return <h1 className={cn("text-4xl font-bold", className)}>{children}</h1>;
}
