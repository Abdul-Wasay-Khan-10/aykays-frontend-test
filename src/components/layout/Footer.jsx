import React from "react";
import Container from "../common/Container";
import { useGSAPAnimations } from "../../hooks/useGSAPAnimations";

const Footer = () => {
  const { footerRef } = useGSAPAnimations();

  return (
    <footer className="footer" ref={footerRef}>
      <Container>
        <div className="footer-content">
          <div className="footer-brand">
            <h3>MyBindle</h3>
            <p>Connecting people, one click at a time.</p>
          </div>

          <div className="footer-links">
            <div className="footer-section">
              <h4>Product</h4>
              <ul>
                <li><a href="#">Features</a></li>
                <li><a href="#">Download</a></li>
                <li><a href="#">Pricing</a></li>
              </ul>
            </div>

            <div className="footer-section">
              <h4>Company</h4>
              <ul>
                <li><a href="#">About</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Careers</a></li>
              </ul>
            </div>

            <div className="footer-section">
              <h4>Support</h4>
              <ul>
                <li><a href="#">Help Center</a></li>
                <li><a href="#">Contact Us</a></li>
                <li><a href="#">Privacy Policy</a></li>
              </ul>
            </div>
          </div>

          <div className="footer-social">
            <h4>Follow Us</h4>
            <div className="social-icons">
              <a href="#" className="social-icon">📘</a>
              <a href="#" className="social-icon">🐦</a>
              <a href="#" className="social-icon">📷</a>
              <a href="#" className="social-icon">💼</a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2024 MyBindle. All rights reserved.</p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;