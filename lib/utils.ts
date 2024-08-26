import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const updateTimezone = function (date: any) {
  date = new Date(date);
  const options = {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  };

  return date.toLocaleTimeString("en-US", options);
};

export const updateTimezone2 = function (date: any) {
  date = new Date(date);
  const options = {
    month: "2-digit",
    day: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  };

  const formattedDate = date.toLocaleDateString("en-US", options);
  const formattedTime = date.toLocaleTimeString("en-US", options);

  return `${formattedTime}`;
};

export function formatNumber(num:number) {
  if (num >= 1e9) {
      return (num / 1e9).toFixed(1) + 'G';
  }
  if (num >= 1e6) {
      return (num / 1e6).toFixed(1) + 'M';
  }
  if (num >= 1e3) {
      return (num / 1e3).toFixed(1) + 'K';
  }
  return num.toString();
}