import darkBgImage from '../../assets/images/banner_bg_dark.webp';
import lightBgImage from '../../assets/images/banner_bg_light.webp';
import { useThemeContext } from '../../context/ThemeContext';

const BannerBackgroundComponent = () => {
  const { themeState } = useThemeContext();

  return (
    <>
      {themeState.background === 'bg-1' ? <img src={lightBgImage} className='banner__background' alt='banner whitemode background' /> : <img src={darkBgImage} className='banner__background' alt='banner darkmode background' />}
    </>
  )
}

export default BannerBackgroundComponent