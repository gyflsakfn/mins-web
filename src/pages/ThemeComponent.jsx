
import { useThemeContext } from '../context/ThemeContext'
import { useEffect } from "react";

const ThemeComponent = () => {
  const { themeState } = useThemeContext();
  useEffect(() => {
    const rootEl = document.getElementById('root')
    rootEl.className = `${themeState.primary} ${themeState.background}`
  }, [themeState])
}

export default ThemeComponent
