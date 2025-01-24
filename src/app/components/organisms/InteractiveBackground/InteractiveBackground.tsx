import React, { ReactNode, useState } from "react";

const InteractiveBackground = ({ children }: { children: ReactNode }) => {
  const getRandomSize = () => Math.floor(Math.random() * 100) + 20; // Random size between 20px and 70px
  const getRandomColor = () => {
    const colors = ["#FCC6FF", "#FFE6C9", "#FFC785", "#FFA09B"];
    return colors[Math.floor(Math.random() * colors.length)];
  };

  interface Circle {
    size: number;
    x: number;
    y: number;
    color: string;
  }
  const [circles, setCircles] = useState([] as Circle[]);

  const handleBackgroundClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (circles.length > 200) return;
    const { clientX, clientY } = e;

    const newCircle = {
      size: getRandomSize(),
      x: clientX,
      y: clientY,
      color: getRandomColor(),
    };

    setCircles((prev) => [...prev, newCircle]);
  };

  return (
    <div
      onClick={handleBackgroundClick}
      className="relative flex justify-center items-center w-screen h-screen overflow-hidden bg-white"
    >
      <div className="z-30">{children}</div>
      {circles.map((circle, index) => (
        <div
          key={index}
          className="absolute rounded-full animate-bounce opacity-50"
          style={{
            top: circle.y - circle.size / 2,
            left: circle.x - circle.size / 2,
            width: circle.size,
            height: circle.size,
            backgroundColor: circle.color,
          }}
        />
      ))}
    </div>
  );
};

export default InteractiveBackground;
