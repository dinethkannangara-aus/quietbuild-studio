import React, { useMemo, useState } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const portfolioItems = [
  {
    title: "ForgeFit Coaching Website",
    type: "Fitness coaching",
    description: "A conversion-focused coaching site with clear offers, mobile-first sections, and a strong request flow.",
  },
  {
    title: "Exam Progress Tracker",
    type: "Simple web app",
    description: "A focused study tracker concept for tutors and students to monitor milestones, notes, and progress.",
  },
  {
    title: "AG Fitness Concept",
    type: "Gym concept",
    description: "A bold gym landing page direction built around class discovery, trainer trust, and quick contact.",
  },
];

const services = [
  {
    name: "Landing Page",
    price: "From $20",
    copy: "A clean one-page site for a launch, offer, class, or personal brand.",
  },
  {
    name: "Business Website",
    price: "From $50",
    copy: "A polished multi-section presence for small teams, service brands, and local businesses.",
  },
  {
    name: "Simple Web App",
    price: "From $80",
    copy: "A lightweight interactive tool, tracker, booking flow, or internal dashboard.",
  },
];

const socialLinks = [
  { label: "TikTok", href: "https://www.tiktok.com/@quietbuild.studio" },
  { label: "Facebook", href: "PASTE_FACEBOOK_LINK" },
  { label: "Instagram", href: "PASTE_INSTAGRAM_LINK" },
];

function App() {
  const [form, setForm] = useState({
    businessName: "",
    businessType: "",
    message: "",
  });

  const requestMessage = useMemo(() => {
    const businessName = form.businessName.trim() || "My business";
    const businessType = form.businessType.trim() || "Small business";
    const message = form.message.trim() || "I would like a website for my business.";

    return `Hi QuietBuild Studio, I want to request a project.\n\nBusiness name: ${businessName}\nBusiness type: ${businessType}\nMessage: ${message}`;
  }, [form]);

  const heroImage = `${import.meta.env.BASE_URL}studio-hero.png`;
  const encodedRequest = encodeURIComponent(requestMessage);
  const whatsappUrl = `https://wa.me/94XXXXXXXXX?text=${encodedRequest}`;
  const emailUrl = `mailto:quietbuildstudio@example.com?subject=${encodeURIComponent(
    "Project request for QuietBuild Studio",
  )}&body=${encodedRequest}`;

  function updateField(event) {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  }

  return (
    <main>
      <nav className="site-nav" aria-label="Main navigation">
        <a className="brand-mark" href="#home" aria-label="QuietBuild Studio home">
          <span>QB</span>
          QuietBuild Studio
        </a>
        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#work">Work</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section className="hero section-band" id="home">
        <div className="hero-copy">
          <p className="eyebrow">Web design for focused small brands</p>
          <h1>QuietBuild Studio</h1>
          <p className="tagline">Clean websites. Real impact.</p>
          <p className="hero-text">
            Clean websites for gyms, coaches, tutors, and small businesses. Mobile-friendly • Fast • Affordable
          </p>
          <div className="hero-actions">
            <a className="button primary" href="#contact">
              Request a Project
            </a>
            <a className="button secondary" href="#work">
              View Work
            </a>
          </div>
        </div>
        <div className="hero-visual" aria-label="Premium website mockup visual">
          <img src={heroImage} alt="" />
        </div>
      </section>

      <section className="section-band intro-grid" aria-label="Studio strengths">
        <div>
          <span className="metric">01</span>
          <h2>Built to look sharp on phones first.</h2>
        </div>
        <div>
          <span className="metric">02</span>
          <h2>Clear sections that help visitors act.</h2>
        </div>
        <div>
          <span className="metric">03</span>
          <h2>Simple pricing for early-stage brands.</h2>
        </div>
      </section>

      <section className="section-band content-section" id="work">
        <div className="section-heading">
          <p className="eyebrow">Work / Portfolio</p>
          <h2>Recent website and app concepts</h2>
        </div>
        <div className="card-grid">
          {portfolioItems.map((item) => (
            <article className="portfolio-card" key={item.title}>
              <p>{item.type}</p>
              <h3>{item.title}</h3>
              <span aria-hidden="true" className="card-line" />
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-band content-section" id="services">
        <div className="section-heading">
          <p className="eyebrow">Services</p>
          <h2>Small builds with a clean finish</h2>
        </div>
        <div className="card-grid services-grid">
          {services.map((service) => (
            <article className="service-card" key={service.name}>
              <div>
                <h3>{service.name}</h3>
                <p>{service.copy}</p>
              </div>
              <strong>{service.price}</strong>
            </article>
          ))}
        </div>
      </section>

      <section className="section-band contact-section" id="contact">
        <div className="section-heading">
          <p className="eyebrow">Contact</p>
          <h2>Send a project request</h2>
          <p>
            Share the basics and use the request buttons to open WhatsApp or email with your details already included.
          </p>
        </div>

        <div className="contact-layout">
          <form className="request-form">
            <label>
              Business name
              <input
                name="businessName"
                type="text"
                placeholder="Example: ForgeFit Coaching"
                value={form.businessName}
                onChange={updateField}
              />
            </label>
            <label>
              Business type
              <input
                name="businessType"
                type="text"
                placeholder="Gym, coach, tutor, local shop..."
                value={form.businessType}
                onChange={updateField}
              />
            </label>
            <label>
              Message
              <textarea
                name="message"
                rows="5"
                placeholder="Tell me what kind of website you need."
                value={form.message}
                onChange={updateField}
              />
            </label>
          </form>

          <aside className="contact-card">
            <div className="button-stack">
              <a className="button primary" href={whatsappUrl} target="_blank" rel="noreferrer">
                WhatsApp Request
              </a>
              <a className="button secondary" href={emailUrl}>
                Email Request
              </a>
            </div>

            <div className="social-list" aria-label="Social links">
              {socialLinks.map((link) => (
                <a href={link.href} key={link.label} target="_blank" rel="noreferrer">
                  {link.label}
                </a>
              ))}
            </div>

            <p className="contact-note">quietbuildstudio@example.com</p>
          </aside>
        </div>
      </section>
    </main>
  );
}

createRoot(document.getElementById("root")).render(<App />);
