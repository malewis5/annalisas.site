import { CMS_NAME, CMS_URL } from '../lib/constants';

export default function Intro() {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-8 mb-8 md:mb-8">
      <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8">
        Annalisa.
      </h1>
      <h4 className="text-center md:text-left text-lg mt-5 md:pl-8">
        sometimes poet, sometimes unidentified flying object
      </h4>
    </section>
  );
}
