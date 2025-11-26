'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Watch } from '@/app/data/watches';

interface CartItem extends Watch {
    quantity: number;
}

export interface Order {
    id: string;
    date: string;
    items: CartItem[];
    total: number;
    status: 'Processing' | 'Shipped' | 'Delivered';
}

interface StoreContextType {
    cart: CartItem[];
    wishlist: Watch[];
    orders: Order[];
    addToCart: (watch: Watch) => void;
    removeFromCart: (watchId: string) => void;
    addToWishlist: (watch: Watch) => void;
    removeFromWishlist: (watchId: string) => void;
    isInWishlist: (watchId: string) => boolean;
    cartTotal: number;
    cartCount: number;
    clearCart: () => void;
    placeOrder: () => void;
}

const StoreContext = createContext<StoreContextType | undefined>(undefined);

export function StoreProvider({ children }: { children: ReactNode }) {
    const [cart, setCart] = useState<CartItem[]>([]);
    const [wishlist, setWishlist] = useState<Watch[]>([]);
    const [orders, setOrders] = useState<Order[]>([]);
    const [isInitialized, setIsInitialized] = useState(false);

    useEffect(() => {
        const savedCart = localStorage.getItem('cart');
        const savedWishlist = localStorage.getItem('wishlist');
        const savedOrders = localStorage.getItem('orders');
        if (savedCart) setCart(JSON.parse(savedCart));
        if (savedWishlist) setWishlist(JSON.parse(savedWishlist));
        if (savedOrders) setOrders(JSON.parse(savedOrders));
        setIsInitialized(true);
    }, []);

    useEffect(() => {
        if (isInitialized) {
            localStorage.setItem('cart', JSON.stringify(cart));
            localStorage.setItem('wishlist', JSON.stringify(wishlist));
            localStorage.setItem('orders', JSON.stringify(orders));
        }
    }, [cart, wishlist, orders, isInitialized]);

    const addToCart = (watch: Watch) => {
        setCart((prev) => {
            const existing = prev.find((item) => item.id === watch.id);
            if (existing) {
                return prev.map((item) =>
                    item.id === watch.id ? { ...item, quantity: item.quantity + 1 } : item
                );
            }
            return [...prev, { ...watch, quantity: 1 }];
        });
    };

    const removeFromCart = (watchId: string) => {
        setCart((prev) => prev.filter((item) => item.id !== watchId));
    };

    const addToWishlist = (watch: Watch) => {
        setWishlist((prev) => {
            if (prev.some((item) => item.id === watch.id)) return prev;
            return [...prev, watch];
        });
    };

    const removeFromWishlist = (watchId: string) => {
        setWishlist((prev) => prev.filter((item) => item.id !== watchId));
    };

    const isInWishlist = (watchId: string) => {
        return wishlist.some((item) => item.id === watchId);
    };

    const clearCart = () => {
        setCart([]);
    };

    const cartTotal = cart.reduce((total, item) => {
        const price = parseFloat(item.price.replace(/[^0-9.-]+/g, ""));
        return total + price * item.quantity;
    }, 0);

    const cartCount = cart.reduce((count, item) => count + item.quantity, 0);

    const placeOrder = () => {
        const newOrder: Order = {
            id: Math.random().toString(36).substr(2, 9).toUpperCase(),
            date: new Date().toLocaleDateString(),
            items: [...cart],
            total: cartTotal,
            status: 'Processing'
        };
        setOrders([newOrder, ...orders]);
        clearCart();
    };

    return (
        <StoreContext.Provider value={{
            cart,
            wishlist,
            orders,
            addToCart,
            removeFromCart,
            addToWishlist,
            removeFromWishlist,
            isInWishlist,
            cartTotal,
            cartCount,
            clearCart,
            placeOrder
        }}>
            {children}
        </StoreContext.Provider>
    );
}

export function useStore() {
    const context = useContext(StoreContext);
    if (context === undefined) {
        throw new Error('useStore must be used within a StoreProvider');
    }
    return context;
}
