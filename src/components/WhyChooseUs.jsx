import React from 'react';
import { Star, MapPin, Package, Users, HeartHandshake, IndianRupee } from 'lucide-react';

const WhyChooseUs = () => {
    const reasons = [
        { icon: <Star color="#F59E0B" size={32} />, title: "4.6 Google Rating", desc: "Trusted by hundreds of happy customers." },
        { icon: <MapPin color="var(--primary)" size={32} />, title: "Prime Location", desc: "Easily accessible in T. Nagar Shopping Area." },
        { icon: <Package color="var(--primary)" size={32} />, title: "A to Z Collection", desc: "Every style, color, and size available." },
        { icon: <Users color="var(--primary)" size={32} />, title: "Wholesale", desc: "Serving both individual and bulk buyers." },
        { icon: <HeartHandshake color="var(--primary)" size={32} />, title: "Dedicated Service", desc: "Friendly staff to help you find the best." },
        { icon: <IndianRupee color="var(--primary)" size={32} />, title: "Budget-Friendly", desc: "Factory prices for premium quality." }
    ];

    const testimonials = [
        "Best service… Really appreciated work.",
        "Affordable range and good collection.",
        "A to Z nighty collection in one shop."
    ];

    return (
        <section id="whyus" style={{ backgroundColor: 'var(--bg-white)', position: 'relative' }}>
            <div className="container">
                <h2 className="section-title">Why Choose MAK Fashion</h2>
                <p className="section-subtitle">Your reliable partner for nightwear in Chennai.</p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                    {reasons.map((reason, idx) => (
                        <div key={idx} style={{
                            padding: '2rem',
                            backgroundColor: 'var(--bg-offwhite)',
                            borderRadius: '12px',
                            textAlign: 'center',
                            borderTop: '4px solid var(--primary-light)',
                            boxShadow: 'var(--shadow-sm)',
                            transition: 'transform 0.3s ease'
                        }} className="hover:transform hover:-translate-y-2">
                            <div style={{ display: 'inline-block', marginBottom: '1rem', padding: '1rem', backgroundColor: 'white', borderRadius: '50%', boxShadow: '0 2px 10px rgba(155,44,70,0.1)' }}>
                                {reason.icon}
                            </div>
                            <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem', color: 'var(--primary)' }}>{reason.title}</h3>
                            <p style={{ color: 'var(--text-light)' }}>{reason.desc}</p>
                        </div>
                    ))}
                </div>

                {/* Testimonials highlight */}
                <div style={{
                    backgroundColor: 'var(--primary)',
                    color: 'white',
                    padding: '3rem 2rem',
                    borderRadius: '16px',
                    textAlign: 'center',
                    boxShadow: 'var(--shadow-lg)'
                }}>
                    <h3 style={{ fontSize: '1.8rem', marginBottom: '2rem', fontFamily: 'var(--font-heading)' }}>What Our Customers Say</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {testimonials.map((text, idx) => (
                            <div key={idx} style={{ padding: '1.5rem', backgroundColor: 'rgba(255,255,255,0.1)', borderRadius: '8px' }}>
                                <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1rem', gap: '4px' }}>
                                    {[1, 2, 3, 4, 5].map(star => <Star key={star} size={16} fill="#F59E0B" color="#F59E0B" />)}
                                </div>
                                <p style={{ fontStyle: 'italic', fontSize: '1.1rem' }}>"{text}"</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
