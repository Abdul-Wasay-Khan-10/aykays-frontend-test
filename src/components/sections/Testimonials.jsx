import Container from "../common/Container";
import { useGSAPAnimations } from "../../hooks/useGSAPAnimations";

// Update with static images for each user
const testimonials = [
  {
    text: "This platform changed the way I stay in touch with my friends and family. The interface is smooth, and I love how easy it is to share my moments!",
    name: "Emily R",
    country: "USA",
    avatar: "/assets/emily.png",
  },
  {
    text: "Finally, a social network that understands what I need! The privacy features are a game-changer, and I feel safer sharing my life online.",
    name: "Amit K",
    country: "India",
    avatar: "/assets/amit.png",
  },
  {
    text: "I joined just to explore, but now I can't imagine my day without it. The real-time chat and engaging communities make every interaction special!",
    name: "Sophie M",
    country: "UK",
    avatar: "/assets/sophie.png",
  },
  {
    text: "Running my small business has never been easier! This platform helped me connect with customers, promote my products, and grow my brand.",
    name: "Javier L",
    country: "Spain",
    avatar: "/assets/javier.png",
  },
  {
    text: "The perfect blend of fun and functionality! Whether I want to go live, discover trending content, or just catch up with friends, everything is right here!",
    name: "Lucas T",
    country: "Brazil",
    avatar: "/assets/lucas.png",
  },
  {
    text: "I’ve tried many social platforms, but this one truly stands out! The experience feels personal, the connections feel real, and every feature just makes sense.",
    name: "Nora S",
    country: "Canada",
    avatar: "/assets/nora.png",
  },
];

const Testimonials = () => {
  const { testimonialsRef } = useGSAPAnimations();

  return (
    <section className="testimonials" ref={testimonialsRef}>
      <Container>
        <h2 className="section-title">What Our Users Say</h2>

        <div className="testimonials-grid">
          {testimonials.map((item, index) => (
            <div key={index} className="testimonial-card">

              {/* STARS */}
              <div className="stars">
                {Array(5).fill("★").map((star, i) => (
                  <span key={i}>{star}</span>
                ))}
              </div>

              {/* TEXT */}
              <p className="testimonial-text">"{item.text}"</p>

              {/* USER */}
              <div className="testimonial-user">
                <img
                  src={item.avatar}
                  alt={item.name}
                  className="user-img"
                />
                <div>
                  <h4>{item.name}</h4>
                  <span>{item.country}</span>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* SEE MORE BUTTON */}
        <div className="see-more-wrapper">
          <button className="see-more-btn">See More</button>
        </div>
      </Container>
    </section>
  );
};

export default Testimonials;