'use server';

import { z } from 'zod';
import { revalidatePath } from 'next/cache';
import { MongoClient } from 'mongodb';

export async function registrationHandler(prevState: any, formData: FormData) {
  const schema = z.object({
    email: z.string().email().min(1, 'Email required'),
  });
  const parsedData = schema.safeParse({
    email: formData.get('email'),
  });

  if (!parsedData.success) {
    // formatted.name?._errors;
    const error = parsedData.error.format();
    const emailMessage: string[] | undefined = error.email?._errors;
    const message: string = `${emailMessage?.join(', ')}`;
    return { message: message };
  } else {
    // revalidatePath('/');
    const url =
      'mongodb+srv://logmagns07:enpMKf9FHnqRIBVF@cluster0.gzgivfu.mongodb.net/?retryWrites=true&w=majority';
    const client = new MongoClient(url, { family: 4 });
    await client.connect();
    const db = client.db('events');

    await db.collection('emails').insertMany([
      {
        email: parsedData.data.email,
      },
    ]);
    await client.close();
    return {
      message: 'Success registered with email: ' + parsedData.data.email + '!',
    };
  }
}
