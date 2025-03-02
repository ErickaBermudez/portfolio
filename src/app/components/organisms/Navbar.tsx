"use client";

export default function Navbar() {
  const scrollToSection = (
    e: React.MouseEvent<HTMLAnchorElement>,
    id: string
  ) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <nav className="bg-white/80 backdrop-blur-sm shadow-sm absolute top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex space-x-8">
            <a
              href="#about"
              onClick={(e) => scrollToSection(e, "about")}
              className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors"
            >
              About
            </a>
            <a
              href="#stack"
              onClick={(e) => scrollToSection(e, "stack")}
              className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors"
            >
              Stack
            </a>
            <a
              href="#contact"
              onClick={(e) => scrollToSection(e, "contact")}
              className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors"
            >
              Contact
            </a>
          </div>

          <a
            href="/docs/ErickaBermudez.pdf"
            download
            className="hidden md:inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-[#FFA09B] hover:bg-[#9c5956] transition-colors"
          >
            Download CV
          </a>

          <a
            href="/docs/ErickaBermudez.pdf"
            download
            className="md:hidden inline-flex px-2 py-1 items-center  border border-transparent text-sm font-medium rounded-md text-white bg-[#FFA09B] hover:bg-[#9c5956] transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="size-5"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M9 8.25H7.5a2.25 2.25 0 0 0-2.25 2.25v9a2.25 2.25 0 0 0 2.25 2.25h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25H15M9 12l3 3m0 0 3-3m-3 3V2.25"
              />
            </svg>
          </a>
        </div>
      </div>
    </nav>
  );
}
