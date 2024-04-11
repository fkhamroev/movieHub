// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
import { headerSlider } from "../../data/data";
const Headerslider = () => {
  return (
    <>
      <Swiper
        direction={"horizontal"}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className=""
        slidesPerView={1}
      >
        {headerSlider.map((item, index) => (
          <SwiperSlide key={index}>
            <img src={item.imgSrc} alt="" className="w-full relative h-screen object-cover" />
            <div className="absolute top-52 left-14 ">
              <h2>{item.name}</h2>
              <div>{item.description}</div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};
export default Headerslider;
