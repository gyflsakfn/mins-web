import { useCallback, useEffect, useState } from 'react'

export const useDetectScroll = () => {
  const [showFloatingNav, setShowFloatingNav] = useState(false);
  const [siteYPosition, setSiteYPosition] = useState(0);

  const showFloatingNavHandler = useCallback(() => {
    setShowFloatingNav(true);
  }, []);

  const hideFloatingNavHandler = useCallback(() => {
    setTimeout(() => {
      setShowFloatingNav(false);
    }, 500);
  }, []);

  // floating nav가 보여짐 상태인지 숨긴 상태진지 체크
  const floatingNavToggleHandler = useCallback(() => {
    let currentY = (window.pageXOffset || window.scrollY);
    // 20px정도 움직였다면
    if (siteYPosition < currentY - 30 || siteYPosition > currentY + 30) {
      showFloatingNavHandler();
    } else {
      hideFloatingNavHandler();
    }
    setSiteYPosition(currentY);
  }, [siteYPosition, hideFloatingNavHandler, showFloatingNavHandler]);

  useEffect(() => {
    const checkYPosition = setInterval(floatingNavToggleHandler, 1600);
    // cleanup
    return () => clearInterval(checkYPosition);
  }, [siteYPosition, floatingNavToggleHandler]);

  return { showFloatingNav };
}