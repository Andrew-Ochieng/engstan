import { galleryImages } from "../data/gallery";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import '@splidejs/react-splide/css';
import { galleryCarousel } from "../utils/Carousel";

const Gallery = () => {
  
  return (
    <div className="flex justify-center items-center mx-6 md:my-12 my-8">
      <Splide 
        options={galleryCarousel}
      >
        {galleryImages.map((image, index) => (
          <SplideSlide>
            <div key={index}>
              <img
                src={image.path}
                alt="Gallery image"
                className="md:h-72 h-64 object-cover rounded-lg  "
              />
            </div>
          </SplideSlide>
        ))}  
      </Splide>
    </div>
  );
};

export default Gallery;