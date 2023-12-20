'use client';

import classes from './newsletter-registration.module.scss';
import { useFormState } from 'react-dom';
import { registrationHandler } from './newsletter-submission';
import SubmitButton from '@/src/components/input/NewsletterButton';
import NotificationContext from '@/src/store/notification-context';
import { useContext, useEffect, useRef, useState } from 'react';

const initialState: { message: string | null } = {
  message: null,
};
export default function NewsletterRegistration() {
  const [pending, setPending] = useState(false);
  const [state, formAction] = useFormState(registrationHandler, initialState);
  const context = useContext(NotificationContext);
  const contextRef = useRef(context);

  useEffect(() => {
    if (state.message) {
      contextRef.current.showNotification({
        title: 'Signed up',
        message: state.message,
        status: 'success',
      });
    }
  }, [state]);

  function pendingNotification() {
    console.log('pending');
    contextRef.current.showNotification({
      title: 'Signing up...',
      message: 'Signing up...',
      status: 'pending',
    });
    setPending(true);
  }

  return (
    <section className={classes.newsletter}>
      <h2>Sign up to stay updated!</h2>
      <form action={formAction}>
        <div className={classes.control}>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Your email"
            aria-label="Your email"
          />
          <SubmitButton onClick={() => pendingNotification()} />
        </div>
      </form>
      <p>{state?.message}</p>
    </section>
  );
}
