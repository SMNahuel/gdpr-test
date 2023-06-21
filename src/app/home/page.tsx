import Nav from "../components/PrivateHome/Nav";
import OnboardingSteps from "../components/PrivateHome/OnboardingSteps";
import DoINeed from "../components/PrivateHome/DoINeed";

export default function Home() {
  return (
    <div>
      <Nav />
      <OnboardingSteps />
      <DoINeed />
    </div>
  );
}
