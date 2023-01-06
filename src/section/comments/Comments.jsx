
import React, { useState } from "react";

import Button from '../../component/ui/Button';
import User from '../../component/User';
import { useAuthContext } from '../../context/AuthContext';

import CommentForm from "./CommentForm";
import CommentList from "./CommentList";

const Comments = () => {
  const { user, login, logout } = useAuthContext();

  return (
    <section id='comments'>
      <h2>Comments</h2>
      <p>These are unbiased testmonials from some of my clients</p>
      {/* TODO: CommentForm */}
      {user && <User user={user} />}
      {!user && <Button text={'Login'} onClick={login} />}
      {user && <Button text={'Logout'} onClick={logout} />}

      <CommentForm user={user} />
      {/* TODO: CommentList */}
      <CommentList />

    </section >
  );
}

export default Comments





