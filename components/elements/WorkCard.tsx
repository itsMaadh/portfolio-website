export default function WorkCard({
  logoUrl,
  logoAltText,
  bgColor,
  heading,
  description,
  workImage,
  workImageAltText,
  url,
}) {
  return (
    <a href={url} target="_blank">
      <div
        className={`bg-${bgColor}-100 rounded-xl h-auto mb-8 hover:bg-${bgColor}-200 shadow-xl`}
      >
        <div className="grid grid-cols-1 xl:grid-cols-2">
          <div className="px-5 py-9">
            <div className="rounded-full h-16 w-16 flex items-center justify-center bg-white ml-3">
              <img className="h-8" src={logoUrl} alt={logoAltText} />
            </div>
            <div className="ml-3">
              <h4 className="font-semibold pt-6 text-xl">{heading}</h4>
              <p className="font-light pt-4 text-lg">{description}</p>
            </div>
          </div>
          <div className="hidden xl:block">
            <div className="pt-10">
              <img
                className="object-cover object-left-top w-full h-80 rounded-br-xl rounded-tl-xl"
                src={workImage}
                alt={workImageAltText}
              />
            </div>
          </div>
        </div>
      </div>
    </a>
  );
}
