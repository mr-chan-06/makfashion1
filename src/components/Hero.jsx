import React from 'react';
import { Phone, FileText, MapPin } from 'lucide-react';

const Hero = () => {
    return (
        <section id="home" style={{
            minHeight: '80vh',
            display: 'flex',
            alignItems: 'center',
            backgroundColor: 'var(--rose)',
            backgroundImage: 'linear-gradient(rgba(232, 180, 184, 0.9), rgba(245, 241, 237, 0.9)), url("https://images.unsplash.com/photo-1583316174775-bd6dc0e9f298?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            position: 'relative'
        }}>
            <div className="container" style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
                <span style={{
                    display: 'inline-block',
                    padding: '0.4rem 1rem',
                    backgroundColor: 'var(--accent)',
                    color: 'white',
                    borderRadius: '20px',
                    fontWeight: 600,
                    fontSize: '0.9rem',
                    marginBottom: '1.5rem',
                    textTransform: 'uppercase',
                    letterSpacing: '1px'
                }} className="animate-fade-in">
                    ★ Top Rated in T. Nagar ★
                </span>

                <h1 className="animate-fade-in" style={{
                    fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                    color: 'var(--primary)',
                    marginBottom: '1.5rem',
                    textShadow: '2px 2px 4px rgba(255,255,255,0.5)'
                }}>
                    Chennai’s Trusted Nighty<br />Wholesale
                </h1>

                <p className="section-subtitle animate-fade-in" style={{
                    animationDelay: '0.2s',
                    color: 'var(--text-dark)',
                    fontSize: '1.2rem',
                    fontWeight: 500
                }}>
                    Affordable • Quality • Wide Variety • A to Z Nighty Collection
                </p>

                <div className="flex flex-col md:flex-row gap-2 justify-center mt-4 animate-fade-in" style={{ animationDelay: '0.4s' }}>
                    <a href="tel:+917338847878" className="btn btn-primary" style={{ padding: '1rem 2rem', fontSize: '1.1rem' }}>
                        <Phone size={20} /> Call Now
                    </a>
                    <a href="#enquiry" className="btn btn-secondary" style={{ backgroundColor: 'white' }}>
                        <FileText size={20} /> Enquire Now
                    </a>
                    <a href="https://maps.google.com/?q=MAK+FASHION+Ranganathan+St+T+Nagar" target="_blank" rel="noopener noreferrer" className="btn btn-secondary" style={{ backgroundColor: 'white' }}>
                        <MapPin size={20} /> Get Directions
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Hero;
