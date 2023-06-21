// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const SliderHome = () => {
  const carouselItems = [
    {
      img: "images/setupWizard.svg",
      claim:
        "Ensure compliance, save time and effort, improve consistency and reduce risk",
    },
    {
      img: "/images/recommendationLetter.svg",
      claim: "Implement effective GDPR-compliance in less than 10 minutes",
    },
    {
      img: "/images/addToFooter.svg",
      claim: "Get all the documents you need and add them to your platforms",
    },
  ];

  return (
    <div className="p-24">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        {carouselItems.map((item, index) => (
          <SwiperSlide key={index}>
            <div>
              <h2 className="text-white text-center text-[4rem] leading-[3.9rem] font-bold">
                {item.claim}
              </h2>
              <div className="w-full h-[30rem] max-h-520px">
                `{" "}
                <img
                  src={item.img}
                  alt={item.claim}
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SliderHome;
