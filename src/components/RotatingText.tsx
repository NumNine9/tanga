import React, { useState, useEffect } from "react";

const phrases = [
  "Digital Experiences",
  "Innovative Solutions",
  "Seamless Interfaces",
  "Smart Applications",
  "Engaging Platforms"
];

export default function RotatingText() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % phrases.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <h1 className="text-4xl font-bold tracking-tight sm:text-5xl xl:text-6xl/none bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-[#468fe1]">
      Transforming Ideas into{" "}
      <span className="text-4xl font-bold tracking-tight sm:text-5xl xl:text-6xl/none bg-clip-text text-transparent bg-gradient-to-r from-[#468fe1] to-blue-400">
        {phrases[index]}
      </span>
    </h1>
  );
}
