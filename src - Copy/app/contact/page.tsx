'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';

export default function ContactPage() {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
    };

    return (
        <main style={{ minHeight: '100vh', paddingBottom: '50px' }}>
            <Navbar />
            <div className="container" style={{ marginTop: '100px', maxWidth: '800px' }}>
                <h1 className="section-title">Contact Us</h1>

                {submitted ? (
                    <div style={{
                        background: 'rgba(76, 175, 80, 0.1)',
                        border: '1px solid #4caf50',
                        padding: '30px',
                        borderRadius: '8px',
                        textAlign: 'center',
                        color: '#4caf50'
                    }}>
                        <h3>Thank you for reaching out!</h3>
                        <p>We have received your message and will get back to you within 24 hours.</p>
                    </div>
                ) : (
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '50px' }}>
                        <div>
                            <h3 style={{ marginBottom: '20px', color: '#fff' }}>Get in Touch</h3>
                            <p style={{ marginBottom: '20px', color: '#ccc', lineHeight: '1.6' }}>
                                Have a question about a watch? Need help with an order? Our team is here to assist you.
                            </p>
                            <div style={{ marginBottom: '30px' }}>
                                <div style={{ marginBottom: '10px', fontWeight: 'bold', color: 'var(--primary)' }}>Address</div>
                                <div style={{ color: '#ccc' }}>123 Watchmaker Lane<br />Geneva, Switzerland 1204</div>
                            </div>
                            <div style={{ marginBottom: '30px' }}>
                                <div style={{ marginBottom: '10px', fontWeight: 'bold', color: 'var(--primary)' }}>Email</div>
                                <div style={{ color: '#ccc' }}>concierge@chronos.com</div>
                            </div>
                            <div>
                                <div style={{ marginBottom: '10px', fontWeight: 'bold', color: 'var(--primary)' }}>Phone</div>
                                <div style={{ color: '#ccc' }}>+41 22 555 0123</div>
                            </div>
                        </div>

                        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                            <input
                                type="text"
                                placeholder="Your Name"
                                required
                                style={{ padding: '15px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: '#fff', borderRadius: '4px' }}
                            />
                            <input
                                type="email"
                                placeholder="Your Email"
                                required
                                style={{ padding: '15px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: '#fff', borderRadius: '4px' }}
                            />
                            <textarea
                                placeholder="Your Message"
                                rows={5}
                                required
                                style={{ padding: '15px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: '#fff', borderRadius: '4px', resize: 'vertical' }}
                            />
                            <button type="submit" className="btn">Send Message</button>
                        </form>
                    </div>
                )}
            </div>
        </main>
    );
}
