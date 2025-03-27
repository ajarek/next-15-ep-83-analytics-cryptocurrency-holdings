"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function ModeToggle() {
  const { setTheme, theme } = useTheme();

  console.log(theme);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button   className=' w-8 h-8 rounded-full flex justify-center items-center hover:border-2 border-primary  transition-all delay-200 bg-secondary'>
          <Sun size={24} strokeWidth={1}  className=" rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon size={24} strokeWidth={1} className="absolute  rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("light")}>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          Dark
        </DropdownMenuItem>
      
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
