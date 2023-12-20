// Slug will always be an array. Even with a single route

function BlogPostPage({
  params,
  searchParams,
}: {
  params: { slug: string[] };
  searchParams: string;
}) {
  return (
    <main>
      <p>{JSON.stringify(params)}</p>
      <p>{params.slug[0]}</p>
      <p>{params.slug[1]}</p>
      <p>{JSON.stringify(searchParams)}</p>
      <h1>Blog Post Page</h1>
    </main>
  );
}

export default BlogPostPage;
