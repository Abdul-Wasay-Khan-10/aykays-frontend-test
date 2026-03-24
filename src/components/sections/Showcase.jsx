import Container from "../common/Container";
import { useGSAPAnimations } from "../../hooks/useGSAPAnimations";

const showcaseData = [
  {
    icon: "🎥",
    title: "Short Videos & Reels",
    desc: "Share engaging, bite-sized content that keeps everyone entertained.",
  },
  {
    icon: "🔔",
    title: "Smart Notifications",
    desc: "Stay updated on what matters without the noise.",
  },
  {
    icon: "👥",
    title: "Interest-Based Communities",
    desc: "Join groups and discussions that match your passion.",
  },
];

const Showcase = () => {
  const { showcaseRef } = useGSAPAnimations();

  return (
    <section className="showcase" ref={showcaseRef}>
      <Container>
        <div className="showcase-content">

          {/* LEFT SIDE (Phones) */}
          <div className="showcase-images">
            <div className="phone-wrapper phone-1">
              <img src="/assets/phone1.png" alt="app" />
            </div>

            <div className="phone-wrapper phone-2">
              <img src="/assets/phone2.png" alt="app" />
            </div>
          </div>

          {/* RIGHT SIDE (Content) */}
          <div className="showcase-text">
            <h2>Where Every Click Sparks a Connection!</h2>

            <p>
              A small act of kindness today can create a lifetime of impact for
              someone in need. Give from the heart and change a life!
            </p>

            <div className="showcase-cards">
              {showcaseData.map((item, index) => (
                <div key={index} className="showcase-card">
                  <div className="icon">{item.icon}</div>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
};

export default Showcase;