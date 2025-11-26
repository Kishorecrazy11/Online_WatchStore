'use client';

import { useStore } from '@/context/StoreContext';
import Navbar from '@/components/Navbar';
import WatchCard from '@/components/WatchCard';
import Link from 'next/link';

export default function WishlistPage() {
    const { wishlist } = useStore();

    return (
        <main style={{ minHeight: '100vh', paddingBottom: '50px' }}>
            <Navbar />
            <div className="container" style={{ marginTop: '100px' }}>
                <h1 className="section-title">My Wishlist</h1>

                {wishlist.length === 0 ? (
                    <div style={{ textAlign: 'center', marginTop: '60px' }}>
                        <p style={{ fontSize: '1.2rem', color: '#888', marginBottom: '20px' }}>Your wishlist is empty.</p>
                        <Link href="/" className="btn">Browse Collection</Link>
                    </div>
                ) : (
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
                        gap: '30px'
                    }}>
                        {wishlist.map((watch) => (
                            <WatchCard key={watch.id} watch={watch} />
                        ))}
                    </div>
                )}
            </div>
        </main>
    );
}
