import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';

const MobileActions = () => {
    return (
        <div style={{
            position: 'fixed',
            bottom: 0,
            left: 0,
            right: 0,
            display: 'flex',
            zIndex: 9999,
            boxShadow: '0 -2px 10px rgba(0,0,0,0.1)',
            '@media (minWidth: 768px)': { display: 'none' } // Usually handled via css class
        }} className="mobile-only">
            <a
                href="tel:+917338847878"
                style={{
                    flex: 1,
                    backgroundColor: 'var(--primary)',
                    color: 'white',
                    padding: '1rem',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: '0.5rem',
                    fontWeight: 'bold',
                    fontSize: '1.1rem'
                }}
            >
                <Phone size={20} /> Call Now
            </a>
            <a
                href="https://wa.me/917338847878?text=Hello%20MAK%20Fashion,%20I%20would%20like%20to%20know%20more%20about%20your%20nighty%20collection."
                target="_blank"
                rel="noopener noreferrer"
                style={{
                    flex: 1,
                    backgroundColor: '#25D366', // WhatsApp Green
                    color: 'white',
                    padding: '1rem',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: '0.5rem',
                    fontWeight: 'bold',
                    fontSize: '1.1rem'
                }}
            >
                <MessageCircle size={20} /> WhatsApp
            </a>
        </div>
    );
};

export default MobileActions;
