import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const isActive = (path) => location.pathname === path;

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center">
                    
                    <div className="flex items-center gap-2">
                        <Link to="/" className="flex items-center gap-2">
                            <img src="/aset/logo-erp-main.png" alt="Logo" className="h-10" />
                            <span className="font-heading font-bold text-xl text-brand-dark">Pantau Dapur MBG</span>
                        </Link>
                    </div>

                    {/* Navigasi Desktop */}
                    <div className="hidden md:flex space-x-8">
                        <Link to="/" className={`text-sm font-medium transition-colors ${isActive('/') ? 'text-brand-dark font-bold border-b-2 border-brand-yellow' : 'text-brand-text hover:text-brand-dark'}`}>Fitur</Link>
                        <Link to="/pricing" className={`text-sm font-medium transition-colors ${isActive('/pricing') ? 'text-brand-dark font-bold border-b-2 border-brand-yellow' : 'text-brand-text hover:text-brand-dark'}`}>Harga</Link>
                        <a href="#" className="text-sm font-medium text-brand-text hover:text-brand-dark transition-colors">Tentang Kami</a>
                    </div>

                    {/* Tombol Aksi Desktop */}
                    <div className="hidden md:flex items-center space-x-4">
                        <a href="#" className="text-sm font-medium text-brand-text hover:text-brand-dark transition-colors">Masuk</a>
                        <Link to="/registration" className="bg-brand-dark text-white px-5 py-2.5 rounded-md text-sm font-medium hover:bg-brand-dark/90 transition-all shadow-md hover:shadow-lg">
                            Daftar
                        </Link>
                    </div>

                    {/* Tombol Menu Mobile */}
                    <div className="md:hidden flex items-center">
                        <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-brand-dark">
                            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Menu Mobile */}
            {mobileMenuOpen && (
                <div className="md:hidden bg-white border-t border-gray-100 absolute w-full shadow-lg">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <Link to="/" className="block px-3 py-2 text-base font-medium text-brand-text hover:text-brand-dark hover:bg-gray-50 rounded-md">Fitur</Link>
                        <Link to="/pricing" className="block px-3 py-2 text-base font-medium text-brand-text hover:text-brand-dark hover:bg-gray-50 rounded-md">Harga</Link>
                        <a href="#" className="block px-3 py-2 text-base font-medium text-brand-text hover:text-brand-dark hover:bg-gray-50 rounded-md">Tentang Kami</a>
                        <div className="mt-4 pt-4 border-t border-gray-100 px-3 flex flex-col gap-2">
                            <a href="#" className="block text-center px-3 py-2 text-base font-medium text-brand-dark border border-gray-200 rounded-md">Masuk</a>
                            <Link to="/registration" className="block text-center px-3 py-2 text-base font-medium bg-brand-dark text-white rounded-md">Mulai Sekarang</Link>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
