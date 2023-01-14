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

const CommentList = ({ user, login, comments }) => {


  return (
    <>
      <div className={'container '} >
        <div className={!user ? 'blur' : ''}>
          <Swiper className={'mySwiper'}
            slidesPerView={2}
            spaceBetween={30}
            breakpoints={{
              601: { slidesPerView: 3 },
              1025: { slidesPerView: 5 }
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination, Autoplay]}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
          >
            {
              comments &&
              comments?.map(comment => <SwiperSlide key={comment.id}><CommetItem item={comment} user={user} /></SwiperSlide>)
            }
          </Swiper>
        </div>
        {
          !user && <button className='modal__btn' onClick={login}>구글 로그인</button>
        }
      </div>
    </>
  )
}

export default memo(CommentList)