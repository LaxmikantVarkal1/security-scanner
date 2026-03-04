import React, { useState } from 'react';
import { Eye } from 'lucide-react';

const AppleIcon = () => (
    <svg className="w-[18px] h-[18px]" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm3.264 12.72c-.852 1.314-1.854 2.45-3.264 2.45-1.396 0-2.398-1.12-3.252-2.434-.84-1.296-1.506-3.102-.636-4.578.432-.732 1.104-1.236 1.848-1.548 1.128-.48 2.376-.084 3.12.372.636-.396 1.644-.924 2.856-.468.804.288 1.404.792 1.704 1.284-1.452.888-1.74 2.76-.36 3.828-.216.552-.528 1.116-.9 1.668-1.56 2.436-1.512 2.412-2.34 2.412-1.02 0-1.44-.66-2.52-.66-1.092 0-1.584.66-2.532.66-.888 0-1.38-1.176-2.088-2.244C5.076 11.2 5.58 8.164 7.584 6.844c1.008-.66 2.184-.816 3.108-.816 1.104 0 2.148.42 2.928.912.756-.492 1.848-.96 3.012-.96 1.08 0 2.22.288 3.108.972-1.548 1.2-1.872 3.12-.468 4.212-.276.744-.684 1.452-1.152 2.124-1.56 2.292-1.548 2.244-2.352 2.244h-.3c-.888 0-1.224-.516-2.28-.516-1.044 0-1.404.516-2.292.516-.864 0-1.392-.936-2.028-1.8" />
    </svg>
);

const GoogleIcon = () => (
    <svg className="w-5 h-5" viewBox="0 0 24 24">
        <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
        <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
        <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
        <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
    </svg>
);

const MetaIcon = () => (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="#ffffff">
        <path d="M12 2.04c-5.5 0-10 4.49-10 10.02 0 5 3.66 9.15 8.44 9.9v-7H7.9v-2.9h2.54V9.85c0-2.51 1.49-3.89 3.78-3.89 1.09 0 2.23.19 2.23.19v2.45h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.45 2.9h-2.33v7a10 10 0 0 0 8.44-9.9c0-5.53-4.5-10.02-10-10.02Z" />
    </svg>
);

export function SignupForm() {
    const [loading, setLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            window.location.href = '/dashboard';
        }, 800);
    };

    return (
        <div className="bg-white rounded-2xl md:rounded-[20px] p-8 md:p-10 shadow-2xl w-full text-zinc-900 mx-auto">
            <div className="text-center mb-8">
                <h2 className="text-[28px] font-bold text-zinc-900 mb-2">Sign up</h2>
                <p className="text-zinc-800 text-[14px] font-medium tracking-wide">
                    Already have an account? <a href="#" className="text-[#0CC8A8] hover:underline font-semibold ml-[3px]">Log in</a>
                </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-[18px]">
                <div className="grid gap-[14px]">
                    <input
                        id="firstName"
                        placeholder="First name*"
                        required
                        className="w-full h-11 px-4 border border-zinc-200 focus:border-[#0CC8A8] focus:ring-1 focus:ring-[#0CC8A8] focus:outline-none rounded-[10px] text-[14px] placeholder:text-zinc-500 bg-white shadow-sm"
                    />
                    <input
                        id="lastName"
                        placeholder="Last name*"
                        required
                        className="w-full h-11 px-4 border border-zinc-200 focus:border-[#0CC8A8] focus:ring-1 focus:ring-[#0CC8A8] focus:outline-none rounded-[10px] text-[14px] placeholder:text-zinc-500 bg-white shadow-sm"
                    />
                </div>

                <input
                    id="email"
                    type="email"
                    placeholder="Email address*"
                    required
                    className="w-full h-11 px-4 border border-zinc-200 focus:border-[#0CC8A8] focus:ring-1 focus:ring-[#0CC8A8] focus:outline-none rounded-[10px] text-[14px] placeholder:text-zinc-500 bg-white shadow-sm"
                />

                <div className="relative">
                    <input
                        id="password"
                        type={showPassword ? "text" : "password"}
                        placeholder="Password (8+ characters)*"
                        required
                        className="w-full h-11 px-4 border border-zinc-200 focus:border-[#0CC8A8] focus:ring-1 focus:ring-[#0CC8A8] focus:outline-none rounded-[10px] text-[14px] placeholder:text-zinc-500 bg-white shadow-sm pr-10"
                    />
                    <button
                        type="button"
                        className="absolute inset-y-0 right-0 pr-4 flex items-center text-zinc-600 hover:text-zinc-800 focus:outline-none"
                        onClick={() => setShowPassword(!showPassword)}
                    >
                        <Eye className="h-[18px] w-[18px]" strokeWidth={2.5} />
                    </button>
                </div>

                <div className="flex items-start gap-3 pt-1 pb-1">
                    <div className="flex items-center h-5 mt-0.5">
                        <input
                            id="terms"
                            type="checkbox"
                            required
                            className="w-[18px] h-[18px] rounded-[4px] border-zinc-300 text-[#0CC8A8] focus:ring-[#0CC8A8] bg-white cursor-pointer"
                        />
                    </div>
                    <label
                        htmlFor="terms"
                        className="text-[12px] text-zinc-900 leading-[18px] cursor-pointer font-medium tracking-wide"
                    >
                        I agree to Aps's <a href="#" className="font-bold text-[#0066FF] hover:underline">Terms & Conditions</a> and acknowledge
                        the <a href="#" className="font-bold text-[#0066FF] hover:underline">Privacy Policy</a>
                    </label>
                </div>

                <button
                    type="submit"
                    disabled={loading}
                    className="w-full h-[46px] text-[15px] font-semibold mt-6 rounded-[24px] bg-[#0CC8A8] hover:bg-[#0BA68B] text-white transition-colors"
                >
                    {loading ? 'Creating account...' : 'Create account'}
                </button>
            </form>

            <div className="grid grid-cols-3 gap-3 mt-4">
                <button type="button" className="h-[46px] rounded-[24px] bg-black hover:bg-black/90 flex items-center justify-center text-white transition-colors">
                    <AppleIcon />
                </button>
                <button type="button" className="h-[46px] rounded-[24px] bg-[#FEF6F3] hover:bg-[#f6eae5] flex items-center justify-center transition-colors">
                    <GoogleIcon />
                </button>
                <button type="button" className="h-[46px] rounded-[24px] bg-[#4169E1] hover:bg-[#345bcc] flex items-center justify-center text-white transition-colors">
                    <MetaIcon />
                </button>
            </div>
        </div>
    );
}
