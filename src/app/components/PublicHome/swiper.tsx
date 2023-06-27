// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y, Virtual } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import 'swiper/css/virtual';
import HomeStruc from "./Home";
import TutorialStruc from "./Tutorial";
import { useEffect } from "react";
const SliderHome = ({ items, Struct }: any) => {

  return (
    <div className="p-24">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Virtual]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
        virtual
      >
        {items.map((item: any, index: number) => (
          <SwiperSlide key={index} virtualIndex={index}>
            <Struct item={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SliderHome;
