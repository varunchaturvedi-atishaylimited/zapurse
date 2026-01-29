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
    { name: "air_digitv.png" },
    { name: "airtel.png" },
    { name: "dish-tv.png" },
    { name: "jio.png" },
    { name: "reliance_bigtv.jpg" },
    { name: "sun_direct.png" },
    { name: "tata_sky.jpg" },
    { name: "videocon.png" },
    { name: "vil.png" },
    { name: "bsnl.jpg" }
];

export default function PartnersAndTestimonials() {
    return (
        <section className="py-20 relative bg-transparent">
            <div className="container mx-auto px-4 md:px-6">

                {/* Partners Auto-scroll */}
                <div className="mb-24 text-center overflow-hidden">
                    <h4 className="text-lg md:text-xl font-black mb-8 tracking-wider">OUR TELCO PARTNERS</h4>
                    <div className="flex w-max animate-scroll gap-8">
                        {[...partners, ...partners].map((partner, i) => (
                            <div key={i} className="flex items-center justify-center p-4 flex-shrink-0">
                                <img
                                    src={`/brand-logo/${partner.name}`}
                                    alt={partner.name.split('.')[0]}
                                    className="h-10 md:h-14 object-contain transition-transform duration-300 hover:scale-110"
                                />
                            </div>
                        ))}
                    </div>
                </div>


                {/* Testimonials */}
                <h2 className="text-center md:text-5xl mb-6">Trusted by thousands</h2>
                <p className="text-center mb-10 text-gray-900">Hear from our partners about their journey with Zapurse.</p>
                <div className="grid md:grid-cols-3 gap-8">
                    {testimonials.map((t, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.2 }}
                            className="relative overflow-hidden rounded-[2.5rem] p-10 bg-white/30 dark:bg-gray-900 shadow-lg hover:shadow-2xl transition-all duration-500 backdrop-blur-md"
                        >
                            {/* Blurred background circle */}
                            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 dark:bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />

                            <div className="relative z-10">
                                {/* Stars */}
                                <div className="flex gap-1 mb-6">
                                    {[...Array(5)].map((_, starIndex) => (
                                        <Star
                                            key={starIndex}
                                            size={18}
                                            className={`${starIndex < t.rating
                                                ? 'fill-yellow-400 text-yellow-400'
                                                : 'text-white/20'
                                                }`}
                                        />
                                    ))}
                                </div>

                                {/* Testimonial text */}
                                <p className="mb-8 italic text-lg text-foreground/90 dark:text-foreground/80">
                                    "{t.text}"
                                </p>

                                {/* Author */}
                                <div>
                                    <div className="font-black text-xl text-foreground/90 dark:text-foreground/80">
                                        {t.name}
                                    </div>
                                    <div className="text-sm font-medium tracking-wide text-foreground/80 dark:text-foreground/70">
                                        {t.role}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}
