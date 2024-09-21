import React, { useEffect, useState } from "react";
import "./ImgSlider.css";
import image1 from "/assets/img1.jpg";
import image2 from "/assets/img2.jpg";
import image3 from "/assets/img3.jpg";

const ImgSlider = () => {

    const images = [image1, image2, image3];
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
          setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000);
    
        return () => clearInterval(interval);
      }, [images.length]);


  return (
            <div className="slider">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Slide ${index + 1}`}
            className={`slider-image ${index === currentIndex ? "active" : ""}`}
          />
        ))}
    </div>
  )
}

export default ImgSlider
