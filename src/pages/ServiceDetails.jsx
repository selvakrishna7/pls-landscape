import { Link, useParams } from "react-router-dom";
import { useEffect } from "react";
import servicesData from "../data/servicesData";

function ServiceDetails() {
  const { serviceId } = useParams();

  // Always open the service page from the top
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, [serviceId]);

  const service = servicesData.find(
    (item) => item.id === serviceId
  );

  if (!service) {
    return (
      <div className="service-not-found">
        <h1>Service Not Found</h1>

        <Link to="/">
          Back to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="service-details-page">

      {/* =====================================================
          SERVICE DETAIL NAVBAR
      ===================================================== */}

      <header className="service-details-nav">

        {/* BACK */}
        <Link
          to="/"
          className="service-back"
        >
          <span className="back-arrow">←</span>
          <span>Back to Website</span>
        </Link>


        {/* BUSINESS NAME */}
        <strong className="service-nav-title">
          PLS Landscape
        </strong>


        {/* GET QUOTE */}
        <a
          href="https://wa.me/6590445110"
          target="_blank"
          rel="noopener noreferrer"
          className="details-whatsapp"
        >
          Get a Quote
        </a>

      </header>


      {/* =====================================================
          HERO
      ===================================================== */}

      <section
        className="service-detail-hero"
        style={{
          backgroundImage: `
            linear-gradient(
              90deg,
              rgba(10, 24, 14, 0.88),
              rgba(10, 24, 14, 0.3)
            ),
            url("${service.heroImage}")
          `,
        }}
      >

        <div className="service-detail-hero-content">

          <span>
            PLS LANDSCAPE & ENGINEERING
          </span>

          <h1>
            {service.title}
          </h1>

          <p>
            {service.shortDescription}
          </p>

        </div>

      </section>


      {/* =====================================================
          CONTENT
      ===================================================== */}

      <main className="service-detail-content">

        <div className="service-detail-container">


          {/* =================================================
              INTRO
          ================================================= */}

          <div className="service-detail-intro">

            <div className="section-label">
              OUR SERVICE
            </div>

            <h2>
              {service.title}
            </h2>

            <p>
              {service.description}
            </p>

          </div>


          {/* =================================================
              FEATURES
          ================================================= */}

          <section className="service-features">

            <div>

              <div className="section-label">
                WHAT WE PROVIDE
              </div>

              <h2>
                Designed around
                <br />
                your space.
              </h2>

            </div>


            <div className="features-list">

              {service.features.map(
                (feature, index) => (
                  <div
                    className="feature-item"
                    key={feature}
                  >

                    <span>
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <p>
                      {feature}
                    </p>

                  </div>
                )
              )}

            </div>

          </section>


          {/* =================================================
              GALLERY
          ================================================= */}

          <section className="service-gallery">

            <div className="section-label">
              OUR WORK
            </div>

            <h2>
              Creating spaces
              <br />
              that feel alive.
            </h2>

            <div className="service-gallery-grid">

              {service.images.map(
                (image, index) => (
                  <div
                    className={
                      index === 0
                        ? "gallery-image gallery-large"
                        : "gallery-image"
                    }
                    key={image}
                  >

                    <img
                      src={image}
                      alt={`${service.title} ${index + 1}`}
                    />

                  </div>
                )
              )}

            </div>

          </section>


          {/* =================================================
              CTA
          ================================================= */}

          <section className="service-detail-cta">

            <div>

              <span className="service-cta-label">
                HAVE A PROJECT IN MIND?
              </span>

              <h2>
                Let's create
                <br />
                something green.
              </h2>

            </div>

            <a
              href={`https://wa.me/6590445110?text=${encodeURIComponent(
                `Hi PLS Landscape & Engineering, I'm interested in your ${service.title} service.`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="service-cta-button"
            >
              Get a Quote on WhatsApp →
            </a>

          </section>

        </div>

      </main>


      {/* =====================================================
          FOOTER
      ===================================================== */}

      <footer className="service-detail-footer">

        © {new Date().getFullYear()} PLS Landscape & Engineering.
        All rights reserved.

      </footer>

    </div>
  );
}

export default ServiceDetails;