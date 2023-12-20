'use client';

export const dynamic = 'force-dynamic';

export const revalidate = 0;

export const fetchCache = 'force-no-store';

export default function UserPageProfile() {
  const number = Math.random();
  const props = {
    username: 'James',
  };

  return (
    <div>
      <h1>User Profile</h1>
      <p>
        <b>Username:</b> {props.username}
      </p>
      <p>{number}</p>
    </div>
  );
}
