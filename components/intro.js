import Link from 'next/link';

export default function Intro() {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-8 mb-8 md:mb-8">
      <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8">
        <span className="hover:underline cursor-pointer">
          <Link href="/me">Annalisa </Link>
        </span>
        <span className="hover:underline cursor-pointer">
          <Link href="/g">G</Link>
        </span>
        .
      </h1>
      <h4 className="text-center md:text-left text-lg mt-5 md:pl-8">
        sometimes poet, sometimes unidentified flying object
      </h4>
    </section>
  );
}
