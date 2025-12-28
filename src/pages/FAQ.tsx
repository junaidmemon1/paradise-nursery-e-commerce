import { Helmet } from 'react-helmet-async';
import { HelpCircle, ChevronDown } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqCategories = [
  {
    category: 'Ordering & Shipping',
    questions: [
      {
        question: 'How long does shipping take?',
        answer: 'We typically process orders within 1-2 business days. Standard shipping takes 5-7 business days, while express shipping takes 2-3 business days. All plants are carefully packaged to ensure they arrive healthy and happy.',
      },
      {
        question: 'Do you offer free shipping?',
        answer: 'Yes! We offer free standard shipping on all orders over $50. For orders under $50, shipping is a flat rate of $5.99.',
      },
      {
        question: 'Can I track my order?',
        answer: 'Absolutely! Once your order ships, you\'ll receive an email with tracking information. You can also view your order status in your account under "Order History".',
      },
      {
        question: 'Do you ship internationally?',
        answer: 'Currently, we only ship within the United States. We\'re working on expanding our shipping to other countries in the future.',
      },
    ],
  },
  {
    category: 'Plant Care',
    questions: [
      {
        question: 'How do I know when to water my plant?',
        answer: 'The best way is to check the soil moisture. Stick your finger about an inch into the soil - if it feels dry, it\'s time to water. Each plant has different needs, so check our care guides for specific recommendations.',
      },
      {
        question: 'What if my plant arrives damaged?',
        answer: 'We guarantee all plants arrive in healthy condition. If your plant arrives damaged, please contact us within 48 hours with photos, and we\'ll send a replacement or provide a full refund.',
      },
      {
        question: 'Do you provide care instructions?',
        answer: 'Yes! Every plant comes with detailed care instructions including light requirements, watering schedule, and tips for keeping your plant thriving. You can also find all care guides on our website.',
      },
      {
        question: 'What should I do when my plant arrives?',
        answer: 'Give your plant time to acclimate to its new environment. Keep it in indirect light for the first week, water lightly, and avoid repotting for at least 2 weeks. This helps reduce transplant shock.',
      },
    ],
  },
  {
    category: 'Returns & Refunds',
    questions: [
      {
        question: 'What is your return policy?',
        answer: 'We offer a 30-day satisfaction guarantee on all plants. If you\'re not happy with your purchase, contact us for a refund or exchange. Planters and accessories can be returned unused within 30 days.',
      },
      {
        question: 'How do I request a refund?',
        answer: 'Contact our customer support team via email or our contact form. Please include your order number and photos if applicable. Refunds are processed within 5-7 business days.',
      },
      {
        question: 'Can I exchange a plant for a different one?',
        answer: 'Yes! If your plant isn\'t the right fit, we\'re happy to exchange it for another. Contact us within 30 days of receiving your order to arrange an exchange.',
      },
    ],
  },
  {
    category: 'Account & Orders',
    questions: [
      {
        question: 'How do I create an account?',
        answer: 'Click the profile icon in the navigation bar and select "Sign Up". You\'ll need to provide your email address and create a password. Having an account lets you track orders and save your favorites.',
      },
      {
        question: 'Can I modify or cancel my order?',
        answer: 'Orders can be modified or cancelled within 2 hours of placing them. After that, orders enter processing and cannot be changed. Contact us immediately if you need to make changes.',
      },
      {
        question: 'How do I reset my password?',
        answer: 'On the login page, click "Forgot Password" and enter your email address. We\'ll send you a link to reset your password. The link expires after 24 hours.',
      },
    ],
  },
];

const FAQ = () => {
  return (
    <>
      <Helmet>
        <title>FAQ - Frequently Asked Questions | Paradise Nursery</title>
        <meta
          name="description"
          content="Find answers to common questions about ordering, shipping, plant care, returns, and more at Paradise Nursery."
        />
      </Helmet>
      <Layout>
        {/* Hero Section */}
        <section className="gradient-hero py-16 lg:py-20">
          <div className="container-main text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary-foreground/10 mb-6">
              <HelpCircle className="h-8 w-8 text-primary-foreground" />
            </div>
            <h1 className="font-display text-3xl font-bold text-primary-foreground sm:text-4xl lg:text-5xl">
              Frequently Asked Questions
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-primary-foreground/80">
              Find answers to common questions about our products, shipping, and plant care.
            </p>
          </div>
        </section>

        {/* FAQ Content */}
        <section className="py-12 lg:py-20">
          <div className="container-main max-w-4xl">
            {faqCategories.map((category, categoryIndex) => (
              <div key={category.category} className="mb-12 last:mb-0">
                <h2 className="font-display text-2xl font-bold text-foreground mb-6">
                  {category.category}
                </h2>
                <Accordion type="single" collapsible className="space-y-4">
                  {category.questions.map((faq, index) => (
                    <AccordionItem
                      key={index}
                      value={`${categoryIndex}-${index}`}
                      className="rounded-2xl border border-border bg-card px-6 shadow-soft"
                    >
                      <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline py-5">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground pb-5 pt-0">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}

            {/* Still Have Questions */}
            <div className="mt-16 rounded-3xl bg-secondary p-8 text-center lg:p-12">
              <h3 className="font-display text-2xl font-bold text-foreground">
                Still Have Questions?
              </h3>
              <p className="mt-3 text-muted-foreground">
                Can't find what you're looking for? Our team is here to help.
              </p>
              <a
                href="/contact"
                className="mt-6 inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
              >
                Contact Us
              </a>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default FAQ;
