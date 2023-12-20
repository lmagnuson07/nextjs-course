'use client';

import { useFormStatus } from 'react-dom';

export default function SubmitButton(props: any) {
  const { pending } = useFormStatus();

  return (
    <button onClick={props.onClick} type="submit" aria-disabled={pending}>
      Submit
    </button>
  );
}
