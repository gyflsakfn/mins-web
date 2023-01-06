import React from 'react'
import { useQuery } from "@tanstack/react-query";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";
import { getComments } from '../../api/firebase';

const CommentList = () => {
  const { isLoading, error, data: comments } = useQuery(['comments'], getComments)

  return (

    <div className="container" >
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {
          comments &&
          comments.map(comment => <SwiperSlide key={comment.id}><h5>{comment.isAnon ? '익명' : comment.displayName}</h5><p>{comment.comment}</p></SwiperSlide>)
        }
      </Swiper>
    </div>
  )
}

export default CommentList