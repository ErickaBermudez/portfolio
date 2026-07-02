import Image from "next/image";

const EDUCATION = [
  {
    years: "2022–2024",
    degree: "Master's in Engineering, Data Analytics",
    school: "Hankuk University of Foreign Studies · South Korea",
  },
  {
    years: "2017–2021",
    degree: "B.S. Computer Science",
    school: "Universidad Autónoma de Chihuahua · Mexico",
  },
  {
    years: "2014–2017",
    degree: "B.S. Information & Communication Technologies Management",
    school: "Universidad Autónoma de Chihuahua · Mexico",
  },
];

export default function Education() {
  return (
    <div className="max-w-[1080px] mx-auto grid grid-cols-1 md:grid-cols-[1fr_30%] gap-8 md:gap-0 items-start">
      <div>
        <h2 className="m-0 mb-[30px] font-display font-extrabold text-[clamp(28px,4vw,36px)]">
          Education
        </h2>
        <ul className="m-0 p-0 list-none flex flex-col max-w-[860px]">
          {EDUCATION.map(({ years, degree, school }, i) => (
            <li
              key={degree}
              className={`flex gap-4 sm:gap-6 py-5 px-1 items-baseline flex-wrap ${
                i < EDUCATION.length - 1 ? "border-b-2 border-dashed border-dash" : ""
              }`}
            >
              <span className="font-mono text-sm text-muted2 w-[110px] shrink-0">
                {years}
              </span>
              <div className="flex-1 min-w-[280px]">
                <h3 className="m-0 font-display font-extrabold text-[19px]">
                  {degree}
                </h3>
                <p className="mt-1 mb-0 text-[15.5px] text-muted">{school}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="w-40 sm:w-48 md:w-56 lg:w-64 justify-self-center md:justify-self-end md:mt-8 md:-ml-16 lg:-ml-20 rotate-3 hover:rotate-0 transition-transform bg-card border-2 border-ink rounded-md p-2.5 pb-5 shadow-[6px_6px_0_var(--rose)] shrink-0">
        <div className="relative w-full aspect-square rounded-sm overflow-hidden">
          <Image
            src="/education/cherry-blossom.jpg"
            alt="Cherry blossoms in South Korea"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
}
