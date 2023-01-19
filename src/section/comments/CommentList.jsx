import React, { memo } from 'react'

// Import Swiper React components & Swiper styles
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay"
// import required modules
import { Pagination } from "swiper";

import CommetItem from './CommetItem';
import { FcGoogle } from 'react-icons/fc'

const CommentList = ({ user, login, comments }) => {
  const initialSwiperParams = {
    slidesPerView: 1,
    spaceBetween: 20,
    freeMode: true,
    breakpoints: {
      601: { slidesPerView: 2 },
      1025: { slidesPerView: 4 }
    },
    pagination: {
      clickable: true,
    },
    modules: [Pagination, Autoplay],
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    }
  }

  return (
    <>
      <div className={'container '} >
        <div className={!user ? 'blur' : ''}>
          <Swiper className={'mySwiper'}
            {...initialSwiperParams}
          >
            {
              comments &&
              comments?.map(comment => <SwiperSlide key={comment.id}><CommetItem item={comment} user={user} /></SwiperSlide>)
            }
          </Swiper>
        </div>
        {
          !user && <button className='modal__btn' onClick={login}><FcGoogle /> 구글 로그인</button>
        }
      </div>
    </>
  )
}

export default memo(CommentList)