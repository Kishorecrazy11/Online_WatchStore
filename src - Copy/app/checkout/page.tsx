'use client';

import { useState } from 'react';
import { useStore } from '@/context/StoreContext';
import Navbar from '@/components/Navbar';
import { useRouter } from 'next/navigation';

export default function CheckoutPage() {
    const { cart, cartTotal, placeOrder } = useStore();
    const router = useRouter();
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        address: '',
        city: '',
        zip: '',
        country: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        // Simulate payment processing
        await new Promise(resolve => setTimeout(resolve, 2000));

        placeOrder();
        router.push('/?orderSuccess=true');
    };

    if (cart.length === 0) {
        return (
            <main style={{ minHeight: '100vh', paddingBottom: '50px' }}>
                <Navbar />
                <div className="container" style={{ marginTop: '100px', textAlign: 'center' }}>
                    <h1>Your cart is empty</h1>
                </div>
            </main>
        );
    }

    return (
        <main style={{ minHeight: '100vh', paddingBottom: '50px' }}>
            <Navbar />
            <div className="container" style={{ marginTop: '100px' }}>
                <h1 className="section-title">Checkout</h1>

                <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '50px' }}>
                    <div>
                        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                            <h3 style={{ marginBottom: '10px', color: 'var(--primary)' }}>Shipping Information</h3>

                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                                <input
                                    type="text"
                                    name="fullName"
                                    placeholder="Full Name"
                                    required
                                    value={formData.fullName}
                                    onChange={handleChange}
                                    style={{ padding: '15px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: '#fff', borderRadius: '4px' }}
                                />
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Email Address"
                                    required
                                    value={formData.email}
                                    onChange={handleChange}
                                    style={{ padding: '15px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: '#fff', borderRadius: '4px' }}
                                />
                            </div>

                            <input
                                type="tel"
                                name="phone"
                                placeholder="Phone Number"
                                required
                                value={formData.phone}
                                onChange={handleChange}
                                style={{ padding: '15px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: '#fff', borderRadius: '4px' }}
                            />

                            <textarea
                                name="address"
                                placeholder="Shipping Address"
                                required
                                rows={3}
                                value={formData.address}
                                onChange={handleChange}
                                style={{ padding: '15px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: '#fff', borderRadius: '4px', resize: 'vertical' }}
                            />

                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '20px' }}>
                                <input
                                    type="text"
                                    name="city"
                                    placeholder="City"
                                    required
                                    value={formData.city}
                                    onChange={handleChange}
                                    style={{ padding: '15px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: '#fff', borderRadius: '4px' }}
                                />
                                <input
                                    type="text"
                                    name="zip"
                                    placeholder="ZIP Code"
                                    required
                                    value={formData.zip}
                                    onChange={handleChange}
                                    style={{ padding: '15px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: '#fff', borderRadius: '4px' }}
                                />
                                <input
                                    type="text"
                                    name="country"
                                    placeholder="Country"
                                    required
                                    value={formData.country}
                                    onChange={handleChange}
                                    style={{ padding: '15px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: '#fff', borderRadius: '4px' }}
                                />
                            </div>

                            <button type="submit" className="btn" style={{ marginTop: '20px', backgroundColor: 'var(--primary)', color: 'var(--background)', border: 'none' }}>
                                Place Order
                            </button>
                        </form>
                    </div>

                    <div>
                        <div style={{
                            background: 'rgba(255,255,255,0.03)',
                            padding: '30px',
                            borderRadius: '8px',
                            border: '1px solid rgba(255,255,255,0.05)'
                        }}>
                            <h3 style={{ marginBottom: '20px', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '10px' }}>Order Summary</h3>
                            {cart.map((item) => (
                                <div key={item.id} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px', fontSize: '0.9rem' }}>
                                    <span>{item.model} (x{item.quantity})</span>
                                    <span>{item.price}</span>
                                </div>
                            ))}
                            <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', marginTop: '20px', paddingTop: '20px', display: 'flex', justifyContent: 'space-between', fontSize: '1.2rem', fontWeight: 'bold', color: 'var(--primary)' }}>
                                <span>Total</span>
                                <span>${cartTotal.toLocaleString()}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
