import Container from "../common/Container";
import { useGSAPAnimations } from "../../hooks/useGSAPAnimations";

const featuresData = [
  {
    title: "🔥Seamless Connections",
    desc: "Stay in touch with friends, family, and like-minded people with just a tap.",
  },
  {
    title: "📸 Share Your Story",
    desc: "Upload photos, videos, and updates to let the world know what's happening.",
  },
  {
    title: "💬 Real-Time Chat",
    desc: "Engage in conversations instantly with smooth messaging.",
  },
  {
    title: "🔒 Privacy First",
    desc: "Control your privacy with world-class security.",
  },
  {
    title: "🌎 Discover & Explore",
    desc: "Find trending content and communities that match your interests.",
  },
  {
    title: "💼 Grow Your Business",
    desc: "Promote your brand and build meaningful connections.",
  },
];

const Features = () => {
  const { featuresRef } = useGSAPAnimations();

  return (
    <section className="features" ref={featuresRef}>
      <Container>
        <h2 className="section-title">Features That Keep You Hooked!</h2>

        <div className="features-grid">
          {featuresData.map((item, index) => (
            <div key={index} className="feature-card">
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Features;