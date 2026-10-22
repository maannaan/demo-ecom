import React, { useState } from 'react';
import { Mail, ArrowRight, CheckCircle2, AlertCircle, ShieldAlert } from 'lucide-react';

export const NewsletterSection: React.FC = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const validateEmail = (val: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!email.trim()) {
      setStatus('error');
      setErrorMessage('Please enter an email address.');
      return;
    }

    if (!validateEmail(email.trim())) {
      setStatus('error');
      setErrorMessage('Please enter a valid email format (e.g. name@domain.com).');
      return;
    }

    setStatus('loading');
    setErrorMessage('');

    // Simulate demo asynchronous subscription request
    setTimeout(() => {
      setStatus('success');
    }, 800);
  };

  const handleReset = () => {
    setEmail('');
    setStatus('idle');
    setErrorMessage('');
  };

  return (
    <section id="newsletter" className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-[#08080a] border-t border-white/5">
      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/70 text-xs font-mono-tech mb-6">
          <Mail size={12} className="text-[#d4ff00]" />
          <span className="uppercase tracking-wider">SECURE TELEMETRY // DISPATCH</span>
        </div>

        {/* Heading */}
        <h2 className="text-4xl sm:text-5xl font-black font-editorial tracking-tight text-white uppercase mb-4">
          ACCESS THE UNSEEN.
        </h2>

        <p className="text-sm sm:text-base text-white/60 max-w-xl mx-auto leading-relaxed mb-8">
          Early notifications for Drop 002 prototypes, secret capsule releases, and architectural essays delivered straight to your terminal.
        </p>

        {/* Form Container */}
        {status === 'success' ? (
          <div className="p-8 rounded-2xl bg-[#111116] border border-[#d4ff00]/40 max-w-lg mx-auto animate-in zoom-in-95 duration-300">
            <CheckCircle2 size={36} className="text-[#d4ff00] mx-auto mb-3" />
            <h3 className="text-lg font-bold font-editorial text-white mb-1">
              DEMO ACCESS GRANTED
            </h3>
            <p className="text-xs font-mono-tech text-white/70 mb-4 leading-relaxed">
              Simulation verified for <strong className="text-white">{email}</strong>. In production this would trigger a double opt-in confirmation dispatch.
            </p>
            <button
              onClick={handleReset}
              className="px-4 py-2 text-xs font-mono-tech uppercase tracking-wider text-black bg-[#d4ff00] rounded hover:bg-white transition font-semibold"
            >
              SIMULATE ANOTHER EMAIL
            </button>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            noValidate
            className="max-w-md mx-auto space-y-3"
          >
            <div className="relative flex items-center">
              <input
                type="email"
                value={email}
                onChange={e => {
                  setEmail(e.target.value);
                  if (status === 'error') setStatus('idle');
                }}
                placeholder="ENTER EMAIL FOR EARLY DROP ACCESS..."
                disabled={status === 'loading'}
                className="w-full px-5 py-4 pr-14 rounded-xl bg-[#121217] border border-white/15 focus:border-[#d4ff00] text-white placeholder-white/30 text-xs font-mono-tech tracking-wider outline-none transition duration-200"
                aria-label="Email address for dispatch"
              />
              <button
                type="submit"
                disabled={status === 'loading'}
                className="absolute right-2 p-2.5 rounded-lg bg-[#d4ff00] hover:bg-white text-black transition disabled:opacity-50"
                aria-label="Subscribe to dispatch"
              >
                {status === 'loading' ? (
                  <div className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin" />
                ) : (
                  <ArrowRight size={16} />
                )}
              </button>
            </div>

            {/* Error Message */}
            {status === 'error' && (
              <div className="flex items-center justify-center gap-1.5 text-xs font-mono-tech text-red-400">
                <AlertCircle size={13} />
                <span>{errorMessage}</span>
              </div>
            )}
          </form>
        )}

        {/* Honest Demo Disclaimer */}
        <div className="mt-8 pt-6 border-t border-white/5 flex items-center justify-center gap-2 text-[11px] font-mono-tech text-white/40 max-w-md mx-auto">
          <ShieldAlert size={13} className="text-[#d4ff00] shrink-0" />
          <span>
            DEMO SIGNUP: No remote database connected. Email is validated client-side only and never stored or transmitted.
          </span>
        </div>
      </div>
    </section>
  );
};
