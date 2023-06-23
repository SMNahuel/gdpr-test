import Nav from "@/app/components/Private/Nav";
import Image from "next/image";
import ButtonPublic from "../../components/Private/LegalHub/ButtonPublic";
import DocumentSelector from "../../components/Private/LegalHub/DocumentSelector";

function LegalHub() {
  return (
    <div>
      <Nav />
      <div className="bg-black h-20 flex items-center justify-center">
        <h2 className="text-center text-white font-normal text-[1.5rem] mr-4">
          You are logged in as <span className="font-bold">Usuario...</span>
        </h2>
        <ButtonPublic />
      </div>
      <div
        className="py-12 min-h-[50rem] w-full"
        style={{
          backgroundImage:
            "linear-gradient(45deg, rgb(203, 218, 236), rgb(250, 250, 250), rgb(235, 244, 255))",
        }}
      >
        <div className="flex flex-col items-center">
          <h2 className="text-center text-[#F2B434] text-[2.8rem] font-bold">
            Legal information
          </h2>
          <select className="my-12 bg-transparent border-gray-300 border-2 px-12 py-4 w-[60%] text-[#6074cb] font-bold text-[1.5rem]">
            <option>Select a Document </option>
            <option value="legal">Legal Notice</option>
            <option value="privacy">Privacy Policy</option>
            <option value="cookies">Cookies Policy</option>
            <option value="data">
              Data protection information for candidates
            </option>
          </select>
          {/* <DocumentSelector /> */}
        </div>
        <div className="w-full flex-col relative flex justify-center items-center">
          <Image
            src="/images/article.svg"
            alt="image documents card"
            className="object-cover"
            width={400}
            height={400}
            priority={true}
          />
          <h2 className="text-center text-[#6074cb] text-[4.8rem] font-bold leading-[3.8rem] my-12">
            Please, select a <br></br> document
          </h2>
        </div>
      </div>
    </div>
  );
}

export default LegalHub;
