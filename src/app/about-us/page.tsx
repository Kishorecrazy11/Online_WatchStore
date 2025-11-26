import Navbar from '@/components/Navbar';

export default function AboutPage() {
    return (
        <main style={{ minHeight: '100vh', paddingBottom: '50px' }}>
            <Navbar />
            <div className="container" style={{ marginTop: '100px', maxWidth: '800px' }}>
                <h1 className="section-title">About Chronos</h1>
                <div style={{ lineHeight: '1.8', fontSize: '1.1rem', color: '#ccc' }}>
                    <p style={{ marginBottom: '20px' }}>
                        Founded in 2024, Chronos was born from a passion for horology and a desire to bring the world's most exquisite timepieces to a discerning clientele. We believe that a watch is more than just an instrument to tell time; it is a statement of style, a marvel of engineering, and a legacy to be passed down through generations.
                    </p>
                    <p style={{ marginBottom: '20px' }}>
                        Our collection is meticulously curated to include only the finest brands and models, from the rugged durability of professional diving watches to the sophisticated elegance of dress watches. Each piece in our inventory is authenticated and inspected to ensure it meets our rigorous standards of quality.
                    </p>
                    <p>
                        At Chronos, we are committed to providing an exceptional shopping experience. Whether you are a seasoned collector or purchasing your first luxury watch, our team of experts is here to guide you every step of the way.
                    </p>
                </div>
            </div>
        </main>
    );
}
