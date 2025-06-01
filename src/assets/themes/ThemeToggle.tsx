"use client"
import { Button } from "@/components/ui/button";
import { SunIcon, MoonIcon, SunMoon } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuCheckboxItem,
  DropdownMenuSeparator
} from "@/components/ui/dropdown-menu"

const ThemeToggle = () => {
  const [mounted, setMounted] = useState<boolean>(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null;

  const renderedUi = theme === "system" ? (
    <SunMoon />
  ) : theme === "dark" ? (
    <SunIcon />
  ) : (
    <MoonIcon />
  )

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant={"ghost"}
          className="focus-visible:ring-0
                        focus-visible:ring-offset-0
                        "
        >
          {
            renderedUi
          }
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuCheckboxItem
          checked={theme === "system"}
          onClick={() => setTheme("system")}
        >
          System
        </DropdownMenuCheckboxItem>
        <DropdownMenuSeparator />
        <DropdownMenuCheckboxItem
          checked={theme === "dark"}
          onClick={() => setTheme("dark")}
        >
          Dark
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          checked={theme === "light"}
          onClick={() => setTheme("light")}
        >
          Light
        </DropdownMenuCheckboxItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default ThemeToggle;