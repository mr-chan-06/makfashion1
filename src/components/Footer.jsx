import React from 'react';
import { MapPin, Phone, Clock, Mail } from 'lucide-react';

const Footer = () => {
    return (
        <footer id="contact" style={{ backgroundColor: 'var(--text-dark)', color: 'white', paddingTop: '4rem' }}>
            <div className="container">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">

                    {/* Brand Info */}
                    <div>
                        <div className="logo mb-4" style={{ display: 'flex', flexDirection: 'column' }}>
                            <span style={{ fontFamily: 'var(--font-heading)', fontSize: '1.8rem', fontWeight: 700, color: 'var(--rose)', lineHeight: 1 }}>
                                MAK FASHION
                            </span>
                        </div>
                        <p style={{ color: '#ccc', marginBottom: '1.5rem', lineHeight: 1.6 }}>
                            Chennai's premier destination for high-quality, affordable women's nightwear. Available for retail and wholesale.
                        </p>
                        <div style={{ display: 'flex', gap: '1rem' }}>
                            <a href="tel:+917338847878" className="btn btn-primary" style={{ padding: '0.6rem 1rem' }}>Call Now</a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 style={{ fontSize: '1.3rem', marginBottom: '1.5rem', color: 'white', fontFamily: 'var(--font-heading)' }}>Quick Links</h3>
                        <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                            <li><a href="#home" style={{ color: '#ccc', transition: 'color 0.3s ease' }} className="hover:text-white">Home</a></li>
                            <li><a href="#collections" style={{ color: '#ccc', transition: 'color 0.3s ease' }} className="hover:text-white">Our Collections</a></li>
                            <li><a href="#about" style={{ color: '#ccc', transition: 'color 0.3s ease' }} className="hover:text-white">About Us</a></li>
                            <li><a href="#enquiry" style={{ color: '#ccc', transition: 'color 0.3s ease' }} className="hover:text-white">Wholesale Enquiry</a></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 style={{ fontSize: '1.3rem', marginBottom: '1.5rem', color: 'white', fontFamily: 'var(--font-heading)' }}>Contact Us</h3>
                        <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            <li style={{ display: 'flex', gap: '1rem', color: '#ccc', alignItems: 'flex-start' }}>
                                <MapPin size={20} color="var(--rose)" style={{ flexShrink: 0, marginTop: '4px' }} />
                                <span>MAK FASHION<br />No.37, Ranganathan St<br />Postal Colony, T. Nagar<br />Chennai – 600017</span>
                            </li>
                            <li style={{ display: 'flex', gap: '1rem', color: '#ccc', alignItems: 'center' }}>
                                <Phone size={20} color="var(--rose)" />
                                <a href="tel:+917338847878" style={{ fontWeight: 600, color: 'white' }}>+91 7338847878</a>
                            </li>
                            <li style={{ display: 'flex', gap: '1rem', color: '#ccc', alignItems: 'center' }}>
                                <Clock size={20} color="var(--rose)" />
                                <span>Open · Closes 9 PM</span>
                            </li>
                        </ul>

                        <div className="mt-4">
                            <a href="https://maps.google.com/?q=MAK+FASHION+No.37+Ranganathan+St+Postal+Colony+T+Nagar+Chennai+600017" target="_blank" rel="noopener noreferrer" className="btn btn-secondary w-full" style={{ borderColor: 'var(--rose)', color: 'var(--rose)' }}>
                                Get Directions
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Map Embed (Simple iframe) */}
            <div style={{ width: '100%', height: '300px', backgroundColor: '#e5e3df' }}>
                <iframe
                    title="MAK Fashion Location"
                    width="100%"
                    height="100%"
                    frameBorder="0"
                    scrolling="no"
                    marginHeight="0"
                    marginWidth="0"
                    src="https://maps.google.com/maps?width=100%25&amp;height=300&amp;hl=en&amp;q=MAK%20FASHION,No.37,%20Ranganathan%20St,%20Postal%20Colony,%20T.%20Nagar,%20Chennai%20%E2%80%93%20600017+(MAK%20FASHION)&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
                </iframe>
            </div>

            {/* Bottom Bar */}
            <div style={{ backgroundColor: '#1a1a1a', padding: '1.5rem 0', textAlign: 'center' }}>
                <p style={{ color: '#888', fontSize: '0.9rem' }}>
                    &copy; {new Date().getFullYear()} MAK FASHION. All rights reserved. Designed for Wholesale & Retail in Chennai.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
