import Link from 'next/link';
import { signOut, auth } from '@/auth';

import classes from './main-navigation.module.scss';

export default async function MainNavigation() {
  const user = await auth();
  console.log(user);

  return (
    <header className={classes.header}>
      <Link href="/">
        <div className={classes.logo}>Next Auth</div>
      </Link>
      <nav>
        <ul>
          {!user && (
            <li>
              <Link href={'/auth'}>Login</Link>
            </li>
          )}
          {user && (
            <li>
              <Link href={'/profile'}>Profile</Link>
            </li>
          )}
          {user && (
            <li>
              <form
                action={async () => {
                  'use server';
                  await signOut();
                }}
              >
                <button>Logout</button>
              </form>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
}
