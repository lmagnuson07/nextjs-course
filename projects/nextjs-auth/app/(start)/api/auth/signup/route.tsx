import { db, conn, disconnect } from '@/src/lib/db';
import type { User } from '@/src/types/auth';
import { Db, InsertOneResult, MongoClient, MongoServerError } from 'mongodb';
import { z } from 'zod';
import { hashPassword } from '@/src/lib/auth';

export async function POST(request: Request) {
  const res = await request.json();

  const schema = z.object({
    email: z.string().email().min(1, 'Email required'),
    password: z
      .string({
        required_error: 'Password required',
      })
      .min(7, 'Password must be at least 7 characters')
      .max(25, 'Password cannot exceed 25 characters'),
  });
  const hashedPassword = await hashPassword(res.password);
  const parsedData = schema.safeParse({
    email: res.email ?? '',
    password: res.password ?? '',
  });

  let response: User = {
    email: '',
    password: '',
    success: null,
  };
  if (!parsedData.success) {
    const error = parsedData.error.format();
    const emailMessage: string[] | undefined = error.email?._errors;
    const passwordMessage: string[] | undefined = error.password?._errors;

    response = {
      email: emailMessage?.join(', ') ?? '',
      password: passwordMessage?.join(', ') ?? '',
      success: false,
    };

    return new Response(JSON.stringify(response), {
      status: 422,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

  const client: MongoClient = await db();
  const con: Db = await conn(client, process.env.mongodb_database);

  // Check existing user
  const existingUser = await con
    .collection('users')
    .findOne({ email: parsedData.data.email });
  if (existingUser) {
    await disconnect(client);
    response = {
      email: 'User already exists',
      password: 'User already exists',
      success: false,
    };

    return new Response(JSON.stringify(response), {
      status: 422,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

  const newUser: User = {
    email: res.email ?? '',
    password: hashedPassword,
    success: true,
  };

  let result: InsertOneResult<Document>;
  try {
    result = await con.collection('users').insertOne(newUser);
    return new Response(JSON.stringify(result), {
      status: 201,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    if (error instanceof MongoServerError) {
      console.log(`Error connecting to db: ${error}`); // special case for some reason
    }
    const errorResponse: User = {
      email: 'Error connecting to db',
      password: 'Error connecting to db',
      success: false,
    };

    return new Response(JSON.stringify(errorResponse), {
      status: 400,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } finally {
    await disconnect(client);
  }
}
