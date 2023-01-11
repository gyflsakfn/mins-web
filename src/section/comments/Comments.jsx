
import React from "react";

import { useAuthContext } from '../../context/AuthContext';

import CommentForm from "./CommentForm";
import CommentList from "./CommentList";
import './comments.css'

const Comments = () => {
  const { user, login, logout } = useAuthContext();

  return (
    <section id='comments'>
      <h2>Comments</h2>
      <p>These are unbiased testmonials from some of my clients</p>
      {
        user && <CommentForm user={user} logout={logout} />
      }
      <CommentList user={user} login={login} />
    </section >
  );
}

export default Comments





