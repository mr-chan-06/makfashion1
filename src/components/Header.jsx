import React, { useState } from 'react';
import { Phone, Menu, X } from 'lucide-react';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="header" style={{
            position: 'sticky',
            top: 0,
            backgroundColor: 'var(--bg-white)',
            boxShadow: 'var(--shadow-sm)',
            zIndex: 1000,
            padding: '1rem 0'
        }}>
            <div className="container flex justify-between items-center">
                {/* Logo */}
                <div className="flex flex-col">
                    <span style={{ fontFamily: 'var(--font-heading)', fontSize: '1.5rem', fontWeight: 700, color: 'var(--primary)', lineHeight: 1 }}>
                        MAK FASHION
                    </span>
                </div>

                {/* Desktop Nav */}
                <nav className="desktop-nav" style={{ display: 'none' }}>
                    {/* We will add a media query for desktop nav style later in css, for now inline */}
                    <ul className="flex gap-4 items-center">
                        <li><a href="#home" className="nav-link">Home</a></li>
                        <li><a href="#collections" className="nav-link">Collections</a></li>
                        <li><a href="#about" className="nav-link">About</a></li>
                        <li><a href="#contact" className="nav-link">Contact</a></li>
                    </ul>
                </nav>

                {/* Actions */}
                <div className="flex items-center gap-2">
                    <a href="tel:+917338847878" className="btn btn-primary" style={{ display: 'none', '@media (minWidth: 768px)': { display: 'inline-flex' } }}>
                        <Phone size={18} /> Call Now
                    </a>

                    {/* Mobile Menu Toggle */}
                    <button
                        className="mobile-menu-btn"
                        style={{ '@media (minWidth: 768px)': { display: 'none' } }}
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? <X size={24} color="var(--primary)" /> : <Menu size={24} color="var(--primary)" />}
                    </button>
                </div>
            </div>

            {/* Mobile Nav */}
            {isMenuOpen && (
                <div style={{
                    position: 'absolute',
                    top: '100%',
                    left: 0,
                    right: 0,
                    backgroundColor: 'var(--bg-white)',
                    padding: '1rem',
                    boxShadow: 'var(--shadow-md)',
                    borderTop: '1px solid var(--border)'
                }}>
                    <ul className="flex flex-col gap-2">
                        <li><a href="#home" className="nav-link block p-4" onClick={() => setIsMenuOpen(false)}>Home</a></li>
                        <li><a href="#collections" className="nav-link block p-4" onClick={() => setIsMenuOpen(false)}>Collections</a></li>
                        <li><a href="#about" className="nav-link block p-4" onClick={() => setIsMenuOpen(false)}>About</a></li>
                        <li><a href="#contact" className="nav-link block p-4" onClick={() => setIsMenuOpen(false)}>Contact</a></li>
                    </ul>
                </div>
            )}
        </header>
    );
};

export default Header;
