'use client';

import { useStore } from '@/context/StoreContext';
import Navbar from '@/components/Navbar';
import Link from 'next/link';

export default function OrdersPage() {
    const { orders } = useStore();

    return (
        <main style={{ minHeight: '100vh', paddingBottom: '50px' }}>
            <Navbar />
            <div className="container" style={{ marginTop: '100px' }}>
                <h1 className="section-title">Order History</h1>

                {orders.length === 0 ? (
                    <div style={{ textAlign: 'center', marginTop: '60px' }}>
                        <p style={{ fontSize: '1.2rem', color: '#888', marginBottom: '20px' }}>You haven't placed any orders yet.</p>
                        <Link href="/" className="btn">Start Shopping</Link>
                    </div>
                ) : (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
                        {orders.map((order) => (
                            <div key={order.id} style={{
                                background: 'rgba(255,255,255,0.03)',
                                padding: '30px',
                                borderRadius: '12px',
                                border: '1px solid rgba(255,255,255,0.05)'
                            }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '15px' }}>
                                    <div>
                                        <div style={{ color: '#888', fontSize: '0.9rem' }}>Order ID</div>
                                        <div style={{ fontWeight: 'bold' }}>#{order.id}</div>
                                    </div>
                                    <div>
                                        <div style={{ color: '#888', fontSize: '0.9rem' }}>Date</div>
                                        <div>{order.date}</div>
                                    </div>
                                    <div>
                                        <div style={{ color: '#888', fontSize: '0.9rem' }}>Status</div>
                                        <div style={{ color: '#4caf50' }}>{order.status}</div>
                                    </div>
                                    <div>
                                        <div style={{ color: '#888', fontSize: '0.9rem' }}>Total</div>
                                        <div style={{ color: 'var(--primary)', fontWeight: 'bold' }}>${order.total.toLocaleString()}</div>
                                    </div>
                                </div>

                                <div>
                                    {order.items.map((item) => (
                                        <div key={item.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                                            <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                                                <img src={item.image} alt={item.model} style={{ width: '50px', height: '50px', objectFit: 'contain', background: '#fff', borderRadius: '4px' }} />
                                                <div>
                                                    <div style={{ fontWeight: 'bold' }}>{item.model}</div>
                                                    <div style={{ color: '#888', fontSize: '0.8rem' }}>{item.brand}</div>
                                                </div>
                                            </div>
                                            <div style={{ color: '#ccc' }}>
                                                x{item.quantity}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </main>
    );
}
