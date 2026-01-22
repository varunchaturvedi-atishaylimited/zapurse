import LegalLayout from './LegalLayout';

export default function Refund() {
    return (
        <LegalLayout title="Refund Policy" lastUpdated="January 20, 2026">
            <p>Thank you for choosing Zapurse. This Refund Policy outlines the terms and conditions for refunds on our platform.</p>

            <h3>1. Failed Transactions</h3>
            <p>In the event of a failed transaction where the amount has been deducted from your wallet but the service was not delivered (e.g., recharge failed, money transfer failed), the amount will be automatically refunded to your Zapurse wallet within 24-48 hours.</p>

            <h3>2. Pending Transactions</h3>
            <p>For transactions that are in a 'Pending' state, please wait for the final status update. If the transaction eventually fails, a refund will be processed automatically.</p>

            <h3>3. Wrong Transactions</h3>
            <p>We are not responsible for transactions made to incorrect beneficiaries or mobile numbers provided by you. Please verify all details carefully before confirming a transaction. Refunds cannot be processed for successful transactions to wrong recipients.</p>

            <h3>4. Contact Support</h3>
            <p>If you have not received a refund for a failed transaction after 48 hours, please contact our support team with the Transaction ID for assistance.</p>
        </LegalLayout>
    );
}
