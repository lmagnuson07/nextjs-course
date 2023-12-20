export const dynamic = 'force-dynamic';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  // const res = await request.json();
  // console.log(res);
  console.log(request.method);
  console.log(request.body);
  const dynamic = searchParams.get('id');
  return Response.json({ message: request.url, id: dynamic, request: request });
}

export async function POST(request: Request) {
  // const { searchParams } = new URL(request.url);
  const res = await request.json();
  const newFeedback = {
    email: res.email,
    feedback: res.feedback,
    id: Date.now().toString(),
    msg: 'success',
  };
  // store in database

  // const dynamic = searchParams.get('id');
  // return Response.json(newFeedback);
  return new Response(JSON.stringify(newFeedback), {
    status: 201,
    headers: {
      'Content-Type': 'application/json',
    },
  });
  // return new Response(null, { status: 502 });
}
