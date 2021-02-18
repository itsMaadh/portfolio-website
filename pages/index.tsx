import Head from "next/head";
import WorkCard from "../components/elements/WorkCard";
import workExperience from "../data/workExperience";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Maadh's Portfolio</title>
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
        <div className="container mx-auto px-5 md:px-36">
          {/*Hero section start*/}
          <div className="grid grid-cols-1 lg:grid-cols-2 content-center m-1 flex-col-reverse">
            {/*Hero image*/}
            <div className="md:order-last">
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
                <p className="text-gray-900 font-light text-lg pb-5 md:mr-20">
                  I am a full stack developer specializing in web technologies.
                  I currently work as a software engineer at MTCC Maldives.
                </p>
                <button className="bg-gray-900 text-white uppercase hover:-translate-y-0.5 px-12 py-3 rounded-md text-sm tracking-wider font-medium transform transition hover:bg-gray-700">
                  Let's chat
                </button>
              </div>
            </div>
          </div>
          {/*Hero section end*/}
          {/*Work experience section start*/}
          <h3 className="font-semibold text-2xl tracking-wider pb-12 pt-10 md:pt-0">
            Some projects I've worked on
          </h3>
          {workExperience.map((work) => (
            <WorkCard
              heading={work.heading}
              bgColor={work.bgColor}
              logoUrl={work.logoUrl}
              description={work.description}
            />
          ))}
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
