import "./About.css";

function About() {
  return (
    <section className="about">

      <div className="about-text">
        <h2>
          Tomorrow should <br />
          be better than <span>today</span>
        </h2>

        <p>
          We are a team of strategists, designers,
          communicators and researchers.
          Together, we believe progress happens
          when you refuse to play things safe.
        </p>

        <a href="/">Read More →</a>
      </div>

      <div className="about-image">
       <img
  src="https://randomuser.me/api/portraits/men/75.jpg"
  alt=""
/>
      </div>

    </section>
  );
}

export default About;