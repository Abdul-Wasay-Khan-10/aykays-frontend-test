import React from "react";
import Container from "../common/Container";
import { useGSAPAnimations } from "../../hooks/useGSAPAnimations";

const DownloadSection = () => {
  const { downloadRef } = useGSAPAnimations();

  return (
    <section className="download-section" ref={downloadRef}>
      <Container>
        <div className="download-grid">
          {/* Left Column */}
          <div className="download-left">
            <h2 className="section-title">Join the Fun – Download MyBindle Now!</h2>
            <p className="section-subtitle">
              Your Social Network, Your Way
              Download MyBindle Now and Be a Part of a Community That’s Always Evolving!
            </p>
            <div className="store-buttons">
              <a href="#"><img src="/assets/Appstore.png" alt="App Store" /></a>
              <a href="#"><img src="/assets/Playstore.png" alt="Play Store" /></a>
            </div>
          </div>

          {/* Right Column */}
          <div className="download-right">
            <img src="/assets/phone.png" alt="Half Phone" className="phone-half" />
            <img src="/assets/phone.png" alt="Full Phone" className="phone-full" />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default DownloadSection;