import { Helmet } from 'react-helmet-async';
import Layout from '@/components/layout/Layout';

const Terms = () => {
  return (
    <>
      <Helmet>
        <title>Terms of Service | Paradise Nursery</title>
        <meta
          name="description"
          content="Read the terms and conditions for using Paradise Nursery's website and services."
        />
      </Helmet>
      <Layout>
        {/* Hero Section */}
        <section className="gradient-hero py-16 lg:py-20">
          <div className="container-main text-center">
            <h1 className="font-display text-3xl font-bold text-primary-foreground sm:text-4xl lg:text-5xl">
              Terms of Service
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-primary-foreground/80">
              Last updated: December 2024
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="py-12 lg:py-20">
          <div className="container-main max-w-4xl">
            <div className="prose prose-lg max-w-none space-y-8">
              <div className="rounded-2xl bg-card p-8 shadow-soft">
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                  1. Acceptance of Terms
                </h2>
                <p className="text-muted-foreground">
                  By accessing and using the Paradise Nursery website, you accept and agree to be bound by the terms and conditions of this agreement. If you do not agree to these terms, please do not use our website or services.
                </p>
              </div>

              <div className="rounded-2xl bg-card p-8 shadow-soft">
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                  2. Products and Services
                </h2>
                <p className="text-muted-foreground mb-4">
                  Paradise Nursery offers plants, pots, and gardening accessories for purchase through our website. All products are subject to availability.
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>Product images are for illustration purposes; actual plants may vary slightly</li>
                  <li>We reserve the right to limit quantities or discontinue products</li>
                  <li>Prices are subject to change without notice</li>
                  <li>All prices are in USD unless otherwise stated</li>
                </ul>
              </div>

              <div className="rounded-2xl bg-card p-8 shadow-soft">
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                  3. Ordering and Payment
                </h2>
                <p className="text-muted-foreground mb-4">
                  When you place an order, you agree that:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>You are authorized to use the payment method provided</li>
                  <li>All information you provide is accurate and complete</li>
                  <li>We may verify your information before processing your order</li>
                  <li>We reserve the right to refuse or cancel orders at our discretion</li>
                </ul>
              </div>

              <div className="rounded-2xl bg-card p-8 shadow-soft">
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                  4. Shipping and Delivery
                </h2>
                <p className="text-muted-foreground mb-4">
                  We strive to deliver all orders promptly and in excellent condition:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>Shipping times are estimates and not guaranteed</li>
                  <li>Risk of loss passes to you upon delivery</li>
                  <li>We are not responsible for delays caused by carriers or weather</li>
                  <li>You are responsible for providing accurate shipping information</li>
                </ul>
              </div>

              <div className="rounded-2xl bg-card p-8 shadow-soft">
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                  5. Returns and Refunds
                </h2>
                <p className="text-muted-foreground mb-4">
                  We offer a 30-day satisfaction guarantee on all plants:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>Plants that arrive damaged will be replaced or refunded</li>
                  <li>Contact us within 48 hours of delivery for damaged plant claims</li>
                  <li>Accessories and pots must be unused for returns</li>
                  <li>Refunds are processed within 5-7 business days</li>
                </ul>
              </div>

              <div className="rounded-2xl bg-card p-8 shadow-soft">
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                  6. User Accounts
                </h2>
                <p className="text-muted-foreground">
                  When you create an account, you are responsible for maintaining the confidentiality of your account credentials and for all activities under your account. You agree to notify us immediately of any unauthorized use.
                </p>
              </div>

              <div className="rounded-2xl bg-card p-8 shadow-soft">
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                  7. Intellectual Property
                </h2>
                <p className="text-muted-foreground">
                  All content on this website, including text, images, logos, and designs, is the property of Paradise Nursery and protected by copyright laws. You may not reproduce, distribute, or use our content without written permission.
                </p>
              </div>

              <div className="rounded-2xl bg-card p-8 shadow-soft">
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                  8. Limitation of Liability
                </h2>
                <p className="text-muted-foreground">
                  Paradise Nursery is not liable for any indirect, incidental, or consequential damages arising from your use of our website or products. Our maximum liability is limited to the amount you paid for the specific product in question.
                </p>
              </div>

              <div className="rounded-2xl bg-card p-8 shadow-soft">
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                  9. Changes to Terms
                </h2>
                <p className="text-muted-foreground">
                  We reserve the right to update these terms at any time. Changes will be effective immediately upon posting. Your continued use of the website constitutes acceptance of the modified terms.
                </p>
              </div>

              <div className="rounded-2xl bg-card p-8 shadow-soft">
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                  10. Contact Information
                </h2>
                <p className="text-muted-foreground">
                  For questions about these Terms of Service, contact us at:
                </p>
                <p className="text-muted-foreground mt-4">
                  <strong className="text-foreground">Paradise Nursery</strong><br />
                  123 Green Street<br />
                  Garden City, GC 12345<br />
                  Email: legal@paradisenursery.com<br />
                  Phone: (555) 123-4567
                </p>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Terms;
