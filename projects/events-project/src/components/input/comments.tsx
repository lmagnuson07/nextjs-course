'use client';

import { useEffect, useState } from 'react';

import CommentList from './comment-list';
import NewComment from './new-comment';
import classes from './comments.module.scss';
import { getComments } from '@/src/components/input/comment-submission';

export default function Comments(props: any) {
  const { eventId } = props;

  const [showComments, setShowComments] = useState(false);
  const [comments, setComments] = useState([]);
  useEffect(() => {
    (async () => {
      const response = await getComments(eventId);
      // @ts-ignore
      setComments(response);
    })();
  }, [eventId]);
  function toggleCommentsHandler() {
    setShowComments((prevStatus) => !prevStatus);
  }

  return (
    <section className={classes.comments}>
      <button onClick={toggleCommentsHandler}>
        {showComments ? 'Hide' : 'Show'} Comments
      </button>
      {showComments && (
        <NewComment eventId={eventId} setComments={setComments} />
      )}
      {showComments && <CommentList comments={comments} />}
    </section>
  );
}
