// Nodejs imports
// These will not run in client components as the client isnt aware of the server file system.
import path from 'path';
import fs from 'fs/promises';

import Link from 'next/link';

import styles from './page.module.css';

// To test, build the project and run it.
// You should only see console logs in the run window every n seconds on reloading.
// export const revalidate = 10;

type Props = {
  products: [Product];
};

type Product = {
  id: string;
  title: string;
  description: string;
};

export default async function Home() {
  // cwd is the current working directory. When nextjs builds the project, this file will be in the root of the project
  // 'data' is the directory for the function to look at
  // 'dummy-backend.json' is the file name
  console.log('Rendering...');
  const filePath = path.join(process.cwd(), 'data', 'dummy-backend.json');
  const jsonData = await fs.readFile(filePath);
  const data: Props = JSON.parse(jsonData.toString());
  const products: Product[] = data.products;
  const random = Math.random();

  return (
    <section>
      <ul>
        <p>{random}</p>
        {products.map((product: Product) => (
          <li key={product.id}>
            <Link href={`/${product.id}`}>{product.title}</Link>
          </li>
        ))}
        <Link href={'/user-profile'}>User Profile</Link>
        <Link href={'/last-sales'}>Last Sales</Link>
      </ul>
    </section>
  );
}
