type Repository = {
  id: string;
  name: string;
  full_name: string;
  private: boolean;
};

async function AboutPage({
  params,
  searchParams,
}: {
  params: any;
  searchParams: any;
}) {
  const res = await fetch('https://api.github.com/repos/vercel/next.js');
  const data: Repository = await res.json();

  return (
    <main>
      <h2>{JSON.stringify(searchParams)}</h2>
      <h1>{data.private ? 'Private' : 'Public'}</h1>
    </main>
  );
}

export default AboutPage;
