import { useState } from 'react';

interface NavigationProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export default function Navigation({ currentPage, onNavigate }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'research', label: 'Research' },
    { id: 'people', label: 'People' },
    { id: 'publications', label: 'Publications' },
  ];

  const handleNavClick = (pageId: string) => {
    onNavigate(pageId);
    setIsOpen(false);
  };

  return (
    <nav>
      <a href="#" className="nav-logo" onClick={(e) => { e.preventDefault(); handleNavClick('home'); }}>
        <div className="nav-logo-mark">
          <span>LHSR</span>
        </div>
        <div>
          <div className="nav-logo-text">LHSR</div>
          <div className="nav-logo-sub">IISc</div>
        </div>
      </a>

      <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
        {navItems.map((item) => (
          <li key={item.id}>
            <a
              href="#"
              className={currentPage === item.id ? 'active' : ''}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(item.id);
              }}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>

      <button
        className="nav-hamburger"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
    </nav>
  );
}
