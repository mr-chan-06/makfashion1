import React from 'react';
import cottonNightiesImg from '../assets/dress.jpg';
import { Tag, CheckCircle2 } from 'lucide-react';

const Collections = () => {
    const categories = [
        { name: "Cotton Nighties", img: cottonNightiesImg , desc: "Breathable & comfortable for daily wear" },
        { name: "Printed Nighties", img: "https://images.unsplash.com/photo-1583316174775-bd6dc0e9f298?auto=format&fit=crop&w=600&q=80", desc: "Vibrant colors & beautiful patterns" },
        { name: "Designer Nighties", img: "https://images.unsplash.com/photo-1590736969955-71cc94801759?auto=format&fit=crop&w=600&q=80", desc: "Elegant styles with premium finish" },
        { name: "Wholesale Bulk", img: "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?auto=format&fit=crop&w=600&q=80", desc: "Special pricing for bulk buyers" }
    ];

    const features = [
        "Affordable price range",
        "Attractive colors and prints",
        "Comfortable body-friendly fabrics",
        "Dedicated Wholesale options available"
    ];

    return (
        <section id="collections" style={{ backgroundColor: 'var(--bg-offwhite)' }}>
            <div className="container">
                <h2 className="section-title">Our A to Z Collection</h2>
                <p className="section-subtitle">Discover our wide range of comfortable and stylish nightwear perfect for every need.</p>

                {/* Categories Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                    {categories.map((cat, idx) => (
                        <div key={idx} style={{
                            backgroundColor: 'white',
                            borderRadius: '12px',
                            overflow: 'hidden',
                            boxShadow: 'var(--shadow-md)',
                            transition: 'transform 0.3s ease',
                            cursor: 'pointer'
                        }} className="hover:transform hover:-translate-y-2">
                            <div style={{ height: '250px', overflow: 'hidden' }}>
                                <img src={cat.img} alt={cat.name} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }} className="hover:scale-110" />
                            </div>
                            <div className="p-4 text-center">
                                <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>{cat.name}</h3>
                                <p style={{ color: 'var(--text-light)', fontSize: '0.9rem' }}>{cat.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Features Box */}
                <div style={{
                    backgroundColor: 'white',
                    padding: '2rem',
                    borderRadius: '12px',
                    border: '1px solid var(--border)',
                    marginTop: '4rem'
                }}>
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                        <div style={{ flex: 1 }}>
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                <Tag color="var(--accent)" /> Why Our Collection Stands Out
                            </h3>
                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                                {features.map((feature, idx) => (
                                    <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-dark)' }}>
                                        <CheckCircle2 size={16} color="var(--primary)" /> {feature}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <a href="#enquiry" className="btn btn-primary">Request Catalog</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Collections;
