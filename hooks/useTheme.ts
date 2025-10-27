// import { useCallback, useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { setTheme as setThemeAction } from "@/redux/features/themeSlice";
// import { IRootState } from "@/redux/rootReducer";

// export function useTheme() {
//   const dispatch = useDispatch();
//   const theme = useSelector((state: IRootState) => state.theme.theme);

//   // Update DOM class for dark mode based on Redux store value
//   useEffect(() => {
//     if (theme === "dark") {
//       document.documentElement.classList.add("dark");
//     } else {
//       document.documentElement.classList.remove("dark");
//     }
//   }, [theme]);

//   // Toggle theme and update Redux store
//   const toggleTheme = useCallback(() => {
//     const newTheme = theme === "light" ? "dark" : "light";

//     if (newTheme === "dark") {
//       document.documentElement.classList.add("dark");
//     } else {
//       document.documentElement.classList.remove("dark");
//     }

//     dispatch(setThemeAction(newTheme));
//   }, [dispatch, theme]);

//   return { theme, toggleTheme };
// }

import { useEffect, useState } from "react";

export function useTheme() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      document.documentElement.classList.add("dark");
      setTheme("dark");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);

    if (newTheme === "dark") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  return { theme, toggleTheme };
}
