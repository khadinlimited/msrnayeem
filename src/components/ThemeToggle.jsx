import React from 'react';
import { Moon, Sun, Laptop } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useTheme } from '@/components/ThemeProvider';

export function ThemeToggle() {
  const { setTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon" className="bg-transparent border-slate-700 hover:bg-slate-800 text-white dark:text-white light:text-slate-900 light:border-slate-200 light:hover:bg-slate-100 transition-colors">
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 .light:hidden block" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 .light:hidden block" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="bg-slate-900 border-slate-800 light:bg-white light:border-slate-200">
        <DropdownMenuItem onClick={() => setTheme("light")} className="hover:bg-slate-800 focus:bg-slate-800 light:hover:bg-slate-100 light:focus:bg-slate-100 cursor-pointer text-white light:text-slate-900">
          <Sun className="mr-2 h-4 w-4" />
          <span>Light</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")} className="hover:bg-slate-800 focus:bg-slate-800 light:hover:bg-slate-100 light:focus:bg-slate-100 cursor-pointer text-white light:text-slate-900">
          <Moon className="mr-2 h-4 w-4" />
          <span>Dark</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")} className="hover:bg-slate-800 focus:bg-slate-800 light:hover:bg-slate-100 light:focus:bg-slate-100 cursor-pointer text-white light:text-slate-900">
          <Laptop className="mr-2 h-4 w-4" />
          <span>System</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}