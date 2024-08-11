import { Button, Carousel } from "antd";
import { useState } from "react";
import { Link } from "react-router-dom";

const contentStyle = {
  height: "100vh",
  color: "#fff",
  textAlign: "center",
  background: "#364d79",
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
};

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const onChange = (current) => {
    setCurrentSlide(current);
  };

  const slideData = [
    {
      image: "https://adventureshop.mt/cdn/shop/files/Lowe_Alpine_Airzone_Active_SS20_FULL_RES_FINAL_DELIVERY_Jimmy_Hyland-JHPVISUALS_2020-0981.jpg?v=1719221195&width=1750",
      title: "Move Your World",
      subtitle: "Lowe Alpine Backpacks",
      description: "With Over 50 years of Experience Designing World-Class Carry Systems",
    },
    {
      image: "https://adventureshop.mt/cdn/shop/files/Lismore_450_HI-2023-9-large.jpg?v=1713265453&width=1750",
      title: "Explore More",
      subtitle: "Discover New Horizons",
      description: "High-quality gear for your next adventure",
    },
    {
      image: "https://adventureshop.mt/cdn/shop/files/2024_ClassicAir_Orange_High24-large.jpg?v=1719220981&width=1750",
      title: "Adventure Awaits",
      subtitle: "Gear Up Now",
      description: "Equip yourself with the best outdoor equipment",
    },
    {
      image: "https://adventureshop.mt/cdn/shop/files/2024_Classic_Instant_Orange_Lifestyle_High_13.jpg?v=1713452830",
      title: "Get Ready",
      subtitle: "For Your Next Journey",
      description: "Find everything you need for your travels",
    },
  ];

  return (
    <Carousel autoplay afterChange={onChange}>
      {slideData.map((slide, index) => (
        <div key={index}>
          <div className="grid justify-center items-center"
            style={{
              ...contentStyle,
              backgroundImage: `url(${slide.image})`,
            }}
          >
            <div className={`text-white text-center transition-transform duration-1000 ease-in-out ${
              currentSlide === index ? 'transform translate-y-0 opacity-100' : 'transform translate-y-10 opacity-0'
            }`}>
              <p className="text-xl font-medium mb-1">{slide.title}</p>
              <p className="text-7xl font-bold">{slide.subtitle}</p>
              <p className="text-xl font-medium my-3">{slide.description}</p>
              <Button className="px-6 py-5 mt-4"><Link to='/products'>Shop Now</Link></Button>
            </div>
          </div>
        </div>
      ))}
    </Carousel>
  );
};

export default Hero;
