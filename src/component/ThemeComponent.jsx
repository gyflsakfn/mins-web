import React from 'react'
import { useThemeContext } from '../context/ThemeContext'

const ThemeComponent = ({ children }) => {
  const { themeState } = useThemeContext();
  return (
    <main className={`${themeState.primary} ${themeState.background}`}>{children}</main>
  )
}

export default ThemeComponent