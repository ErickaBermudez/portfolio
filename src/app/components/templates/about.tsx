import { FloatingButton } from "../organisms/FloatingButton";
import { useState } from "react";
import Image from "next/image";

export default function About() {
  const [showBookMessage, setShowBookMessage] = useState(false);
  return (
    <div className="flex flex-col min-h-screen">
      <div className="w-full">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="w-full h-24 text-blue-200"
          aria-hidden="true"
        >
          <path
            d="M0,0 H1200 V20
               C1150,90 1100,40 1050,80
               C1000,120 950,60 900,90
               C850,120 800,40 750,80
               C700,120 650,60 600,90
               C550,120 500,40 450,80
               C400,120 350,60 300,90
               C250,120 200,40 150,80
               C100,120 50,60 0,90
               Z"
            fill="currentColor"
          />
        </svg>
      </div>

      <div className="grid grid-cols-2 gap-3 mt-10 px-10 lg:px-36 h-[80vh]">
        <div className="flex col-span-2 lg:col-span-1 flex-col items-center justify-center align-middle">
          <h1 className="text-4xl font-bold relative z-10">About</h1>
          {/** we need to make a small rectangle under it but like, a little off */}
          <div className="w-24 h-6 bg-blue-200 -mt-5 ml-16" />
        </div>
        <div className="flex flex-col mt-10 lg:mt-0 col-span-2 lg:col-span-1 items-center align-middle justify-center">
          <p>
            Hello there! I’m Ericka Bermúdez – a full-stack developer who
            thrives on creating dynamic, scalable solutions. What makes me tick?
            Clean code, clever problem-solving, and exploring the vast potential
            of data analytics and machine learning. When I’m not coding, you’ll
            find me teaching about coding or enjoying a book with a cup of
            coffee.
          </p>
        </div>
      </div>

      <FloatingButton
        showMessage={showBookMessage}
        setShowMessage={setShowBookMessage}
        content={
          <div>
            Current book recommendation:
            <a
              href="https://www.goodreads.com/book/show/25666050-algorithms-to-live-by"
              className="text-blue-500"
            >
              {" "}
              Algorithms to Live By
            </a>{" "}
            by Brian Christian and Tom Griffiths
          </div>
        }
        icon={
          <Image src="/icons/kitty.png" alt="T3 Stack" width={50} height={50} />
        }
        color="bg-transparent"
      />
    </div>
  );
}
