import React, { useEffect, useRef } from 'react';
import { Package, LayoutGrid, CalendarDays, BarChart3 } from 'lucide-react';
import { Link } from 'react-router-dom';

const useScrollReveal = () => {
    const ref = useRef(null);
    
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                    observer.unobserve(entry.target);
                }
            },
            {
                root: null,
                rootMargin: '0px',
                threshold: 0.15,
            }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) observer.unobserve(ref.current);
        };
    }, []);

    return ref;
};

const Reveal = ({ children, className = '', delay = '' }) => {
    const ref = useScrollReveal();
    return (
        <div ref={ref} className={`reveal ${delay} ${className}`}>
            {children}
        </div>
    );
};

const Home = () => {
    return (
        <div className="page-transition">
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
                <div className="bg-blob"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
                        <div className="max-w-2xl">
                            <Reveal>
                                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-extrabold text-brand-dark leading-tight tracking-tight mb-6">
                                    Presisi Klinis untuk <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-dark to-brand-light">Dapur Profesional.</span>
                                </h1>
                            </Reveal>
                            <Reveal delay="delay-100">
                                <p className="text-lg text-brand-text mb-8 leading-relaxed">
                                    Dapur MBG adalah solusi <em>enterprise resource planning</em> yang dirancang khusus untuk lingkungan kuliner bervolume tinggi. Integrasikan inventaris, kalkulasi biaya resep, dan penjadwalan staf dalam satu platform yang tangguh.
                                </p>
                            </Reveal>
                            <Reveal delay="delay-200" className="flex flex-col sm:flex-row gap-4">
                                <Link to="/registration" className="inline-flex justify-center items-center px-8 py-3.5 border border-transparent text-base font-medium rounded-md text-brand-dark bg-brand-yellow hover:bg-[#ebd59b] transition-colors shadow-glow">
                                    Mulai Sekarang
                                </Link>
                            </Reveal>
                        </div>

                        <Reveal delay="delay-300" className="relative lg:ml-auto w-full max-w-lg lg:max-w-none">
                            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl relative">
                                <div className="absolute inset-0 bg-gradient-to-tr from-brand-dark/20 to-transparent z-10 mix-blend-multiply"></div>
                                <img 
                                    src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                                    alt="Chef profesional sedang menyiapkan hidangan" 
                                    className="w-full h-full object-cover object-center"
                                />
                            </div>
                            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-brand-light/20 rounded-full blur-xl z-0"></div>
                            <div className="absolute -top-6 -right-6 w-32 h-32 bg-brand-yellow/20 rounded-full blur-xl z-0"></div>
                        </Reveal>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-20 bg-brand-gray/50 border-t border-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <Reveal className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl font-heading font-bold text-brand-dark mb-4">Kendalikan Dapur Anda</h2>
                        <p className="text-lg text-brand-text">
                            Semua yang Anda butuhkan untuk menjalankan dapur profesional berefisiensi tinggi, terintegrasi sempurna dalam satu antarmuka klinis.
                        </p>
                    </Reveal>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <Reveal delay="delay-100" className="bg-white rounded-2xl p-8 shadow-soft border border-gray-100 relative overflow-hidden group hover:shadow-md transition-shadow">
                            <div className="absolute right-0 top-0 bottom-0 w-1/2 opacity-10 bg-[url('https://images.unsplash.com/photo-1583258292688-d0213dc5a3a8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80')] bg-cover bg-center transition-transform duration-700 group-hover:scale-105"></div>
                            <div className="relative z-10">
                                <div className="w-12 h-12 rounded-lg bg-brand-yellow/20 flex items-center justify-center mb-6 text-brand-dark">
                                    <Package className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-heading font-bold text-brand-dark mb-3">Manajemen Inventaris Real-Time</h3>
                                <p className="text-brand-text leading-relaxed max-w-sm">
                                    Lacak bahan baku hingga ke satuan gram. Terima peringatan sebelum stok kritis habis, memastikan Anda tidak pernah kehabisan menu secara tidak terduga.
                                </p>
                            </div>
                        </Reveal>

                        <Reveal delay="delay-200" className="bg-white rounded-2xl p-8 shadow-soft border border-gray-100 hover:shadow-md transition-shadow">
                            <div className="w-12 h-12 rounded-lg bg-brand-yellow/20 flex items-center justify-center mb-6 text-brand-dark">
                                <LayoutGrid className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-heading font-bold text-brand-dark mb-3">Kalkulasi Biaya Resep Dinamis</h3>
                            <p className="text-brand-text leading-relaxed">
                                Analisis margin keuntungan secara instan saat harga bahan baku berfluktuasi. Pertahankan penataan piring (plating) dan profit yang sempurna.
                            </p>
                        </Reveal>

                        <Reveal delay="delay-100" className="bg-white rounded-2xl p-8 shadow-soft border border-gray-100 hover:shadow-md transition-shadow">
                            <div className="w-12 h-12 rounded-lg bg-brand-yellow/20 flex items-center justify-center mb-6 text-brand-dark">
                                <CalendarDays className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-heading font-bold text-brand-dark mb-3">Penjadwalan Staf Optimal</h3>
                            <p className="text-brand-text leading-relaxed">
                                Prediksi kebutuhan tenaga kerja berdasarkan data penjualan historis. Kurangi lembur dan pastikan pos-pos penting selalu terjaga saat jam sibuk.
                            </p>
                        </Reveal>

                        <Reveal delay="delay-200" className="bg-brand-dark rounded-2xl p-8 shadow-xl relative overflow-hidden">
                            <div className="relative z-10">
                                <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center mb-6 text-brand-yellow">
                                    <BarChart3 className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-heading font-bold text-white mb-3">Dashboard Laporan Eksekutif</h3>
                                <p className="text-brand-light leading-relaxed max-w-sm mb-8">
                                    Dapatkan tampilan menyeluruh (top-down) kinerja dapur. Lacak waktu penyelesaian pesanan, pengurangan limbah, dan profitabilitas keseluruhan dengan visualisasi data tingkat perusahaan.
                                </p>
                            </div>
                            <div className="absolute bottom-0 right-8 flex items-end gap-3 opacity-90">
                                <div className="w-12 bg-brand-yellow/80 rounded-t-sm h-16 animate-pulse" style={{animationDuration: '3s'}}></div>
                                <div className="w-12 bg-brand-yellow/90 rounded-t-sm h-24 animate-pulse" style={{animationDuration: '2.5s', animationDelay: '0.2s'}}></div>
                                <div className="w-12 bg-brand-yellow rounded-t-sm h-32 animate-pulse" style={{animationDuration: '2.8s', animationDelay: '0.4s'}}></div>
                            </div>
                        </Reveal>
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <Reveal className="text-center mb-16">
                        <h2 className="text-3xl font-heading font-bold text-brand-dark">Dipercaya oleh Para Executive Chef</h2>
                    </Reveal>

                    <div className="grid md:grid-cols-2 gap-8">
                        <Reveal delay="delay-100" className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm">
                            <div className="flex items-center gap-4 mb-6">
                                <img src="https://images.unsplash.com/photo-1583394838336-acd977736f90?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="Chef Marcus" className="w-14 h-14 rounded-full object-cover bg-gray-100" />
                                <div>
                                    <h4 className="font-heading font-bold text-brand-dark text-lg">Chef Marcus Thorne</h4>
                                    <p className="text-sm text-brand-text">Executive Chef, The Meridian</p>
                                </div>
                            </div>
                            <p className="text-brand-text italic leading-relaxed">
                                "Dapur MBG membawa presisi klinis ke dalam kekacauan kami. Fitur kalkulasi biaya resep saja telah menghemat 4% biaya makanan kami pada kuartal pertama. Ini satu-satunya ERP yang benar-benar memahami alur kerja dapur nyata."
                            </p>
                        </Reveal>

                        <Reveal delay="delay-200" className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm">
                            <div className="flex items-center gap-4 mb-6">
                                <img src="https://images.unsplash.com/photo-1581299894007-aaa50297cf16?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="Sarah Jenkins" className="w-14 h-14 rounded-full object-cover bg-gray-100" />
                                <div>
                                    <h4 className="font-heading font-bold text-brand-dark text-lg">Sarah Jenkins</h4>
                                    <p className="text-sm text-brand-text">Culinary Director, Apex Hospitality</p>
                                </div>
                            </div>
                            <p className="text-brand-text italic leading-relaxed">
                                "Mengelola inventaris di lima konsep restoran yang berbeda dulunya adalah mimpi buruk sebelum Dapur MBG. Sekarang, saya memiliki visibilitas penuh dari satu dashboard. Stabilitas dan kejelasan sistem ini tidak tertandingi."
                            </p>
                        </Reveal>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 bg-brand-gray/30 border-t border-gray-100">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <Reveal>
                        <h2 className="text-3xl font-heading font-bold text-brand-dark mb-4">Siap Mengoptimalkan Dapur Anda?</h2>
                        <p className="text-lg text-brand-text mb-10">
                            Bergabunglah dengan restoran kelas atas yang beralih ke ERP presisi klinis dari Dapur MBG.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <Link to="/registration" className="inline-flex justify-center items-center px-8 py-3.5 border border-transparent text-base font-medium rounded-md text-white bg-brand-dark hover:bg-brand-dark/90 transition-colors shadow-md">
                                Mulai Sekarang
                            </Link>
                            <Link to="/pricing" className="inline-flex justify-center items-center px-8 py-3.5 border border-gray-300 text-base font-medium rounded-md text-brand-dark bg-white hover:bg-gray-50 transition-colors">
                                Lihat Harga
                            </Link>
                        </div>
                    </Reveal>
                </div>
            </section>
        </div>
    );
};

export default Home;
