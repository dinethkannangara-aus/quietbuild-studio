import React, { useMemo, useState } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const portfolioItems = [
  {
    title: "ForgeFit Coaching Website",
    type: "Fitness coaching",
    icon: "pulse",
    description: "A conversion-focused coaching site with clear offers, mobile-first sections, and a strong request flow.",
  },
  {
    title: "Exam Progress Tracker",
    type: "Simple web app",
    icon: "chart",
    description: "A focused study tracker concept for tutors and students to monitor milestones, notes, and progress.",
  },
  {
    title: "AG Fitness Concept",
    type: "Gym concept",
    icon: "bolt",
    description: "A bold gym landing page direction built around class discovery, trainer trust, and quick contact.",
  },
];

const services = [
  {
    name: "Landing Page",
    price: "From $20",
    icon: "spark",
    copy: "A clean one-page site for a launch, offer, class, or personal brand.",
  },
  {
    name: "Business Website",
    price: "From $50",
    icon: "grid",
    copy: "A polished multi-section presence for small teams, service brands, and local businesses.",
  },
  {
    name: "Simple Web App",
    price: "From $80",
    icon: "app",
    copy: "A lightweight interactive tool, tracker, booking flow, or internal dashboard.",
  },
];

const socialLinks = [
  { label: "TikTok", href: "https://www.tiktok.com/@quietbuild.studio" },
  { label: "Facebook", href: "PASTE_FACEBOOK_LINK" },
  { label: "Instagram", href: "PASTE_INSTAGRAM_LINK" },
];

function Icon({ name }) {
  const icons = {
    pulse: <path d="M3 12h4l2-6 4 12 2-6h6" />,
    chart: (
      <>
        <path d="M4 19V5" />
        <path d="M4 19h16" />
        <path d="M8 15l3-4 3 2 4-7" />
      </>
    ),
    bolt: <path d="M13 2 4 14h7l-1 8 10-13h-7V2Z" />,
    spark: (
      <>
        <path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3Z" />
        <path d="M18 16l.7 2.1L21 19l-2.3.9L18 22l-.8-2.1L15 19l2.2-.9L18 16Z" />
      </>
    ),
    grid: (
      <>
        <path d="M4 4h6v6H4z" />
        <path d="M14 4h6v6h-6z" />
        <path d="M4 14h6v6H4z" />
        <path d="M14 14h6v6h-6z" />
      </>
    ),
    app: (
      <>
        <path d="M6 3h12a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Z" />
        <path d="M8 8h8" />
        <path d="M8 12h5" />
        <path d="M8 16h7" />
      </>
    ),
  };

  return (
    <svg className="icon" viewBox="0 0 24 24" aria-hidden="true">
      {icons[name]}
    </svg>
  );
}

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
            Clean websites for gyms, coaches, tutors, and small businesses. Mobile-friendly | Fast | Affordable
          </p>
          <div className="hero-pills" aria-label="Studio highlights">
            <span>Mobile-first</span>
            <span>Fast launch</span>
            <span>Conversion-focused</span>
          </div>
          <div className="hero-actions">
            <a className="button primary" href="#contact">
              Request a Project
            </a>
            <a className="button secondary" href="#work">
              View Work
            </a>
          </div>
        </div>
        <div className="hero-visual" aria-label="Premium website and mobile portfolio preview">
          <div className="mockup-orbit" aria-hidden="true" />
          <div className="browser-mockup">
            <div className="browser-top">
              <span />
              <span />
              <span />
              <div />
            </div>
            <div className="mockup-body">
              <div className="mockup-hero">
                <div>
                  <span className="mini-label">QuietBuild launch</span>
                  <h2>Studio-grade site for local brands</h2>
                  <p>Clear offer, polished design, quick project request flow.</p>
                </div>
                <div className="mockup-score">
                  <strong>98</strong>
                  <span>Mobile score</span>
                </div>
              </div>
              <div className="mockup-grid">
                <div className="mockup-card tall">
                  <span>Landing Page</span>
                  <strong>$20+</strong>
                </div>
                <div className="mockup-card">
                  <span>Speed</span>
                  <strong>Fast</strong>
                </div>
                <div className="mockup-card">
                  <span>Style</span>
                  <strong>Premium</strong>
                </div>
              </div>
            </div>
          </div>
          <div className="phone-mockup">
            <div className="phone-speaker" />
            <div className="phone-screen">
              <span />
              <strong>Project Request</strong>
              <p>Gym website</p>
              <div />
              <div />
            </div>
          </div>
          <div className="floating-card floating-card-one">
            <span>3 projects</span>
            <strong>Ready to show</strong>
          </div>
          <div className="floating-card floating-card-two">
            <span>Clean build</span>
            <strong>Real impact</strong>
          </div>
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
              <div className="card-icon">
                <Icon name={item.icon} />
              </div>
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
                <div className="card-icon">
                  <Icon name={service.icon} />
                </div>
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
            <div className="contact-card-head">
              <span>Start here</span>
              <strong>Tell us what you need</strong>
            </div>
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
