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
                {/* Intro */}
                <section>
                    <p className="leading-relaxed">
                        Thank you for choosing Zapurse. This Refund & Cancellation Policy outlines
                        the terms and conditions governing cancellations and refunds on our platform.
                    </p>
                </section>

                <div className="grid gap-10">
                    {/* Section 1 */}
                    <section className="p-8 rounded-[2rem] bg-white dark:bg-gray-800/40 border border-gray-100 dark:border-gray-800 shadow-sm relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/5 rounded-full blur-3xl" />
                        <h4>1. No Cancellation Once the Transaction Is Processed</h4>
                        <div className="space-y-4">
                            <p>
                                All transactions made through Zapurse — including prepaid mobile recharge,
                                DTH recharge, and bill payments — are instant and final.
                            </p>
                            <p>
                                Once a transaction request is submitted and successfully processed, it
                                cannot be cancelled, as the service is delivered immediately to the
                                respective operator or service provider.
                            </p>
                        </div>
                    </section>

                    {/* Section 2 */}
                    <section className="p-8 rounded-[2rem] bg-white dark:bg-gray-800/40 border border-gray-100 dark:border-gray-800 shadow-sm">
                        <h4>2. Refund Policy</h4>
                        <p className="mb-6">
                            Refunds are allowed only in the specific cases mentioned below:
                        </p>

                        <div className="space-y-8">
                            {/* Failed */}
                            <div className="p-6 bg-primary/5 rounded-2xl border border-primary/10">
                                <h5>Failed Transactions</h5>
                                <p className="mb-4">
                                    A transaction is considered failed if:
                                </p>
                                <ul className="space-y-2 list-none pl-0 mb-6">
                                    <li className="flex items-center gap-2">
                                        <div className="w-1.5 h-1.5 rounded-full bg-gray-400" />
                                        The amount is deducted from your bank account, wallet, or card
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <div className="w-1.5 h-1.5 rounded-full bg-gray-400" />
                                        The recharge or bill payment is not successful
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <div className="w-1.5 h-1.5 rounded-full bg-gray-400" />
                                        The amount is not passed to the operator or service provider
                                    </li>
                                </ul>
                                <p className="mb-2">In such cases:</p>
                                <ul className="space-y-2 list-none pl-0">
                                    <li className="flex items-center gap-2">
                                        <div className="w-1.5 h-1.5 rounded-full bg-gray-400" />
                                        The deducted amount will be refunded automatically
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <div className="w-1.5 h-1.5 rounded-full bg-gray-400" />
                                        Refund timelines range between 3–7 working days
                                    </li>
                                </ul>
                            </div>

                            {/* Pending */}
                            <div className="p-6 bg-secondary/5 rounded-2xl border border-secondary/10">
                                <h5>Pending Transactions</h5>
                                <p className="mb-4">
                                    If a transaction remains pending due to operator-side delay:
                                </p>
                                <ul className="space-y-3 list-none pl-0">
                                    <li className="flex gap-2">
                                        <div className="w-1.5 h-1.5 rounded-full bg-gray-400 mt-2" />
                                        Final status may take up to 24 hours
                                    </li>
                                    <li className="flex gap-2">
                                        <div className="w-1.5 h-1.5 rounded-full bg-gray-400 mt-2" />
                                        Refunds are issued only if the operator confirms failure
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* Section 3 */}
                    <section className="p-8 rounded-[2rem] bg-white dark:bg-gray-800/40 border border-gray-100 dark:border-gray-800 shadow-sm">
                        <h4>3. Exceptions (No Refund)</h4>
                        <p className="mb-6">
                            Refunds will not be issued in the following situations:
                        </p>
                        <div className="grid md:grid-cols-2 gap-4">
                            {[
                                "Incorrect details entered by the user",
                                "Wrong operator or circle selected",
                                "Transaction marked successful by operator",
                                "User dissatisfaction after success",
                                "Duplicate recharge requests",
                                "Incorrect or incomplete information provided"
                            ].map((item, i) => (
                                <div
                                    key={i}
                                    className="flex items-center gap-3 p-4 bg-gray-50 dark:bg-gray-900 rounded-xl border border-gray-100 dark:border-gray-800"
                                >
                                    <div className="w-1 h-1 rounded-full bg-gray-400" />
                                    {item}
                                </div>
                            ))}
                        </div>
                        <p className="mt-8 text-center font-semibold">
                            Zapurse is not responsible for errors caused by incorrect user input.
                        </p>
                    </section>

                    {/* Section 4 & 5 */}
                    <div className="grid md:grid-cols-2 gap-8">
                        <section className="p-8 rounded-[2rem] bg-white dark:bg-gray-800/40 border border-gray-100 dark:border-gray-800 shadow-sm">
                            <h4>4. Processing Time for Refunds</h4>
                            <div className="space-y-4">
                                <div className="flex justify-between p-4 bg-primary/5 rounded-xl border border-primary/10">
                                    <span className="font-semibold">UPI</span>
                                    <span className="font-bold">1–3 business days</span>
                                </div>
                                <div className="flex justify-between p-4 bg-primary/5 rounded-xl border border-primary/10">
                                    <span className="font-semibold">Debit Card / Bank</span>
                                    <span className="font-bold">3–7 business days</span>
                                </div>
                                <p className="text-xs opacity-60 italic">
                                    Refund timelines may vary based on bank policies.
                                </p>
                            </div>
                        </section>

                        <section className="p-8 rounded-[2rem] bg-white dark:bg-gray-800/40 border border-gray-100 dark:border-gray-800 shadow-sm">
                            <h4>5. Disputes & Support</h4>
                            <p className="mb-4">
                                For failed or pending transactions, contact support with:
                            </p>
                            <ul className="space-y-1 list-none pl-0 mb-6">
                                <li className="flex items-center gap-2">
                                    <div className="w-1.5 h-1.5 rounded-full bg-gray-400" />
                                    Transaction ID
                                </li>
                                <li className="flex items-center gap-2">
                                    <div className="w-1.5 h-1.5 rounded-full bg-gray-400" />
                                    Registered mobile number
                                </li>
                                <li className="flex items-center gap-2">
                                    <div className="w-1.5 h-1.5 rounded-full bg-gray-400" />
                                    Date and time of transaction
                                </li>
                            </ul>
                            <p><strong>Email:</strong> support@zapurse.com</p>
                            <p><strong>Website:</strong> www.zapurse.in</p>
                        </section>
                    </div>

                    {/* Section 6 */}
                    <section className="p-8 rounded-[2rem] bg-white dark:bg-gray-800/40 border border-gray-100 dark:border-gray-800 shadow-sm">
                        <h4>6. Operator-Level Policies</h4>
                        <p className="max-w-2xl mx-auto opacity-80">
                            Refunds depend on final operator status. If marked successful by the operator,
                            no refund can be issued even in case of non-receipt.
                        </p>
                    </section>

                    {/* Footer */}
                    <section className="p-10 rounded-[2.5rem] bg-gradient-to-br from-[#254458] to-[#c0cc64]/20 text-white shadow-lg relative overflow-hidden">
                        <h4>7. Modification of Policy</h4>
                        <p className="opacity-90 leading-relaxed">
                            Zapurse reserves the right to modify this policy at any time.
                            Changes will be published on the Zapurse app or website.
                        </p>
                    </section>
                </div>
            </motion.div>
        </LegalLayout>
    );
}
