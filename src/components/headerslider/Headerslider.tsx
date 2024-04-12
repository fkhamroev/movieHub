import { Autoplay, Pagination } from "swiper/modules";
import { headerSlider } from "../../data/data";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
``;
const Headerslider = () => {
  return (
    <>
      <Swiper
        direction={"vertical"}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
        slidesPerView={1}
        spaceBetween={0}
        style={{ width: "100%", height: "500px", position: "relative" }}
        loop
        autoplay
      >
        {headerSlider.map((item, index) => (
          <SwiperSlide key={index}>
            <div
              className="h-full w-full relative"
              style={{
                backgroundImage: `url(${item.imgSrc})`,
                backgroundSize: "cover",
              }}
            >
              <div className="absolute top-0 left-0 h-full w-full bg-black opacity-45"></div>
              <div className="text-white pt-32 pl-32">
                <h1 className="text-5xl font-black mb-6">{item.name}</h1>
                <div className="w-1/2 text-xl font-medium">{item.description}</div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};
export default Headerslider;
