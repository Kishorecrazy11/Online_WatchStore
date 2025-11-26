'use client';

import Link from 'next/link';
import { useStore } from '@/context/StoreContext';

export default function Navbar() {
    const { cartCount, wishlist } = useStore();

    return (
        <nav style={{
            padding: '20px 0',
            borderBottom: '1px solid rgba(255,255,255,0.1)',
            position: 'sticky',
            top: 0,
            background: 'rgba(10,10,10,0.95)',
            zIndex: 100,
            backdropFilter: 'blur(10px)'
        }}>
            <div className="container" style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
            }}>
                <Link href="/" style={{
                    fontSize: '1.5rem',
                    fontWeight: 'bold',
                    color: 'var(--primary)',
                    letterSpacing: '2px',
                    textTransform: 'uppercase',
                    textDecoration: 'none'
                }}>
                    Chronos
                </Link>
                <div style={{ display: 'flex', gap: '30px', alignItems: 'center' }}>
                    <Link href="/" style={{ color: 'var(--foreground)', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px', textDecoration: 'none' }}>Collection</Link>

                    <Link href="/wishlist" style={{ position: 'relative', color: 'var(--foreground)', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px', textDecoration: 'none' }}>
                        Wishlist
                        {wishlist.length > 0 && (
                            <span style={{
                                position: 'absolute',
                                top: '-8px',
                                right: '-12px',
                                background: 'var(--primary)',
                                color: '#000',
                                borderRadius: '50%',
                                width: '16px',
                                height: '16px',
                                fontSize: '10px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontWeight: 'bold'
                            }}>
                                {wishlist.length}
                            </span>
                        )}
                    </Link>

                    <Link href="/orders" style={{ color: 'var(--foreground)', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px', textDecoration: 'none' }}>
                        Orders
                    </Link>

                    <Link href="/cart" style={{ position: 'relative', color: 'var(--foreground)', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px', textDecoration: 'none' }}>
                        Cart
                        {cartCount > 0 && (
                            <span style={{
                                position: 'absolute',
                                top: '-8px',
                                right: '-12px',
                                background: 'var(--primary)',
                                color: '#000',
                                borderRadius: '50%',
                                width: '16px',
                                height: '16px',
                                fontSize: '10px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontWeight: 'bold'
                            }}>
                                {cartCount}
                            </span>
                        )}
                    </Link>
                </div>
            </div>
        </nav>
    );
}
