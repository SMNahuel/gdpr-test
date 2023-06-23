import Image from "next/image";

function DoINeedDPO() {
  return (
    <div
      className="grid grid-cols-2 bg-gradient-to-r from-indigo-600 via-blue-600 to-indigo-600 p-12"
      style={{
        backgroundImage:
          "linear-gradient(45deg, rgb(63, 81, 181), rgb(96, 116, 203), rgb(63, 81, 181))",
      }}
    >
      <div className="w-full flex-col relative flex justify-center items-center">
        <Image
          src="/images/article.svg"
          alt="image documents card"
          className="object-cover"
          width={600}
          height={600}
          priority={true}
        />
      </div>
      <div className="flex flex-col justify-center">
        <h2 className="text-white text-[4rem] font-bold ">Do I need DPO?</h2>
        <p className="text-white text-[1.3rem]">
          You may be required to hire a Data Protection Officer.
        </p>
        <div class="gap-10 py-4">
          <h2 className="font-bold text-[1.5rem] text-white">
            1. Are you a public authority or body?
          </h2>
          <div class="inline-flex items-center">
            <label
              class="relative flex cursor-pointer items-center rounded-full p-3"
              for="html"
              data-ripple-dark="true"
            >
              <input
                id="html"
                name="type"
                type="radio"
                class="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-full border border-blue-gray-200 text-pink-500 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-pink-500 checked:before:bg-pink-500 hover:before:opacity-10"
              />
              <div class="pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-pink-500 opacity-0 transition-opacity peer-checked:opacity-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-3.5 w-3.5"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                >
                  <circle data-name="ellipse" cx="8" cy="8" r="8"></circle>
                </svg>
              </div>
            </label>
            <label
              class="mt-px cursor-pointer select-none font-light text-gray-700"
              for="html"
            >
              HTML
            </label>
          </div>
          <div class="inline-flex items-center">
            <label
              class="relative flex cursor-pointer items-center rounded-full p-3"
              for="react"
              data-ripple-dark="true"
            >
              <input
                id="react"
                name="type"
                type="radio"
                class="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-full border border-blue-gray-200 text-pink-500 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-pink-500 checked:before:bg-pink-500 hover:before:opacity-10"
              />
              <div class="pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-pink-500 opacity-0 transition-opacity peer-checked:opacity-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-3.5 w-3.5"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                >
                  <circle data-name="ellipse" cx="8" cy="8" r="8"></circle>
                </svg>
              </div>
            </label>
            <label
              class="mt-px cursor-pointer select-none font-light text-gray-700"
              for="react"
            >
              React
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DoINeedDPO;
