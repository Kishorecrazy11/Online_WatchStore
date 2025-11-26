'use client';

import { useState, useEffect, useCallback, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import WatchCard from '@/components/WatchCard';
import FilterBar, { FilterState } from '@/components/FilterBar';
import { watches } from './data/watches';

function HomeContent() {
  const [filteredWatches, setFilteredWatches] = useState(watches);
  const searchParams = useSearchParams();
  const orderSuccess = searchParams.get('orderSuccess');
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    if (orderSuccess) {
      setShowSuccess(true);
      const timer = setTimeout(() => setShowSuccess(false), 5000);
      return () => clearTimeout(timer);
    }
  }, [orderSuccess]);

  const handleFilterChange = useCallback((filters: FilterState) => {
    const results = watches.filter((watch) => {
      // Search filter
      const searchMatch =
        watch.brand.toLowerCase().includes(filters.search.toLowerCase()) ||
        watch.model.toLowerCase().includes(filters.search.toLowerCase());

      // Price filter
      const price = parseFloat(watch.price.replace(/[^0-9.-]+/g, ""));
      const priceMatch = price >= filters.minPrice && price <= filters.maxPrice;

      // Color filter
      const colorMatch = filters.color === 'All' || watch.color.includes(filters.color);

      // Type filter
      const typeMatch = filters.type === 'All' || watch.type === filters.type;

      return searchMatch && priceMatch && colorMatch && typeMatch;
    });

    setFilteredWatches(results);
  }, []);

  return (
    <main style={{ minHeight: '100vh', paddingBottom: '50px' }}>
      {showSuccess && (
        <div style={{
          position: 'fixed',
          top: '100px',
          right: '20px',
          background: '#4caf50',
          color: '#fff',
          padding: '15px 25px',
          borderRadius: '8px',
          boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
          zIndex: 1000,
          animation: 'slideIn 0.5s ease-out'
        }}>
          ✅ Order placed successfully!
        </div>
      )}
      <Navbar />
      <Hero />

      <div className="container" style={{ marginTop: '80px' }}>
        <h2 className="section-title">Our Collection</h2>

        <FilterBar onFilterChange={handleFilterChange} />

        {filteredWatches.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '50px', color: '#888' }}>
            <h3>No watches found matching your criteria.</h3>
          </div>
        ) : (
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
            gap: '30px',
            padding: '20px 0'
          }}>
            {filteredWatches.map((watch) => (
              <WatchCard key={watch.id} watch={watch} />
            ))}
          </div>
        )}
      </div>
    </main>
  );
}

export default function Home() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <HomeContent />
    </Suspense>
  );
}
