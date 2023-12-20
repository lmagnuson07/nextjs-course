'use client';
import { useRouter, useSearchParams, usePathname } from 'next/navigation';

export default function loadProjectHandler() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  // The argument passed to get must be the name of the search param (?test=true)
  const search = searchParams.get('test');

  function handler() {
    // load projects
    // router.push('/blog/something/test?test=true');
    router.push('/blog/something/test?test=true', {
      shallow: true,
      locale: 'en-US',
      scroll: true,
      // scrollTo: 'number',
      scrollTo: 26,
    });
  }
  return (
    <>
      <div>{pathname}</div>
      <button onClick={handler}>{JSON.stringify(search)}</button>
    </>
  );
}
