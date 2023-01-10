
import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getComments } from '../../api/firebase';

import { useAuthContext } from '../../context/AuthContext';

import CommentForm from "./CommentForm";
import CommentList from "./CommentList";
import './comments.css'

const Comments = () => {
  const { user, logout } = useAuthContext();
  const [isUserComment, setUserComment] = useState();
  const { data: comments } = useQuery(['comments'], getComments);

  return (
    <section id='comments'>
      <h2>Comments</h2>
      <p className="comments__desc">These are unbiased testmonials from some of my clients</p>
      {/* {user && <Button text={'Logout'} onClick={logout} />} */}
      {
        user && <CommentForm comments={comments} user={user} isComment={{ isUserComment, setUserComment }} />
      }
      <CommentList comments={comments} user={user} setUserComment={setUserComment} />
    </section >
  );
}

export default Comments





