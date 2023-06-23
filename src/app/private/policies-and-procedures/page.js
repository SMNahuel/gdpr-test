import Nav from "../../components/Private/Nav";
import Image from "next/image";
import ButtonPublic from "../../components/Private/LegalHub/ButtonPublic";

function PoliciesAndProcedures() {
  return (
    <div>
      <Nav />
      <div className="bg-white h-20 flex items-center justify-center">
        <h2 className="text-center text-black font-normal text-[1.5rem] mr-4">
          You are logged in as <span className="font-bold">Usuario...</span>
        </h2>
        <ButtonPublic />
      </div>
      <div className="py-12 min-h-[50rem] w-full bg-slate-800">
        <div className="flex flex-col items-center">
          <h2 className="text-center text-[#F2B434] text-[2.8rem] font-bold">
            Procedures and policies
          </h2>
          <select className="my-12 bg-transparent border-gray-300 border-[1px] px-12 py-4 w-[70%] text-[#F2B434] font-bold text-[1.5rem]">
            <option>Select a Document </option>
            <option value="employee">Employee data modification</option>
            <option value="footerPersonal">Footer for personal emails</option>
            <option value="footerMarketing">Footer for marketing emails</option>
            <option value="banner">Text for cookies banner of pop-up</option>
            <option value="payroll">
              Contract with your HR and payroll services supplier
            </option>
          </select>
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

export default PoliciesAndProcedures;
