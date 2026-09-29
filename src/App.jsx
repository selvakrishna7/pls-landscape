import "./App.css";

import Navbar from "./components/Navbar";
import ServiceDetails from "./pages/ServiceDetails";
import servicesData from "./data/servicesData";

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import aboutImage from "./image/ChatGPT Image Sep 24, 2026, 10_07_50 PM.png";
import heroImage from "./image/vecteezy_man-in-a-blue-polo-shirt-mowing-the-green-lawn-with-a-red_85160393.jpg";

import { Link } from "react-router-dom";


/* =========================================================
   HOME PAGE
========================================================= */

function HomePage() {
  return (
    <div className="app">

      <Navbar />


      {/* =====================================================
          HERO
      ===================================================== */}

      <main
        id="home"
        className="hero"
        style={{
          "--hero-image": `url("${heroImage}")`,
        }}
      >

        <div className="page-container">

          <div className="hero-content">

            <p className="hero-tag">
              LANDSCAPING & ENGINEERING SERVICES IN SINGAPORE
            </p>

            <h1>
              Creating Beautiful
              <br />
              <span>Outdoor Spaces</span>
            </h1>

            <p className="hero-text">
              Professional landscaping, landscape design and
              outdoor solutions for residential and commercial
              properties across Singapore.
            </p>

            <div className="hero-buttons">

              <a
                href="#services"
                className="btn-primary"
              >
                Explore Services
              </a>

              <a
                href="https://wa.me/6590445110"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                Get a Quote
              </a>

            </div>

          </div>

        </div>

      </main>


      {/* =====================================================
          ABOUT
      ===================================================== */}

      <section
        id="about"
        className="about-section"
      >

        <div className="page-container">

          <div className="about-heading">

            <div className="section-label">
              ABOUT PLS LANDSCAPE & ENGINEERING
            </div>

            <div className="about-intro">

              <h2>
                We shape
                <br />
                <span>
                  spaces that feel alive.
                </span>
              </h2>

              <p>
                PLS Landscape & Engineering provides professional
                landscaping services in Singapore, creating thoughtful
                outdoor environments that combine natural beauty,
                practical design and reliable workmanship.
              </p>

            </div>

          </div>


          <div className="about-grid">

            <div className="about-image">

              <img
                src={aboutImage}
                alt="PLS Landscape & Engineering professional landscaping services in Singapore"
              />

              <div className="about-image-label">

                <span>
                  01
                </span>

                <p>
                  Landscape
                  <br />
                  & Engineering
                </p>

              </div>

            </div>


            <div className="about-content">

              <span className="about-number">
              </span>

              <div className="about-content-inner">

                <h3>
                  Designed for people.
                  <br />
                  Built for everyday life.
                </h3>

                <p>
                  From residential gardens to commercial outdoor
                  spaces, we develop professional landscaping
                  solutions across Singapore that are both
                  visually appealing and functional.
                </p>

                <p>
                  Our approach combines careful planning, landscape
                  design, quality workmanship and attention to detail
                  to create outdoor spaces that complement homes,
                  businesses and commercial properties.
                </p>

                <a
                  href="#contact"
                  className="about-link"
                >
                  Start a conversation
                  <span>↗</span>
                </a>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          SERVICES
      ===================================================== */}

      <section
        id="services"
        className="services-section"
      >

        <div className="page-container">

          <div className="section-heading">

            <div>

              <div className="section-label">
                LANDSCAPING SERVICES IN SINGAPORE
              </div>

              <h2>
                What We Do
              </h2>

            </div>

            <p>
              Professional landscaping solutions for residential
              and commercial properties, including landscape design,
              garden maintenance, arboriculture and outdoor
              landscape services across Singapore.
            </p>

          </div>


          <div className="services-grid">

            {servicesData.map((service, index) => (

              <article
                className="service-card"
                key={service.id}
              >

                {/* SERVICE IMAGE */}

                <div className="service-image">

                  <img
                    src={service.heroImage}
                    alt={`${service.title} in Singapore - PLS Landscape & Engineering`}
                    loading="lazy"
                  />

                </div>


                {/* SERVICE CONTENT */}

                <div className="service-card-content">

                  <span>
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <h3>
                    {service.title}
                  </h3>

                  <p>
                    {service.shortDescription}
                  </p>


                  {/* LEARN MORE */}

                  <Link
                    to={`/services/${service.id}`}
                    className="service-learn-more"
                    aria-label={`Learn more about ${service.title} in Singapore`}
                  >
                    Learn More
                    <span>↗</span>
                  </Link>

                </div>

              </article>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          CONTACT
      ===================================================== */}

      <section
        id="contact"
        className="contact-section"
      >

        <div className="page-container">

          <div className="contact-container">


            {/* LEFT */}

            <div className="contact-left">

              <div className="section-label">
                CONTACT PLS LANDSCAPE & ENGINEERING
              </div>

              <h2 style={{ color: "white" }}>
                Let's Create
                <br />
                <span>
                  Something Green.
                </span>
              </h2>

              <p>
                Looking for professional landscaping services
                in Singapore? Get in touch with PLS Landscape &
                Engineering for landscape design, garden
                maintenance, arboriculture and outdoor
                landscaping solutions.
              </p>


              {/* SOCIAL BUTTONS */}

              <div className="contact-buttons">


                {/* WHATSAPP */}

                <a
                  href="https://wa.me/6590445110"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-card contact-whatsapp"
                >

                  <span className="social-icon whatsapp-icon">
                    ◔
                  </span>

                  <span className="social-content">

                    <small>
                      WhatsApp
                    </small>

                    <strong>
                      Chat with us →
                    </strong>

                  </span>

                </a>


                {/* INSTAGRAM */}

                <a
                  href="https://www.instagram.com/plslandscape_singapore?stkn=MWo3aGE4czVyMXI4eA=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-card contact-instagram"
                >

                  <span className="social-icon instagram-icon">
                    ◎
                  </span>

                  <span className="social-content">

                    <small>
                      Instagram
                    </small>

                    <strong>
                      @plslandscape_singapore →
                    </strong>

                  </span>

                </a>

              </div>

            </div>


            {/* RIGHT */}

            <div className="contact-details">


              {/* PHONE */}

              <div className="contact-item">

                <span>
                  PHONE
                </span>

                <a href="tel:+6582609811">
                  +65 8260 9811
                </a>

                <a href="tel:+6590445110">
                  +65 9044 5110
                </a>

              </div>


              {/* EMAIL */}

              <div className="contact-item">

                <span>
                  EMAIL
                </span>

                <a href="mailto:plsengineering2222@gmail.com">
                  plsengineering2222@gmail.com
                </a>

              </div>


              {/* ADDRESS */}

              <div className="contact-item">

                <span>
                  ADDRESS
                </span>

                <p>
                  101 Kitchener Road,
                  <br />
                  #03-04A, Jalan Besar Plaza,
                  <br />
                  Singapore 208511
                </p>

              </div>


              {/* HOURS */}

              <div className="contact-item">

                <span>
                  OPENING HOURS
                </span>

                <p>
                  Monday – Sunday
                  <br />
                  8:00 AM – 7:00 PM
                </p>

              </div>

            </div>

          </div>

        </div>


        {/* =====================================================
            MAP
        ===================================================== */}

        <div className="map-container">

          <iframe
            title="PLS Landscape & Engineering landscaping services in Singapore"
            src="https://www.google.com/maps?q=101%20Kitchener%20Road%20Singapore%20208511&output=embed"
            loading="lazy"
            allowFullScreen
          ></iframe>

        </div>

      </section>


      {/* =====================================================
          FOOTER
      ===================================================== */}

      <footer className="footer">

        <div className="page-container">

          <div className="footer-content">


            {/* LOGO */}

            <div className="footer-logo">

              <div className="footer-mark">
                PLS
              </div>

              <div>

                <strong>
                  PLS Landscape
                </strong>

                <small>
                  & Engineering
                </small>

              </div>

            </div>


            {/* COPYRIGHT */}

            <p>
              © {new Date().getFullYear()} PLS Landscape &
              Engineering. Professional Landscaping Services
              in Singapore. All rights reserved.
            </p>


            {/* WHATSAPP */}

            <a
              href="https://wa.me/6590445110"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Contact PLS Landscape & Engineering on WhatsApp"
            >
              WhatsApp →
            </a>

          </div>

        </div>

      </footer>


      {/* =====================================================
          FLOATING WHATSAPP
      ===================================================== */}

      <a
        className="floating-whatsapp"
        href="https://wa.me/6590445110"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with PLS Landscape & Engineering on WhatsApp"
      >
        <span>
          WA
        </span>
      </a>

    </div>
  );
}


/* =========================================================
   MAIN APP / ROUTER
========================================================= */

function App() {

  return (

    <BrowserRouter>

      <Routes>

        {/* HOME */}

        <Route
          path="/"
          element={<HomePage />}
        />


        {/* SERVICE DETAILS */}

        <Route
          path="/services/:serviceId"
          element={<ServiceDetails />}
        />

      </Routes>

    </BrowserRouter>

  );
}


export default App;

