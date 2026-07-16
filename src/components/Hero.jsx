import "./Hero.css";

function Hero() {
  return (
    <section className="hero">

      <div className="purple-shape" data-aos="zoom-in"></div>

      <div className="hero-content" data-aos="fade-up">

        <h1>
          The thinkers and <br />
          doers were changing <br />
          the <span className="green">status</span> Quo with
        </h1>

        <div className="underline"></div>

        <p>
          We are a team of strategists, designers,
          communicators and researchers.
          Together we believe progress happens
          when you refuse to play things safe.
        </p>

      </div>

      <img
        src="https://randomuser.me/api/portraits/men/11.jpg"
        alt=""
        className="hero-img img1"
        data-aos="fade-right"
      />

      <img
        src="https://randomuser.me/api/portraits/women/12.jpg"
        alt=""
        className="hero-img img2"
        data-aos="fade-down"
      />

      <img
        src="https://randomuser.me/api/portraits/men/31.jpg"
        alt=""
        className="hero-img img3"
        data-aos="fade-up"
      />

      <img
        src="https://randomuser.me/api/portraits/men/45.jpg"
        alt=""
        className="hero-img img4"
        data-aos="fade-left"
      />

      <img
        src="https://randomuser.me/api/portraits/women/65.jpg"
        alt=""
        className="hero-img img5"
        data-aos="zoom-in"
      />

    </section>
  );
}

export default Hero;