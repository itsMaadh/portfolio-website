export default function WorkCard({ logoUrl, bgColor, heading, description }) {
  return (
    <div
      className={`bg-${bgColor}-100 rounded-xl h-auto px-5 py-9 mb-5 hover:bg-${bgColor}-200`}
    >
      <div className="grid grid-cols-1">
        <div>
          <div className="rounded-full h-16 w-16 flex items-center justify-center bg-white ml-3">
            <img className="h-8" src={logoUrl} alt="Fish on logo" />
          </div>
          <div className="ml-3">
            <h4 className="font-semibold pt-6 text-xl">{heading}</h4>
            <p className="font-light pt-4 text-lg">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
