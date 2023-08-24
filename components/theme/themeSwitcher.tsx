"use client";
import React, { useState, useEffect, useMemo } from "react";
import { useTheme } from "next-themes";
import ModeNightIcon from "@mui/icons-material/ModeNight";
import WbSunnyIcon from "@mui/icons-material/WbSunny";

export const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <a
      className={`w-fit right-5 top-2 p-2 text-right rounded-md hover:scale-110 active:scale-100 duration-200 bg-slate-200 dark:bg-[#212933]`}
      onClick={() => {
        localStorage.setItem("them", theme === "dark" ? "light" : "dark");
        setTheme(theme === "dark" ? "light" : "dark");
      }}
    >
      {theme === "light" ? <ModeNightIcon /> : <WbSunnyIcon />}
    </a>
  );
};
