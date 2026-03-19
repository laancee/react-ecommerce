
import React from 'react';

const Policies = () => {
  return (
    <div className="container my-4">
      <h2 className="mb-3">Policies / Terms &amp; Conditions</h2>
      <p className="text-muted">
        Last updated: {new Date().toLocaleDateString()}
      </p>

      {/* Section: Store Rules / General Terms */}
      <section className="mb-4">
        <h5 className="mb-2">1. Store Rules &amp; General Terms</h5>
        <ul className="mb-0">
          <li>All prices are shown in your local currency and include applicable taxes unless stated otherwise.</li>
          <li>Promotions, discounts, and vouchers are time‑limited and subject to availability.</li>
          <li>Abusive behavior, fraudulent activity, or policy violations may result in order cancellation or account restriction.</li>
        </ul>
      </section>

      {/* Section: Orders & Payments */}
      <section className="mb-4">
        <h5 className="mb-2">2. Orders &amp; Payments</h5>
        <ul className="mb-0">
          <li>Orders are confirmed only after successful payment authorization.</li>
          <li>We accept major payment methods displayed at checkout.</li>
          <li>If a pricing or stock error occurs, we reserve the right to cancel and fully refund the order.</li>
        </ul>
      </section>

      {/* Section: Shipping & Delivery */}
      <section className="mb-4">
        <h5 className="mb-2">3. Shipping &amp; Delivery</h5>
        <ul className="mb-0">
          <li>Estimated delivery windows are provided at checkout and may vary due to courier or weather conditions.</li>
          <li>Once shipped, you will receive a tracking number when available.</li>
          <li>Risk of loss passes to you upon carrier acceptance unless otherwise required by local law.</li>
        </ul>
      </section>

      {/* Section: Returns & Refunds */}
      <section className="mb-4">
        <h5 className="mb-2">4. Returns &amp; Refunds</h5>
        <ul className="mb-0">
          <li>Eligible items may be returned within 7–15 days of delivery (see product page for exceptions).</li>
          <li>Items must be unused and in original packaging with all accessories.</li>
          <li>Refunds are issued to the original payment method after inspection.</li>
        </ul>
      </section>

      {/* Section: Warranty */}
      <section className="mb-4">
        <h5 className="mb-2">5. Warranty</h5>
        <ul className="mb-0">
          <li>Manufacturer warranties apply where stated on the product page.</li>
          <li>Warranty does not cover accidental damage, misuse, or normal wear and tear.</li>
        </ul>
      </section>

      {/* Section: Privacy */}
      <section className="mb-4">
        <h5 className="mb-2">6. Privacy</h5>
        <p className="mb-0">
          We collect only the data necessary to fulfill your order and improve our services. Personal data is processed according to our privacy practices and applicable laws. You may request access, correction, or deletion where allowed.
        </p>
      </section>

      {/* Section: Contact */}
      <section className="mb-4">
        <h5 className="mb-2">7. Contact Us</h5>
        <p className="mb-0">
          If you have questions about these terms, please reach out via the Contact page.
        </p>
      </section>

      <hr />
      <small className="text-muted">
        These Terms are provided as a template/example. Update them to match your actual store policies and local regulations.
      </small>
    </div>
  );
};

export default Policies;
