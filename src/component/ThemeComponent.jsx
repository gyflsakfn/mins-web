import React, { useCallback, useEffect, useRef, useState } from 'react'
import { Outlet } from "react-router-dom";
import Navbar from "../section/navbar/Navbar";
import Theme from "../theme/Theme";
import Footer from "../section/footer/Footer";
import { useThemeContext } from '../context/ThemeContext'

const ThemeComponent = () => {
  const { themeState } = useThemeContext();
  const mainRef = useRef();

  const [showFloatingNav, setShowFloatingNav] = useState(false);
  const [siteYPosition, setSiteYPosition] = useState(0);

  const showFloatingNavHandler = () => {
    setShowFloatingNav(true);
  };
  const hideFloatingNavHandler = () => {
    setTimeout(() => {
      setShowFloatingNav(false);
    }, 500);
  };

  // floating nav가 보여짐 상태인지 숨긴 상태진지 체크
  const floatingNavToggleHandler = useCallback(() => {
    let currentY = (mainRef?.current?.getBoundingClientRect().y);
    // 20px정도 움직였다면
    if (siteYPosition < currentY - 100 || siteYPosition > currentY + 100) {
      showFloatingNavHandler();
    } else {
      hideFloatingNavHandler();
    }
    setSiteYPosition(currentY);
  }, [siteYPosition]);

  useEffect(() => {
    const checkYPosition = setInterval(floatingNavToggleHandler, 1800);
    // cleanup
    return () => clearInterval(checkYPosition);
  }, [siteYPosition, floatingNavToggleHandler]);


  return (
    <main ref={mainRef} className={`${themeState.primary} ${themeState.background}`}>
      <Navbar />
      <Outlet context={{ showFloatingNav }} />
      <Footer />
      <Theme />
    </main>
  )
}

export default ThemeComponent
