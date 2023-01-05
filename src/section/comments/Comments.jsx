
import React, { useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";
import User from "../../component/User";
import { useAuthContext } from "../../context/AuthContext";
import Button from "../../component/ui/Button";
import { addComment } from "../../api/firebase";

const Comments = () => {
  const [commentInfo, setCommentInfo] = useState({});
  const { user, login, logout } = useAuthContext();

  const handleChange = (e) => {
    const { name, value, checked } = e.target;
    setCommentInfo((prev) => ({ ...prev, [name]: value, isAnon: checked }))
    console.log(user)

  }

  const handleClick = () => {
    window.alert('완료')
    addComment(commentInfo, user)
  }

  return (
    <section id='comments'>
      <h2>Comments</h2>
      <p>These are unbiased testmonials from some of my clients</p>
      <div className="input__wrapper">
        {/* TODO: 로그인 아바타 넣기 */}
        {user && <User user={user} />}
        {!user && <Button text={'Login'} onClick={login} />}
        {user && <Button text={'Logout'} onClick={logout} />}
        <input type="text" name="comment" placeholder="코멘트를 적으세요." onChange={handleChange} />
        <input type="checkbox" name="isAnon" onChange={handleChange} />
        <button onClick={handleClick}>제출제출</button>
      </div>
      <div className="container">
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>Slide 1</SwiperSlide>
          <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
          <SwiperSlide>Slide 5</SwiperSlide>
          <SwiperSlide>Slide 6</SwiperSlide>
          <SwiperSlide>Slide 7</SwiperSlide>
          <SwiperSlide>Slide 8</SwiperSlide>
          <SwiperSlide>Slide 9</SwiperSlide>
        </Swiper>
      </div>
    </section >
  );
}

export default Comments





