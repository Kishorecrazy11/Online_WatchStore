'use client';

import { useState } from 'react';

interface Review {
    id: number;
    user: string;
    rating: number;
    comment: string;
    date: string;
}

export default function ReviewSection() {
    const [reviews, setReviews] = useState<Review[]>([
        { id: 1, user: 'James Bond', rating: 5, comment: 'Excellent craftsmanship. A true masterpiece.', date: '2023-10-15' },
        { id: 2, user: 'Alice V.', rating: 4, comment: 'Beautiful watch, but the clasp is a bit tight.', date: '2023-11-02' }
    ]);

    const [newComment, setNewComment] = useState('');
    const [newRating, setNewRating] = useState(5);
    const [userName, setUserName] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!newComment || !userName) return;

        const newReview: Review = {
            id: Date.now(),
            user: userName,
            rating: newRating,
            comment: newComment,
            date: new Date().toISOString().split('T')[0]
        };

        setReviews([newReview, ...reviews]);
        setNewComment('');
        setUserName('');
        setNewRating(5);
    };

    return (
        <div style={{ marginTop: '60px', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '40px' }}>
            <h3 className="section-title" style={{ fontSize: '1.5rem' }}>Customer Reviews</h3>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '50px' }}>
                <div>
                    {reviews.map((review) => (
                        <div key={review.id} style={{ marginBottom: '30px', background: 'rgba(255,255,255,0.03)', padding: '20px', borderRadius: '8px' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                                <span style={{ fontWeight: 'bold', color: '#fff' }}>{review.user}</span>
                                <span style={{ color: '#888', fontSize: '0.8rem' }}>{review.date}</span>
                            </div>
                            <div style={{ color: 'var(--primary)', marginBottom: '10px' }}>
                                {'★'.repeat(review.rating)}{'☆'.repeat(5 - review.rating)}
                            </div>
                            <p style={{ lineHeight: '1.5', color: '#ccc' }}>{review.comment}</p>
                        </div>
                    ))}
                </div>

                <div>
                    <h4 style={{ marginBottom: '20px', color: '#fff' }}>Write a Review</h4>
                    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                        <input
                            type="text"
                            placeholder="Your Name"
                            value={userName}
                            onChange={(e) => setUserName(e.target.value)}
                            required
                            style={{ padding: '12px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: '#fff', borderRadius: '4px' }}
                        />
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                            <label>Rating:</label>
                            <select
                                value={newRating}
                                onChange={(e) => setNewRating(Number(e.target.value))}
                                style={{ padding: '8px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: '#fff', borderRadius: '4px' }}
                            >
                                <option value="5">5 Stars</option>
                                <option value="4">4 Stars</option>
                                <option value="3">3 Stars</option>
                                <option value="2">2 Stars</option>
                                <option value="1">1 Star</option>
                            </select>
                        </div>
                        <textarea
                            placeholder="Your Review"
                            rows={4}
                            value={newComment}
                            onChange={(e) => setNewComment(e.target.value)}
                            required
                            style={{ padding: '12px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: '#fff', borderRadius: '4px', resize: 'vertical' }}
                        />
                        <button type="submit" className="btn">Submit Review</button>
                    </form>
                </div>
            </div>
        </div>
    );
}
