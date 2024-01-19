'use client';
import classes from './new-comment.module.scss';
import { useFormState } from 'react-dom';
import Button from '@/src/components/ui/Button';
import {
  commentHandler,
  getComments,
} from '@/src/components/input/comment-submission';
import { useContext, useEffect, useRef, useState } from 'react';
import NotificationContext from '@/src/store/notification-context';

const initialState: {
  email: string | undefined;
  name: string | undefined;
  comment: string | undefined;
  eventId: string | undefined;
  success: boolean;
} = {
  email: undefined,
  name: undefined,
  comment: undefined,
  eventId: undefined,
  success: false,
};

export default function NewComment(props: any) {
  const [pending, setPending] = useState(false);
  const { eventId, setComments } = props;
  const [state, formAction] = useFormState(commentHandler, initialState);
  const context = useContext(NotificationContext);
  const contextRef = useRef(context);

  function pendingNotification() {
    if (state?.comment && state?.email && state?.name) {
      setPending(true);
      contextRef.current.showNotification({
        title: 'Signing up...',
        message: 'Signing up...',
        status: 'pending',
      });
    }
  }

  useEffect(() => {
    (async () => {
      console.log(state);
      if (!state?.comment || !state?.email || !state?.name) {
        setPending(false);
      } else {
        if (state?.success) {
          setPending(false);
          contextRef.current.showNotification({
            title: 'Comment added',
            message: 'Thanks for your input!',
            status: 'success',
          });
        } else if (!state?.success) {
          setPending(false);
          contextRef.current.showNotification({
            title: 'Error adding your comment',
            message: 'Sorry there was an error adding your comment.',
            status: 'error',
          });
        }
        const response = await getComments(eventId);
        // @ts-ignore
        setComments(response);
      }
    })();
  }, [setComments, eventId, state]);

  return (
    <form className={classes.form} action={formAction}>
      <input type="hidden" name="eventId" value={eventId} />
      <div className={classes.row}>
        <div className={classes.control}>
          <label htmlFor="email">Your email</label>
          <input type="email" id="email" name="email" />
        </div>
        <div className={classes.control}>
          <label htmlFor="name">Your name</label>
          <input type="text" id="name" name="name" />
        </div>
      </div>
      <div className={classes.control}>
        <label htmlFor="comment">Your comment</label>
        <textarea name="comment" id="comment" rows={5}></textarea>
      </div>
      <p>{state?.eventId}</p>
      {pending && <p>Pending...</p>}
      {state?.success ?
        <p>Success!</p>
      : <>
          <p>{state?.name}</p>
          <p>{state?.email}</p>
          <p>{state?.comment}</p>
        </>
      }
      <Button onClick={() => pendingNotification()}>
        <span>Submit</span>
      </Button>
    </form>
  );
}
