'use client';
import useSWR, { Fetcher, preload } from 'swr';

type SalesData = {
  id: string;
  username: string;
  volume: number;
};
const fetcher: Fetcher<SalesData[], string> = (url) => getAllSales(url);

async function getAllSales(url: string) {
  const response = await fetch(
    `https://nextjs-course-f806a-default-rtdb.firebaseio.com/sales.json`
  );
  const data = await response.json();
  return Object.keys(data).map((key) => ({
    id: key,
    username: data[key].username,
    volume: data[key].volume,
  }));
}
export default function Client({
  initialData,
}: {
  initialData: SalesData[] | undefined;
}) {
  const { data, error, isLoading } = useSWR(
    'https://nextjs-course-f806a-default-rtdb.firebaseio.com/sales.json',
    fetcher
  );
  return (
    <div>
      <h1>Last Sales</h1>
      <p>Initial data</p>
      {initialData?.map((sale: SalesData) => (
        <li key={sale.id}>
          {sale.username} - {sale.volume}
        </li>
      ))}
      {error ?
        <p>An error occurred</p>
      : isLoading ?
        <p>Loading...</p>
      : !data || data.length === 0 ?
        <p>No sales found</p>
      : <ul>
          {data?.map((sale: SalesData) => (
            <li key={sale.id}>
              {sale.username} - {sale.volume}
            </li>
          ))}
          {/*<p>{data?.username}</p>*/}
          {/*<p>{data?.volume} </p>*/}
        </ul>
      }
    </div>
  );
}
