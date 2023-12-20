'use server';

import { MongoClient } from 'mongodb';
import { z } from 'zod';

export async function commentHandler(prevState: any, formData: FormData) {
  const schema = z.object({
    email: z.string().email().min(1, 'Email required'),
    name: z.string().min(1, 'Name required'),
    comment: z
      .string()
      .min(1, 'Comment required')
      .max(500, 'Comment cannot exceed 500 characters'),
    eventId: z.string(),
  });
  const parsedData = schema.safeParse({
    email: formData.get('email'),
    name: formData.get('name'),
    comment: formData.get('comment'),
    eventId: formData.get('eventId'),
  });

  if (!parsedData.success) {
    // formatted.name?._errors;
    const error = parsedData.error.format();
    const emailMessage: string[] | undefined = error.email?._errors;
    const nameMessage: string[] | undefined = error.name?._errors;
    const commentMessage: string[] | undefined = error.comment?._errors;
    const eventIdMessage: string[] | undefined = error.eventId?._errors;
    // const message: string = `${emailMessage?.join(', ')} ${nameMessage?.join(
    //   ', '
    // )} ${commentMessage?.join(', ')}`;
    return {
      email: emailMessage?.join(', '),
      name: nameMessage?.join(', '),
      comment: commentMessage?.join(', '),
      eventId: eventIdMessage?.join(', '),
      success: false,
    };
  } else {
    // revalidatePath('/');
    const url =
      'mongodb+srv://logmagns07:enpMKf9FHnqRIBVF@cluster0.gzgivfu.mongodb.net/?retryWrites=true&w=majority';
    const client = new MongoClient(url, { family: 4 });
    await client.connect();
    const db = client.db('events');
    const result = await db.collection('comments').insertOne({
      email: parsedData.data.email,
      name: parsedData.data.name,
      comment: parsedData.data.comment,
      eventId: parsedData.data.eventId,
    });
    console.log(result);

    await client.close();
    // setComments();
    return {
      id: result.insertedId.toString(),
      email: parsedData.data.email,
      name: parsedData.data.name,
      comment: parsedData.data.comment,
      eventId: parsedData.data.eventId,
      success: true,
    };
  }
}

export async function getComments(eventId: string) {
  const url =
    'mongodb+srv://logmagns07:enpMKf9FHnqRIBVF@cluster0.gzgivfu.mongodb.net/?retryWrites=true&w=majority';
  const client = new MongoClient(url, { family: 4 });
  await client.connect();
  const db = client.db('events');
  const result = await db
    .collection('comments')
    .find({ eventId: eventId })
    .sort({ _id: -1 })
    .toArray();
  await client.close();
  // Map through the result and change _id to id
  const mappedResult = result.map((comment) => {
    // Extract _id and the rest of the properties into separate variables
    const { _id, ...rest } = comment;
    // Return a new object with all properties except _id, and add an id property with the string value of _id
    return { ...rest, id: _id.toString() };
  });
  return mappedResult;
}
