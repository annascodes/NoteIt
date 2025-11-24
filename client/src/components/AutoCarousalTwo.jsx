import { useEffect, useState } from "react";
import { AppHeroImgs } from "../../lib/hardData";

const AutoCarouselTwo = () => {


  const [index, setIndex] = useState(0);

  // Auto slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative overflow-hidden w-72 rounded-xl">
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {AppHeroImgs.map((src, i) => (
          <img
            key={i}
            src={src}
            className="w-full object-cover shrink-0"
          />
        ))}
      </div>

      {/* Left arrow */}
      <button
        onClick={prevSlide}
        className="absolute left-2 top-1/2 -translate-y-1/2 btn btn-circle"
      >
        ❮
      </button>

      {/* Right arrow */}
      <button
        onClick={nextSlide}
        className="absolute right-2 top-1/2 -translate-y-1/2 btn btn-circle"
      >
        ❯
      </button>
    </div>
  );
};

export default AutoCarouselTwo;
