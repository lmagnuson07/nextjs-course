import Link from 'next/link';

function ClientsPage() {
  const clients = [
    {
      id: 'client-1',
      name: 'Client 1',
    },
    {
      id: 'client-2',
      name: 'Client 2',
    },
    {
      id: 'client-3',
      name: 'Client 3',
    },
  ];
  return (
    <main>
      <h1>Clients Page List</h1>
      {clients.map((client) => (
        <li key={client.id}>
          <Link href={`/clients/${client.id}`}>{client.name}</Link>
          {/*Not supported in App Router :( */}
          {/*<Link*/}
          {/*  href={{*/}
          {/*    pathname: '/clients/[id]',*/}
          {/*    query: { id: client.id },*/}
          {/*  }}*/}
          {/*>*/}
          {/*  {client.name}*/}
          {/*</Link>*/}
        </li>
      ))}
    </main>
  );
}

export default ClientsPage;
