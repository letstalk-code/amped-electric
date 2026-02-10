'use client';
import { useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { siteConfig } from '@/config/site-config';

function NotInterestedContent() {
    const searchParams = useSearchParams();
    const email = searchParams.get('email');

    useEffect(() => {
        if (email) {
            fetch('/api/submit-no', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email }),
            }).catch(err => console.error('Error reporting No:', err));
        }
    }, [email]);

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
                <h1 style={{ fontSize: '3.5rem', color: '#CC0000', marginBottom: '20px' }}>No problem at all.</h1>
                <p style={{ fontSize: '1.2rem', color: '#64748b' }}>If you ever change your mind, we're here to help you grow. Have a great day!</p>
            </div>

            <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700;900&display=swap" rel="stylesheet" />
        </main>
    );
}

export default function NotInterested() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <NotInterestedContent />
        </Suspense>
    );
}
