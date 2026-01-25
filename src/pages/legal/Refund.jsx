import LegalLayout from './LegalLayout';

export default function Refund() {
    return (
        <LegalLayout title="Refund & Cancellation Policy" lastUpdated="January 20, 2026">
            <p>
                Thank you for choosing Zapurse. This Refund & Cancellation Policy outlines
                the terms and conditions governing cancellations and refunds on our platform.
            </p>

            <br />

            <h4>1. No cancellation once the transaction is processed</h4>
            <p>
                All transactions made through Zapurse — including prepaid mobile recharge,
                DTH recharge, and bill payments — are instant and final.
            </p>
            <p>
                Once a transaction request is submitted and successfully processed, it cannot
                be cancelled, as the service is delivered immediately to the respective operator
                or service provider.
            </p>

            <br />

            <h4>2. Refund Policy</h4>
            <p>Refunds are allowed only in the specific cases mentioned below:</p>
            <br />
            <h3>2.1 Failed Transactions</h3>
            <p>A transaction is considered failed if:</p>
            <ul>
                <li>The amount is deducted from your bank account, wallet, or card, and</li>
                <li>The recharge or bill payment is not successful, and</li>
                <li>The amount is not passed to the operator or service provider.</li>
            </ul>
            <br />
            <p>In such cases:</p>
            <ul>
                <li>
                    The deducted amount will be refunded automatically to the original payment
                    method.
                </li>
                <li>
                    Refund timelines generally range between 3–7 working days, depending on
                    your bank or payment gateway.
                </li>
            </ul>
            <br />
            <h3>2.2 Pending Transactions</h3>
            <p>
                If a transaction remains in pending status due to operator-side delay :
            </p>
            <ul>
                <li>The final status may take up to 24 hours.</li>
                <li>
                    If the operator confirms failure, the amount will be refunded automatically. But if the operator confirms success, no refund will be issued.
                </li>
            </ul>

            <br />

            <h4>3. Exceptions (No Refund)</h4>
            <br />
            <p>Refunds will not be issued in the following situations:</p>
            <ul>
                <li>Incorrect mobile number, DTH number, or customer ID entered by the user</li>
                <li>Selecting the wrong operator or circle</li>
                <li>Recharge or bill payment already marked successful by the operator</li>
                <li>User dissatisfaction after a successful transaction</li>
                <li>Duplicate or repeated recharge requests made by the user</li>
                <li>Any issue arising due to incorrect or incomplete information provided by the user</li>
            </ul>
            <br />
            <p>
                Zapurse is not responsible for errors caused by incorrect user input.
            </p>

            <br />

            <h4>4. Processing Time for Refunds</h4>
            <ul>
                <li><strong>UPI:</strong> 1–3 business days</li>
                <li><strong>Debit Card / Bank:</strong> 3–7 business days</li>
            </ul>
            <p>
                Refund timelines may vary depending on your bank’s internal policies. Delays
                beyond our control may occur.
            </p>

            <br />

            <h4>5. Disputes & Support</h4>
            <p>
                If you face any issues related to a failed or pending transaction, please contact
                our support team with the following details:
            </p>
            <ul>
                <li>Transaction ID</li>
                <li>Registered mobile number</li>
                <li>Date and time of transaction</li>
            </ul>
            <br />
            <p>
                <strong>Support Contact:</strong><br />
                📧 Email: support@zapurse.com<br />
                🌐 Website: www.zapurse.in
            </p>

            <br />

            <h4>6. Operator-Level Policies</h4>
            <p>
                Certain refunds depend on telecom or DTH operator policies. Zapurse follows
                the final transaction status provided by the operator.
            </p>
            <p>
                If a transaction is marked as <strong>successful</strong> by the operator, no
                refund can be issued, even if the user claims non-receipt.
            </p>

            <br />

            <h4>7. Modification of Policy</h4>
            <p>
                Zapurse Fintech Private Limited reserves the right to modify or update this
                Refund & Cancellation Policy at any time. Any changes will be published on the
                Zapurse app or website.
            </p>
        </LegalLayout>
    );

}
