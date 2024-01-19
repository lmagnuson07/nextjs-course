'use server';

import { signIn } from '@/auth';
import { AuthError } from 'next-auth';
import { redirect } from 'next/navigation';

export async function authenticate(prevState: any, formData: FormData) {
  try {
    const email = formData.get('email');
    const password = formData.get('password');
    const result = await signIn('credentials', {
      redirect: false,
      email: email,
      password: password,
    });
    const decodedUrl = decodeURIComponent(result);
    const url = new URL(decodedUrl);
    const callbackUrl = url.searchParams.get('callbackUrl');

    redirect(callbackUrl ?? '/');
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case 'CredentialsSignin':
          return 'Invalid credentials.';
        default:
          return 'Something went wrong.';
      }
    }
    throw error;
  }
}
