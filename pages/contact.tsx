import Head from "next/head";
import socials from "../data/socials";
import SocialCircle from "../components/elements/SocialCircle";

export default function Contact() {
  return (
    <div>
      <Head>
        <title>Contact me</title>
        <meta property="title" content="Contact me" key="title" />
        <meta
          property="description"
          content="Here's my portfolio with some of the projects and clients I've worked with. Let's get in touch!"
          key="description"
        />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className="font-headline">
        <div className="grid grid-cols-3 ">
          <div className="bg-red-500 h-2 "></div>
          <div className="bg-blue-200 h-2"></div>
          <div className="bg-blue-900 h-2"></div>
        </div>
        <div className="flex items-center lg:justify-center h-screen pt-12 lg:pt-0 px-6">
          <div>
            <h1 className="text-5xl lg:text-7xl font-semibold">
              Let's start a project together
            </h1>
            <p className="text-gray-900 font-light text-lg pb-5 md:mr-20 pt-5">
              Need a site that dazzles and functions flawlessly? Drop me a line
              at
              <span className="text-red-500">
                <a href="mailto:hello@maadh.pw"> hello@maadh.pw </a>
              </span>
              and let's create something amazing!
            </p>
            <p className="text-gray-400 pb-5">Or ping me on my socials.</p>
            <div className="text-left pb-3 -ml-4">
              <div className="inline-flex">
                {socials.map((social) => (
                  <SocialCircle
                    url={social.url}
                    color={social.color}
                    svgUrl={social.svgUrl}
                    svgUrlAlt={social.svgUrlAlt}
                    key={social.url}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-3 pt-8">
          <div className="bg-red-500 h-2 "></div>
          <div className="bg-blue-200 h-2"></div>
          <div className="bg-blue-900 h-2"></div>
        </div>
      </div>
    </div>
  );
}
