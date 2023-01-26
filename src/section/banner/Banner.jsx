import { memo } from 'react';
import bannerAvatar from '../../assets/images/banner_img.png'
// import Snowflake, { findId, makeSnowflake } from '../../component/snow';
import './banner.css'
import { useThemeContext } from '../../context/ThemeContext';

import darkBgImage from '../../assets/images/banner_bg_dark.jpg';
import lightBgImage from '../../assets/images/banner_bg_light.png';
import BannerAniText from './BannerAniText';
import QuotesAutoSlider from './QuotesAutoSlider';

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
            <p>1. 동해물과 백두산이 마르고 닳도록
              하느님이 보우하사 우리나라 만세
              무궁화 삼천리 화려 강산
              대한 사람 대한으로 길이 보전하세

              2. 남산 위에 저 소나무 철갑을 두른 듯
              바람 서리 불변함은 우리 기상일세
              무궁화 삼천리 화려 강산
              대한 사람 대한으로 길이 보전하세

              3. 가을 하늘 공활한데 높고 구름 없이
              밝은 달은 우리 가슴 일편단심일세
              무궁화 삼천리 화려 강산
              대한 사람 대한으로 길이 보전하세

              4. 이 기상과 이 맘으로 충성을 다하여
              괴로우나 즐거우나 나라 사랑하세
              무궁화 삼천리 화려 강산
              대한 사람 대한으로 길이 보전하세</p>

          </div>
          <QuotesAutoSlider />
        </div>
        <div className="banner__img">
          <img src={bannerAvatar} alt="" />
        </div>
      </div>
    </section >
  )
}

export default memo(Banner)