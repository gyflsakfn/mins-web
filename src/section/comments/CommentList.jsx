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

const CommentList = () => {
  const { isLoading, error, data: comments } = useQuery(['comments'], getComments)

  return (

    <div className="container" >
      <Swiper
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
        autoplay={true}
        className="mySwiper"
      >
        {
          comments &&
          comments.map(comment => <SwiperSlide key={comment.id}><CommetItem item={comment} /></SwiperSlide>)
        }
      </Swiper>
    </div>
  )
}

export default CommentList