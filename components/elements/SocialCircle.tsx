export default function SocialCircle({ url, svgUrl, color, svgUrlAlt }) {
  return (
    <a
      href={url}
      target="_blank"
      className={`rounded-full h-12 w-12 flex items-center justify-center bg-${color}-100 hover:bg-${color}-200 ml-3`}
    >
      <p className="hidden">
        bg-red-100 bg-gray-100 bg-blue-100 hover:bg-red-200 hover:bg-gray-200
        hover:bg-blue-200
      </p>
      <img className={`text-${color}-100 h-4`} src={svgUrl} alt={svgUrlAlt} />
    </a>
  );
}
