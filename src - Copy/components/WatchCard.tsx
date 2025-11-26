'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Watch } from '@/app/data/watches';

export default function WatchCard({ watch }: { watch: Watch }) {
    return (
        <Link href={`/watch/${watch.id}`} style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}>
            <div style={{
                background: 'rgba(255,255,255,0.03)',
                borderRadius: '8px',
                overflow: 'hidden',
                transition: 'transform 0.3s, box-shadow 0.3s',
                cursor: 'pointer',
                border: '1px solid rgba(255,255,255,0.05)',
                height: '100%',
                display: 'flex',
                flexDirection: 'column'
            }}
                onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-10px)';
                    e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.4)';
                    e.currentTarget.style.borderColor = 'var(--primary)';
                }}
                onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = 'none';
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.05)';
                }}
            >
                <div style={{ position: 'relative', height: '300px', width: '100%', background: '#151515', padding: '20px' }}>
                    <Image
                        src={watch.image}
                        alt={watch.model}
                        fill
                        style={{ objectFit: 'contain', padding: '20px' }}
                    />
                </div>
                <div style={{ padding: '25px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                    <div style={{
                        textTransform: 'uppercase',
                        fontSize: '0.8rem',
                        letterSpacing: '1px',
                        color: '#888',
                        marginBottom: '5px'
                    }}>
                        {watch.brand}
                    </div>
                    <h3 style={{ fontSize: '1.2rem', marginBottom: '15px', fontWeight: '600' }}>{watch.model}</h3>
                    <div style={{ marginTop: 'auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <span style={{ color: 'var(--primary)', fontSize: '1.1rem', fontWeight: 'bold' }}>{watch.price}</span>
                        <span style={{ fontSize: '0.9rem', color: '#666' }}>View Details &rarr;</span>
                    </div>
                </div>
            </div>
        </Link>
    );
}
