export default function ResearchPage() {
  return (
    <div className="page active" id="page-research">
      <div className="page-header">
        <div className="page-header-meta">Research Focus</div>
        <h1>Our Research Areas</h1>
        <p>
          Comprehensive investigations spanning fundamental and applied aspects of hypersonic aerodynamics, shock wave physics, and high-temperature flows.
        </p>
      </div>

      <div className="page-content">
        <div style={{ marginBottom: '5rem' }}>
          <h2 className="section-title" style={{ marginBottom: '2rem' }}>Research Domains</h2>
          <p style={{ color: '#4a6080', fontSize: '1.1rem', marginBottom: '2rem', maxWidth: '800px' }}>
            Our laboratory conducts research across multiple interconnected domains, each contributing to our understanding of hypersonic phenomena and their applications in aerospace engineering.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginBottom: '4rem' }}>
          {[
            {
              title: 'Hypersonic Aerodynamics',
              desc: 'Experimental and computational investigations of hypersonic flows, shock-boundary layer interactions, and aerodynamic heating.',
            },
            {
              title: 'Hypersonic Aeroelasticity',
              desc: 'Fluid-structure interactions in high-speed flows, including panel flutter and shock-induced deformation.',
            },
            {
              title: 'High-Enthalpy Flows',
              desc: 'Real-gas effects, thermal non-equilibrium, and radiation in hypersonic and re-entry environments.',
            },
            {
              title: 'Shockwave Physics',
              desc: 'Fundamental studies of shock wave generation, propagation, and interaction with structures.',
            },
            {
              title: 'Chemical Kinetics',
              desc: 'High-temperature reaction kinetics using shock tubes and spectroscopic measurements.',
            },
            {
              title: 'Plasma Physics',
              desc: 'Plasma formation, ionization kinetics, and electromagnetic effects in hypersonic flows.',
            },
          ].map((area, idx) => (
            <div key={idx} className="research-card" style={{ padding: '2rem' }}>
              <h3 className="research-card-title">{area.title}</h3>
              <p className="research-card-desc">{area.desc}</p>
            </div>
          ))}
        </div>

        <div style={{ marginTop: '4rem', padding: '2rem', background: 'rgba(0, 119, 204, 0.04)', borderRadius: '8px' }}>
          <h3 className="section-title" style={{ marginBottom: '1.5rem' }}>Facilities & Infrastructure</h3>
          <ul style={{ listStyle: 'none', padding: 0, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem' }}>
            <li style={{ padding: '1rem', borderLeft: '3px solid #0077cc' }}>
              <strong>Hypersonic Shock Tunnel</strong>
              <p style={{ color: '#4a6080', fontSize: '0.95rem', margin: '0.5rem 0 0' }}>India's first hypersonic shock tunnel facility</p>
            </li>
            <li style={{ padding: '1rem', borderLeft: '3px solid #0077cc' }}>
              <strong>Free Piston Shock Tunnel</strong>
              <p style={{ color: '#4a6080', fontSize: '0.95rem', margin: '0.5rem 0 0' }}>High-enthalpy flow generation</p>
            </li>
            <li style={{ padding: '1rem', borderLeft: '3px solid #0077cc' }}>
              <strong>Chemical Shock Tube</strong>
              <p style={{ color: '#4a6080', fontSize: '0.95rem', margin: '0.5rem 0 0' }}>Kinetics and combustion studies</p>
            </li>
            <li style={{ padding: '1rem', borderLeft: '3px solid #0077cc' }}>
              <strong>Computational Cluster</strong>
              <p style={{ color: '#4a6080', fontSize: '0.95rem', margin: '0.5rem 0 0' }}>CFD and numerical simulations</p>
            </li>
            <li style={{ padding: '1rem', borderLeft: '3px solid #0077cc' }}>
              <strong>Diagnostics Lab</strong>
              <p style={{ color: '#4a6080', fontSize: '0.95rem', margin: '0.5rem 0 0' }}>Advanced measurement techniques</p>
            </li>
            <li style={{ padding: '1rem', borderLeft: '3px solid #0077cc' }}>
              <strong>Data Acquisition</strong>
              <p style={{ color: '#4a6080', fontSize: '0.95rem', margin: '0.5rem 0 0' }}>High-speed data systems</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
