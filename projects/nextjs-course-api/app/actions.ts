'use server';

import { z } from 'zod';

export async function submitForm(
  prevState: { message: string | null },
  formData: FormData
) {
  const schema = z.object({
    email: z
      .string()
      .trim()
      .email()
      .min(1, { message: 'Email is required' })
      .max(100, { message: 'Email is too long' }),
    feedback: z
      .string()
      .trim()
      .min(1, { message: 'Feedback is required' })
      .max(100, { message: 'Feedback is too long' }),
  });

  const parsedData = schema.safeParse({
    email: formData.get('email'),
    feedback: formData.get('feedback'),
  });

  let data = null;
  if (!parsedData.success) {
    const error = parsedData.error.format();
    const emailMessage: string[] | undefined = error.email?._errors;
    const feedbackMessage: string[] | undefined = error.feedback?._errors;
    const message: string = `${emailMessage?.join(
      ', '
    )}, ${feedbackMessage?.join(', ')}`;
    return { message: message };
  } else {
    // Not necessary with app router. Can move code from api route to here.
    const reqBody = {
      email: parsedData.data.email,
      feedback: parsedData.data.feedback,
    };
    const response = await fetch('http://localhost:3000/api/feedback', {
      method: 'POST',
      body: JSON.stringify(reqBody),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    data = await response.json();
  }
  return { message: data.msg };
}
