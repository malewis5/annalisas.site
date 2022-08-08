import Container from './container';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-accent-1 border-t border-accent-2">
      <Container>
        <div className="py-28 flex flex-col lg:flex-row items-center">
          <Link href="/">
            <h3 className="text-4xl cursor-pointer hover:underline lg:text-5xl font-bold tracking-tighter leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2">
              Annalisa Garofalo
            </h3>
          </Link>

          <div className="flex flex-col lg:flex-row justify-center items-center lg:pl-4 lg:w-1/2">
            <a
              href="mailto:annalisa.garofalo1@gmail.com"
              className="mx-3 bg-black hover:bg-white hover:text-black border border-black text-white font-bold py-3 px-12 lg:px-8 duration-200 transition-colors mb-6 lg:mb-0"
            >
              Contact the author
            </a>
            <a
              href={`https://annalisagarofalo.medium.com/`}
              className="mx-3 font-bold hover:underline"
            >
              Follow on Medium
            </a>
          </div>
        </div>
        <div>
          <a
            href="https://www.matthew-lewis.online"
            className="text-xs text-slate-500 hover:underline hover:text-slate-900"
          >
            Powered by ©MatTech LLC 2022
          </a>
        </div>
      </Container>
    </footer>
  );
}
