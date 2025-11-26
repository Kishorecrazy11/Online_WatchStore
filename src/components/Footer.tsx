'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Footer() {
    const [email, setEmail] = useState('');

    const handleSubscribe = (e: React.FormEvent) => {
        e.preventDefault();
        alert(`Subscribed with: ${email}`);
        setEmail('');
    };

    return (
        <footer style={{
            background: '#050505',
            borderTop: '1px solid rgba(255,255,255,0.05)',
            padding: '80px 0 40px',
            marginTop: '100px',
            color: '#888'
        }}>
            <div className="container">
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                    gap: '50px',
                    marginBottom: '60px'
                }}>
                    <div>
                        <h3 style={{ color: '#fff', marginBottom: '20px', textTransform: 'uppercase', letterSpacing: '2px' }}>Chronos</h3>
                        <p style={{ lineHeight: '1.6', fontSize: '0.9rem' }}>
                            Crafting moments of elegance and precision. Our collection represents the pinnacle of horological mastery.
                        </p>
                    </div>

                    <div>
                        <h4 style={{ color: '#fff', marginBottom: '20px' }}>Quick Links</h4>
                        <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                            <li><Link href="/about-us" style={{ transition: 'color 0.2s' }}>About Us</Link></li>
                            <li><Link href="/contact" style={{ transition: 'color 0.2s' }}>Contact</Link></li>
                            <li><Link href="/faq" style={{ transition: 'color 0.2s' }}>FAQ</Link></li>
                            <li><Link href="/orders" style={{ transition: 'color 0.2s' }}>Track Order</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 style={{ color: '#fff', marginBottom: '20px' }}>Newsletter</h4>
                        <p style={{ marginBottom: '15px', fontSize: '0.9rem' }}>Subscribe to receive updates, access to exclusive deals, and more.</p>
                        <form onSubmit={handleSubscribe} style={{ display: 'flex', gap: '10px' }}>
                            <input
                                type="email"
                                placeholder="Enter your email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                style={{
                                    background: 'rgba(255,255,255,0.05)',
                                    border: '1px solid rgba(255,255,255,0.1)',
                                    padding: '10px',
                                    color: '#fff',
                                    borderRadius: '4px',
                                    flex: 1
                                }}
                            />
                            <button type="submit" className="btn" style={{ fontSize: '0.8rem', padding: '10px 15px' }}>
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>

                <div style={{
                    borderTop: '1px solid rgba(255,255,255,0.05)',
                    paddingTop: '30px',
                    textAlign: 'center',
                    fontSize: '0.8rem'
                }}>
                    <p>&copy; {new Date().getFullYear()} Chronos Watch Store. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
