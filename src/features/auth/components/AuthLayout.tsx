import React from 'react';

interface AuthLayoutProps {
    children: React.ReactNode;
}

export function AuthLayout({ children }: AuthLayoutProps) {
    return (
        <div className="min-h-screen relative overflow-hidden bg-[#111816] font-sans">
            {/* Background Gradients */}
            <div className="absolute top-[0%] right-[0%] w-[1000px] h-[800px] bg-[#0A3A31] opacity-50 blur-[150px] mix-blend-screen pointer-events-none transform translate-x-1/4 -translate-y-1/3 rounded-full" />
            <div className="absolute bottom-[-20%] right-[-10%] w-[1200px] h-[800px] bg-gradient-to-r from-[#FF512F] to-[#F09819] opacity-40 blur-[150px] mix-blend-screen pointer-events-none rounded-full" />
            <div className="absolute bottom-[-10%] left-[10%] w-[800px] h-[600px] bg-[#FF4500] opacity-20 blur-[160px] mix-blend-screen pointer-events-none rounded-full" />

            <div className="relative z-10 min-h-screen grid lg:grid-cols-2 max-w-[1500px] mx-auto">
                {/* Left Panel */}
                <div className="hidden lg:flex flex-col justify-between p-12 lg:px-20 lg:py-16 text-white min-h-screen">
                    {/* Logo */}
                    <div className="flex items-center gap-2 mb-20">
                        <div className="w-8 h-8 rounded-full bg-[#0CC8A8] flex items-center justify-center">
                            <div className="w-2.5 h-2.5 rounded-full bg-white" />
                        </div>
                        <span className="text-xl font-bold tracking-wide">aps</span>
                    </div>

                    <div className="max-w-xl pb-20">
                        <h1 className="text-4xl lg:text-[52px] font-bold tracking-tight mb-8 leading-[1.1]">
                            Expert level Cybersecurity<br />
                            in <span className="text-[#0CC8A8]">hours</span> not weeks.
                        </h1>

                        <h3 className="text-lg font-bold mb-6">What's included</h3>

                        <ul className="space-y-6">
                            {[
                                'Effortlessly spider and map targets to uncover hidden security flaws',
                                'Deliver high-quality, validated findings in hours, not weeks.',
                                'Generate professional, enterprise-grade security reports automatically.'
                            ].map((feature, i) => (
                                <li key={i} className="flex items-start gap-4 text-white text-[15px] font-medium leading-[1.6]">
                                    <svg className="w-5 h-5 text-[#0CC8A8] shrink-0 mt-[2px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span>{feature}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="mt-auto">
                        <div className="flex items-center gap-1.5 mb-2">
                            <svg className="w-[22px] h-[22px] text-[#00b67a]" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                            </svg>
                            <span className="font-bold text-[17px]">Trustpilot</span>
                        </div>
                        <div className="text-white text-[15px] flex items-center gap-1.5">
                            <span className="font-bold">Rated 4.5/5.0</span> <span className="text-white/60 font-medium text-sm">(100k+ reviews)</span>
                        </div>
                    </div>
                </div>

                {/* Right Panel */}
                <div className="flex flex-col items-center justify-center p-6 sm:p-12 w-full lg:px-20">
                    <div className="w-full max-w-[460px] flex justify-center lg:justify-end">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
}
