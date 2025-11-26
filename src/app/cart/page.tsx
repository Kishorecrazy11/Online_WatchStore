'use client';

import { useStore } from '@/context/StoreContext';
import Navbar from '@/components/Navbar';
import Link from 'next/link';
import Image from 'next/image';

export default function CartPage() {
    const { cart, removeFromCart, cartTotal, clearCart } = useStore();

    return (
        <main style={{ minHeight: '100vh', paddingBottom: '50px' }}>
            <Navbar />
            <div className="container" style={{ marginTop: '100px' }}>
                <h1 className="section-title">Shopping Cart</h1>

                {cart.length === 0 ? (
                    <div style={{ textAlign: 'center', marginTop: '60px' }}>
                        <p style={{ fontSize: '1.2rem', color: '#888', marginBottom: '20px' }}>Your cart is currently empty.</p>
                        <Link href="/" className="btn">Continue Shopping</Link>
                    </div>
                ) : (
                    <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '50px' }}>
                        <div>
                            {cart.map((item) => (
                                <div key={item.id} style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    background: 'rgba(255,255,255,0.03)',
                                    padding: '20px',
                                    borderRadius: '8px',
                                    marginBottom: '20px',
                                    border: '1px solid rgba(255,255,255,0.05)'
                                }}>
                                    <div style={{ position: 'relative', width: '80px', height: '80px', marginRight: '20px', background: '#fff', borderRadius: '4px' }}>
                                        <Image src={item.image} alt={item.model} fill style={{ objectFit: 'contain', padding: '5px' }} />
                                    </div>
                                    <div style={{ flex: 1 }}>
                                        <h3 style={{ fontSize: '1.1rem', marginBottom: '5px' }}>{item.model}</h3>
                                        <p style={{ color: '#888', fontSize: '0.9rem' }}>{item.brand}</p>
                                    </div>
                                    <div style={{ margin: '0 30px', fontWeight: 'bold' }}>
                                        {item.price} x {item.quantity}
                                    </div>
                                    <button
                                        onClick={() => removeFromCart(item.id)}
                                        style={{
                                            background: 'transparent',
                                            border: '1px solid #ff4444',
                                            color: '#ff4444',
                                            padding: '5px 10px',
                                            borderRadius: '4px',
                                            cursor: 'pointer'
                                        }}
                                    >
                                        Remove
                                    </button>
                                </div>
                            ))}
                            <button onClick={clearCart} style={{ color: '#888', background: 'transparent', border: 'none', cursor: 'pointer', textDecoration: 'underline' }}>
                                Clear Cart
                            </button>
                        </div>

                        <div style={{
                            background: 'rgba(255,255,255,0.03)',
                            padding: '30px',
                            borderRadius: '8px',
                            height: 'fit-content',
                            border: '1px solid rgba(255,255,255,0.05)'
                        }}>
                            <h3 style={{ marginBottom: '20px', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '10px' }}>Order Summary</h3>
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '15px' }}>
                                <span>Subtotal</span>
                                <span>${cartTotal.toLocaleString()}</span>
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
                                <span>Shipping</span>
                                <span>Free</span>
                            </div>
                            <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '20px', marginTop: '20px', display: 'flex', justifyContent: 'space-between', fontSize: '1.2rem', fontWeight: 'bold', color: 'var(--primary)' }}>
                                <span>Total</span>
                                <span>${cartTotal.toLocaleString()}</span>
                            </div>
                            <Link href="/checkout" className="btn" style={{ display: 'block', textAlign: 'center', marginTop: '30px', textDecoration: 'none' }}>
                                Proceed to Checkout
                            </Link>
                        </div>
                    </div>
                )}
            </div>
        </main>
    );
}
