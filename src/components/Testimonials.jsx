import "./Testimonials.css";

function Testimonials() {
  return (
    <section className="testimonials">

      <h2>What our clients say</h2>

      <div className="testimonial-container">

        <div className="testimonial-card">
          <img
            src="https://randomuser.me/api/portraits/women/32.jpg"
            alt=""
          />
          <h3>Sarah Johnson</h3>
          <p>
            "Working with Elementum was an amazing experience.
            They completely transformed our online presence."
          </p>
        </div>

        <div className="testimonial-card">
          <img
            src="https://randomuser.me/api/portraits/men/52.jpg"
            alt=""
          />
          <h3>David Smith</h3>
          <p>
            "Professional, creative and always on time.
            Highly recommended!"
          </p>
        </div>

        <div className="testimonial-card">
          <img
            src="https://randomuser.me/api/portraits/women/65.jpg"
            alt=""
          />
          <h3>Emily Watson</h3>
          <p>
            "Fantastic communication and beautiful design.
            Exactly what we needed."
          </p>
        </div>

      </div>

    </section>
  );
}

export default Testimonials;