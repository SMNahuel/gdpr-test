import React from "react";
import Nav from "../components/PrivateHome/Nav";
import OnboardingSteps from "../components/PrivateHome/OnboardingSteps";
import DoINeed from "../components/PrivateHome/DoINeed";

interface HomeProps {
  goBackTo: boolean;
  currentUser: boolean;
  onLogout: boolean;
  businessName: boolean;
}

const Home: React.FC<HomeProps> = ({
  goBackTo,
  currentUser,
  onLogout,
  businessName,
}) => {
  return (
    <div>
      <Nav
        goBackTo={goBackTo}
        currentUser={false}
        onLogout={false}
        businessName={false}
      />
      <OnboardingSteps />
      <DoINeed />
    </div>
  );
};

export default Home;
