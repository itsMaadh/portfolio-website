export default function ClientsCard({ bgColor, logoUrl, companyName, url }) {
  return (
    <a
      href={url}
      target="_blank"
      className={`bg-${bgColor}-100 transform transition hover:-translate-y-1 rounded-xl shadow-xl lg:mx-12 mb-9 h-40 flex items-center justify-center flex-col flex-wrap`}
    >
      <img className="h-12" src={logoUrl} alt="" />
      <p className="mt-5 font-semibold">{companyName}</p>
    </a>
  );
}
