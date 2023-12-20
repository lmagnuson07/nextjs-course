'use client';

import { submitForm } from '@/app/actions';
import { useFormState, useFormStatus } from 'react-dom';

const initialState: { message: null | string } = {
  message: null,
};

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button type="submit" aria-disabled={pending}>
      Submit
    </button>
  );
}

export function Form() {
  const [state, formAction] = useFormState(submitForm, initialState);

  return (
    <form action={formAction}>
      <div>
        <label htmlFor={'email'}>Email</label>
        <input type={'email'} id={'email'} name={'email'} required />
      </div>
      <div>
        <label htmlFor={'feedback'}>Feedback</label>
        <textarea id={'feedback'} name={'feedback'} />
      </div>
      <SubmitButton />
      <p aria-live="polite" className="sr-only" role="status">
        {state?.message}
      </p>
    </form>
  );
}
