import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const useGSAPAnimations = () => {
  const heroRef = useRef(null);
  const featuresRef = useRef(null);
  const showcaseRef = useRef(null);
  const installationRef = useRef(null);
  const ctaRef = useRef(null);
  const testimonialsRef = useRef(null);
  const downloadRef = useRef(null);
  const footerRef = useRef(null);

  useEffect(() => {
    // Hero section animations
    if (heroRef.current) {
      const heroTl = gsap.timeline();

      // Logo and brand name animation
      heroTl.fromTo('.hero-logo',
        { opacity: 0, y: -30, scale: 0.8 },
        { opacity: 1, y: 0, scale: 1, duration: 0.8, ease: "back.out(1.7)" }
      )
      // Hero text animation with stagger
      .fromTo('.hero-text h1',
        { opacity: 0, x: -50, rotation: -5 },
        {
          opacity: 1,
          x: 0,
          rotation: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: "power2.out"
        },
        "-=0.4"
      )
      .fromTo('.hero-text p',
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" },
        "-=0.3"
      )
      .fromTo('.btn',
        { opacity: 0, y: 20, scale: 0.9 },
        { opacity: 1, y: 0, scale: 1, duration: 0.5, ease: "back.out(1.7)" },
        "-=0.2"
      )
      .fromTo('.hero-image img',
        { opacity: 0, x: 50, rotation: 10 },
        { opacity: 1, x: 0, rotation: 0, duration: 0.8, ease: "elastic.out(1, 0.8)" },
        "-=0.6"
      );

      // Add subtle floating animation to hero phone
      gsap.to('.hero-image img', {
        y: -15,
        duration: 3,
        ease: "power1.inOut",
        yoyo: true,
        repeat: -1,
        delay: 2
      });
    }

    // Features section animations
    if (featuresRef.current) {
      gsap.fromTo('.features .section-title',
        { opacity: 0, y: 40, scale: 0.9 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: featuresRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      );

      gsap.fromTo('.feature-card',
        { opacity: 0, y: 50, scale: 0.8 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: featuresRef.current,
            start: "top 75%",
            toggleActions: "play none none reverse"
          }
        }
      );
    }

    // Showcase section animations
    if (showcaseRef.current) {
      gsap.fromTo('.showcase-text h2',
        { opacity: 0, x: -60 },
        {
          opacity: 1,
          x: 0,
          duration: 0.7,
          ease: "power2.out",
          scrollTrigger: {
            trigger: showcaseRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      );

      gsap.fromTo('.showcase-text p',
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: showcaseRef.current,
            start: "top 75%",
            toggleActions: "play none none reverse"
          }
        },
        "-=0.3"
      );

      gsap.fromTo('.showcase-text ul li',
        { opacity: 0, x: -30 },
        {
          opacity: 1,
          x: 0,
          duration: 0.5,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: showcaseRef.current,
            start: "top 70%",
            toggleActions: "play none none reverse"
          }
        },
        "-=0.4"
      );

      // Phone animations in showcase
      gsap.fromTo('.phone-1',
        { opacity: 0, x: -100, rotation: -15 },
        {
          opacity: 1,
          x: 0,
          rotation: 0,
          duration: 0.8,
          ease: "elastic.out(1, 0.8)",
          scrollTrigger: {
            trigger: '.showcase-images',
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      );

      gsap.fromTo('.phone-2',
        { opacity: 0, x: 100, rotation: 15 },
        {
          opacity: 1,
          x: 0,
          rotation: 0,
          duration: 0.8,
          ease: "elastic.out(1, 0.8)",
          scrollTrigger: {
            trigger: '.showcase-images',
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        },
        "-=0.4"
      );

      gsap.fromTo('.showcase-card',
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: '.showcase-cards',
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        },
        "-=0.6"
      );
    }

    // Installation section animations
    if (installationRef.current) {
      gsap.fromTo('.installation *',
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: installationRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      );
    }

    // CTA section animations
    if (ctaRef.current) {
      gsap.fromTo('.cta *',
        { opacity: 0, scale: 0.9 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.7,
          stagger: 0.1,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: ctaRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      );
    }

    // Testimonials section animations
    if (testimonialsRef.current) {
      gsap.fromTo('.testimonial-card',
        { opacity: 0, y: 50, rotation: 5 },
        {
          opacity: 1,
          y: 0,
          rotation: 0,
          duration: 0.6,
          stagger: 0.15,
          ease: "power2.out",
          scrollTrigger: {
            trigger: testimonialsRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      );
    }
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: downloadRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      });

      // Title and subtitle animation
      tl.fromTo('.section-title',
        { opacity: 0, y: 60, scale: 0.9 },
        { opacity: 1, y: 0, scale: 1, duration: 0.8, ease: "back.out(1.7)" }
      )
      .fromTo('.section-subtitle',
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" },
        "-=0.4"
      )
      .fromTo('.store-buttons img',
        { opacity: 0, y: 30, scale: 0.8 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.5,
          stagger: 0.1,
          ease: "back.out(1.7)"
        },
        "-=0.3"
      );

      // Phone animations with bounce effect
      gsap.fromTo('.phone-half',
        { x: -150, opacity: 0, rotation: -10 },
        {
          x: 0,
          opacity: 1,
          rotation: -5,
          duration: 1.2,
          ease: "elastic.out(1, 0.8)",
          scrollTrigger: {
            trigger: '.download-right',
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      );

      gsap.fromTo('.phone-full',
        { x: 150, opacity: 0, rotation: 10 },
        {
          x: 0,
          opacity: 1,
          rotation: 3,
          duration: 1.2,
          delay: 0.2,
          ease: "elastic.out(1, 0.8)",
          scrollTrigger: {
            trigger: '.download-right',
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      );

    // Download section animations
    if (downloadRef.current) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: downloadRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      });

      // Title and subtitle animation
      tl.fromTo('.section-title',
        { opacity: 0, y: 60, scale: 0.9 },
        { opacity: 1, y: 0, scale: 1, duration: 0.8, ease: "back.out(1.7)" }
      )
      .fromTo('.section-subtitle',
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" },
        "-=0.4"
      )
      .fromTo('.store-buttons img',
        { opacity: 0, y: 30, scale: 0.8 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.5,
          stagger: 0.1,
          ease: "back.out(1.7)"
        },
        "-=0.3"
      );

      // Phone animations with bounce effect
      gsap.fromTo('.phone-half',
        { x: -150, opacity: 0, rotation: -10 },
        {
          x: 0,
          opacity: 1,
          rotation: -5,
          duration: 1.2,
          ease: "elastic.out(1, 0.8)",
          scrollTrigger: {
            trigger: '.download-right',
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      );

      gsap.fromTo('.phone-full',
        { x: 150, opacity: 0, rotation: 10 },
        {
          x: 0,
          opacity: 1,
          rotation: 3,
          duration: 1.2,
          delay: 0.2,
          ease: "elastic.out(1, 0.8)",
          scrollTrigger: {
            trigger: '.download-right',
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Add subtle floating animation to phones
      gsap.to('.phone-half', {
        y: -10,
        duration: 2,
        ease: "power1.inOut",
        yoyo: true,
        repeat: -1,
        delay: 1
      });

      gsap.to('.phone-full', {
        y: -8,
        duration: 2.5,
        ease: "power1.inOut",
        yoyo: true,
        repeat: -1,
        delay: 1.2
      });
    }

    // Footer animations
    if (footerRef.current) {
      const footerTl = gsap.timeline({
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 90%",
          toggleActions: "play none none reverse"
        }
      });

      footerTl.fromTo('.footer-brand',
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }
      )
      .fromTo('.footer-section',
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.1,
          ease: "power2.out"
        },
        "-=0.3"
      )
      .fromTo('.footer-social',
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" },
        "-=0.2"
      )
      .fromTo('.footer-bottom',
        { opacity: 0 },
        { opacity: 1, duration: 0.4, ease: "power2.out" },
        "-=0.3"
      );
    }

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return {
    heroRef,
    featuresRef,
    showcaseRef,
    installationRef,
    ctaRef,
    testimonialsRef,
    downloadRef,
    footerRef
  };
};