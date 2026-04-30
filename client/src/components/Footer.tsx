export default function Footer() {
  return (
    <footer>
      <div className="footer-brand-row">
        <a href="#" className="footer-logo">
          LHSR <span>IISc</span>
        </a>
        <div className="footer-brand-center">
          <p style={{ fontSize: '0.9rem', color: '#93b8d8', margin: 0 }}>
            Laboratory for Hypersonic and Shock Wave Research
          </p>
        </div>
      </div>

      <ul className="footer-links">
        <li><a href="#research">Research</a></li>
        <li><a href="#people">People</a></li>
        <li><a href="#publications">Publications</a></li>
        <li><a href="https://iisc.ac.in" target="_blank" rel="noopener noreferrer">IISc</a></li>
      </ul>

      <div className="footer-copy">
        © 2024 LHSR, IISc Bengaluru
      </div>
    </footer>
  );
}
