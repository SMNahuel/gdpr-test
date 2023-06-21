import { FC } from "react";
import Link from "next/link";
import Image from "next/image";

interface Props {
  currentUser: {
    email: string;
  };
  onLogout: () => void;
  goBackTo?: string;
  businessName?: string;
}
const headerHeight = 64;
const blueGradient = "bg-gradient-to-r from-blue-500 to-purple-500";

const Nav: FC<Props> = () => {
  const [goBackTo, setGoBackTo] = useState(false);
  const [businessName, setBusinessName] = useState("test");

  const onLogout = () => {
    console.log("Button clicked!");
    // Perform any actions you want here
  };

  return (
    <>
      <header className={blueGradient}>
        <div className={`flex items-center justify-between h-${headerHeight}`}>
          {goBackTo && (
            <div className="flex-grow">
              <Link href={goBackTo}>
                <a className="text-white flex items-center">
                  {/* <ArrowBackIcon className="w-5 h-5" /> */}
                  Back
                </a>
              </Link>
            </div>
          )}
          {businessName && (
            <div className="flex-grow w-90 sm:w-50">
              <h6 className="text-white text-xl font-bold truncate">
                {businessName}
              </h6>
            </div>
          )}
          <div
            className={`flex items-center ${
              goBackTo || businessName ? "" : "flex-grow"
            }`}
          >
            <Link href="/">
              {/* <a> */}
              <Image
                src={"images/gdprDirectSmallLogoWhite.svg"}
                height={30}
                width={30}
                alt="logo"
              />
              {/* </a> */}
            </Link>
            <h6
              className={`text-white ${
                businessName ? "hidden" : "flex"
              } text-xl font-bold`}
            >
              GDPR
            </h6>
            <h6
              className={`text-secondary ${
                businessName ? "hidden" : "flex"
              } text-xl font-bold`}
            >
              direct
            </h6>
          </div>
          {!goBackTo && !businessName && (
            <>
              <p className="hidden sm:block text-white truncate w-1/3">
                {/* {currentUser.email}  */}
                email
              </p>
              <button
                className="bg-transparent border border-white text-white px-3 py-1 rounded-md ml-2"
                onClick={onLogout}
              >
                Log out
                {/* <LogoutIcon className="w-5 h-5" /> */}
              </button>
            </>
          )}
        </div>
      </header>
    </>
  );
};

export default Nav;
