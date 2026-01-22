import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const testimonials = [
    {
        name: "Rajesh Kumar",
        role: "Retailer, Jaipur",
        text: "Zapurse has completely transformed my shop. The AEPS success rate is much higher than other portals I've used. Highly recommended!",
        rating: 5
    },
    {
        name: "Amit Singh",
        role: "Distributor, Bhopal",
        text: "Excellent support and timely commission payouts. Working with Zapurse is transparent and profitable.",
        rating: 5
    },
    {
        name: "Sneha Gupta",
        role: "Merchant, Delhi",
        text: "The interface is so easy to use. My staff learned it in one day. Money transfer is super fast.",
        rating: 4
    }
];

export default function PartnersAndTestimonials() {
    return (
        <section className="py-24 bg-gradient-to-b from-white to-gray-50">
            <div className="container mx-auto px-4 md:px-6">
                {/* Partners */}
                <div className="mb-24 text-center">
                    <h3 className="text-xl font-semibold text-gray-400 mb-8 uppercase tracking-widest">Our Banking & Telco Partners</h3>
                    <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
                        {/* Placeholders for logos */}
                        {['Bank Partner', 'Telco Partner 1', 'Bill Vendor', 'Payment Gateway'].map((name, i) => (
                            <div key={i} className="text-2xl font-bold text-gray-300 font-sans">{name}</div>
                        ))}
                    </div>
                </div>

                {/* Testimonials */}
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold mb-6">Trusted by thousands</h2>
                        <p className="text-lg text-gray-600">Hear from our partners about their journey with Zapurse.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {testimonials.map((t, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.2 }}
                                className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100"
                            >
                                <div className="flex gap-1 mb-4">
                                    {[...Array(5)].map((_, starIndex) => (
                                        <Star
                                            key={starIndex}
                                            size={18}
                                            className={`${starIndex < t.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-200'}`}
                                        />
                                    ))}
                                </div>
                                <p className="text-gray-700 mb-6 italic">"{t.text}"</p>
                                <div>
                                    <div className="font-bold text-lg">{t.name}</div>
                                    <div className="text-sm text-gray-400">{t.role}</div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
