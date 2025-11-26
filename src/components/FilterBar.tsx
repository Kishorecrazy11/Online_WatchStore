'use client';

import { useState, useEffect } from 'react';

export interface FilterState {
    search: string;
    minPrice: number;
    maxPrice: number;
    color: string;
    type: string;
}

interface FilterBarProps {
    onFilterChange: (filters: FilterState) => void;
}

export default function FilterBar({ onFilterChange }: FilterBarProps) {
    const [filters, setFilters] = useState<FilterState>({
        search: '',
        minPrice: 0,
        maxPrice: 50000,
        color: 'All',
        type: 'All'
    });

    useEffect(() => {
        onFilterChange(filters);
    }, [filters, onFilterChange]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFilters(prev => ({
            ...prev,
            [name]: name.includes('Price') ? Number(value) : value
        }));
    };

    return (
        <div style={{
            background: 'rgba(255,255,255,0.03)',
            padding: '20px',
            borderRadius: '8px',
            marginBottom: '40px',
            display: 'flex',
            flexWrap: 'wrap',
            gap: '20px',
            alignItems: 'center',
            border: '1px solid rgba(255,255,255,0.05)'
        }}>
            <input
                type="text"
                name="search"
                placeholder="Search watches..."
                value={filters.search}
                onChange={handleChange}
                style={{
                    padding: '10px 15px',
                    background: 'rgba(0,0,0,0.3)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    color: '#fff',
                    borderRadius: '4px',
                    flex: '1 1 200px'
                }}
            />

            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <label style={{ color: '#888', fontSize: '0.9rem' }}>Price:</label>
                <input
                    type="number"
                    name="minPrice"
                    placeholder="Min"
                    value={filters.minPrice}
                    onChange={handleChange}
                    style={{ width: '80px', padding: '8px', background: 'rgba(0,0,0,0.3)', border: '1px solid rgba(255,255,255,0.1)', color: '#fff', borderRadius: '4px' }}
                />
                <span style={{ color: '#888' }}>-</span>
                <input
                    type="number"
                    name="maxPrice"
                    placeholder="Max"
                    value={filters.maxPrice}
                    onChange={handleChange}
                    style={{ width: '80px', padding: '8px', background: 'rgba(0,0,0,0.3)', border: '1px solid rgba(255,255,255,0.1)', color: '#fff', borderRadius: '4px' }}
                />
            </div>

            <select
                name="type"
                value={filters.type}
                onChange={handleChange}
                style={{
                    padding: '10px',
                    background: 'rgba(0,0,0,0.3)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    color: '#fff',
                    borderRadius: '4px',
                    cursor: 'pointer'
                }}
            >
                <option value="All">All Types</option>
                <option value="Automatic">Automatic</option>
                <option value="Manual">Manual</option>
                <option value="Quartz">Quartz</option>
                <option value="Smart">Smart</option>
            </select>

            <select
                name="color"
                value={filters.color}
                onChange={handleChange}
                style={{
                    padding: '10px',
                    background: 'rgba(0,0,0,0.3)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    color: '#fff',
                    borderRadius: '4px',
                    cursor: 'pointer'
                }}
            >
                <option value="All">All Colors</option>
                <option value="Silver">Silver</option>
                <option value="Black">Black</option>
                <option value="Blue">Blue</option>
                <option value="Gold">Gold</option>
            </select>
        </div>
    );
}
