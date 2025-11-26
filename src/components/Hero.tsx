import Link from 'next/link';

export default function Hero() {
    return (
        <section style={{
            height: '80vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            background: 'linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(/images/hero-bg.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            position: 'relative'
        }}>
            <div className="container">
                <h1 style={{
                    fontSize: '4rem',
                    fontWeight: 'bold',
                    marginBottom: '20px',
                    textTransform: 'uppercase',
                    letterSpacing: '5px',
                    background: 'linear-gradient(to right, #fff, #999)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent'
                }}>
                    Timeless Elegance
                </h1>
                <p style={{
                    fontSize: '1.2rem',
                    maxWidth: '600px',
                    margin: '0 auto 40px',
                    color: '#ccc',
                    lineHeight: '1.6'
                }}>
                    Discover our curated collection of the world's finest timepieces. Precision engineering meets luxury design.
                </p>
                <Link href="#collection" className="btn" style={{
                    padding: '15px 40px',
                    fontSize: '1rem',
                    textDecoration: 'none',
                    display: 'inline-block'
                }}>
                    Explore Collection
                </Link>
            </div>
        </section>
    );
}
