import Wave from "../components/Wave";

const certifications = [
  {
    title: "Version Control",
    issuer: "Meta",
    platform: "Coursera",
    date: "September 2026",
    credential: "https://coursera.org/share/ce6ba236971af96f5ed6024d4d6bba1c",
  },
  {
    title: "Introduction to Front-End Development",
    issuer: "Meta",
    platform: "Coursera",
    date: "August 2026",
    credential: "https://coursera.org/share/ea36eb7ba78a523fb10d4d591884b793",
  },
  {
    title: "Python Project for Data Science",
    issuer: "IBM",
    platform: "Coursera",
    date: "August 2026",
    credential: "https://coursera.org/share/eb8647de7a91cabbd1968cf839437502",
  },
  {
    title: "Python for Data Science, AI & Development",
    issuer: "IBM",
    platform: "Coursera",
    date: "August 2026",
    credential: "https://coursera.org/share/0c9d480bcd3610baa42526956c037173",
  },
  {
    title: "Python",
    issuer: "freeCodeCamp",
    date: "July 2026",
    credentialId: "fcc-d449ed5b-2832-4551-90b7-094698d37708-pyv9",
  },
];

function Certifications() {
  return (
    <div className="relative overflow-hidden min-h-screen px-6 py-20">
      <div className="max-w-5xl mx-auto text-amber-50 pb-40 md:pb-48">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-12">Certifications</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certifications.map((certification) => (
            <article key={certification.title} className="bg-white rounded-2xl shadow-xl p-6 text-gray-800">
              <h2 className="text-xl font-semibold leading-snug">
                {certification.credential ? (
                  <a href={certification.credential} target="_blank" rel="noopener noreferrer" className="text-green-900 hover:text-amber-600 hover:underline">
                    {certification.title}
                  </a>
                ) : certification.title}
              </h2>
              <p className="mt-3 text-sm">{certification.issuer}{certification.platform ? ` · ${certification.platform}` : ""}</p>
              <p className="mt-1 text-sm text-gray-600">{certification.date}</p>
              {certification.credentialId && <p className="mt-4 text-xs break-all text-gray-600">Credential ID: {certification.credentialId}</p>}
            </article>
          ))}
        </div>
      </div>
      <Wave />
    </div>
  );
}

export default Certifications;
