'use server';

import { z } from 'zod';
import { revalidateTag } from 'next/cache';
import { redirect } from 'next/navigation';

export async function serverAction(prevState: any, formData: FormData) {
  const schema = z.object({
    year: z.string().trim().min(1, { message: 'Year is required' }),
    month: z.string().trim().min(1, { message: 'Month is required' }),
  });

  const parsedData = schema.safeParse({
    year: formData.get('year'),
    month: formData.get('month'),
  });

  if (!parsedData.success) {
    // formatted.name?._errors;
    return parsedData.error.format();
  } else {
    const year = Number(parsedData.data.year);
    const month = Number(parsedData.data.month);
    revalidateTag('events');
    redirect('/events/' + year + '/' + month);
  }
}
