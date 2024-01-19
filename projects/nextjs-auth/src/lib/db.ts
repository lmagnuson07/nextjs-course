import { Db, MongoClient } from 'mongodb';

const mongoUrl = `mongodb+srv://${process.env.mongodb_username}:${process.env.mongodb_password}@${process.env.mongodb_clustername}.gzgivfu.mongodb.net/?retryWrites=true&w=majority`;

export async function db(): Promise<MongoClient> {
  return new MongoClient(mongoUrl, { family: 4 });
}

export async function conn(
  client: MongoClient,
  dbName: string | undefined
): Promise<Db> {
  await client.connect();
  return client.db(dbName);
}

export async function connectToAuthDb() {
  const client = await db();
  const connection = await conn(client, process.env.mongodb_database);
  return { client, connection };
}

export async function disconnect(client: MongoClient): Promise<void> {
  await client.close();
}
