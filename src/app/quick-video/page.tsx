'use client';
import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { siteConfig } from '@/config/site-config';
import Link from 'next/link';

function QuickVideoContent() {
    const { brandColors } = siteConfig;
    const searchParams = useSearchParams();
    const email = searchParams.get('email');
    const emailParam = email ? `?email=${encodeURIComponent(email)}` : '';

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
            <div style={{ maxWidth: '800px', width: '100%', textAlign: 'center' }}>
                <div style={{ marginBottom: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}>
                    <svg width="48" height="48" viewBox="0 0 36 36" fill="none">
                        <polygon points="20,2 10,18 17,18 14,34 26,16 19,16" fill="#FFD700" stroke="#CC0000" strokeWidth="1.5" />
                    </svg>
                    <div style={{ textAlign: 'left', lineHeight: '1' }}>
                        <div style={{ fontSize: '24px', fontWeight: '900', color: '#CC0000' }}>AMPED</div>
                        <div style={{ fontSize: '10px', fontWeight: '700', color: '#0D0D0D', letterSpacing: '0.2em' }}>ELECTRIC, LLC</div>
                    </div>
                </div>

                {/* Loom Video Placeholder */}
                <div style={{
                    position: 'relative',
                    paddingBottom: '56.25%',
                    height: 0,
                    borderRadius: '24px',
                    overflow: 'hidden',
                    boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
                    marginBottom: '60px',
                    backgroundColor: '#f1f5f9'
                }}>
                    <iframe
                        src="https://www.loom.com/embed/a5189b6855d94053ac57ce296f42a514"
                        frameBorder="0"
                        webkitallowfullscreen="true"
                        mozallowfullscreen="true"
                        allowFullScreen
                        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                    ></iframe>
                </div>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center' }}>
                    <Link href={`/yes-build${emailParam}`} style={{ textDecoration: 'none' }}>
                        <button style={{
                            backgroundColor: '#CC0000',
                            color: '#fff',
                            padding: '20px 40px',
                            borderRadius: '16px',
                            border: 'none',
                            fontSize: '1.2rem',
                            fontWeight: '700',
                            cursor: 'pointer',
                            transition: 'transform 0.2s ease',
                            boxShadow: `0 10px 20px rgba(204, 0, 0, 0.2)`
                        }}>
                            YES — Finish & Put It Live
                        </button>
                    </Link>

                    <Link href={`/not-interested${emailParam}`} style={{ textDecoration: 'none' }}>
                        <button style={{
                            backgroundColor: '#f1f5f9',
                            color: '#333',
                            padding: '20px 40px',
                            borderRadius: '16px',
                            border: 'none',
                            fontSize: '1.2rem',
                            fontWeight: '700',
                            cursor: 'pointer',
                            opacity: 0.8
                        }}>
                            NO — Not Interested
                        </button>
                    </Link>
                </div>
            </div>

            <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700;900&display=swap" rel="stylesheet" />
        </main>
    );
}

export default function QuickVideo() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <QuickVideoContent />
        </Suspense>
    );
}
