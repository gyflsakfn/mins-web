import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { addNewComment, getComments as fetchComments, removeComments, } from '../api/firebase';
export default function useComments() {
  const queryClient = useQueryClient();

  const commentsQuery = useQuery(['comments'], fetchComments)

  const addComment = useMutation(({ commentInfo, user }) => addNewComment(commentInfo, user),
    {
      onSuccess: () => queryClient.invalidateQueries('comments'),
    });

  const removeComment = useMutation(({ id }) => removeComments(id),
    {
      onSuccess: () => queryClient.invalidateQueries('comments'),
    });

  return { commentsQuery, addComment, removeComment }
}
