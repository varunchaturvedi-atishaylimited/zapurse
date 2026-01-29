import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const faqData = [
    {
        question: "What is Zapurse?",
        answer: "Zapurse is a secure and easy-to-use mobile app that lets you recharge your mobile, DTH and other prepaid services instantly. It’s designed to provide a smooth, fast, and reliable recharge experience for all users."
    },
    {
        question: "Is Zapurse free to use?",
        answer: "Yes! Downloading and using the Zapurse app is completely free. You only pay for the actual recharge amount."
    },
    {
        question: "How do I download the Zapurse app?",
        answer: "You can download the Zapurse app from the Google Play Store and App Store. Just search for “Zapurse” and tap install."
    },
    {
        question: "How do I make a recharge?",
        answer: `Open the Zapurse app.
Select the service (Mobile, DTH, etc.).
Enter your number and operator.
Choose or enter the recharge amount.
Confirm and pay securely through your preferred payment method.
That’s it! Your recharge is done instantly.`
    },
    {
        question: "What payment methods are accepted?",
        answer: "You can recharge using UPI, Debit/Credit Cards."
    },
    {
        question: "How can I check my recharge status?",
        answer: "After completing your payment, you’ll get an instant confirmation on the app and via SMS. You can also check the ‘Recharge History’ section in the app to track past transactions."
    },
    {
        question: "What should I do if a recharge fails?",
        answer: `If your recharge fails, don’t worry. 
If payment was deducted, it will be automatically refunded to your original payment method within 2–3 working days.`
    },
    {
        question: "Is my payment information safe?",
        answer: "Yes. Zapurse uses secure payment gateways and follows industry-standard encryption to protect your data. Your payment and personal details are always safe."
    },
    {
        question: "Can I get cashback or offers on recharges?",
        answer: "Yes! Zapurse regularly runs special offers, discounts, and cashback deals. Check the app’s ‘Offers’ section for rewards."
    },
    {
        question: "How can I contact customer support?",
        answer: "You can reach our support team through the Help & Support option inside the app or email us at telesales@zapurse.com. Our team will assist you quickly."
    }
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState(0);

    return (
        <div className="pt-24 pb-20 min-h-screen transition-colors duration-300 bg-transparent">
            <div className="container mx-auto px-4 md:px-6 max-w-4xl">
                {/* Header */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
                        Frequently Asked Questions
                    </h1>
                    <p className="text-xl text-gray-600 dark:text-gray-400">
                        Can't find the answer you're looking for? Reach out to our support.
                    </p>
                </div>

                {/* FAQ Items */}
                <div className="space-y-4">
                    {faqData.map((faq, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.05 }}
                            className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden border border-gray-100 dark:border-gray-700 shadow-sm"
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                                className="w-full px-8 py-6 flex items-center justify-between text-left focus:outline-none"
                            >
                                <span className={`text-lg font-bold ${openIndex === index ? 'text-primary dark:text-gray-100' : 'text-gray-900 dark:text-gray-100'}`}>
                                    {faq.question}
                                </span>
                                {openIndex === index ? (
                                    <Minus className="text-primary flex-shrink-0" />
                                ) : (
                                    <Plus className="text-gray-400 dark:text-gray-500 flex-shrink-0" />
                                )}
                            </button>

                            <AnimatePresence>
                                {openIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        className="overflow-hidden"
                                    >
                                        <div className="px-8 pb-6 text-gray-600 dark:text-gray-400 leading-relaxed whitespace-pre-line">
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
