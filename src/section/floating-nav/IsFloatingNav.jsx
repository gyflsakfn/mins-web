import { useDetectScroll } from '../../hooks/useDetectScroll';
import FloatingNav from './FloatingNav';

const IsFloatingNav = () => {
  const { showFloatingNav } = useDetectScroll();
  return (
    <>
      {showFloatingNav && <FloatingNav />}
    </>
  )
}

export default IsFloatingNav