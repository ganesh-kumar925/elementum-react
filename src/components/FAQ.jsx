import "./FAQ.css";

function FAQ() {
  return (
    <section className="faq">

      <h2>Frequently Asked Questions</h2>

      <div className="faq-item">
        <h3>What services do you provide?</h3>
        <p>
          We provide branding, UI/UX design, web development and digital
          marketing solutions.
        </p>
      </div>

      <div className="faq-item">
        <h3>How long does a project take?</h3>
        <p>
          Most projects are completed within 2–6 weeks depending on the
          requirements.
        </p>
      </div>

      <div className="faq-item">
        <h3>Can I request custom features?</h3>
        <p>
          Yes! Every project is customized according to your business needs.
        </p>
      </div>

    </section>
  );
}

export default FAQ;