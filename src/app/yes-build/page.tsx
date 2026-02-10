'use client';
import { useState } from 'react';
import { siteConfig } from '@/config/site-config';

export default function YesBuild() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);

        const form = e.currentTarget;
        const data = {
            name: (form.elements.namedItem('name') as HTMLInputElement).value,
            email: (form.elements.namedItem('email') as HTMLInputElement).value,
            phone: (form.elements.namedItem('phone') as HTMLInputElement).value,
            businessName: (form.elements.namedItem('businessName') as HTMLInputElement).value,
        };

        try {
            const res = await fetch('/api/submit-yes', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            });

            if (res.ok) {
                setIsSuccess(true);
            } else {
                const errorData = await res.json();
                alert(`Submission Failed: ${errorData.error || 'Unknown error'}`);
            }
        } catch (err) {
            console.error(err);
            alert('Connection error. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    if (isSuccess) {
        return (
            <main style={{
                backgroundColor: '#fff',
                minHeight: '100vh',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '40px 20px',
                fontFamily: '"Inter", sans-serif'
            }}>
                <div style={{ maxWidth: '600px', width: '100%', textAlign: 'center' }}>
                    <div style={{ marginBottom: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}>
                        <svg width="48" height="48" viewBox="0 0 36 36" fill="none">
                            <polygon points="20,2 10,18 17,18 14,34 26,16 19,16" fill="#FFD700" stroke="#CC0000" strokeWidth="1.5" />
                        </svg>
                        <div style={{ textAlign: 'left', lineHeight: '1' }}>
                            <div style={{ fontSize: '24px', fontWeight: '900', color: '#CC0000' }}>AMPED</div>
                            <div style={{ fontSize: '10px', fontWeight: '700', color: '#0D0D0D', letterSpacing: '0.2em' }}>ELECTRIC, LLC</div>
                        </div>
                    </div>
                    <h1 style={{ fontSize: '3rem', color: '#CC0000' }}>Sounds good — <span style={{ color: '#0D0D0D' }}>I’ll take it from here.</span></h1>
                    <p style={{ fontSize: '1.2rem', color: '#64748b' }}>I’ll finish the website and put it live. I’ll follow up shortly once it’s set up 👍</p>
                </div>
            </main>
        );
    }

    return (
        <main style={{
            backgroundColor: '#fff',
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '40px 20px',
            fontFamily: '"Inter", sans-serif'
        }}>
            <div style={{ maxWidth: '600px', width: '100%', textAlign: 'center' }}>
                <div style={{ marginBottom: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}>
                    <svg width="48" height="48" viewBox="0 0 36 36" fill="none">
                        <polygon points="20,2 10,18 17,18 14,34 26,16 19,16" fill="#FFD700" stroke="#CC0000" strokeWidth="1.5" />
                    </svg>
                    <div style={{ textAlign: 'left', lineHeight: '1' }}>
                        <div style={{ fontSize: '24px', fontWeight: '900', color: '#CC0000' }}>AMPED</div>
                        <div style={{ fontSize: '10px', fontWeight: '700', color: '#0D0D0D', letterSpacing: '0.2em' }}>ELECTRIC, LLC</div>
                    </div>
                </div>

                <h1 style={{
                    fontSize: '3rem',
                    color: '#CC0000',
                    marginBottom: '20px',
                    lineHeight: '1.1'
                }}>
                    Sounds good — I’ll <span style={{ color: '#0D0D0D' }}>take it from here.</span>
                </h1>

                <p style={{
                    fontSize: '1.2rem',
                    color: '#64748b',
                    marginBottom: '40px',
                    lineHeight: '1.6'
                }}>
                    I’ll finish the website and put it live. There’s no upfront cost — just a small monthly to keep it running.
                </p>

                <form onSubmit={handleSubmit} style={{
                    backgroundColor: '#F8FAFC',
                    padding: '40px',
                    borderRadius: '24px',
                    textAlign: 'left',
                    boxShadow: '0 4px 20px rgba(0,0,0,0.03)',
                    border: '1px solid #f1f5f9'
                }}>
                    <div style={{ marginBottom: '20px' }}>
                        <label style={{ display: 'block', marginBottom: '8px', fontWeight: '700', color: '#333' }}>Full Name</label>
                        <input required name="name" type="text" placeholder="John Doe" style={{ width: '100%', padding: '15px', borderRadius: '12px', border: '1px solid #cbd5e1', fontSize: '1rem' }} />
                    </div>

                    <div style={{ marginBottom: '20px' }}>
                        <label style={{ display: 'block', marginBottom: '8px', fontWeight: '700', color: '#333' }}>Email Address</label>
                        <input required name="email" type="email" placeholder="john@example.com" style={{ width: '100%', padding: '15px', borderRadius: '12px', border: '1px solid #cbd5e1', fontSize: '1rem' }} />
                    </div>

                    <div style={{ marginBottom: '20px' }}>
                        <label style={{ display: 'block', marginBottom: '8px', fontWeight: '700', color: '#333' }}>Phone Number</label>
                        <input required name="phone" type="tel" placeholder="(555) 000-0000" style={{ width: '100%', padding: '15px', borderRadius: '12px', border: '1px solid #cbd5e1', fontSize: '1rem' }} />
                    </div>

                    <div style={{ marginBottom: '40px' }}>
                        <label style={{ display: 'block', marginBottom: '8px', fontWeight: '700', color: '#333' }}>Business Name</label>
                        <input required name="businessName" type="text" placeholder="Amped Electric" style={{ width: '100%', padding: '15px', borderRadius: '12px', border: '1px solid #cbd5e1', fontSize: '1rem' }} />
                    </div>

                    <button type="submit" disabled={isSubmitting} style={{
                        width: '100%',
                        backgroundColor: isSubmitting ? '#cbd5e1' : '#CC0000',
                        color: '#fff',
                        padding: '20px',
                        borderRadius: '16px',
                        border: 'none',
                        fontSize: '1.2rem',
                        fontWeight: '700',
                        cursor: isSubmitting ? 'not-allowed' : 'pointer',
                        boxShadow: isSubmitting ? 'none' : `0 10px 20px rgba(204, 0, 0, 0.2)`
                    }}>
                        {isSubmitting ? 'Sending...' : 'Start My Website'}
                    </button>
                </form>
            </div>

            <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700;900&display=swap" rel="stylesheet" />
        </main>
    );
}
