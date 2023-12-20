export const dynamic = 'force-dynamic';

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const { searchParams } = new URL(request.url);
  const slug = params.id;
  return Response.json({ message: request.url, id: dynamic, slug: slug });
}
