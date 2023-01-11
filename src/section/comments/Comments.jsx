
import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getComments } from '../../api/firebase';

import { useAuthContext } from '../../context/AuthContext';

import CommentForm from "./CommentForm";
import CommentList from "./CommentList";
import './comments.css'

const Comments = () => {
  const { user } = useAuthContext();
  const { data: comments } = useQuery(['comments'], getComments);
  // TODO: isUserComment 상태 context로 관리? storage로 관리?
  const [isUserComment, setIsUserComment] = useState();

  console.log(isUserComment)
  return (
    <section id='comments'>
      <h2>Comments</h2>
      <p>These are unbiased testmonials from some of my clients</p>

      {/* TODO: CommentForm 로그인 상태이고 작성한 글이 없을 경우 렌더링 */}
      {
        user && <CommentForm comments={comments} user={user} isComment={{ isUserComment, setIsUserComment }} />
      }
      {/* TODO: CommentList 헤당 유저의 글이 있을 경우 그 글 색상 변경 */}
      <CommentList comments={comments} user={user} setIsUserComment={setIsUserComment} />
    </section >
  );
}

export default Comments





