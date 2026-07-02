import React, { ReactNode, useRef, useState } from "react";

const MAX_CIRCLES = 18;
const COLORS = ["var(--peach)", "var(--salmon)", "var(--rose)"];

const getRandomSize = () => Math.floor(Math.random() * 50) + 20; // 20px–70px, matching the static decorative circles
const getRandomColor = () => COLORS[Math.floor(Math.random() * COLORS.length)];

interface Circle {
  id: number;
  size: number;
  x: number;
  y: number;
  color: string;
}

let nextId = 0;

const InteractiveBackground = ({ children }: { children: ReactNode }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [circles, setCircles] = useState<Circle[]>([]);

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    // Don't spawn a circle on top of the CTA buttons / other interactive elements.
    if (e.target instanceof Element && e.target.closest("a, button")) return;

    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;

    const newCircle: Circle = {
      id: nextId++,
      size: getRandomSize(),
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
      color: getRandomColor(),
    };

    setCircles((prev) => {
      const next = [...prev, newCircle];
      return next.length > MAX_CIRCLES ? next.slice(next.length - MAX_CIRCLES) : next;
    });
  };

  return (
    <div
      ref={containerRef}
      onClick={handleClick}
      className="relative w-full overflow-hidden"
    >
      {circles.map((circle) => (
        <div
          key={circle.id}
          aria-hidden="true"
          className="absolute rounded-full opacity-80 animate-floaty pointer-events-none"
          style={{
            top: circle.y - circle.size / 2,
            left: circle.x - circle.size / 2,
            width: circle.size,
            height: circle.size,
            backgroundColor: circle.color,
          }}
        />
      ))}
      <div className="relative">{children}</div>
    </div>
  );
};

export default InteractiveBackground;
