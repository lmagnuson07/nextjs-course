function PortfolioProjectPage({
  params,
}: {
  params: {
    projectid: string;
  };
}) {
  return (
    <main>
      <p>{params.projectid}</p>
      <h1>Portfolio Project Page</h1>
    </main>
  );
}

export default PortfolioProjectPage;
