import Link from 'next/link';

function HomePage() {
  return (
    <main>
      <h1>Home Page</h1>
      <ul>
        <li>
          <Link href={'/portfolio'}>Portfolio</Link>
        </li>
      </ul>
    </main>
  );
}

export default HomePage;
