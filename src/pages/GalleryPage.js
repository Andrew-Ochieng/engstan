import React, { useState }  from 'react';
import bulk from "../assets/images/bulk.jpg";
import cap from "../assets/images/cap.jpg";
import hood from "../assets/images/hood.jpg";
import hood2 from "../assets/images/hood2.jpg";
import officeshirt from "../assets/images/officeshirt.jpg";
import polo1 from "../assets/images/polo1.jpg";
import polo2 from "../assets/images/polo2.jpg";
import reflector from  "../assets/images/reflector.jpg";
import hood3 from "../assets/images/hood3.jpg";
import truck from "../assets/images/truck.jpg";
import tshirt from "../assets/images/tshirt.jpg";
import tshirt1 from "../assets/images/tshirt1.jpg";
import tshirt3 from "../assets/images/tshirt3.jpg";
import tshirt4 from "../assets/images/tshirt4.jpg";
import tshirt5 from "../assets/images/tshirt5.jpg";
import tshirt6 from "../assets/images/tshirt6.jpg";


const GalleryPage = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const products = [bulk,cap,hood,hood2,officeshirt,polo1,polo2,reflector,hood3,truck,tshirt,tshirt3,tshirt4,tshirt5,tshirt6,tshirt1];

  const handleBackButtonClick = () => {
    setCurrentImageIndex(currentImageIndex === 0 ? products.length - 1 : currentImageIndex - 1);
  };

  const handleForwardButtonClick = () => {
    setCurrentImageIndex(currentImageIndex === products.length - 1 ? 0 : currentImageIndex + 1);
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="w-full max-w-4xl">
        <div className="relative">
          <img
            src={products[currentImageIndex]}
            alt="Gallery"
            className="w-full h-1/2 object-cover"
          />
          <button
            className="absolute top-1/2 left-0 transform -translate-y-1/2 text-white text-xl bg-gray-500 rounded-full p-2"
            onClick={handleBackButtonClick}
          >
            &larr;
          </button>
          <button
            className="absolute top-1/2 right-0 transform -translate-y-1/2 text-white text-xl bg-gray-500 rounded-full p-2"
            onClick={handleForwardButtonClick}
          >
            &rarr;
          </button>
        </div>
      </div>
    </div>
  );
};

export default GalleryPage;