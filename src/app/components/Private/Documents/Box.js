import Link from "next/link";
import Image from "next/image";
import ButtonBlue from "./ButtonBlue";
import ButtonShare from "./ButtonShare";

function DocumentBox({ item }) {
  return (
    <div className={`flex flex-col max-w-[50rem] rounded ${item.bgColor} p-2`}>
      <div className="px-3">
        <h2
          className={`lg:text-[3.5rem] leading-tight font-bold ${item.textColor} text-center py-4`}
        >
          {item.title}
        </h2>
        <div className="h-64 w-full relative">
          <Image
            src={item.img}
            alt="image documents card"
            className="object-cover"
            layout="fill"
            priority={true}
          />
        </div>
        <p className={`text-[1.4rem] ${item.textColor} text-center py-6`}>
          {item.text}
        </p>
      </div>
      <div className="grid grid-cols-2 gap-2">
        <Link passHref legacyBehavior href={item.src}>
          <a>
            <ButtonBlue />
          </a>
        </Link>
        <ButtonShare />
      </div>
    </div>
  );
}

export default DocumentBox;
