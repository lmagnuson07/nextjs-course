'use client';

import ReactDOM from 'react-dom';
import { useState } from 'react';
import useSWR, { Fetcher, preload } from 'swr';

// const fetcher: Fetcher<SalesData, string> = (id) => getUserById(id);
// const fetcher = (url: string) => fetch(url).then((res) => res.json());
const fetcher: Fetcher<SalesData[], string> = (url) => getAllSales(url);
// preload(
//   'https://nextjs-course-f806a-default-rtdb.firebaseio.com/sales.json',
//   fetcher
// );
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

type SalesData = {
  id: string;
  username: string;
  volume: number;
};

async function getUserById(id: string) {
  const response = await fetch(
    `https://nextjs-course-f806a-default-rtdb.firebaseio.com/sales/${id}.json`
  );
  return await response.json();
}
ReactDOM.preload(
  'https://nextjs-course-f806a-default-rtdb.firebaseio.com/sales.json',
  { as: 'fetch' }
);
ReactDOM.preconnect(
  'https://nextjs-course-f806a-default-rtdb.firebaseio.com/sales.json',
  { crossOrigin: 'anonymous' }
);
export default function LastSalesPage() {
  // const [sales, setSales] = useState<SalesData[] | null>(null);

  const [loading, setLoading] = useState(false);
  const { data, error, isLoading } = useSWR(
    'https://nextjs-course-f806a-default-rtdb.firebaseio.com/sales.json',
    fetcher
  );
  // const { data, error, isLoading } = useSWR('s1', fetcher);

  // useEffect(() => {
  //   setLoading(true);
  //   (async () => {
  //     try {
  //       const response = await fetch(
  //         'https://nextjs-course-f806a-default-rtdb.firebaseio.com/sales.json'
  //       );
  //       const data = await response.json();
  //       console.log(data);
  //       const transformedData = Object.keys(data).map((key) => ({
  //         id: key,
  //         username: data[key].username,
  //         volume: data[key].volume,
  //       }));
  //
  //       setSales(transformedData);
  //       setLoading(false);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   })();
  // }, []);
  // Can remove the sales check so there isn't to messages that flash on the screen
  return (
    <div>
      <h1>Last Sales</h1>
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
