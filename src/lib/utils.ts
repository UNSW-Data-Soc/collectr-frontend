import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

// utility function for managing tailwind classes
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
