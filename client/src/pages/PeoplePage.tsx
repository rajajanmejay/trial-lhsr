export default function PeoplePage() {
  const teamMembers = [
    {
      name: 'Dr. Faculty Member',
      role: 'Principal Investigator',
      research: 'Hypersonic aerodynamics and shock wave dynamics',
      image: './images/person-placeholder.jpg',
      linkedin: '#',
    },
    {
      name: 'Dr. Research Scholar',
      role: 'Senior Research Fellow',
      research: 'High-enthalpy flows and plasma physics',
      image: './images/person-placeholder.jpg',
      linkedin: '#',
    },
    {
      name: 'PhD Student Name',
      role: 'Research Scholar',
      research: 'Computational aerodynamics',
      image: './images/person-placeholder.jpg',
      linkedin: '#',
    },
  ];

  return (
    <div className="page active" id="page-people">
      <div className="page-header">
        <div className="page-header-meta">Our Team</div>
        <h1>Meet Our Researchers</h1>
        <p>
          A dedicated team of faculty, research scientists, and students working collaboratively to advance hypersonic research.
        </p>
      </div>

      <div className="page-content">
        {/* Faculty */}
        <div className="people-section">
          <div className="people-section-header">
            <h2 className="people-section-title">Faculty</h2>
            <span className="people-count">1 member</span>
          </div>
          <div className="people-grid">
            {teamMembers.slice(0, 1).map((member, idx) => (
              <div key={idx} className="people-card">
                <div className="people-card-photo-wrap">
                  <img src={member.image} alt={member.name} />
                  <div className="people-card-base">
                    <h3 className="people-card-name">{member.name}</h3>
                    <p className="people-card-role">{member.role}</p>
                  </div>
                  <div className="people-card-hover">
                    <h3 className="people-card-name">{member.name}</h3>
                    <p className="people-card-role">{member.role}</p>
                    <p className="people-card-research">{member.research}</p>
                    <a href={member.linkedin} className="people-card-linkedin">
                      LinkedIn →
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Research Scholars */}
        <div className="people-section">
          <div className="people-section-header">
            <h2 className="people-section-title">Research Scholars</h2>
            <span className="people-count">{teamMembers.slice(1, 2).length} member</span>
          </div>
          <div className="people-grid">
            {teamMembers.slice(1, 2).map((member, idx) => (
              <div key={idx} className="people-card">
                <div className="people-card-photo-wrap">
                  <img src={member.image} alt={member.name} />
                  <div className="people-card-base">
                    <h3 className="people-card-name">{member.name}</h3>
                    <p className="people-card-role">{member.role}</p>
                  </div>
                  <div className="people-card-hover">
                    <h3 className="people-card-name">{member.name}</h3>
                    <p className="people-card-role">{member.role}</p>
                    <p className="people-card-research">{member.research}</p>
                    <a href={member.linkedin} className="people-card-linkedin">
                      LinkedIn →
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Students */}
        <div className="people-section">
          <div className="people-section-header">
            <h2 className="people-section-title">Students</h2>
            <span className="people-count">{teamMembers.slice(2).length} member</span>
          </div>
          <div className="people-grid">
            {teamMembers.slice(2).map((member, idx) => (
              <div key={idx} className="people-card">
                <div className="people-card-photo-wrap">
                  <img src={member.image} alt={member.name} />
                  <div className="people-card-base">
                    <h3 className="people-card-name">{member.name}</h3>
                    <p className="people-card-role">{member.role}</p>
                  </div>
                  <div className="people-card-hover">
                    <h3 className="people-card-name">{member.name}</h3>
                    <p className="people-card-role">{member.role}</p>
                    <p className="people-card-research">{member.research}</p>
                    <a href={member.linkedin} className="people-card-linkedin">
                      LinkedIn →
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div style={{ marginTop: '4rem', padding: '2rem', background: 'rgba(0, 119, 204, 0.04)', borderRadius: '8px', textAlign: 'center' }}>
          <h3 className="section-title" style={{ marginBottom: '1rem' }}>Join Our Team</h3>
          <p style={{ color: '#4a6080', marginBottom: '1.5rem' }}>
            We are always looking for talented researchers and students interested in hypersonic aerodynamics and shock wave research.
          </p>
          <button className="btn-primary">Contact Us</button>
        </div>
      </div>
    </div>
  );
}
