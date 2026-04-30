export default function HomePage() {
  const researchAreas = [
    {
      num: '01',
      title: 'Hypersonic Aerodynamics',
      desc: 'Experimental and computational investigations of hypersonic flows, including shock–boundary layer interactions, aerodynamic heating, compressible boundary layer transition and high-speed inlet design.',
      image: './images/Home_HAD.jpg',
    },
    {
      num: '02',
      title: 'Hypersonic Aeroelasticity',
      desc: 'Fluid–structure interactions in high-speed flows, including panel flutter, shock-induced deformation, and aero-thermo-elastic coupling.',
      image: './images/Home_HAE.jpg',
    },
    {
      num: '03',
      title: 'High-Enthalpy Flows',
      desc: 'Real-gas effects, thermal non-equilibrium, dissociation, ionization, and radiation in hypersonic and re-entry environments.',
      image: './images/Home_HEF.jpg',
    },
    {
      num: '04',
      title: 'Shockwave Physics',
      desc: 'Fundamental studies of shock wave generation, propagation, reflection, and interaction with boundary layers, structures, and materials.',
      image: './images/Home_SWP.gif',
    },
    {
      num: '05',
      title: 'High Temperature Chemical Kinetics',
      desc: 'High-temperature reaction kinetics using shock tubes, including ignition delay measurements, spectroscopy, and non-equilibrium chemistry.',
      image: './images/Home_HTC.jpg',
    },
    {
      num: '06',
      title: 'Plasma Physics & Ionization',
      desc: 'Plasma formation, ionization kinetics, and electromagnetic effects in hypersonic and re-entry flows.',
      image: './images/Home_Plasma.jpg',
    },
  ];

  return (
    <div className="page active" id="page-home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-bg-orb orb1"></div>
        <div className="hero-bg-orb orb2"></div>

        <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 10 }}>
          <div className="hero-badge">
            <span>🚀 Pioneering Hypersonic Research</span>
          </div>

          <h1 className="hero-title">
            <span className="line1">Laboratory for</span>
            <span className="line2">Hypersonic and Shock</span>
            <span className="line3">Wave Research</span>
          </h1>

          <p className="hero-desc">
            Advancing the frontiers of aerodynamics through cutting-edge research in hypersonic flows, shock wave dynamics, and high-enthalpy phenomena at IISc Bengaluru.
          </p>

          <div className="hero-cta">
            <button className="btn-primary">Explore Research</button>
            <button className="btn-outline">Learn More</button>
          </div>

          <div className="hero-stats">
            <div className="stat-item">
              <div className="stat-num">80+</div>
              <div className="stat-label">Publications</div>
            </div>
            <div className="stat-item">
              <div className="stat-num">15+</div>
              <div className="stat-label">Research Areas</div>
            </div>
            <div className="stat-item">
              <div className="stat-num">1971</div>
              <div className="stat-label">India's First HST</div>
            </div>
          </div>
        </div>

        <div className="scroll-indicator">
          <div className="scroll-line"></div>
          <span>Scroll</span>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section">
        <div className="section-tag">About the Lab</div>
        <h2 className="section-title">Decades of Hypersonic Excellence</h2>

        <div className="about-images-row">
          <img src="./images/Home_Lab_1.jpg" alt="LHSR Laboratory" />
          <img src="./images/Home_Lab_2.jpg" alt="Research Facility" />
        </div>

        <div className="about-text">
          <p>
            The Laboratory for Hypersonic and Shock wave Research (LHSR) at the Indian Institute of Science (IISc), Bengaluru is a world-leading research facility dedicated to the study of high-speed flows, shock waves, and hypersonic aerodynamics.
          </p>
          <p>
            Home to India's first hypersonic shock tunnel, LHSR has been at the forefront of aerospace research for decades. Our facilities enable ground-testing of vehicles designed to fly faster than Mach 5 — bridging the gap between computational models and real flight conditions.
          </p>
          <p>
            Our interdisciplinary team of faculty, research scientists, and students work on fundamental and applied problems spanning aerodynamic design, combustion chemistry, plasma physics, and materials under extreme conditions.
          </p>
        </div>
      </section>

      {/* Research Preview */}
      <section className="research-preview">
        <div className="section-tag">Research Focus</div>
        <h2 className="section-title">Core Research Areas</h2>

        <div className="research-grid">
          {researchAreas.map((area) => (
            <div key={area.num} className="research-card">
              <div className="research-card-image">
                <img src={area.image} alt={area.title} onError={(e) => { (e.target as HTMLImageElement).style.opacity = '0'; }} />
              </div>
              <div className="research-card-num">{area.num} //</div>
              <h3 className="research-card-title">{area.title}</h3>
              <div className="research-card-desc">{area.desc}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
