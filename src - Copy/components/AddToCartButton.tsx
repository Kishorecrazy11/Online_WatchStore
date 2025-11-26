'use client';

import { useState } from 'react';
import { Watch } from '@/app/data/watches';
import { useStore } from '@/context/StoreContext';

export default function AddToCartButton({ watch }: { watch: Watch }) {
    const { addToCart } = useStore();
    const [isAdded, setIsAdded] = useState(false);

    const handleClick = () => {
        addToCart(watch);
        setIsAdded(true);
        setTimeout(() => setIsAdded(false), 2000);
    };

    return (
        <button
            onClick={handleClick}
            className="btn"
            style={{
                width: '100%',
                padding: '15px',
                fontSize: '1.1rem',
                backgroundColor: isAdded ? '#4caf50' : 'var(--primary)',
                color: isAdded ? '#fff' : '#000',
                transition: 'background-color 0.3s'
            }}
        >
            {isAdded ? 'Added!' : 'Add to Cart'}
        </button>
    );
}
