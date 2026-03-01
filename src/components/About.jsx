import React from 'react';

const About = () => {
    return (
        <section id="about" style={{ backgroundColor: 'var(--rose)', padding: '6rem 0' }}>
            <div className="container">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <div style={{ borderRadius: '16px', overflow: 'hidden', boxShadow: 'var(--shadow-lg)' }}>
                        <img
                            src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80"
                            alt="Nighty shop in T. Nagar"
                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        />
                    </div>
                    <div style={{ padding: '2rem' }}>
                        <span style={{ color: 'var(--primary)', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.9rem' }}>
                            About Us
                        </span>
                        <h2 style={{ fontSize: '2.5rem', color: 'var(--primary)', marginTop: '0.5rem', marginBottom: '1.5rem', fontFamily: 'var(--font-heading)', lineHeight: '1.2' }}>
                            Serving Chennai’s Nighty Market with Quality & Trust
                        </h2>
                        <p style={{ fontSize: '1.1rem', color: 'var(--text-dark)', marginBottom: '1.5rem', lineHeight: '1.8' }}>
                            MAK Fashion is a trusted <strong>women’s nighty wholesale and retail store</strong> located in the heart of T. Nagar, Chennai. We offer a wide collection of stylish, comfortable, and affordable nighties suitable for daily wear and bulk purchases.
                        </p>
                        <p style={{ fontSize: '1.1rem', color: 'var(--text-dark)', marginBottom: '2rem', lineHeight: '1.8' }}>
                            As a leading <strong>nighty wholesale in Chennai</strong>, we pride ourselves on delivering standard quality fabrics that our customers have come to love. Whether you are looking for a single piece or looking to stock your own store, our <strong>nighty shop in T. Nagar</strong> is your ultimate destination for the best <strong>women’s nightwear collection</strong>.
                        </p>
                        <div style={{ display: 'flex', gap: '1rem' }}>
                            <div style={{ textAlign: 'center', padding: '1rem', backgroundColor: 'rgba(255,255,255,0.5)', borderRadius: '8px', flex: 1 }}>
                                <div style={{ fontSize: '2rem', fontWeight: 'bold', color: 'var(--primary)' }}>5000+</div>
                                <div style={{ fontSize: '0.9rem', color: 'var(--text-dark)' }}>Happy Customers</div>
                            </div>
                            <div style={{ textAlign: 'center', padding: '1rem', backgroundColor: 'rgba(255,255,255,0.5)', borderRadius: '8px', flex: 1 }}>
                                <div style={{ fontSize: '2rem', fontWeight: 'bold', color: 'var(--primary)' }}>1000+</div>
                                <div style={{ fontSize: '0.9rem', color: 'var(--text-dark)' }}>Designs Available</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
