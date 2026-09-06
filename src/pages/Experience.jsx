import Wave from "../components/Wave";

function Experience() {
  return (
    <div className="relative overflow-hidden min-h-screen px-6 py-20">
      <div className="max-w-4xl mx-auto text-amber-50 pb-40 md:pb-48">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-12">Experience</h1>
        <article className="bg-white rounded-2xl shadow-xl p-6 md:p-8 text-gray-800">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3">
            <div>
              <h2 className="text-2xl font-semibold">PHP &amp; MySQL Intern</h2>
              <p className="mt-2 text-green-800 font-medium">IIT Bombay Spoken Tutorial Project (FOSSEE)</p>
            </div>
            <p className="text-sm font-medium text-gray-600">July 2026 - Present</p>
          </div>
          <p className="mt-6 leading-relaxed">Working on PHP and MySQL-based development tasks.</p>
        </article>
      </div>
      <Wave />
    </div>
  );
}

export default Experience;
