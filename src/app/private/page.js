import React from "react";
import Nav from "../components/Private/Nav/index";
import GetStarted from "../components/Private/getStarted/index";

function home() {
  return (
    <div>
      <Nav />
      <GetStarted />
    </div>
  );
}

export default home;

// import React from "react";
// import Nav from "../components/PrivateHome/Nav";
// import OnboardingSteps from "../components/PrivateHome/OnboardingSteps";
// import DoINeed from "../components/PrivateHome/DoINeed";

// const Home: React.FC = () => {
//   return (
//     <div>
//       <Nav />
//       <OnboardingSteps />
//       <DoINeed />
//     </div>
//   );
// };

// export default Home;
