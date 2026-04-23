import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Pricing from './pages/Pricing';

const AppContent = () => {
    const location = useLocation();
    
    // Scroll to top on route change
    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, [location.pathname]);

    return (
        <div className="min-h-screen flex flex-col font-sans text-brand-text bg-white antialiased">
            <Navbar />
            <main className="flex-grow">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/pricing" element={<Pricing />} />
                    {/* Placeholders for payment and registration pages */}
                    <Route path="/payment" element={<div className="pt-32 pb-20 text-center"><h1 className="text-2xl font-bold">Halaman Pembayaran</h1><p>Masih dalam pengembangan (Migrasi Vite)</p></div>} />
                    <Route path="/registration" element={<div className="pt-32 pb-20 text-center"><h1 className="text-2xl font-bold">Halaman Pendaftaran</h1><p>Masih dalam pengembangan (Migrasi Vite)</p></div>} />
                </Routes>
            </main>
            <Footer />
        </div>
    );
};

function App() {
    return (
        <Router>
            <AppContent />
        </Router>
    );
}

export default App;
