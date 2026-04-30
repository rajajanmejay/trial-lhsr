import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import HomePage from '@/pages/HomePage';
import ResearchPage from '@/pages/ResearchPage';
import PeoplePage from '@/pages/PeoplePage';
import PublicationsPage from '@/pages/PublicationsPage';
import './index.css';

/**
 * LHSR IISc Website - Converted from original HTML
 * Preserving all original styling, animations, and content structure
 */

type PageType = 'home' | 'research' | 'people' | 'publications';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageType>('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage />;
      case 'research':
        return <ResearchPage />;
      case 'people':
        return <PeoplePage />;
      case 'publications':
        return <PublicationsPage />;
      default:
        return <HomePage />;
    }
  };

  const handleNavigate = (page: string) => {
    setCurrentPage(page as PageType);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation currentPage={currentPage} onNavigate={handleNavigate} />
      <main className="flex-1">
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
}
