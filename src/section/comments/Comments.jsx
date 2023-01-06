
import React from "react";


import { useAuthContext } from '../../context/AuthContext';

import CommentForm from "./CommentForm";
import CommentList from "./CommentList";
import './comments.css'

const Comments = () => {
  const { user } = useAuthContext();

  return (
    <section id='comments'>
      <h2>Comments</h2>
      <p>These are unbiased testmonials from some of my clients</p>
      {/* {user && <User user={user} />} */}
      {/* {!user && <Button text={'Login'} onClick={login} />}
      {user && <Button text={'Logout'} onClick={logout} />} */}
      {/* TODO: CommentForm 로그인 상태이고 작성한 글이 없을 경우 렌더링 */}
      <CommentForm user={user} />
      {/* TODO: CommentList 헤당 유저의 글이 있을 경우 그 글 색상 변경 */}
      <CommentList />
    </section >
  );
}

export default Comments





