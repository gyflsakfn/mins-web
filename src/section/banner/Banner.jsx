import { memo } from 'react';
import bannerAvatar from '../../assets/images/banner_img.png'
import { BsFillArrowRightCircleFill } from 'react-icons/bs';
// import Snowflake, { findId, makeSnowflake } from '../../component/snow';
import './banner.css'
import { useThemeContext } from '../../context/ThemeContext';

import darkBgImage from '../../assets/images/banner_bg_dark.jpg';
import lightBgImage from '../../assets/images/banner_bg_light.png';
import BannerAniText from './BannerAniText';

const Banner = () => {

  const { themeState } = useThemeContext();

  return (
    <section id='banner' style={themeState.background === 'bg-1' ? { backgroundImage: `url(${lightBgImage})` } : { backgroundImage: `url(${darkBgImage})` }}>
      <div className="container banner__container">
        <div className="banner__info">
          <span className="tagline">&lt;min.s&gt;에 오신 것을 환영합니다.</span>
          <h1>{`Hi! I'm JeongMin`}</h1>
          <BannerAniText />
          <p className='banner__desc'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
          <button onClick={() => console.log('connect')}>Let’s Connect <BsFillArrowRightCircleFill size={25} /></button>
        </div>
        <div className="banner__img">
          <img src={bannerAvatar} alt="" />
        </div>
      </div>
    </section >
  )
}

export default memo(Banner)