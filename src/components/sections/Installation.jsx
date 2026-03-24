import Container from "../common/Container";
import { useGSAPAnimations } from "../../hooks/useGSAPAnimations";

const steps = [
  {
    number: "01",
    title: "Download",
    desc: "Open Play Store or App Store",
  },
  {
    number: "02",
    title: "Install App",
    desc: "The app will install automatically.",
  },
  {
    number: "03",
    title: "Ready to Use",
    desc: "Sign up or log in to start exploring!",
  },
];

const Installation = () => {
  const { installationRef } = useGSAPAnimations();

  return (
    <section className="installation" ref={installationRef}>
      <Container>
        <div className="installation-header">
          <h2>How to Install Our App</h2>
          <p>
            Getting started is quick and easy! Follow these simple steps to
            install and start using MyBindle today.
          </p>
        </div>

        <div className="installation-steps">
          {steps.map((step, index) => (
            <div key={index} className="step-card">
              <span className="step-number">{step.number}</span>
              <h3>{step.title}</h3>
              <p>{step.desc}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Installation;