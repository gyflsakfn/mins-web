import { memo } from 'react';
import bannerAvatar from '../../assets/images/banner_img.png'
import { BsFillArrowRightCircleFill } from 'react-icons/bs';
// import Snowflake, { findId, makeSnowflake } from '../../component/snow';
import './banner.css'
import { useThemeContext } from '../../context/ThemeContext';

import darkBgImage from '../../assets/images/banner_bg_dark.jpg';
import lightBgImage from '../../assets/images/banner_bg_light.png';
import BannerAniText from './BannerAniText';
import AutoSlideContainer from './AutoSlideContainer';

const Banner = () => {

  const { themeState } = useThemeContext();

  return (
    <section id='banner' style={themeState.background === 'bg-1' ? { backgroundImage: `url(${lightBgImage})` } : { backgroundImage: `url(${darkBgImage})` }}>
      <div className="container banner__container">
        <div className="banner__info">
          <span className="tagline">&lt;min.s&gt;에 오신 것을 환영합니다.</span>
          <h1>{`Hi! I'm JeongMin`}</h1>
          <BannerAniText />
          <div className='banner__desc'>
            <p>“ 손으로 10초면 충분히 할 수 있는 일을 컴퓨터로 하루 종일 프로그래밍해서 자동으로 수행할 때, 나는 더할 나위 없이 큰 행복을 느낀다. ”
              - Douglas Noel Adams</p>

          </div>
          {/* <AutoSlideContainer /> */}
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