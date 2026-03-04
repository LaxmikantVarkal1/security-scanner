import React, { useState, useEffect, useRef } from 'react';
import {
    LayoutGrid,
    ClipboardList,
    FileSearch,
    Calendar,
    Bell,
    Settings,
    Info,
    ChevronRight,
    Menu,
    X,
    LogOut
} from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
// import { useTheme } from '@/context/ThemeContext';

const navItems = [
    { icon: LayoutGrid, label: 'Dashboard', path: '/dashboard' },
    { icon: ClipboardList, label: 'Projects', path: '#' },
    { icon: FileSearch, label: 'Scans', path: '/scan-detail', alert: true },
    { icon: Calendar, label: 'Schedule', path: '#' },
    { icon: 'spacer', label: '' },
    { icon: Bell, label: 'Notifications', path: '#', alert: true },
    { icon: Settings, label: 'Settings', path: '#' },
    { icon: Info, label: 'Support', path: '#' },
];

export function Sidebar() {
    const location = useLocation();
    const navigate = useNavigate();
    // const { theme, setTheme } = useTheme();
    const [isOpen, setIsOpen] = useState(false);
    const [isProfileOpen, setIsProfileOpen] = useState(false);
    const profileRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (profileRef.current && !profileRef.current.contains(event.target as Node)) {
                setIsProfileOpen(false);
            }
        }
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const handleLogout = () => {
        setIsProfileOpen(false);
        navigate('/login');
    };

    return (
        <>
            {/* Mobile Hamburger Button */}
            <div className="lg:hidden fixed top-0 left-0 h-16 w-16 flex items-center justify-center z-50">
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="p-2 rounded-md bg-white dark:bg-[#1A1A1A] border border-zinc-200 dark:border-zinc-800 shadow-sm"
                >
                    {isOpen ? <X className="w-5 h-5 text-zinc-900 dark:text-white" /> : <Menu className="w-5 h-5 text-zinc-900 dark:text-white" />}
                </button>
            </div>

            {/* Overlay for mobile */}
            {isOpen && (
                <div
                    className="lg:hidden fixed inset-0 bg-black/50 z-40"
                    onClick={() => setIsOpen(false)}
                />
            )}

            {/* Sidebar Content */}
            <aside className={`w-[240px] fixed inset-y-0 left-0 bg-white border-r border-zinc-200 flex flex-col z-50 transition-transform duration-300 dark:bg-[#0A0D14] dark:border-white/5 ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
                }`}>
                {/* Header Logo */}
                <div className="h-24 flex items-center px-6">
                    <div className="flex items-center gap-3">
                        <div className="w-[22px] h-[22px] rounded-full border-[3px] border-[#0CC8A8] flex items-center justify-center bg-transparent mt-0.5">
                            <div className="w-[5px] h-[5px] rounded-full bg-white" />
                        </div>
                        <span className="text-[22px] font-bold tracking-wide text-[#0CC8A8]">aps</span>
                    </div>
                </div>

                {/* Navigation */}
                <nav className="flex-1 px-4 py-4 space-y-1 overflow-y-auto">
                    {navItems.map((item, index) => {
                        if (item.icon === 'spacer') {
                            return <div key={index} className="h-6" />;
                        }

                        const Icon = item.icon as React.ElementType;
                        const isActive = location.pathname === item.path;

                        return (
                            <Link
                                key={index}
                                to={item.path!}
                                onClick={() => setIsOpen(false)}
                                className={`flex items-center gap-3 px-4 py-3 rounded-[16px] text-[14px] font-medium transition-colors ${isActive
                                    ? 'bg-[#E6F8F5] text-[#0CC8A8] dark:bg-[#0C2B27] dark:text-[#0CC8A8]'
                                    : 'text-zinc-600 hover:bg-zinc-100 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-800/50 dark:hover:text-zinc-200'
                                    }`}
                            >
                                <div className="relative flex items-center justify-center">
                                    <Icon className="w-[18px] h-[18px]" strokeWidth={2.2} />
                                    {item.alert && (
                                        <div className={`absolute -bottom-[1px] -left-[2px] w-[7px] h-[7px] bg-[#FF5722] rounded-full border-2 border-white dark:border-[#0A0D14] ${isActive ? 'dark:border-[#0C2B27]' : ''}`} />
                                    )}
                                </div>
                                <span className="tracking-wide">{item.label}</span>
                            </Link>
                        );
                    })}
                </nav>

                {/* User Profile Footer */}
                <div className="p-4 border-t border-zinc-200 dark:border-white/[0.05] flex flex-col gap-2 relative" ref={profileRef}>

                    {/* Profile Menu Popup */}
                    {isProfileOpen && (
                        <div className="absolute bottom-[calc(100%-8px)] left-4 right-4 bg-white dark:bg-[#1A1A1A] border border-zinc-200 dark:border-zinc-800 rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.08)] overflow-hidden py-1 z-50 animate-in fade-in slide-in-from-bottom-2 duration-200">
                            <button
                                className="w-full flex items-center gap-3 px-4 py-2.5 text-[13px] font-bold text-[#E52B50] hover:bg-[#FFEAEB]/50 dark:hover:bg-[#E52B50]/10 transition-colors"
                                onClick={handleLogout}
                            >
                                <LogOut className="w-[15px] h-[15px]" strokeWidth={2.5} />
                                Logout
                            </button>
                        </div>
                    )}

                    <div
                        className={`flex items-center gap-3 p-2 -mx-1 cursor-pointer rounded-xl transition-colors ${isProfileOpen ? 'bg-zinc-50 dark:bg-zinc-800/50' : 'hover:bg-zinc-50 dark:hover:bg-zinc-800/50'}`}
                        onClick={() => setIsProfileOpen(!isProfileOpen)}
                    >
                        <div className="relative w-10 h-10 rounded-full bg-black flex items-center justify-center shrink-0 overflow-hidden">
                            <svg viewBox="0 0 100 100" className="w-[45px] h-[45px] text-[#FFC107] absolute -bottom-2" fill="currentColor">
                                <circle cx="50" cy="40" r="22" />
                                <path d="M50 65c-18 0-35 15-35 35h70c0-20-17-35-35-35z" />
                                {/* Simple smiley face */}
                                <circle cx="42" cy="38" r="3" fill="black" />
                                <circle cx="58" cy="38" r="3" fill="black" />
                                <path d="M45 48q5 5 10 0" stroke="black" strokeWidth="2" fill="none" />
                            </svg>
                        </div>
                        <div className="flex-1 min-w-0 flex flex-col justify-center translate-y-[-1px]">
                            <p className="text-[11px] font-medium text-zinc-500 truncate dark:text-zinc-500">admin@edu.com</p>
                            <p className="text-[13px] font-bold text-zinc-900 truncate dark:text-zinc-200 mt-[1px]">Security Lead</p>
                        </div>
                        <ChevronRight className={`w-[14px] h-[14px] text-zinc-400 shrink-0 dark:text-[#183a66] stroke-[3px] transition-transform duration-200 ${isProfileOpen ? 'rotate-90' : ''}`} />
                    </div>
                </div>
            </aside>
        </>
    );
}
