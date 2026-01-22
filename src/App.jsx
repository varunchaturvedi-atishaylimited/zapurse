import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import WhatsAppButton from './components/layout/WhatsAppButton';
import ScrollToTop from './components/layout/ScrollToTop';

import Home from './pages/Home';

// Placeholder Pages
// Home import replaced above
import Services from './pages/Services';
import About from './pages/About';
import Contact from './pages/Contact';
import Terms from './pages/legal/Terms';
import Privacy from './pages/legal/Privacy';
import Refund from './pages/legal/Refund';
import FAQ from './pages/legal/FAQ';

const NotFound = () => <div className="pt-32 min-h-screen text-center"><h1 className="text-4xl font-bold">404 - Page Not Found</h1></div>;


function App() {
    return (
        <Router>
            <ScrollToTop />
            <div className="flex flex-col min-h-screen font-serif">
                <Navbar />
                <main className="flex-grow">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/services" element={<Services />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/legal/terms" element={<Terms />} />
                        <Route path="/legal/privacy" element={<Privacy />} />
                        <Route path="/legal/refund" element={<Refund />} />
                        <Route path="/legal/faq" element={<FAQ />} />
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </main>
                <WhatsAppButton />
                <Footer />
            </div>
        </Router>
    );
}

export default App;
