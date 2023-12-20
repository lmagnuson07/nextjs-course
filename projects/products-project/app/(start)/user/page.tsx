import Client from './client';

export default async function UserPage() {
  const response = await fetch(
    `https://nextjs-course-f806a-default-rtdb.firebaseio.com/sales.json`
  );
  const data = await response.json();
  const initialData = Object.keys(data).map((key) => ({
    id: key,
    username: data[key].username,
    volume: data[key].volume,
  }));

  return <Client initialData={initialData} />;
}
