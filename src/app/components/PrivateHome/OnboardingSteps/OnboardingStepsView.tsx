"use client";

import { useState } from "react";
import Link from "next/link";
// import setupWizard from "images/setupWizard.svg";

const headerHeight = 64; // Replace with the actual header height
const whiteGradient = "your-white-gradient"; // Replace with the actual white gradient

export default function OnboardingStepsView({
  loading,
  steps,
  activeStep,
  openSnackbar,
  handleSnackbarClose,
}) {
  return (
    <section className={`bg-${whiteGradient}`}>
      <div className="container mx-auto">
        <div className="flex justify-center items-center min-h-screen">
          <div className="md:flex">
            <div className="md:w-1/2">
              <h3 className="text-3xl">Get started</h3>
              <p className="mb-4">You are three steps away</p>
              <div className="space-y-4">
                {steps.map((step, index) => (
                  <div key={step.label} className="relative">
                    <p className="mb-2">{step.label}</p>
                    {/* {index === 0 && activeStep > 0 && (
                      <Link href={step.linkTo}>
                        <a className="absolute top-0 right-0 -mt-1 -mr-1 text-primary bg-white p-1">
                           <EditIcon className="w-5 h-5" /> 
                        </a>
                      </Link>
                    )} */}
                    <div className="mb-4">
                      <p>{step.description}</p>
                      {/* {step.cta && (
                        <Link href={step.linkTo}>
                          <a className="inline-block bg-secondary text-white px-4 py-2 rounded-lg mt-4">
                            {step.cta}
                            <ChevronRightIcon className="w-4 h-4 ml-1" />
                          </a>
                        </Link>
                      )} */}
                      {index !== steps.length - 1 && (
                        <div className="mt-4 mb-8">
                          <div className="flex items-center">
                            <button
                              className="border border-gray-300 text-gray-600 text-sm px-6 py-2 rounded-md mr-4"
                              disabled
                            >
                              Next
                            </button>
                            {index !== steps.length - 1 && (
                              <p className="text-gray-600 text-sm">
                                Complete this step first
                              </p>
                            )}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="hidden md:block md:w-1/2">
              <img
                src={"images/setupWizard.svg"}
                className="object-cover w-full h-full"
                alt="login"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
