import LoadProjectHandler from './loadProjectHandler';

export default function ClientPage({ params }: { params: { id: string } }) {
  return (
    <main>
      <h1>The projects of a Given Client</h1>
      <p>{params.id}</p>
      <LoadProjectHandler />
    </main>
  );
}

export async function generateMetadata({ params }: { params: { id: string } }) {
  return {
    title: `Client: ${params.id}`,
  };
}
