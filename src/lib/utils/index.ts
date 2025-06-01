import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export default function openFile(file: string) {
  const fileName = file.toLowerCase().replace(/[.\s-]+/g, "_").replace(/[_]+/g, "_");
  return window.open(`/resumes/${fileName}.pdf`, '_blank');
}
