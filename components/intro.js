// import { CMS_NAME, CMS_URL } from '@/lib/constants';
import Link from 'next/link';

export default function Intro() {
  return (
    <div className="mt-6 mb-12 lg:mt-16">
      <p className="mt-8 text-3xl font-medium text-left text-black md:text-4xl lg:text-6xl dark:text-white">
        Howdy! I’m Pawan JS.
      </p>
      <p className="mt-8 text-xl font-normal text-left text-black md:text-xl lg:text-xl dark:text-white">
        I am a <b>Unicorn Developer</b> and <b>Researcher</b> with a knack for
        building things. Currently building a Blockchain web app for NFT
        marketplace and working as a Frontend Developer in Mohali.
      </p>
      <div className="flex mt-2">
        <Link href="/about" passHref={true}>
          <button className="p-4 mt-4 mr-4 font-medium text-white transition duration-300 transform bg-black border-2 border-black cursor-pointer dark:bg-white dark:border-white dark:text-black rounded-xl hover:opacity-80">
            Know More
          </button>
        </Link>
      </div>
    </div>
  );
}
