import LegalLayout from './LegalLayout';
import { motion } from 'framer-motion';

export default function Refund() {
    return (
        <LegalLayout title="Refund & Cancellation Policy" lastUpdated="January 20, 2026">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-12"
            >
                <section className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
                    <p>
                        Thank you for choosing Zapurse. This Refund & Cancellation Policy outlines
                        the terms and conditions governing cancellations and refunds on our platform.
                    </p>
                </section>

                <div className="grid gap-10">
                    <section className="p-8 rounded-[2rem] bg-white dark:bg-gray-800/40 border border-gray-100 dark:border-gray-800 shadow-sm relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/5 rounded-full blur-3xl" />
                        <h2 className="text-2xl font-bold mb-6 text-[#080F4A] dark:text-white">1. No cancellation once the transaction is processed</h2>
                        <div className="space-y-4">
                            <p>All transactions made through Zapurse — including prepaid mobile recharge, DTH recharge, and bill payments — are instant and final.</p>
                            <p>Once a transaction request is submitted and successfully processed, it cannot be cancelled, as the service is delivered immediately to the respective operator or service provider.</p>
                        </div>
                    </section>

                    <section className="p-8 rounded-[2rem] bg-white dark:bg-gray-800/40 border border-gray-100 dark:border-gray-800 shadow-sm">
                        <h2 className="text-2xl font-bold mb-6 text-[#080F4A] dark:text-white">2. Refund Policy</h2>
                        <p className="mb-6">Refunds are allowed only in the specific cases mentioned below:</p>

                        <div className="space-y-8">
                            <div className="p-6 bg-primary/5 rounded-2xl border border-primary/10">
                                <h3 className="text-xl font-bold mb-4 text-[#080F4A] dark:text-red-400">Failed Transactions</h3>
                                <p className="mb-4 font-medium">A transaction is considered failed if:</p>
                                <ul className="space-y-2 mb-6 list-none pl-0">
                                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-gray-400" /> The amount is deducted from your bank account, wallet, or card, and</li>
                                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-gray-400" /> The recharge or bill payment is not successful, and</li>
                                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-gray-400" /> The amount is not passed to the operator or service provider.</li>
                                </ul>
                                <p className="mb-2 font-medium">In such cases:</p>
                                <ul className="space-y-2 list-none pl-0">
                                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-gray-400" /> The deducted amount will be refunded automatically to the original payment method.</li>
                                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-gray-400" /> Refund timelines generally range between 3–7 working days, depending on your bank or payment gateway.</li>
                                </ul>
                            </div>

                            <div className="p-6 bg-secondary/5 rounded-2xl border border-secondary/10">
                                <h3 className="text-xl font-bold mb-4 text-[#182B0C] dark:text-green-400">Pending Transactions</h3>
                                <p className="mb-4">If a transaction remains in pending status due to operator-side delay :</p>
                                <ul className="space-y-3 list-none pl-0">
                                    <li className="flex gap-2">
                                        <div className="w-1.5 h-1.5 rounded-full bg-gray-400 mt-2 flex-shrink-0" />
                                        The final status may take up to 24 hours.
                                    </li>
                                    <li className="flex gap-2">
                                        <div className="w-1.5 h-1.5 rounded-full bg-gray-400 mt-2 flex-shrink-0" />
                                        If the operator confirms failure, the amount will be refunded automatically. But if the operator confirms success, no refund will be issued.
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    <section className="p-8 rounded-[2rem] bg-white dark:bg-gray-800/40 border border-gray-100 dark:border-gray-800 shadow-sm">
                        <h2 className="text-2xl font-bold mb-6 text-[#080F4A] dark:text-white flex items-center gap-3">
                            <span className="w-2 h-8 bg-red-500 rounded-full" />
                            3. Exceptions (No Refund)
                        </h2>
                        <p className="mb-6">Refunds will not be issued in the following situations:</p>
                        <div className="grid md:grid-cols-2 gap-4">
                            {[
                                "Incorrect mobile number, DTH number, or customer ID entered by the user",
                                "Selecting the wrong operator or circle",
                                "Recharge or bill payment already marked successful by the operator",
                                "User dissatisfaction after a successful transaction",
                                "Duplicate or repeated recharge requests made by the user",
                                "Any issue arising due to incorrect or incomplete information provided by the user"
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-3 p-4 bg-gray-50 dark:bg-gray-900 rounded-xl text-sm border border-gray-100 dark:border-gray-800">
                                    <div className="w-1 h-1 rounded-full bg-gray-400" />
                                    {item}
                                </div>
                            ))}
                        </div>
                        <p className="mt-8 text-center font-bold text-[#080F4A] dark:text-white">Zapurse is not responsible for errors caused by incorrect user input.</p>
                    </section>

                    <div className="grid md:grid-cols-2 gap-8">
                        <section className="p-8 rounded-[2rem] bg-white dark:bg-gray-800/40 border border-gray-100 dark:border-gray-800 shadow-sm">
                            <h2 className="text-2xl font-bold mb-6 text-[#080F4A] dark:text-white">4. Processing Time for Refunds</h2>
                            <div className="space-y-4">
                                <div className="flex justify-between items-center p-4 bg-primary/5 rounded-xl border border-primary/10">
                                    <span className="font-bold">UPI</span>
                                    <span className="text-primary dark:text-green-400 font-black">1–3 business days</span>
                                </div>
                                <div className="flex justify-between items-center p-4 bg-primary/5 rounded-xl border border-primary/10">
                                    <span className="font-bold">Debit Card / Bank</span>
                                    <span className="text-primary dark:text-green-400 font-black">3–7 business days</span>
                                </div>
                                <p className="text-xs opacity-60 italic">Refund timelines may vary depending on your bank’s internal policies. Delays beyond our control may occur.</p>
                            </div>
                        </section>

                        <section className="p-8 rounded-[2rem] bg-white dark:bg-gray-800/40 border border-gray-100 dark:border-gray-800 shadow-sm">
                            <h2 className="text-2xl font-bold mb-6 text-[#080F4A] dark:text-white">5. Disputes & Support</h2>
                            <p className="mb-4 text-sm opacity-80">If you face any issues related to a failed or pending transaction, please contact our support team with the following details:</p>
                            <ul className="text-sm font-bold space-y-1 mb-6 list-none pl-0">
                                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-gray-400" /> Transaction ID</li>
                                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-gray-400" /> Registered mobile number</li>
                                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-gray-400" /> Date and time of transaction</li>
                            </ul>
                            <div className="pt-4 border-t border-gray-100 dark:border-gray-800">
                                <p className="text-sm"><strong>Support Contact:</strong></p>
                                <p className="text-sm">📧 Email: support@zapurse.com</p>
                                <p className="text-sm">🌐 Website: www.zapurse.in</p>
                            </div>
                        </section>
                    </div>

                    <section className="p-8 rounded-[2rem] bg-white dark:bg-gray-800/40 border border-gray-100 dark:border-gray-800 shadow-sm text-center">
                        <h2 className="text-2xl font-bold mb-4 text-[#080F4A] dark:text-white">6. Operator-Level Policies</h2>
                        <p className="max-w-2xl mx-auto opacity-80">
                            Certain refunds depend on telecom or DTH operator policies. Zapurse follows the final transaction status provided by the operator.
                            If a transaction is marked as <strong>successful</strong> by the operator, no refund can be issued, even if the user claims non-receipt.
                        </p>
                    </section>

                    <section className="p-10 rounded-[2.5rem] bg-gradient-to-br from-[#182B0C] to-[#080F4A] text-white overflow-hidden relative">
                        <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
                        <h2 className="text-2xl font-bold mb-4 relative z-10">7. Modification of Policy</h2>
                        <p className="relative z-10 opacity-90 leading-relaxed">
                            Zapurse Fintech Private Limited reserves the right to modify or update this
                            Refund & Cancellation Policy at any time. Any changes will be published on the
                            Zapurse app or website.
                        </p>
                    </section>
                </div>
            </motion.div>
        </LegalLayout>
    );
}
