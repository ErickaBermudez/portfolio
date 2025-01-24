"use client";

import { useCallback, useEffect, useState } from "react";
import { InteractiveBackground } from "./components/";

export default function Home() {
  const endSentences = [
    "data engineer",
    "cat mom 🐱",
    "UX enthusiast",
    "book lover 📖",
  ];

  const colors = ["#FCC6FF", "#FFE6C9", "#FFC785", "#FFA09B"];

  const [currentSentenceIndex, setCurrentSentenceIndex] = useState(0);

  const setNextSentence = () => {
    setCurrentSentenceIndex((prevIndex) => {
      if (prevIndex === 3) return 0;
      return prevIndex + 1;
    });
  };

  const [animationKey, setAnimationKey] = useState(0);

  const updateSentence = useCallback(() => {
    setNextSentence();
    setAnimationKey((prevKey) => prevKey + 1);
  }, []);

  useEffect(() => {
    const intervalId = setInterval(updateSentence, 5000);

    return () => clearInterval(intervalId);
  }, [updateSentence]);

  return (
    <InteractiveBackground>
      <div className="text-center w-full">
        <h1>Hi! I&apos;m Ericka</h1>
        <div className="flex flex-col md:flex-row justify-center items-center align-middle w-full">
          <div className="w-full md:w-72 flex justify-center md:justify-end">
            <p className="mr-1">Full-stack developer &</p>
          </div>
          <div className="w-full md:w-52 flex justify-center md:justify-start">
            <p
              key={animationKey}
              className={`opacity-0 animate-slideUp inline-block px-1`}
              style={{ backgroundColor: colors[currentSentenceIndex] }}
            >
              {endSentences[currentSentenceIndex]}
            </p>
          </div>
        </div>
      </div>
    </InteractiveBackground>
  );
}
