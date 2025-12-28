import { Helmet } from 'react-helmet-async';
import Layout from '@/components/layout/Layout';

const Privacy = () => {
  return (
    <>
      <Helmet>
        <title>Privacy Policy | Paradise Nursery</title>
        <meta
          name="description"
          content="Read about how Paradise Nursery collects, uses, and protects your personal information."
        />
      </Helmet>
      <Layout>
        {/* Hero Section */}
        <section className="gradient-hero py-16 lg:py-20">
          <div className="container-main text-center">
            <h1 className="font-display text-3xl font-bold text-primary-foreground sm:text-4xl lg:text-5xl">
              Privacy Policy
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
                  1. Information We Collect
                </h2>
                <p className="text-muted-foreground mb-4">
                  We collect information you provide directly to us, including:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>Name, email address, and phone number when you create an account</li>
                  <li>Shipping and billing address when you make a purchase</li>
                  <li>Payment information (processed securely through our payment provider)</li>
                  <li>Communications you send to us</li>
                  <li>Information you provide when contacting customer support</li>
                </ul>
              </div>

              <div className="rounded-2xl bg-card p-8 shadow-soft">
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                  2. How We Use Your Information
                </h2>
                <p className="text-muted-foreground mb-4">
                  We use the information we collect to:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>Process and fulfill your orders</li>
                  <li>Send you order confirmations and shipping updates</li>
                  <li>Respond to your questions and provide customer support</li>
                  <li>Send you marketing communications (with your consent)</li>
                  <li>Improve our website and services</li>
                  <li>Prevent fraud and ensure security</li>
                </ul>
              </div>

              <div className="rounded-2xl bg-card p-8 shadow-soft">
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                  3. Information Sharing
                </h2>
                <p className="text-muted-foreground mb-4">
                  We do not sell your personal information. We may share your information with:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>Service providers who assist in our operations (shipping, payment processing)</li>
                  <li>Professional advisors for legal compliance</li>
                  <li>Law enforcement when required by law</li>
                </ul>
              </div>

              <div className="rounded-2xl bg-card p-8 shadow-soft">
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                  4. Data Security
                </h2>
                <p className="text-muted-foreground">
                  We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. This includes encryption, secure servers, and regular security assessments.
                </p>
              </div>

              <div className="rounded-2xl bg-card p-8 shadow-soft">
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                  5. Cookies and Tracking
                </h2>
                <p className="text-muted-foreground">
                  We use cookies and similar technologies to enhance your browsing experience, analyze site traffic, and personalize content. You can control cookie preferences through your browser settings.
                </p>
              </div>

              <div className="rounded-2xl bg-card p-8 shadow-soft">
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                  6. Your Rights
                </h2>
                <p className="text-muted-foreground mb-4">
                  You have the right to:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>Access your personal information</li>
                  <li>Correct inaccurate information</li>
                  <li>Request deletion of your data</li>
                  <li>Opt out of marketing communications</li>
                  <li>Request a copy of your data</li>
                </ul>
              </div>

              <div className="rounded-2xl bg-card p-8 shadow-soft">
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                  7. Contact Us
                </h2>
                <p className="text-muted-foreground">
                  If you have questions about this Privacy Policy or your personal information, please contact us at:
                </p>
                <p className="text-muted-foreground mt-4">
                  <strong className="text-foreground">Paradise Nursery</strong><br />
                  123 Green Street<br />
                  Garden City, GC 12345<br />
                  Email: privacy@paradisenursery.com<br />
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

export default Privacy;
