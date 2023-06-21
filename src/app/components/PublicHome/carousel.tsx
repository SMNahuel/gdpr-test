"use client";

import { useState } from "react";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";

// import addToFooter from "/images/addToFooter.svg";
import gdprDirectSmallLogo from "images/gdprDirectSmallLogo.svg";
// import recommendationLetter from "images/recommendationLetter.svg";
// import setupWizard from "images/setupWizard.svg";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

interface CarouselItem {
  claim: string;
  img: string;
}

interface CarouselProps {
  carouselItems: CarouselItem[];
}

const Carousel: React.FC<CarouselProps> = () => {
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
  const [activeStep, setActiveStep] = useState(0);
  const maxSteps = carouselItems.length;

  const handleStepChange = (step: number) => {
    setActiveStep(step);
  };

  const handleNext = () => {
    setActiveStep((prevStep) => (prevStep + 1) % maxSteps);
  };

  const handleBack = () => {
    setActiveStep((prevStep) => (prevStep - 1 + maxSteps) % maxSteps);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-1 bg-gradient-to-b from-blue-500 to-blue-700">
      <AutoPlaySwipeableViews
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
        interval={4000}
      >
        {carouselItems.map((item, index) => (
          <div
            key={index}
            className="flex flex-col justify-center items-center p-4 md:p-6"
            style={{
              height: "100vh",
              minHeight: "650px",
              maxHeight: "850px",
            }}
          >
            {Math.abs(activeStep - index) <= 2 && (
              <>
                <h4
                  className="text-3xl md:text-4xl lg:text-5xl mb-4 leading-tight text-white text-center"
                  style={{ fontSize: "36px", lineHeight: "1.1" }}
                >
                  {item.claim}
                </h4>
                <div className="w-full h-[30rem] max-h-520px">
                  <img
                    src={item.img}
                    alt={item.claim}
                    className="w-full h-full object-contain"
                  />
                </div>
              </>
            )}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      <div className="w-full bg-primary">
        <div className="flex justify-between items-center px-4 py-2 md:px-6">
          <button
            className="text-white focus:outline-none"
            onClick={handleBack}
            disabled={activeStep === 0}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <div className="flex-1 h-2 mx-2 bg-white rounded">
            <div
              className="h-full bg-black"
              style={{ width: `${(activeStep / maxSteps) * 100}%` }}
            />
          </div>
          <button
            className="text-white focus:outline-none"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
