import React from 'react';
import { Check } from 'lucide-react';
import { Link } from 'react-router-dom';

const PricingSection = () => {
    return (
        <section className="pt-28 pb-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h1 className="text-4xl font-heading font-extrabold text-brand-dark mb-4">Presisi Klinis untuk Dapur Anda</h1>
                    <p className="text-lg text-brand-text">
                        Pilih paket yang sempurna untuk merampingkan operasional kuliner Anda. Dari<br className="hidden md:block" /> bistro kecil hingga katering perusahaan, kami memiliki solusi yang dibangun untuk efisiensi.
                    </p>
                </div>
                
                <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
                    {/* Basic */}
                    <div className="bg-white rounded-xl p-8 border border-gray-200 shadow-sm flex flex-col hover:border-gray-300 transition-colors">
                        <h3 className="text-2xl font-heading font-semibold text-brand-dark mb-1">Basic</h3>
                        <p className="text-sm text-brand-text mb-6">Untuk Dapur Kecil</p>
                        
                        <div className="mb-8 flex items-baseline gap-1">
                            <span className="text-5xl font-extrabold text-brand-dark">$49</span>
                            <span className="text-gray-500 font-medium">/bln</span>
                        </div>
                        
                        <ul className="space-y-4 mb-10 flex-grow">
                            <li className="flex items-start gap-3">
                                <Check className="w-5 h-5 text-brand-dark shrink-0 mt-0.5" /> 
                                <span className="text-brand-dark font-medium text-sm">Hingga 3 Pengguna</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <Check className="w-5 h-5 text-brand-dark shrink-0 mt-0.5" /> 
                                <span className="text-brand-dark font-medium text-sm">Pelacakan Inventaris Dasar</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <Check className="w-5 h-5 text-brand-dark shrink-0 mt-0.5" /> 
                                <span className="text-brand-dark font-medium text-sm">Integrasi KDS Standar</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <Check className="w-5 h-5 text-brand-dark shrink-0 mt-0.5" /> 
                                <span className="text-brand-dark font-medium text-sm">Dukungan Email</span>
                            </li>
                        </ul>
                        
                        <button className="w-full py-3.5 px-4 border border-brand-dark text-brand-dark font-semibold rounded-md hover:bg-gray-50 transition-colors text-sm tracking-wide">
                            Pilih Basic
                        </button>
                    </div>

                    {/* Pro */}
                    <div className="bg-white rounded-xl p-8 border-2 border-brand-yellow shadow-card relative flex flex-col transform md:-translate-y-4 z-10">
                        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-brand-yellow text-brand-dark px-4 py-1.5 rounded-md text-xs font-bold tracking-wide shadow-sm">
                            Paling Populer
                        </div>
                        
                        <h3 className="text-2xl font-heading font-semibold text-brand-dark mb-1">Pro</h3>
                        <p className="text-sm text-brand-text mb-6">Restoran Volume Tinggi</p>
                        
                        <div className="mb-8 flex items-baseline gap-1">
                            <span className="text-5xl font-extrabold text-brand-dark">$129</span>
                            <span className="text-gray-500 font-medium">/bln</span>
                        </div>
                        
                        <ul className="space-y-4 mb-10 flex-grow">
                            <li className="flex items-start gap-3">
                                <Check className="w-5 h-5 text-brand-dark shrink-0 mt-0.5" /> 
                                <span className="text-brand-dark font-medium text-sm">Hingga 15 Pengguna</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <Check className="w-5 h-5 text-brand-dark shrink-0 mt-0.5" /> 
                                <span className="text-brand-dark font-medium text-sm">Manajemen Inventaris & Limbah Lanjut</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <Check className="w-5 h-5 text-brand-dark shrink-0 mt-0.5" /> 
                                <span className="text-brand-dark font-medium text-sm">Routing KDS Multi-stasiun</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <Check className="w-5 h-5 text-brand-dark shrink-0 mt-0.5" /> 
                                <span className="text-brand-dark font-medium text-sm">Dashboard Analitik Real-time</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <Check className="w-5 h-5 text-brand-dark shrink-0 mt-0.5" /> 
                                <span className="text-brand-dark font-medium text-sm">Dukungan Prioritas 24/7</span>
                            </li>
                        </ul>
                        
                        <Link to="/payment" className="w-full text-center py-3.5 px-4 bg-brand-dark text-white font-semibold rounded-md hover:bg-brand-dark/90 transition-colors shadow-md text-sm tracking-wide block">
                            Pilih Pro
                        </Link>
                    </div>

                    {/* Enterprise */}
                    <div className="bg-white rounded-xl p-8 border border-gray-200 shadow-sm flex flex-col hover:border-gray-300 transition-colors">
                        <h3 className="text-2xl font-heading font-semibold text-brand-dark mb-1">Enterprise</h3>
                        <p className="text-sm text-brand-text mb-6">Grup Katering & Jaringan</p>
                        
                        <div className="mb-8 flex items-baseline gap-1">
                            <span className="text-5xl font-extrabold text-brand-dark">Kustom</span>
                        </div>
                        
                        <ul className="space-y-4 mb-10 flex-grow">
                            <li className="flex items-start gap-3">
                                <Check className="w-5 h-5 text-brand-dark shrink-0 mt-0.5" /> 
                                <span className="text-brand-dark font-medium text-sm">Pengguna Tak Terbatas</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <Check className="w-5 h-5 text-brand-dark shrink-0 mt-0.5" /> 
                                <span className="text-brand-dark font-medium text-sm">Manajemen Komisari Terpusat</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <Check className="w-5 h-5 text-brand-dark shrink-0 mt-0.5" /> 
                                <span className="text-brand-dark font-medium text-sm">Integrasi API Kustom</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <Check className="w-5 h-5 text-brand-dark shrink-0 mt-0.5" /> 
                                <span className="text-brand-dark font-medium text-sm">Manajer Akun Khusus</span>
                            </li>
                        </ul>
                        
                        <button className="w-full py-3.5 px-4 border border-brand-dark text-brand-dark font-semibold rounded-md hover:bg-gray-50 transition-colors text-sm tracking-wide">
                            Hubungi Sales
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

const FAQSection = () => {
    return (
        <section className="py-20 bg-brand-bgLight">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-heading font-bold text-center text-brand-dark mb-10">Pertanyaan yang Sering Diajukan</h2>
                
                <div className="space-y-4">
                    <div className="bg-white p-6 rounded-md border border-gray-200 shadow-sm">
                        <h4 className="font-semibold text-brand-dark mb-2 text-sm">Bisakah saya mengganti paket nanti?</h4>
                        <p className="text-gray-600 text-sm leading-relaxed">
                            Tentu saja. Anda dapat meningkatkan (upgrade) atau menurunkan (downgrade) paket Anda kapan saja. Biaya prorata akan otomatis diterapkan pada siklus tagihan berikutnya.
                        </p>
                    </div>
                    
                    <div className="bg-white p-6 rounded-md border border-gray-200 shadow-sm">
                        <h4 className="font-semibold text-brand-dark mb-2 text-sm">Perangkat keras apa yang dibutuhkan untuk KDS?</h4>
                        <p className="text-gray-600 text-sm leading-relaxed">
                            Dapur MBG tidak bergantung pada perangkat keras tertentu (hardware agnostic). Sistem ini berjalan efisien di tablet modern atau monitor layar sentuh apa pun dengan koneksi internet yang stabil. Kami merekomendasikan layar 10" atau lebih besar untuk visibilitas dapur yang optimal.
                        </p>
                    </div>
                    
                    <div className="bg-white p-6 rounded-md border border-gray-200 shadow-sm">
                        <h4 className="font-semibold text-brand-dark mb-2 text-sm">Apakah Anda menawarkan bantuan onboarding?</h4>
                        <p className="text-gray-600 text-sm leading-relaxed">
                            Ya, paket Pro menyertakan sesi onboarding terpandu, dan Enterprise mencakup spesialis implementasi khusus. Pengguna Basic memiliki akses ke basis pengetahuan komprehensif kami dan dukungan email.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

const Pricing = () => {
    return (
        <div className="page-transition">
            <PricingSection />
            <FAQSection />
        </div>
    );
};

export default Pricing;
