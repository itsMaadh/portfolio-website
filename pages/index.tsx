import Head from "next/head";
import WorkCard from "../components/elements/WorkCard";
import ClientsCard from "../components/elements/ClientsCard";
import SocialCircle from "../components/elements/SocialCircle";

import workExperience from "../data/workExperience";
import clients from "../data/clients";
import socials from "../data/socials";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Maadh's Portfolio</title>
        <meta property="title" content="Maadh's Portfolio" key="title" />
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
      {/*Header color bar*/}
      <div className="font-headline">
        <div className="grid grid-cols-3 ">
          <div className="bg-red-500 h-2 "></div>
          <div className="bg-blue-200 h-2"></div>
          <div className="bg-blue-900 h-2"></div>
        </div>
        <div className="container mx-auto px-5 md:px-14 max-w-7xl">
          {/*Hero section start*/}
          <div className="grid grid-cols-1 lg:grid-cols-2 content-center m-1 flex-col-reverse">
            {/*Hero image*/}
            <div className="lg:order-last">
              <div className="flex items-center justify-center lg:h-screen">
                <img
                  className="object-fill lg:pb-20 lg:px-24"
                  src="/hero-image.png"
                  alt="Hero image vector"
                />
              </div>
            </div>
            {/*Hero text*/}
            <div className="flex items-center lg:justify-center lg:h-screen pt-12 lg:pt-0">
              <div>
                <h1 className="text-5xl lg:text-7xl font-semibold">Hi,</h1>
                <h1 className="mt-5 text-5xl lg:text-7xl font-semibold">
                  I'm Maadh.
                </h1>
                <p className="text-gray-400 pt-5 pb-5">I make web stuff.</p>
                <p className="text-gray-900 font-light text-lg pb-10 md:mr-20">
                  I am a full stack developer specializing in web technologies.
                  I currently work as a Full-stack Developer at LottieFiles.
                </p>
                {/*<a
                  href="mailto:hello@maadh.pw"
                  target="_blank"
                  className="bg-gray-900 text-white uppercase px-12 py-3 rounded-md text-sm tracking-wider font-medium hover:bg-gray-700 shadow-xl"
                >
                  Let's chat
                </a>*/}
              </div>
            </div>
          </div>
          {/*Hero section end*/}
          {/*Work experience section start*/}
          <h3 className="font-semibold text-2xl tracking-wider pb-12 pt-10 lg:pt-0">
            Some projects I've worked on
          </h3>
          {workExperience.map((work) => (
            <WorkCard
              heading={work.heading}
              bgColor={work.bgColor}
              logoUrl={work.logoUrl}
              description={work.description}
              logoAltText={work.logoAltText}
              workImage={work.workImage}
              workImageAltText={work.workImageAltText}
              url={work.url}
              key={work.heading}
            />
          ))}
          {/*Work experience section ends*/}
          {/*Clients section starts*/}
          <h3 className="font-semibold text-2xl tracking-wider pb-12 mt-24 md:pt-0 max-w-2xl">
            Some clients I've worked with
          </h3>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
            {clients.map((client) => (
              <ClientsCard
                logoUrl={client.logoUrl}
                bgColor={client.bgColor}
                companyName={client.companyName}
                url={client.url}
                key={client.url}
              />
            ))}
          </div>
          {/*Clients section ends*/}
          <h3 className="font-semibold text-xl tracking-wider pb-12 mt-12 md:pt-0 text-center">
            Connect with me
          </h3>
          <div className="text-center pb-3">
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
        {/*Work experience section end*/}
        <div className="grid grid-cols-3 pt-8">
          <div className="bg-red-500 h-2 "></div>
          <div className="bg-blue-200 h-2"></div>
          <div className="bg-blue-900 h-2"></div>
        </div>
      </div>
    </div>
  );
}
