"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

function getStarted() {
  const addInfo = () => {
    console.log("add info");
  };

  return (
    <div className="grid grid-cols-2 w-screen px-72 h-[50rem] pt-20">
      <div>
        <div>
          <h2 className="lg:text-[3.5rem] leading-tight font-bold text-black">
            Get started
          </h2>
          <div className="mr-12 text-black text-[1.2rem]">
            You are three steps away
          </div>
        </div>
        <div>
          <h2 className="lg:text-[2.5rem] text-[#3F51B5] font-bold">
            1 Add company
          </h2>
          <p>
            Let's link your League of Legends account and see what you can learn
            about yourself
          </p>
          <div className="mb-2">
            <Link href={"private/add-company-info"}>
              <button className="flex items-center bg-[#F2B434] text-white text-2xl p-3">
                Add info
              </button>
            </Link>
          </div>
          <div className="mb-2 flex items-center">
            <button className="flex items-center bg-transparent border-4 text-black b-black text-2xl p-3">
              Next
            </button>
            <p className="text-[1.2rem]">Complete this step first</p>
          </div>
        </div>
        <div>
          <h2 className="lg:text-[2.5rem] text-slate-600 font-bold">
            2 Understand GDPR
          </h2>
        </div>
        <div>
          <h2 className="lg:text-[2.5rem] text-slate-600 font-bold">
            3 Well done!
          </h2>
        </div>
      </div>
      <div className="m-auto">
        <Image src={"/images/setupWizard.svg"} width={650} height={900} />
      </div>
    </div>
  );
}

export default getStarted;
