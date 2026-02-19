import React, { useEffect, useState } from 'react';
import ShareDetails from './ShareDetails';
import styles from "./blogstyles.module.css"

const Content = ({ slug, date, content, isGated = false, preview = "" }) => {
    const [email, setEmail] = useState('');
    const [otp, setOtp] = useState('');
    const [sending, setSending] = useState(false);
    const [verifying, setVerifying] = useState(false);
    const [message, setMessage] = useState('');
    const [fullContent, setFullContent] = useState(content || '');
    const [checkingAccess, setCheckingAccess] = useState(false);

    useEffect(() => {
        let cancelled = false;
        const checkAccess = async () => {
            if (!isGated || fullContent) return;
            setCheckingAccess(true);
            try {
                const res = await fetch(`/api/blogs/secure?slug=${encodeURIComponent(slug)}`);
                if (res.ok) {
                    const data = await res.json();
                    if (!cancelled && data?.content) {
                        setFullContent(data.content);
                    }
                }
            } catch {
                // ignore and keep gated preview
            } finally {
                if (!cancelled) setCheckingAccess(false);
            }
        };
        checkAccess();
        return () => {
            cancelled = true;
        };
    }, [isGated, fullContent, slug]);

    const handleSendOtp = async () => {
        if (!email) {
            setMessage('Please enter your email.');
            return;
        }
        setMessage('');
        setSending(true);
        try {
            const res = await fetch('/api/otp/request', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, slug }),
            });
            if (!res.ok) {
                const data = await res.json().catch(() => ({}));
                throw new Error(data.error || 'Failed to send OTP');
            }
            setMessage('OTP sent. Check your inbox.');
        } catch (err) {
            setMessage(err.message || 'Failed to send OTP');
        } finally {
            setSending(false);
        }
    };

    const handleVerifyOtp = async () => {
        if (!email || !otp) {
            setMessage('Please enter both email and OTP.');
            return;
        }
        setMessage('');
        setVerifying(true);
        try {
            const res = await fetch('/api/otp/verify', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, slug, otp }),
            });
            if (!res.ok) {
                const data = await res.json().catch(() => ({}));
                throw new Error(data.error || 'OTP verification failed');
            }
            const contentRes = await fetch(`/api/blogs/secure?slug=${encodeURIComponent(slug)}`);
            if (!contentRes.ok) {
                throw new Error('Unable to unlock content');
            }
            const data = await contentRes.json();
            setFullContent(data.content || '');
            setMessage('Access granted.');
        } catch (err) {
            setMessage(err.message || 'OTP verification failed');
        } finally {
            setVerifying(false);
        }
    };

    return (
        <>
            <section className='h-full w-screen py-[5vw]' id='blog-detail'>
                <div className='container-lg w-full h-full flex items-start justify-between mobile:flex-col tablet:flex-col'>
                    <ShareDetails slug={slug} date={date} />
                    <div className='w-[65%] h-full space-y-[1.5vw] mobile:w-full mobile:mt-[4vw] mobile:space-y-[4vw] tablet:w-full'>
                        {isGated && !fullContent ? (
                            <div className={`${styles.blogContent}`}>
                                <p>{preview}</p>
                                <div className="mt-[3vw] p-[2vw] border border-black/10 rounded-[1vw] bg-white/70 mobile:mt-[8vw] mobile:p-[5vw] mobile:rounded-[4vw]">
                                    <h3 className="text-[1.6vw] font-semibold mobile:text-[5vw]">Unlock the full article</h3>
                                    <p className="mt-[0.5vw] text-black/70 mobile:mt-[2vw]">
                                        Enter your email to receive an OTP and continue reading.
                                    </p>
                                    {checkingAccess ? (
                                        <p className="mt-[0.8vw] text-[0.95vw] text-black/60 mobile:mt-[3vw] mobile:text-[3.4vw]">
                                            Checking access…
                                        </p>
                                    ) : null}
                                    <form
                                        className="mt-[1.5vw] flex gap-[1vw] items-end mobile:mt-[4vw] mobile:flex-col mobile:items-stretch"
                                        onSubmit={(e) => e.preventDefault()}
                                    >
                                        <label className="flex-1">
                                            <span className="block text-[0.9vw] text-black/60 mobile:text-[3.4vw]">Email</span>
                                            <input
                                                type="email"
                                                name="email"
                                                className="mt-[0.6vw] w-full border border-black/20 rounded-[0.6vw] px-[1vw] py-[0.8vw] mobile:mt-[2vw] mobile:rounded-[3vw] mobile:px-[4vw] mobile:py-[3.2vw]"
                                                placeholder="you@company.com"
                                                required
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                            />
                                        </label>
                                        <button
                                            type="button"
                                            onClick={handleSendOtp}
                                            className={`px-[1.6vw] py-[0.9vw] rounded-[0.6vw] bg-black text-white mobile:rounded-[3vw] mobile:px-[4vw] mobile:py-[3.2vw] ${sending ? 'opacity-60 pointer-events-none' : ''}`}
                                        >
                                            {sending ? 'Sending…' : 'Send OTP'}
                                        </button>
                                    </form>
                                    <form
                                        className="mt-[1.2vw] flex gap-[1vw] items-end mobile:mt-[4vw] mobile:flex-col mobile:items-stretch"
                                        onSubmit={(e) => e.preventDefault()}
                                    >
                                        <label className="flex-1">
                                            <span className="block text-[0.9vw] text-black/60 mobile:text-[3.4vw]">OTP</span>
                                            <input
                                                type="text"
                                                name="otp"
                                                inputMode="numeric"
                                                className="mt-[0.6vw] w-full border border-black/20 rounded-[0.6vw] px-[1vw] py-[0.8vw] mobile:mt-[2vw] mobile:rounded-[3vw] mobile:px-[4vw] mobile:py-[3.2vw]"
                                                placeholder="123456"
                                                value={otp}
                                                onChange={(e) => setOtp(e.target.value)}
                                            />
                                        </label>
                                        <button
                                            type="button"
                                            onClick={handleVerifyOtp}
                                            className={`px-[1.6vw] py-[0.9vw] rounded-[0.6vw] bg-black text-white mobile:rounded-[3vw] mobile:px-[4vw] mobile:py-[3.2vw] ${verifying ? 'opacity-60 pointer-events-none' : ''}`}
                                        >
                                            {verifying ? 'Verifying…' : 'Verify'}
                                        </button>
                                    </form>
                                    {message ? (
                                        <p className="mt-[1vw] text-[0.95vw] text-black/70 mobile:mt-[3vw] mobile:text-[3.4vw]">
                                            {message}
                                        </p>
                                    ) : null}
                                </div>
                            </div>
                        ) : (
                            <div
                                className={`${styles.blogContent}`}
                                dangerouslySetInnerHTML={{ __html: fullContent || content }}
                            />
                        )}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Content;
