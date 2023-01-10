
import React from "react";
import { useQuery } from "@tanstack/react-query";
import { getComments } from '../../api/firebase';

import { useAuthContext } from '../../context/AuthContext';

import CommentForm from "./CommentForm";
import CommentList from "./CommentList";
import './comments.css'

const Comments = () => {
  const { user, logout } = useAuthContext();
  const { data: comments } = useQuery(['comments'], getComments);

  return (
    <section id='comments'>
      <h2>Comments</h2>
      <p className="comments__desc">These are unbiased testmonials from some of my clients</p>
      {/* {user && <User user={user} />} */}
      {/* {!user && <Button text={'Login'} onClick={login} />}
      {user && <Button text={'Logout'} onClick={logout} />} */}

      {
        user && <CommentForm comments={comments} user={user} />
      }
      <CommentList comments={comments} user={user} />
    </section >
  );
}

export default Comments





