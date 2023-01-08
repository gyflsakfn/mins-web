import React from 'react'
import { useQuery } from "@tanstack/react-query";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay"


// import required modules
import { Pagination } from "swiper";
import { getComments } from '../../api/firebase';
import CommetItem from './CommetItem';
import { useAuthContext } from '../../context/AuthContext';

const CommentList = () => {
  const { data: comments } = useQuery(['comments'], getComments)
  const { user, login } = useAuthContext();

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
              delay: 2000,
              disableOnInteraction: false,
            }}
          >
            {
              comments &&
              comments.map(comment => <SwiperSlide key={comment.id}><CommetItem item={comment} /></SwiperSlide>)
            }
          </Swiper>
        </div>
        {
          !user && <button className='modal__btn' onClick={login}>로그인 버튼</button>
        }
      </div>
    </>
  )
}

export default CommentList