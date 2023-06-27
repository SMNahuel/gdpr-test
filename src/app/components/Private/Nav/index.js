import React from "react";
import Image from "next/image";

function Nav() {
  return (
    <div
      className="flex w-screen h-[10vh] items-center justify-between bg-gradient-to-r from-indigo-600 via-blue-600 to-indigo-600"
      style={{
        backgroundImage:
          "linear-gradient(45deg, rgb(63, 81, 181), rgb(96, 116, 203), rgb(63, 81, 181))",
      }}
    >
      <div className="flex items-center h-48 w-[30rem]">
        <Image
          src={"images/gdprDirectSmallLogo.svg"}
          width={50}
          height={30}
          alt="logo"
          className="ml-6"
        />
        <div className="ml-1">
          <h2 className="text-3xl sm:text-4xl lg:text-[2.5rem] leading-tight font-bold text-white">
            GDPR <span className="text-[#F2B434]">direct</span>
          </h2>
        </div>
      </div>
      <div className="flex items-center mr-6">
        <div className="mr-12 text-white text-[1.2rem]">Usuario</div>
        <div className="rounded border-2 border-white">
          <button className="text-white p-3">
            Log Out
          </button>
        </div>
      </div>
    </div>
  );
}

export default Nav;
