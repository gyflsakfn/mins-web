
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
      <p>좋은 사람들의 감사한 한마디</p>
      {
        user && <CommentForm user={user} logout={logout} />
      }
      <CommentList user={user} login={login} />
    </section>
  );
}

export default Comments





