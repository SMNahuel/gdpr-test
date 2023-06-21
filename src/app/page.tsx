"use client";

import { useState } from "react";
import Carousel from "./components/PublicHome/carousel";
import Image from "next/image";
import Head from "next/head";
import SliderHome from "./components/PublicHome/swiper";

const Home: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const onInputChanged = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  const onClickShowPassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const onMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Add your form submission logic here
  };

  const onLoginWithGoogle = () => {
    // Add your Google login logic here
  };

  const legalHubAnchor =
    "http://app.gdpr.direct/legal-hub/?businessName=GDPR.direct&companyAddress=Torres%20Quevedo&companyIdNumber=B95988127&companyName=Ai%20Labs%20Group%20SL&emailForLegalPurposes=legal@gdpr.direct";

  const legalLinks = [
    { title: "Privacy policy", a: legalHubAnchor },
    { title: "Cookies policy", a: legalHubAnchor },
    { title: "Legal notice", a: legalHubAnchor },
  ];

  return (
    <div className="grid grid-cols-2">
      {/* <Carousel carouselItems={[]} /> */}
      <div
        className="flex flex-col h-full justify-center bg-gradient-to-r from-indigo-600 via-blue-600 to-indigo-600"
        style={{
          backgroundImage:
            "linear-gradient(45deg, rgb(63, 81, 181), rgb(96, 116, 203), rgb(63, 81, 181))",
        }}
      >
        <SliderHome />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 bg-gradient-to-b from-white to-gray-100">
        <div
          className="flex flex-col justify-center items-center py-4 md:py-6 px-2 md:px-6"
          style={{ height: "100vh" }}
        >
          <div className="flex mt-2 ml-[-0.75rem] items-end justify-center">
            <div className="w-[90px] sm:w-[111px]">
              <img
                src={"images/gdprDirectLogo.svg"}
                className="w-full"
                alt="logo"
              />
            </div>
            <div className="ml-1">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl leading-tight text-primary">
                GDPR
              </h2>
              <h2 className="text-2.5xl sm:text-3.2xl leading-tight text-secondary font-rockwell">
                direct
              </h2>
            </div>
          </div>
          <h3 className="text-center text-3xl mt-4">Welcome</h3>
          <p className="text-center">Log in or create a new account.</p>
          {/* {error && (
            <div className="mt-3">
              <ErrorAlert error={error} />
            </div>
          )} */}
          {/* Your form code here */}
          <div className="mb-2 flex justify-center">
            <button
              className="flex items-center bg-primary text-white text-2xl p-3"
              onClick={onLoginWithGoogle}
            >
              <Image
                className="mr-2"
                src={"images/google-icon.svg"}
                height={30}
                width={30}
                alt="google-logo"
              />
              Login with Google
            </button>
          </div>
          <p className="text-center opacity-50">
            You must have a Google account to proceed
          </p>
          <div className="mt-8 flex justify-center">
            {legalLinks.map((link, index) => (
              <div key={index}>
                <a
                  href={link.a}
                  className="text-secondary hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link.title}
                </a>
                {index < legalLinks.length - 1 && (
                  <span className="opacity-50 mx-0.5">|</span>
                )}
              </div>
            ))}
          </div>
          {/* <Divider> OR </Divider> */}
          {/* Your additional code here */}
        </div>
      </div>
    </div>
  );
};

export default Home;
