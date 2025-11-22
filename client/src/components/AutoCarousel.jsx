import { useEffect, useState } from "react";

const AutoCarousel = () => {
  const [index, setIndex] = useState(0);

  const slides = [
    "https://i.pinimg.com/1200x/c1/f3/d5/c1f3d5f71f4128ce02d4fc744d25527a.jpg",
    "https://i.pinimg.com/1200x/28/48/e8/2848e890280bc6abae5840c08f5a6a56.jpg",
    "https://i.pinimg.com/1200x/9a/1b/6e/9a1b6eef5c7c633efb7eeb3a343a3202.jpg",
    "https://i.pinimg.com/1200x/95/5f/7a/955f7a081a62c4393a4a5d7e76a3203b.jpg",
  ]; // replace with your images

  // Auto move every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length); // infinite loop
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="carousel w-72 overflow-hidden rounded-xl">
      {slides.map((src, i) => (
        <div
          key={i}
          className="carousel-item w-72 transition-transform duration-700 ease-in-out"
          style={{
            transform: `translateX(-${index * 100}%)`,
            minWidth: "100%",
          }}
        >
          <img src={src} className="w-full object-cover" />
        </div>
      ))}
    </div>
  );
};

export default AutoCarousel;
