import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-white border-t border-gray-200 py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
                <p className="text-sm text-gray-500">
                    © 2026 MBG Kitchen ERP. Hak cipta dilindungi undang-undang.
                </p>
                <div className="flex space-x-6 text-sm text-gray-500">
                    <a href="#" className="hover:text-brand-dark transition-colors">Kebijakan Privasi</a>
                    <a href="#" className="hover:text-brand-dark transition-colors">Syarat Layanan</a>
                    <a href="#" className="hover:text-brand-dark transition-colors">Status Sistem</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
