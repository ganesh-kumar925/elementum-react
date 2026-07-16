import "./Services.css";

function Services() {
  return (
    <section className="services">

      <div className="services-left" data-aos="fade-right">
        <img
          src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=900"
          alt=""
        />
      </div>

      <div className="services-right" data-aos="fade-left">

        <h2 style={{color:"black"}}>
          See how we can <br />
          help you <span style={{color:"black"}}>progress</span>
        </h2>

        <p>
          We build experiences that inspire, connect and help
          businesses grow through creativity and strategy.
        </p>

        <div className="service-card" data-aos="fade-up" data-aos-delay="100">
          <h3>Brand Strategy</h3>
          <p>Creative solutions for modern brands.</p>
        </div>

        <div className="service-card" data-aos="fade-up" data-aos-delay="200">
          <h3>UI / UX Design</h3>
          <p>Beautiful and user-friendly digital products.</p>
        </div>

        <div className="service-card" data-aos="fade-up" data-aos-delay="300">
          <h3>Development</h3>
          <p>Responsive websites and applications.</p>
        </div>

      </div>

    </section>
  );
}

export default Services;