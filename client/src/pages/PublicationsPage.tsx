export default function PublicationsPage() {
  const publications = [
    {
      title: 'Advanced Shock Wave Interactions in Hypersonic Flows',
      authors: ['Dr. Faculty Member', 'Research Scholar Name'],
      journal: 'Journal of Aerospace Engineering',
      year: 2024,
      volume: '45',
      pages: '123-145',
      doi: '10.1234/jae.2024.001',
    },
    {
      title: 'Experimental Validation of CFD Models for High-Enthalpy Flows',
      authors: ['Dr. Faculty Member', 'PhD Student Name'],
      journal: 'Aerospace Science and Technology',
      year: 2023,
      volume: '142',
      pages: '107-125',
      doi: '10.1234/ast.2023.042',
    },
    {
      title: 'Real-Time Flow Visualization Using Advanced Diagnostics',
      authors: ['Research Scholar Name', 'MTech Student Name'],
      journal: 'Experiments in Fluids',
      year: 2023,
      volume: '64',
      pages: '89-101',
      doi: '10.1234/eif.2023.015',
    },
  ];

  return (
    <div className="page active" id="page-publications">
      <div className="page-header">
        <div className="page-header-meta">Research Output</div>
        <h1>Publications</h1>
        <p>
          A comprehensive collection of our research publications spanning hypersonic aerodynamics, shock wave dynamics, and related fields.
        </p>
      </div>

      <div className="page-content">
        <div style={{ marginBottom: '3rem' }}>
          <h2 className="section-title" style={{ marginBottom: '1rem' }}>Recent Publications</h2>
          <p style={{ color: '#4a6080', fontSize: '1.05rem' }}>
            Our laboratory has published over 80 peer-reviewed articles in leading international journals and conferences.
          </p>
        </div>

        <div style={{ display: 'grid', gap: '1.5rem' }}>
          {publications.map((pub, idx) => (
            <div key={idx} style={{ padding: '1.5rem', border: '1px solid rgba(0, 119, 204, 0.18)', borderRadius: '8px', background: '#ffffff' }}>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#0a2540', marginBottom: '0.75rem' }}>
                {pub.title}
              </h3>
              <p style={{ color: '#4a6080', fontSize: '0.95rem', marginBottom: '0.75rem' }}>
                {pub.authors.join(', ')}
              </p>
              <p style={{ color: '#0a2540', fontSize: '0.95rem', marginBottom: '0.75rem' }}>
                <strong>{pub.journal}</strong>, Vol. {pub.volume}, pp. {pub.pages} ({pub.year})
              </p>
              <div style={{ display: 'flex', gap: '1rem' }}>
                <a href={`https://doi.org/${pub.doi}`} target="_blank" rel="noopener noreferrer" style={{ color: '#0077cc', textDecoration: 'none', fontSize: '0.9rem' }}>
                  DOI: {pub.doi} →
                </a>
              </div>
            </div>
          ))}
        </div>

        <div style={{ marginTop: '3rem', padding: '2rem', background: 'rgba(0, 119, 204, 0.04)', borderRadius: '8px' }}>
          <h3 className="section-title" style={{ marginBottom: '1rem' }}>Publication Statistics</h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '2.5rem', fontWeight: 800, color: '#0077cc' }}>80+</div>
              <div style={{ color: '#4a6080', fontSize: '0.9rem', marginTop: '0.5rem', fontFamily: "'Space Mono', monospace" }}>TOTAL PUBLICATIONS</div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '2.5rem', fontWeight: 800, color: '#0077cc' }}>6</div>
              <div style={{ color: '#4a6080', fontSize: '0.9rem', marginTop: '0.5rem', fontFamily: "'Space Mono', monospace" }}>RESEARCH AREAS</div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '2.5rem', fontWeight: 800, color: '#0077cc' }}>15+</div>
              <div style={{ color: '#4a6080', fontSize: '0.9rem', marginTop: '0.5rem', fontFamily: "'Space Mono', monospace" }}>INTERNATIONAL COLLABORATIONS</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
