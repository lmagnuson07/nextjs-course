import NextAuth from 'next-auth';
import { authConfig } from './auth.config';
import Credentials from '@auth/core/providers/credentials';
import z from 'zod';
import { connectToAuthDb } from '@/src/lib/db';
import { CredentialsSignin } from '@auth/core/errors';
const bcrypt = require('bcryptjs');

const getUser = async function (email: string): Promise<any> {
  const { client, connection } = await connectToAuthDb();
  const userCollection = connection.collection('users');
  const user = await userCollection.findOne({ email: email });

  if (!user) {
    await client.close();
    throw new CredentialsSignin('No user found');
  }
  await client.close();

  return user;
};

export const { auth, signIn, signOut } = NextAuth({
  ...authConfig,
  session: { strategy: 'jwt' },
  providers: [
    Credentials({
      async authorize(credentials) {
        const parsedCredentials = z
          .object({ email: z.string().email(), password: z.string().min(7) })
          .safeParse(credentials);
        if (parsedCredentials.success) {
          const { email, password } = parsedCredentials.data;
          let user = null;
          try {
            user = await getUser(email);
          } catch (error) {
            console.log(error);
          }

          if (!user) return null;
          const passwordsMatch = await bcrypt.compare(password, user.password);

          const userReturn = { id: user.id, email: email };
          if (passwordsMatch) return userReturn;
        }
        return null;
      },
    }),
  ],
});
