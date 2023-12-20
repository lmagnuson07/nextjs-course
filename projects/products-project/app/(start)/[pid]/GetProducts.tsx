import path from 'path';
import fs from 'fs/promises';

// This configuration ensures that a GET ajax request is sent each time this url is visited, for any dynamic routes not registered.

// Setting this to false will return a 404 if the product is not found
export const dynamicParams = true;

export const dynamic = 'force-dynamic';

export const revalidate = 1;

export const fetchCache = 'force-no-store';

export type Props = {
  products: [Product];
};

export type Product = {
  id: string;
  title: string;
  description: string;
};

export default async function GetProducts() {
  const filePath = path.join(process.cwd(), 'data', 'dummy-backend.json');
  const jsonData = await fs.readFile(filePath);
  return JSON.parse(jsonData.toString());
}
