export default function SocialCircle({ url, svgUrl, color, svgUrlAlt }) {
  return (
    <a
      href={url}
      className={`rounded-full h-12 w-12 flex items-center justify-center bg-${color}-100 hover:bg-${color}-200 ml-3`}
    >
      <img className={`text-${color}-100 h-4`} src={svgUrl} alt={svgUrlAlt} />
    </a>
  );
}
