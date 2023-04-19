import React, { useState }  from 'react';
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
import tshirt6 from  "../assets/images/tshirt6.jpg";
import ab from "../assets/images/ab.jpg";
import bc from "../assets/images/bc.jpg";
import book from "../assets/images/book2.jpg";
import cd from "../assets/images/cd.jpg";
import ef from "../assets/images/ef.jpg";
import fg from "../assets/images/fg.jpg";
import gh from "../assets/images/gh.jpg";
import hi from "../assets/images/hi.jpg";
import hood4 from "../assets/images/hood4.jpg";
import hood5 from "../assets/images/hood5.jpg";
import jk from "../assets/images/jk.jpg";
import knha from "../assets/images/knha.jpg";
import lm from "../assets/images/lm.jpg";
import mn from "../assets/images/mn.jpg";
import op from "../assets/images/op.jpg";
import overall from  "../assets/images/overall1.png";

const GalleryPage = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const products = [cap,hood,hood2,officeshirt,polo1,polo2,reflector,hood3,truck,tshirt,tshirt3,tshirt4,tshirt5,tshirt6,tshirt1,ab,bc,book,cd,ef,fg,gh,hi,hood4,hood5,jk,knha,lm,mn,op,overall];

  const handleBackButtonClick = () => {
    setCurrentImageIndex(currentImageIndex === 0 ? products.length - 1 : currentImageIndex - 1);
  };

  const handleForwardButtonClick = () => {
    setCurrentImageIndex(currentImageIndex === products.length - 1 ? 0 : currentImageIndex + 1);
  };

  return (
    <div className="flex justify-center items-center md:m-16 my-12 mx-6">
      <div className="w-full ">
        <div className="relative">
          <div className=' '>
            <img
              src={products[currentImageIndex]}
              alt="Gallery"
              className="w-full object-cover rounded-lg"
            />
          </div>
          <button
            className="left-0 carousel-btn"
            onClick={handleBackButtonClick}
          >
            &larr;
          </button>
          <button
            className="right-0 carousel-btn"
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