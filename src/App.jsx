import "./App.css";
import Navbar from "./components/Navbar";

import aboutImage from "./image/Gemini_Generated_Image_ifdun3ifdun3ifdu.png";
import heroImage from "./image/vecteezy_man-in-a-blue-polo-shirt-mowing-the-green-lawn-with-a-red_85160393.jpg";
function App() {
  return (
    <div className="app">

      <Navbar />

      {/* =====================================================
          HERO
      ===================================================== */}

      <main id="home" className="hero" style={{
    "--hero-image": `url("${heroImage}")`,
  }}>

        <div className="hero-content">

          <p className="hero-tag">
            LANDSCAPE & ENGINEERING
          </p>

          <h1 style={{ color: "rgb(255, 255, 255)" }}>
            Creating Beautiful
            <br />
            <span>Outdoor Spaces</span>
          </h1>

          <p className="hero-text">
            Professional landscaping and engineering solutions
            for residential and commercial properties in Singapore.
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

      </main>


      {/* =====================================================
          ABOUT
      ===================================================== */}

      <section id="about" className="about-modern">

        <div className="about-top">

          <div className="about-brand">

            <div className="section-label">
              ABOUT PLS
            </div>

          </div>

          <div className="about-intro">

            <h2>
              We shape
              <br />
              <span>spaces that feel alive.</span>
            </h2>

            <p>
              PLS Landscape & Engineering creates thoughtful outdoor
              environments that combine natural beauty, practical
              design and reliable workmanship.
            </p>

          </div>

        </div>


        <div className="about-grid">

          {/* IMAGE */}

          <div className="about-image">

            <img
              src={aboutImage}
              alt="PLS Landscape and Engineering"
              className="about-image-photo"
            />

            <div className="about-image-label">

              <span>01</span>

              <p>
                Landscape
                <br />
                & Engineering
              </p>

            </div>

          </div>


          {/* CONTENT */}

          <div className="about-details">

            <div className="about-number">
              01
            </div>

            <div>

              <h3>
                Designed for people.
                <br />
                Built for everyday life.
              </h3>

              <p>
                From residential gardens to commercial outdoor spaces,
                we develop landscaping solutions that are both visually
                appealing and functional.
              </p>

              <p>
                Our approach combines careful planning, quality
                workmanship and attention to detail to create outdoor
                spaces that complement each property.
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

      </section>


      {/* =====================================================
          SERVICES
      ===================================================== */}

      <section id="services" className="services-section">

        <div className="section-heading">

          <div>

            <div className="section-label">
              OUR SERVICES
            </div>

            <h2>
              What We Do
            </h2>

          </div>

          <p>
            Professional solutions designed around your
            landscaping, outdoor space and engineering requirements.
          </p>

        </div>


        <div className="services-grid">

          <div className="service-card">
            <span>01</span>

            <h3>
              Landscape Design
            </h3>

            <p>
              Thoughtful landscape design for beautiful
              and functional outdoor environments.
            </p>
          </div>


          <div className="service-card">
            <span>02</span>

            <h3>
              Garden Landscaping
            </h3>

            <p>
              Garden landscaping solutions tailored to
              your property and requirements.
            </p>
          </div>


          <div className="service-card">
            <span>03</span>

            <h3>
              Landscape Maintenance
            </h3>

            <p>
              Reliable maintenance services to keep
              outdoor spaces clean, healthy and attractive.
            </p>
          </div>


          <div className="service-card">
            <span>04</span>

            <h3>
              Outdoor Landscaping
            </h3>

            <p>
              Transforming outdoor areas into practical
              and welcoming spaces.
            </p>
          </div>


          <div className="service-card">
            <span>05</span>

            <h3>
              Residential Landscaping
            </h3>

            <p>
              Landscaping solutions for homes, gardens
              and private outdoor spaces.
            </p>
          </div>


          <div className="service-card">
            <span>06</span>

            <h3>
              Commercial Landscaping
            </h3>

            <p>
              Professional landscaping solutions for
              commercial and business properties.
            </p>
          </div>

        </div>

      </section>


      {/* =====================================================
          PROJECTS
      ===================================================== */}
{/* 
      <section id="projects" className="projects-section">

        <div className="section-heading">

          <div>

            <div className="section-label">
              OUR WORK
            </div>

            <h2>
              Selected Projects
            </h2>

          </div>

          <p>
            Explore landscaping and outdoor space projects
            completed with attention to detail and quality.
          </p>

        </div>


        <div className="projects-grid">

          <div className="project-card">

            <img
              src="/project-1.jpg"
              alt="Landscape project in Singapore"
            />

            <div className="project-info">

              <span>
                LANDSCAPING
              </span>

              <h3>
                Garden & Outdoor Space
              </h3>

            </div>

          </div>


          <div className="project-card">

            <img
              src="/project-2.jpg"
              alt="Residential landscaping project"
            />

            <div className="project-info">

              <span>
                RESIDENTIAL
              </span>

              <h3>
                Residential Landscape
              </h3>

            </div>

          </div>


          <div className="project-card">

            <img
              src="/project-3.jpg"
              alt="Commercial landscaping project"
            />

            <div className="project-info">

              <span>
                COMMERCIAL
              </span>

              <h3>
                Commercial Outdoor Area
              </h3>

            </div>

          </div>

        </div>

      </section> */}


      {/* =====================================================
          CONTACT
      ===================================================== */}

      <section id="contact" className="contact-section">

        <div className="contact-container">

          <div className="contact-left">

            <div className="section-label">
              CONTACT US
            </div>

            <h2>
              Let's Create
              <br />
              <span>Something Green.</span>
            </h2>

            <p>
              Looking for professional landscaping or engineering
              solutions in Singapore? Get in touch with
              PLS Landscape & Engineering.
            </p>


            <div className="contact-social-buttons">

              <a
                href="https://wa.me/6590445110"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-whatsapp"
              >
                Chat on WhatsApp →
              </a>

              <a
                href="YOUR_INSTAGRAM_LINK"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-instagram"
              >
                Follow on Instagram →
              </a>

            </div>

          </div>


          <div className="contact-details">

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


            <div className="contact-item">

              <span>
                EMAIL
              </span>

              <a href="mailto:plsengineering2222@gmail.com">
                plsengineering2222@gmail.com
              </a>

            </div>


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


        {/* MAP */}

        <div className="map-container">

          <iframe
            title="PLS Landscape and Engineering Location"
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

        <div className="footer-content">

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


          <p>
            © {new Date().getFullYear()}
            {" "}
            PLS Landscape & Engineering.
            All rights reserved.
          </p>


          <a
            href="https://wa.me/6590445110"
            target="_blank"
            rel="noopener noreferrer"
          >
            WhatsApp →
          </a>

        </div>

      </footer>


      {/* FLOATING WHATSAPP */}

      <a
        className="floating-whatsapp"
        href="https://wa.me/6590445110"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with PLS Landscape on WhatsApp"
      >
        <span>WA</span>
      </a>

    </div>
  );
}

export default App;