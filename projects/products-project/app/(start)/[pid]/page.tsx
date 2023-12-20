import Link from 'next/link';

import getProducts, { Product, Props } from './GetProducts';

// Build and run npm start to test.
// export async function generateStaticParams() {
//   // const data: Props = await getProducts();
//
//   // const ids = data.products.map((product) => product.id);
//   // const pathsWithParams = ids.map((id) => ({ pid: id }));
//   // return pathsWithParams;
//   return [{ pid: 'p1' }];
// }

export default async function ProductDetailPage({
  params,
}: {
  params: { pid: string };
}) {
  const { pid } = params;
  const data: Props = await getProducts();
  const products: Product[] = data.products;

  const product = products.find((product) => product.id === pid);
  const random = Math.random();

  return (
    <div>
      {!product ?
        <h1>Product not found</h1>
      : <>
          <p>{random}</p>
          <h1>{product?.title}</h1>
          <p>{product?.description}</p>
          <Link href={'/'}>Back to home</Link>
        </>
      }
    </div>
  );
}
