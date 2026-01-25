import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const testimonials = [
    {
        name: "Rajesh Kumar",
        role: "Retailer, Jaipur",
        text: "Zapurse has completely transformed my shop. The recharge success rate is much higher than other portals I've used. Highly recommended!",
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
        text: "The interface is so easy to use. My staff learned it in one day. DTH recharge is super fast.",
        rating: 4
    }
];

const partners = [
    { name: "air_digitv.png", color: "text-blue-600" },
    { name: "airtel.png", color: "text-red-600" },
    { name: "dish-tv.png", color: "text-rose-700" },
    { name: "jio.png", color: "text-blue-500" },
    { name: "reliance_bigtv.jpg", color: "text-orange-600" },
    { name: "sun_direct.png", color: "text-pink-600" },
    { name: "tata_sky.jpg", color: "text-pink-600" },
    { name: "videocon.png", color: "text-pink-600" },
    { name: "vil.png", color: "text-pink-600" },
    { name: "bsnl.jpg", color: "text-pink-600" }
];


export default function PartnersAndTestimonials() {
    return (
        <section className="py-24 bg-transparent transition-colors relative">
            <div className="container mx-auto px-4 md:px-6">

                {/* Partners Auto-scroll */}
                <div className="mb-24 text-center overflow-hidden">
                    <h3 className="text-xl font-semibold mb-12 uppercase tracking-widest">
                        Our Telco Partners
                    </h3>
                    <div className="flex w-max animate-scroll gap-8">
                        {[...partners, ...partners].map((partner, i) => (
                            <div
                                key={i}
                                className="flex items-center justify-center p-4 flex-shrink-0"
                            >
                                <img
                                    src={`/brand-logo/${partner.name}`}
                                    alt={partner.name.split('.')[0]}
                                    className="h-10 md:h-14 object-contain transition-all hover:scale-110"
                                />
                            </div>
                        ))}
                    </div>
                </div>





                {/* Testimonials */}
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">Trusted by thousands</h2>
                        <p className="text-lg text-gray-600 dark:text-gray-300">Hear from our partners about their journey with Zapurse.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {testimonials.map((t, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.2 }}
                                className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700"
                            >
                                <div className="flex gap-1 mb-4">
                                    {[...Array(5)].map((_, starIndex) => (
                                        <Star
                                            key={starIndex}
                                            size={18}
                                            className={`${starIndex < t.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-200 dark:text-gray-600'}`}
                                        />
                                    ))}
                                </div>
                                <p className="text-gray-700 dark:text-gray-300 mb-6 italic">"{t.text}"</p>
                                <div>
                                    <div className="font-bold text-lg text-gray-900 dark:text-white">{t.name}</div>
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
