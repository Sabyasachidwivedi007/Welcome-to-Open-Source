// Navbar animation on load
gsap.from("nav", {
  y: -100,
  opacity: 0,
  duration: 1.2,
  ease: "power2.out"
});

// Button hover pulse
document.querySelectorAll("button").forEach((btn) => {
  btn.addEventListener("mouseenter", () => {
    gsap.to(btn, {
      scale: 1.1,
      duration: 0.2,
      yoyo: true,
      repeat: 1
    });
  });
});

// Scroll-triggered section fade-ins
gsap.utils.toArray(".fade-section").forEach((section) => {
  gsap.from(section, {
    scrollTrigger: {
      trigger: section,
      start: "top 80%",
      toggleActions: "play none none none"
    },
    opacity: 0,
    y: 50,
    duration: 1,
    ease: "power2.out"
  });
});