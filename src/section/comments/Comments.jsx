
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
      <p>코멘트를 남겨주세요. 어떠한 말이든 </p>
      {
        user && <CommentForm user={user} logout={logout} />
      }
      <CommentList user={user} login={login} />
    </section>
  );
}

export default Comments





