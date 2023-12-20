function SelectedClientProjectPage({
  params,
}: {
  params: { clientprojectid: string; id: string };
}) {
  return (
    <main>
      <h1>Selected Client Project Page</h1>
      <p>{params.clientprojectid}</p>
      <p>{params.id}</p>
    </main>
  );
}

export default SelectedClientProjectPage;
