import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Search, Filter, X, ChevronDown } from 'lucide-react';
import { SectionTitle, MentorCard, Button, Badge } from '../components/ui';
import { mentors, expertiseOptions } from '../data/mentors';

const priceRanges = [
  { label: 'All Prices', min: 0, max: Infinity },
  { label: 'Under Rp 400K', min: 0, max: 400000 },
  { label: 'Rp 400K - 600K', min: 400000, max: 600000 },
  { label: 'Over Rp 600K', min: 600000, max: Infinity },
];

export default function Mentors() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedExpertise, setSelectedExpertise] = useState([]);
  const [selectedPriceRange, setSelectedPriceRange] = useState(priceRanges[0]);
  const [showFilters, setShowFilters] = useState(false);

  const filteredMentors = useMemo(() => {
    return mentors.filter((mentor) => {
      // Search filter
      const searchMatch =
        searchQuery === '' ||
        mentor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        mentor.expertise.some((e) =>
          e.toLowerCase().includes(searchQuery.toLowerCase())
        ) ||
        mentor.company.toLowerCase().includes(searchQuery.toLowerCase());

      // Expertise filter
      const expertiseMatch =
        selectedExpertise.length === 0 ||
        selectedExpertise.some((exp) => mentor.expertise.includes(exp));

      // Price filter
      const priceMatch =
        mentor.price >= selectedPriceRange.min &&
        mentor.price <= selectedPriceRange.max;

      return searchMatch && expertiseMatch && priceMatch;
    });
  }, [searchQuery, selectedExpertise, selectedPriceRange]);

  const toggleExpertise = (expertise) => {
    setSelectedExpertise((prev) =>
      prev.includes(expertise)
        ? prev.filter((e) => e !== expertise)
        : [...prev, expertise]
    );
  };

  const clearFilters = () => {
    setSearchQuery('');
    setSelectedExpertise([]);
    setSelectedPriceRange(priceRanges[0]);
  };

  const hasActiveFilters =
    searchQuery || selectedExpertise.length > 0 || selectedPriceRange !== priceRanges[0];

  return (
    <div className="min-h-screen bg-bg-light">
      {/* Header */}
      <section className="bg-gradient-to-br from-growth-purple/10 to-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-4">
              Find Your Perfect Mentor
            </h1>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              Browse our curated list of expert mentors and find the right match for your goals
            </p>
          </motion.div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Search and Filter Bar */}
        <div className="bg-white rounded-xl shadow-lg p-4 mb-8">
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Search */}
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-text-muted" />
              <input
                type="text"
                placeholder="Search by name, expertise, or company..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-growth-purple focus:border-transparent"
              />
            </div>

            {/* Price Range */}
            <div className="relative">
              <select
                value={priceRanges.indexOf(selectedPriceRange)}
                onChange={(e) => setSelectedPriceRange(priceRanges[e.target.value])}
                className="appearance-none w-full lg:w-48 pl-4 pr-10 py-3 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-growth-purple bg-white"
              >
                {priceRanges.map((range, index) => (
                  <option key={range.label} value={index}>
                    {range.label}
                  </option>
                ))}
              </select>
              <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-text-muted pointer-events-none" />
            </div>

            {/* Filter Toggle (Mobile) */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="lg:hidden flex items-center justify-center gap-2 px-4 py-3 border border-border rounded-xl"
            >
              <Filter className="w-5 h-5" />
              <span>Filters</span>
              {selectedExpertise.length > 0 && (
                <Badge color="purple" size="sm">
                  {selectedExpertise.length}
                </Badge>
              )}
            </button>
          </div>

          {/* Expertise Filter Tags */}
          <div className={`mt-4 ${showFilters ? 'block' : 'hidden lg:block'}`}>
            <p className="text-sm text-text-muted mb-2">Filter by expertise:</p>
            <div className="flex flex-wrap gap-2">
              {expertiseOptions.map((expertise) => (
                <button
                  key={expertise}
                  onClick={() => toggleExpertise(expertise)}
                  className={`
                    px-3 py-1.5 text-sm rounded-full border transition-colors
                    ${
                      selectedExpertise.includes(expertise)
                        ? 'bg-growth-purple text-white border-growth-purple'
                        : 'bg-white text-text-secondary border-border hover:border-growth-purple'
                    }
                  `}
                >
                  {expertise}
                </button>
              ))}
            </div>
          </div>

          {/* Active Filters */}
          {hasActiveFilters && (
            <div className="mt-4 pt-4 border-t border-border-light flex items-center gap-2">
              <span className="text-sm text-text-muted">Active filters:</span>
              {selectedExpertise.map((exp) => (
                <Badge key={exp} color="purple" size="sm" className="flex items-center gap-1">
                  {exp}
                  <button onClick={() => toggleExpertise(exp)}>
                    <X className="w-3 h-3" />
                  </button>
                </Badge>
              ))}
              <button
                onClick={clearFilters}
                className="text-sm text-growth-purple hover:underline ml-2"
              >
                Clear all
              </button>
            </div>
          )}
        </div>

        {/* Results count */}
        <p className="text-text-secondary mb-6">
          Showing <span className="font-semibold text-text-primary">{filteredMentors.length}</span>{' '}
          mentors
        </p>

        {/* Mentor Grid */}
        {filteredMentors.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredMentors.map((mentor, index) => (
              <motion.div
                key={mentor.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                <MentorCard mentor={mentor} />
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="w-10 h-10 text-text-muted" />
            </div>
            <h3 className="text-xl font-semibold text-text-primary mb-2">
              No mentors found
            </h3>
            <p className="text-text-secondary mb-4">
              Try adjusting your filters or search query
            </p>
            <Button variant="secondary" onClick={clearFilters}>
              Clear Filters
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
