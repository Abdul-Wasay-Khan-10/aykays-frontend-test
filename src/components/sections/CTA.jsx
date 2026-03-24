import Container from "../common/Container";
import { useGSAPAnimations } from "../../hooks/useGSAPAnimations";

const CTA = () => {
  const { ctaRef } = useGSAPAnimations();

  return (
    <section className="cta" ref={ctaRef}>
      <Container>
        <div className="cta-wrapper">

          {/* LEFT SIDE (TEXT) */}
          <div className="cta-content">
            <h2>Be the Reason Someone Smiles Today!</h2>
            <p>
              Your generosity can change lives—every donation brings hope,
              support, and a brighter future. Give today and make a difference!
            </p>
            <button className="cta-btn">Donate Now</button>
          </div>

          {/* RIGHT SIDE (IMAGES) */}
          <div className="cta-images">
            <img
              src="/assets/iphone142.png"
              alt="Payment Methods"
              className="phone-small"
            />
            <img
              src="/assets/iphone14.png"
              alt="Thank you screen"
              className="phone-large"
            />
          </div>

        </div>
      </Container>
    </section>
  );
};

export default CTA;