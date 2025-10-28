import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setTheme as setThemeAction } from "@/redux/features/theme/themeSlice";
import { IRootState } from "@/redux/rootReducer";

// The useTheme hook that toggles the theme and updates the Redux store.
export function useTheme() {
  const dispatch = useDispatch();
  const theme = useSelector((state: IRootState) => state.theme.theme);

  // Update DOM class for dark mode based on Redux store value
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  // Toggle theme and update Redux store
  const toggleTheme = useCallback(() => {
    const newTheme = theme === "light" ? "dark" : "light";

    if (newTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    dispatch(setThemeAction(newTheme));
  }, [dispatch, theme]);

  return { theme, toggleTheme };
}
