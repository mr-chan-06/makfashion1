import React, { useState } from 'react';
import { Phone, Send } from 'lucide-react';

const Enquiry = () => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        businessName: '',
        reqType: 'Retail',
        quantity: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Simulate form submission
        alert("Thank you for your enquiry. We will contact you soon!");
        setFormData({
            name: '',
            phone: '',
            businessName: '',
            reqType: 'Retail',
            quantity: '',
            message: ''
        });
    };

    return (
        <section id="enquiry" style={{ backgroundColor: 'var(--bg-white)', padding: '5rem 0' }}>
            <div className="container">
                <div style={{
                    backgroundColor: 'white',
                    borderRadius: '16px',
                    boxShadow: 'var(--shadow-lg)',
                    overflow: 'hidden',
                    display: 'flex',
                    flexDirection: 'column',
                    border: '1px solid var(--border)'
                }} className="md:flex-row">

                    {/* Left Side: Info */}
                    <div style={{
                        flex: 1,
                        backgroundColor: 'var(--primary)',
                        color: 'white',
                        padding: '3rem 2rem',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center'
                    }}>
                        <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem', fontFamily: 'var(--font-heading)', color: 'white' }}>Wholesale Enquiry</h2>
                        <p style={{ fontSize: '1.1rem', marginBottom: '2rem', opacity: 0.9, lineHeight: 1.6 }}>
                            Looking for bulk orders or wholesale pricing? Fill out the form, and our dedicated team will get back to you with the best prices.
                        </p>

                        <div style={{ marginTop: 'auto', padding: '1.5rem', backgroundColor: 'rgba(0,0,0,0.2)', borderRadius: '8px' }}>
                            <p style={{ marginBottom: '0.5rem', fontWeight: 600 }}>Prefer direct call?</p>
                            <a href="tel:+917338847878" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '1.25rem', fontWeight: 'bold' }}>
                                <Phone size={24} /> +91 7338847878
                            </a>
                        </div>
                    </div>

                    {/* Right Side: Form */}
                    <div style={{ flex: 1.5, padding: '3rem 2rem', backgroundColor: 'var(--bg-offwhite)' }}>
                        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="flex flex-col gap-1">
                                <label style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--text-dark)' }}>Name *</label>
                                <input required type="text" name="name" value={formData.name} onChange={handleChange} style={{ padding: '0.8rem', borderRadius: '4px', border: '1px solid var(--border)', fontFamily: 'inherit' }} />
                            </div>
                            <div className="flex flex-col gap-1">
                                <label style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--text-dark)' }}>Phone Number *</label>
                                <input required type="tel" name="phone" value={formData.phone} onChange={handleChange} style={{ padding: '0.8rem', borderRadius: '4px', border: '1px solid var(--border)', fontFamily: 'inherit' }} />
                            </div>
                            <div className="flex flex-col gap-1">
                                <label style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--text-dark)' }}>Business Name (Optional)</label>
                                <input type="text" name="businessName" value={formData.businessName} onChange={handleChange} style={{ padding: '0.8rem', borderRadius: '4px', border: '1px solid var(--border)', fontFamily: 'inherit' }} />
                            </div>
                            <div className="flex flex-col gap-1">
                                <label style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--text-dark)' }}>Requirement Type *</label>
                                <select name="reqType" value={formData.reqType} onChange={handleChange} style={{ padding: '0.8rem', borderRadius: '4px', border: '1px solid var(--border)', fontFamily: 'inherit', backgroundColor: 'white' }}>
                                    <option value="Retail">Retail (Personal Use)</option>
                                    <option value="Wholesale">Wholesale (Bulk for Resale)</option>
                                </select>
                            </div>
                            <div className="flex flex-col gap-1 md:col-span-2">
                                <label style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--text-dark)' }}>Quantity Needed *</label>
                                <input required type="text" name="quantity" value={formData.quantity} onChange={handleChange} placeholder="e.g., 50 pieces, 10 sets" style={{ padding: '0.8rem', borderRadius: '4px', border: '1px solid var(--border)', fontFamily: 'inherit' }} />
                            </div>
                            <div className="flex flex-col gap-1 md:col-span-2">
                                <label style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--text-dark)' }}>Message (Optional)</label>
                                <textarea name="message" value={formData.message} onChange={handleChange} rows="3" style={{ padding: '0.8rem', borderRadius: '4px', border: '1px solid var(--border)', fontFamily: 'inherit', resize: 'vertical' }}></textarea>
                            </div>

                            <div className="md:col-span-2 mt-2">
                                <button type="submit" className="btn btn-primary w-full" style={{ padding: '1rem', fontSize: '1.1rem' }}>
                                    <Send size={18} /> Get Wholesale Price Details
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Enquiry;
