import Container from "../common/Container";
import { useGSAPAnimations } from "../../hooks/useGSAPAnimations";

const Hero = () => {
  const { heroRef } = useGSAPAnimations();

  return (
    <section className="hero" ref={heroRef}>
      <Container>
        <div className="hero-header">
          <div className="hero-logo">
            <img src="/assets/group3.png" alt="MyBindle Logo" className="logo-image" />
            <h1 className="brand-name">MyBindle</h1>
          </div>
        </div>

        <div className="hero-content">
          <div className="hero-text">
            <h1>Stay Connected</h1>
            <h1>Stay Social</h1>
            <h1>Stay You!</h1>

            <p>
             A place where friendships grow, communities thrive, and moments turn into unforgettable experiences. Whether you're looking to reconnect with old friends, build new relationships, or share what matters most to you – MyBindle is your home on the internet.
            </p>

            <button className="btn">Get Started</button>
          </div>

          <div className="hero-image">
            <img src="/assets/phone.png" alt="app" />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;