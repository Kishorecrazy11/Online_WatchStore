import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import AddToCartButton from '@/components/AddToCartButton';
import ReviewSection from '@/components/ReviewSection';
import WatchCard from '@/components/WatchCard';
import { watches } from '@/app/data/watches';



export default async function WatchPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const watch = watches.find((w) => w.id === id);

    if (!watch) {
        notFound();
    }

    const relatedWatches = watches
        .filter((w) => (w.brand === watch.brand || w.type === watch.type) && w.id !== watch.id)
        .slice(0, 3);

    return (
        <main style={{ minHeight: '100vh', paddingBottom: '50px' }}>
            <Navbar />
            <div className="container" style={{ marginTop: '60px' }}>
                <Link href="/" style={{ color: '#888', marginBottom: '20px', display: 'inline-block' }}>
                    &larr; Back to Collection
                </Link>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'start' }}>
                    <div className="product-image-container" style={{
                        background: 'rgba(255,255,255,0.03)',
                        borderRadius: '12px',
                        padding: '40px',
                        border: '1px solid rgba(255,255,255,0.05)',
                        position: 'relative',
                        height: '500px',
                        overflow: 'hidden'
                    }}>
                        <Image
                            src={watch.image}
                            alt={watch.model}
                            fill
                            style={{ objectFit: 'contain', padding: '40px' }}
                            priority
                        />
                    </div>

                    <div>
                        <div style={{ textTransform: 'uppercase', color: 'var(--primary)', letterSpacing: '2px', marginBottom: '10px' }}>
                            {watch.brand}
                        </div>
                        <h1 style={{ fontSize: '3rem', marginBottom: '20px', lineHeight: '1.1' }}>{watch.model}</h1>
                        <p style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '30px' }}>{watch.price}</p>

                        <div style={{ marginBottom: '40px', lineHeight: '1.8', color: '#ccc', fontSize: '1.1rem' }}>
                            {watch.description}
                        </div>

                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '40px', background: 'rgba(255,255,255,0.03)', padding: '20px', borderRadius: '8px' }}>
                            <div>
                                <span style={{ color: '#888', display: 'block', fontSize: '0.9rem' }}>Type</span>
                                <span style={{ fontWeight: 'bold' }}>{watch.type}</span>
                            </div>
                            <div>
                                <span style={{ color: '#888', display: 'block', fontSize: '0.9rem' }}>Size</span>
                                <span style={{ fontWeight: 'bold' }}>{watch.size}</span>
                            </div>
                            <div>
                                <span style={{ color: '#888', display: 'block', fontSize: '0.9rem' }}>Movement</span>
                                <span style={{ fontWeight: 'bold' }}>{watch.movement}</span>
                            </div>
                            <div>
                                <span style={{ color: '#888', display: 'block', fontSize: '0.9rem' }}>Case Material</span>
                                <span style={{ fontWeight: 'bold' }}>{watch.caseMaterial}</span>
                            </div>
                            <div>
                                <span style={{ color: '#888', display: 'block', fontSize: '0.9rem' }}>Water Resistance</span>
                                <span style={{ fontWeight: 'bold' }}>{watch.waterResistance}</span>
                            </div>
                            <div>
                                <span style={{ color: '#888', display: 'block', fontSize: '0.9rem' }}>Availability</span>
                                <span style={{ color: watch.availability === 'In Stock' ? '#4caf50' : '#f44336' }}>{watch.availability}</span>
                            </div>
                        </div>

                        <AddToCartButton watch={watch} />
                    </div>
                </div>

                <ReviewSection />

                {relatedWatches.length > 0 && (
                    <div style={{ marginTop: '100px' }}>
                        <h3 className="section-title">You Might Also Like</h3>
                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
                            gap: '30px'
                        }}>
                            {relatedWatches.map((related) => (
                                <WatchCard key={related.id} watch={related} />
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </main>
    );
}
