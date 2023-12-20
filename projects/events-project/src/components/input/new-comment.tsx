'use client';
import classes from './new-comment.module.scss';
import { useFormState } from 'react-dom';
import Button from '@/src/components/ui/Button';
import {
  commentHandler,
  getComments,
} from '@/src/components/input/comment-submission';
import { useEffect } from 'react';

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
  const { eventId, setComments } = props;
  const [state, formAction] = useFormState(commentHandler, initialState);
  useEffect(() => {
    (async () => {
      const response = await getComments(eventId);
      // @ts-ignore
      setComments(response);
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
      {state?.success ?
        <p>Success!</p>
      : <>
          <p>{state?.name}</p>
          <p>{state?.email}</p>
          <p>{state?.comment}</p>
        </>
      }
      <Button>
        <span>Submit</span>
      </Button>
    </form>
  );
}
