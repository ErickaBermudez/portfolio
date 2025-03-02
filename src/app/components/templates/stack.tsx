import { useState } from "react";

export default function Stack() {
  const [activeTab, setActiveTab] = useState("development");

  return (
    <div className="flex flex-col min-h-screen">
      <div className="w-full">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="w-full h-24"
          style={{ color: "#FCC6FF" }}
          aria-hidden="true"
        >
          <path
            d="M0,0 H1200 V20
               C1100,120 1000,20 900,100
               C800,180 700,0 600,80
               C500,160 400,20 300,100
               C200,180 100,20 0,100
               Z"
            fill="currentColor"
          />
        </svg>
      </div>

      <div className="grid grid-cols-2 gap-3 mt-10 px-10 lg:px-36 h-[80vh]">
        <div className="flex col-span-2 lg:col-span-1 flex-col items-center justify-center align-middle">
          <h1 className="text-4xl font-bold relative z-10">Tech Stack</h1>
          <div
            className="w-40 h-6 -mt-5 ml-20"
            style={{ backgroundColor: "#FCC6FF" }}
          />
        </div>
        <div className="flex flex-col mt-10 lg:mt-0 col-span-2 lg:col-span-1 items-center align-middle justify-center">
          <p>
            From front-end finesse to backend brilliance, I've got you covered.
            I specialize in full-stack development, crafting everything from
            sleek, responsive interfaces to rock-solid server logic. I also love
            diving into the world of machine learning and data analytics, where
            insights turn into actionable magic.
          </p>

          <div className="flex flex-col mt-10 w-full">
            <div className="flex space-x-4 mb-8">
              {["languages", "development", "databases", "others"].map(
                (tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-6 py-2 transition-all duration-300 ${
                      activeTab === tab
                        ? "bg-[#FCC6FF] text-gray-800 "
                        : "bg-gray-100 hover:bg-gray-200"
                    }`}
                  >
                    {tab.charAt(0).toUpperCase() + tab.slice(1)}
                  </button>
                )
              )}
            </div>

            <div className="w-full max-w-3xl px-3 bg-white">
              {activeTab === "languages" && (
                <div className="flex gap-4 ">
                  <i
                    className="devicon-typescript-plain colored text-3xl"
                    title="TypeScript"
                  />
                  <i
                    className="devicon-javascript-plain colored text-3xl"
                    title="JavaScript"
                  />
                  <i
                    className="devicon-python-plain-wordmark colored text-3xl"
                    title="Python"
                  />
                  <i
                    className="devicon-cplusplus-plain-wordmark colored text-3xl"
                    title="C++"
                  />
                  <i
                    className="devicon-java-plain-wordmark colored text-3xl"
                    title="Java"
                  />
                </div>
              )}
              {activeTab === "development" && (
                <div className="flex gap-4 flex-wrap">
                  <i
                    className="devicon-bootstrap-plain-wordmark colored text-3xl"
                    title="Bootstrap"
                  />
                  <i
                    className="devicon-tailwindcss-original colored text-3xl"
                    title="Tailwind CSS"
                  />
                  <i
                    className="devicon-css3-plain-wordmark colored text-3xl"
                    title="CSS3"
                  />
                  <i
                    className="devicon-sass-original colored text-3xl"
                    title="Sass"
                  />
                  <i
                    className="devicon-html5-plain-wordmark colored text-3xl"
                    title="HTML5"
                  />
                  <i
                    className="devicon-angularjs-plain colored text-3xl"
                    title="Angular"
                  />
                  <i
                    className="devicon-astro-plain colored text-3xl"
                    title="Astro"
                  />
                  <i
                    className="devicon-react-original-wordmark colored text-3xl"
                    title="React"
                  />
                  <i
                    className="devicon-nextjs-plain-wordmark colored text-3xl"
                    title="Next.js"
                  />
                  <i
                    className="devicon-wordpress-plain colored text-3xl"
                    title="WordPress"
                  />
                  <i
                    className="devicon-nodejs-plain colored text-3xl"
                    title="Node.js"
                  />
                  <i
                    className="devicon-django-plain colored text-3xl"
                    title="Django"
                  />
                  <i
                    className="devicon-express-original-wordmark colored text-3xl"
                    title="Express"
                  />
                  <i
                    className="devicon-electron-original colored text-3xl"
                    title="Electron"
                  />
                  <i
                    className="devicon-flutter-plain colored text-3xl"
                    title="Flutter"
                  />
                </div>
              )}
              {activeTab === "databases" && (
                <div className="flex gap-4">
                  <i
                    className="devicon-postgresql-plain-wordmark colored text-3xl"
                    title="PostgreSQL"
                  />
                  <i
                    className="devicon-mysql-plain-wordmark colored text-3xl"
                    title="MySQL"
                  />
                  <i
                    className="devicon-sqlite-plain-wordmark colored text-3xl"
                    title="SQLite"
                  />
                  <i
                    className="devicon-mongodb-plain-wordmark colored text-3xl"
                    title="MongoDB"
                  />
                  <i
                    className="devicon-firebase-plain colored text-3xl"
                    title="Firebase"
                  />
                  <i
                    className="devicon-trpc-plain colored text-3xl"
                    title="tRPC"
                  />
                  <i
                    className="devicon-prisma-original colored text-3xl"
                    title="Prisma"
                  />
                </div>
              )}
              {activeTab === "others" && (
                <div className="">
                  <h2 className="text-xl font-bold">DevOps</h2>
                  <div className="flex gap-4">
                    <i
                      className="devicon-amazonwebservices-plain-wordmark colored text-3xl"
                      title="AWS"
                    />
                    <i
                      className="devicon-docker-plain colored text-3xl"
                      title="Docker"
                    />
                    <i
                      className="devicon-git-plain-wordmark colored text-3xl"
                      title="Git"
                    />
                    <i
                      className="devicon-pulumi-plain colored text-3xl"
                      title="Pulumi"
                    />
                    <i
                      className="devicon-sentry-original colored text-3xl"
                      title="Sentry"
                    />
                  </div>

                  <h2 className="text-xl font-bold mt-4">
                    Machine Learning & Analytics
                  </h2>
                  <div className="flex gap-4">
                    <i
                      className="devicon-numpy-plain colored text-3xl"
                      title="NumPy"
                    />
                    <i
                      className="devicon-pandas-plain colored text-3xl"
                      title="Pandas"
                    />
                    <i
                      className="devicon-tensorflow-original-wordmark colored text-3xl"
                      title="TensorFlow"
                    />
                    <i
                      className="devicon-pytorch-original colored text-3xl"
                      title="PyTorch"
                    />
                  </div>

                  <h2 className="text-xl font-bold mt-4">Development Tools</h2>
                  <div className="flex gap-4">
                    <i
                      className="devicon-jira-plain colored text-3xl"
                      title="Jira"
                    />
                    <i
                      className="devicon-storybook-plain colored text-3xl"
                      title="Storybook"
                    />
                    <i
                      className="devicon-swagger-plain colored text-3xl"
                      title="Swagger"
                    />
                    <i
                      className="devicon-ubuntu-plain colored text-3xl"
                      title="Ubuntu"
                    />
                    <i
                      className="devicon-trello-plain colored text-3xl"
                      title="Trello"
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
