import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ExternalLink, Download } from 'lucide-react';

/**
 * Publications Page
 * Design: Technical Minimalism - Publication listing with filters and search
 */

interface Publication {
  id: string;
  title: string;
  authors: string[];
  year: number;
  journal: string;
  volume?: string;
  pages?: string;
  doi?: string;
  link?: string;
  researchArea: string;
}

const publications: Publication[] = [
  {
    id: '1',
    title: 'Advanced Shock Wave Interactions in Hypersonic Flows',
    authors: ['Dr. Faculty Member', 'Research Scholar Name', 'PhD Student Name'],
    year: 2024,
    journal: 'Journal of Aerospace Engineering',
    volume: '45',
    pages: '123-145',
    doi: '10.1234/jae.2024.001',
    researchArea: 'Shock Waves',
  },
  {
    id: '2',
    title: 'Experimental Validation of CFD Models for High-Enthalpy Flows',
    authors: ['Dr. Faculty Member', 'Post-Doctoral Fellow Name'],
    year: 2023,
    journal: 'Aerospace Science and Technology',
    volume: '142',
    pages: '107-125',
    doi: '10.1234/ast.2023.042',
    researchArea: 'High-Enthalpy Flows',
  },
  {
    id: '3',
    title: 'Real-Time Flow Visualization Using Advanced Diagnostics',
    authors: ['Research Scholar Name', 'MTech Student Name'],
    year: 2023,
    journal: 'Experiments in Fluids',
    volume: '64',
    pages: '89-101',
    doi: '10.1234/eif.2023.015',
    researchArea: 'Experimental Techniques',
  },
  {
    id: '4',
    title: 'Machine Learning Approaches for Hypersonic Flow Prediction',
    authors: ['PhD Student Name', 'Dr. Faculty Member'],
    year: 2024,
    journal: 'International Journal of Computational Fluid Dynamics',
    volume: '38',
    pages: '234-256',
    doi: '10.1234/ijcfd.2024.008',
    researchArea: 'Computational Methods',
  },
  {
    id: '5',
    title: 'Design Optimization of Re-entry Vehicle Shapes Using Aerodynamic Analysis',
    authors: ['Dr. Faculty Member', 'Research Scholar Name'],
    year: 2023,
    journal: 'AIAA Journal',
    volume: '61',
    pages: '445-461',
    doi: '10.1234/aiaaj.2023.061',
    researchArea: 'Aerospace Applications',
  },
  {
    id: '6',
    title: 'Numerical Simulation of Entropy Layer Effects in Hypersonic Boundary Layers',
    authors: ['PhD Student Name', 'Post-Doctoral Fellow Name', 'Dr. Faculty Member'],
    year: 2024,
    journal: 'Physics of Fluids',
    volume: '36',
    pages: '034102',
    doi: '10.1234/pof.2024.034102',
    researchArea: 'Hypersonic Aerodynamics',
  },
];

export default function Publications() {
  const [selectedArea, setSelectedArea] = useState<string>('All');
  const [selectedYear, setSelectedYear] = useState<number | 'All'>('All');

  const researchAreas = ['All', ...Array.from(new Set(publications.map((p) => p.researchArea)))];
  const years = ['All', ...Array.from(new Set(publications.map((p) => p.year)))].sort((a, b) => {
    if (a === 'All') return -1;
    if (b === 'All') return 1;
    return (b as number) - (a as number);
  });

  const filteredPublications = publications.filter((pub) => {
    const areaMatch = selectedArea === 'All' || pub.researchArea === selectedArea;
    const yearMatch = selectedYear === 'All' || pub.year === selectedYear;
    return areaMatch && yearMatch;
  });

  return (
    <div className="min-h-screen pt-20">
      {/* Header Section */}
      <section className="py-16 px-4 bg-gradient-to-b from-primary/5 to-white border-b border-border">
        <div className="container max-w-4xl mx-auto">
          <div className="text-label text-primary mb-3">Research Output</div>
          <h1 className="text-heading-lg text-foreground mb-4">Publications</h1>
          <p className="text-muted-foreground text-lg max-w-3xl">
            A comprehensive collection of our research publications, spanning hypersonic aerodynamics, shock wave dynamics, and related fields.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="py-12 px-4 bg-white border-b border-border sticky top-16 z-40">
        <div className="container max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Research Area Filter */}
            <div>
              <label className="text-label text-primary mb-3 block">Research Area</label>
              <div className="flex flex-wrap gap-2">
                {researchAreas.map((area) => (
                  <Button
                    key={area}
                    onClick={() => setSelectedArea(area)}
                    variant={selectedArea === area ? 'default' : 'outline'}
                    size="sm"
                    className={`font-mono uppercase tracking-wider text-xs ${
                      selectedArea === area
                        ? 'bg-primary text-white'
                        : 'border-border text-foreground hover:border-primary hover:text-primary'
                    }`}
                  >
                    {area}
                  </Button>
                ))}
              </div>
            </div>

            {/* Year Filter */}
            <div>
              <label className="text-label text-primary mb-3 block">Year</label>
              <div className="flex flex-wrap gap-2">
                {years.map((year) => (
                  <Button
                    key={year}
                    onClick={() => setSelectedYear(year as number | 'All')}
                    variant={selectedYear === year ? 'default' : 'outline'}
                    size="sm"
                    className={`font-mono uppercase tracking-wider text-xs ${
                      selectedYear === year
                        ? 'bg-primary text-white'
                        : 'border-border text-foreground hover:border-primary hover:text-primary'
                    }`}
                  >
                    {year}
                  </Button>
                ))}
              </div>
            </div>
          </div>
          <div className="mt-4 text-sm text-muted-foreground">
            Found {filteredPublications.length} publication{filteredPublications.length !== 1 ? 's' : ''}
          </div>
        </div>
      </section>

      {/* Publications List */}
      <section className="py-20 px-4 bg-white">
        <div className="container max-w-4xl mx-auto">
          {filteredPublications.length > 0 ? (
            <div className="space-y-6">
              {filteredPublications.map((pub, index) => (
                <PublicationCard key={pub.id} publication={pub} index={index} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">No publications found matching your filters.</p>
            </div>
          )}
        </div>
      </section>

      {/* Statistics */}
      <section className="py-20 px-4 bg-slate-50 border-t border-border">
        <div className="container max-w-4xl mx-auto">
          <div className="mb-12">
            <div className="text-label text-primary mb-3">Statistics</div>
            <h2 className="text-heading-lg text-foreground mb-4">Publication Metrics</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="stat-box">
              <div className="text-3xl font-bold text-primary">{publications.length}</div>
              <div className="text-sm text-muted-foreground mt-2 font-mono uppercase tracking-wider">Total Publications</div>
            </div>
            <div className="stat-box">
              <div className="text-3xl font-bold text-primary">{Array.from(new Set(publications.map((p) => p.year))).length}</div>
              <div className="text-sm text-muted-foreground mt-2 font-mono uppercase tracking-wider">Years Active</div>
            </div>
            <div className="stat-box">
              <div className="text-3xl font-bold text-primary">{Array.from(new Set(publications.map((p) => p.researchArea))).length}</div>
              <div className="text-sm text-muted-foreground mt-2 font-mono uppercase tracking-wider">Research Areas</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

/**
 * Publication Card Component
 */
function PublicationCard({ publication, index }: { publication: Publication; index: number }) {
  return (
    <div className="research-card">
      {/* Number and Year */}
      <div className="flex items-start justify-between mb-3">
        <div className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-primary/10 text-primary font-bold text-sm">
          {index + 1}
        </div>
        <span className="text-xs font-mono text-muted-foreground bg-slate-50 px-2 py-1 rounded">
          {publication.year}
        </span>
      </div>

      {/* Title */}
      <h3 className="text-heading-sm text-foreground mb-3">{publication.title}</h3>

      {/* Authors */}
      <p className="text-sm text-muted-foreground mb-4">
        {publication.authors.join(', ')}
      </p>

      {/* Journal Info */}
      <div className="mb-4 pb-4 border-b border-border">
        <p className="text-sm text-foreground">
          <span className="font-semibold">{publication.journal}</span>
          {publication.volume && <span>, Vol. {publication.volume}</span>}
          {publication.pages && <span>, pp. {publication.pages}</span>}
        </p>
      </div>

      {/* Research Area and Links */}
      <div className="flex items-center justify-between">
        <span className="text-xs font-mono text-primary bg-primary/10 px-2 py-1 rounded">
          {publication.researchArea}
        </span>
        <div className="flex gap-2">
          {publication.doi && (
            <a
              href={`https://doi.org/${publication.doi}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-xs font-mono text-primary hover:text-primary/80 transition-colors"
              title="View on DOI"
            >
              DOI <ExternalLink size={14} />
            </a>
          )}
          {publication.link && (
            <a
              href={publication.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-xs font-mono text-primary hover:text-primary/80 transition-colors"
              title="Download PDF"
            >
              <Download size={14} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
