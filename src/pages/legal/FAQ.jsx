import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const faqData = [
    {
        question: "How do I become a Zapurse agent?",
        answer: "To become a Zapurse agent, simply click on the 'Become a Partner' button on our homepage, fill in the contact form, or reach out to us via WhatsApp. Our team will guide you through the quick onboarding process."
    },
    {
        question: "What is the commission structure for AEPS?",
        answer: "We offer one of the best commission structures in the industry for AEPS transactions. Commissions vary based on transaction volume and slabs. Please contact our support team for the detailed commission chart."
    },
    {
        question: "Is there any joining fee to start?",
        answer: "Zapurse offers multiple partnership models. While some basic services can be accessed with minimal onboarding, premium distributor IDs might attract a nominal activation fee which includes training and marketing materials."
    },
    {
        question: "What if a transaction fails but money is deducted?",
        answer: "Don't worry. In case of a failed transaction where money is deducted, it is automatically reconciled and refunded to your Zapurse wallet within 24-48 hours. You can track this in your transaction history."
    },
    {
        question: "Can I do domestic money transfers to any bank?",
        answer: "Yes, Zapurse supports Domestic Money Transfer (DMT) to all IMPS/NEFT enabled banks in India. You can transfer money instantly 24/7."
    },
    {
        question: "How do I add money to my Zapurse wallet?",
        answer: "You can load your wallet via UPI, Net Banking, or by depositing cash at our partner bank branches and uploading the slip request in the portal."
    }
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState(0);

    return (
        <div className="pt-24 min-h-screen pb-20 bg-gray-50">
            <div className="container mx-auto px-4 md:px-6 max-w-4xl">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">Frequently Asked Questions</h1>
                    <p className="text-xl text-gray-600">Can't find the answer you're looking for? Reach out to our support.</p>
                </div>

                <div className="space-y-4">
                    {faqData.map((faq, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm"
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                                className="w-full px-8 py-6 flex items-center justify-between text-left focus:outline-none"
                            >
                                <span className={`text-lg font-bold ${openIndex === index ? 'text-primary' : 'text-gray-900'}`}>
                                    {faq.question}
                                </span>
                                {openIndex === index ? <Minus className="text-primary flex-shrink-0" /> : <Plus className="text-gray-400 flex-shrink-0" />}
                            </button>
                            <AnimatePresence>
                                {openIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        className="overflow-hidden"
                                    >
                                        <div className="px-8 pb-6 text-gray-600 leading-relaxed">
                                            {faq.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}
