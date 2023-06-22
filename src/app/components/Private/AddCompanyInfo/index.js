import React from "react";
import Image from "next/image";
import Link from "next/link";

function AddCompanyInfoWrapper() {
  return (
    <div className="grid grid-cols-2 w-screen bg-[#F2B434] px-72 h-[50rem] ">
      <div className="bg-white w-full pt-20">
        <div>
          <h2 className="lg:text-[3.5rem] leading-tight font-bold text-black text-center">
            Add your company information
          </h2>
        </div>
        <div>
          <form className="flex flex-col p-12">
            <input
              className="h-20 outline-none"
              placeholder="Company name"
            ></input>
            <input
              className="h-20 outline-none"
              placeholder="Company name"
            ></input>
            <input
              className="h-20 outline-none"
              placeholder="Company name"
            ></input>
            <input
              className="h-20 outline-none"
              placeholder="Company name"
            ></input>
            <div className="pt-12">
              <Link href={"/private"}>
                <button className="flex items-center bg-[#F2B434] text-white text-2xl p-3">
                  Add info
                </button>
              </Link>
            </div>
          </form>
        </div>
      </div>
      <div className="m-auto flex items=center flex-col justify-center bg-white w-full h-full p-24">
        <div className="h-96">
          <div className="bg-black h-20">
            <h2 className="text-white">Here's an example</h2>
          </div>
          <div>
            <p>Data controller</p>
            <p>
              The entity responsible for processing the data collected is ____
              with ID number ____ (hereinafter, us or we) and address at ____ ,
              owner of ____ and its platforms. You can exercise your rights of
              access, rectification, portability and deletion of your data and
              those of limitation and opposition to its treatment by writing to
              the email ____ .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddCompanyInfoWrapper;
