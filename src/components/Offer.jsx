import "./Offer.css";

function Offer() {
  return (
    <section className="offer">

      <h2>What we can offer you!</h2>

      <div className="offer-grid">

        <div className="offer-card">
          <h3>Branding</h3>
          <p>Create a unique identity that stands out.</p>
        </div>

        <div className="offer-card">
          <h3>Design</h3>
          <p>Modern UI/UX experiences for every device.</p>
        </div>

        <div className="offer-card">
          <h3>Development</h3>
          <p>Fast, responsive and scalable websites.</p>
        </div>

        <div className="offer-card">
          <h3>Marketing</h3>
          <p>Grow your audience with smart strategies.</p>
        </div>

      </div>

    </section>
  );
}

export default Offer;