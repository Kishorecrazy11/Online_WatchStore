import Navbar from '@/components/Navbar';

export default function FAQPage() {
    const faqs = [
        {
            q: "Are your watches authentic?",
            a: "Yes, absolutely. We guarantee the authenticity of every timepiece we sell. All watches come with their original box and papers unless stated otherwise."
        },
        {
            q: "Do you offer a warranty?",
            a: "We provide a 2-year Chronos warranty on all pre-owned watches. New watches come with the manufacturer's international warranty."
        },
        {
            q: "What is your return policy?",
            a: "We offer a 14-day return policy for a full refund, provided the watch is returned in the same condition as it was sold."
        },
        {
            q: "Do you ship internationally?",
            a: "Yes, we offer fully insured worldwide shipping via FedEx Priority."
        },
        {
            q: "Can I view a watch in person?",
            a: "Yes, viewings are available by appointment at our Geneva boutique."
        }
    ];

    return (
        <main style={{ minHeight: '100vh', paddingBottom: '50px' }}>
            <Navbar />
            <div className="container" style={{ marginTop: '100px', maxWidth: '800px' }}>
                <h1 className="section-title">Frequently Asked Questions</h1>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
                    {faqs.map((faq, index) => (
                        <div key={index} style={{ background: 'rgba(255,255,255,0.03)', padding: '30px', borderRadius: '8px' }}>
                            <h3 style={{ marginBottom: '15px', color: 'var(--primary)' }}>{faq.q}</h3>
                            <p style={{ lineHeight: '1.6', color: '#ccc' }}>{faq.a}</p>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
}
