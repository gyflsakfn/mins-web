
import { memo } from "react";

import { useAuthContext } from '../../context/AuthContext';
import useComments from "../../hooks/useComments";

import CommentForm from "./CommentForm";
import CommentList from "./CommentList";
import './comments.css'

const Comments = () => {
  const { user, login, logout } = useAuthContext();
  const { commentsQuery: { isLoading, error, data: comments }, } = useComments();

  return (
    <section id='comments'>
      <h2>Comments</h2>
      <p>김정민에 대하여 코멘트를 남겨주세요.</p>
      {isLoading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {
        user && <CommentForm comments={comments} user={user} logout={logout} />
      }
      <CommentList comments={comments} user={user} login={login} />
    </section>
  );
}

export default memo(Comments)





