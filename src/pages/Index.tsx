import { Helmet } from 'react-helmet-async';
import Layout from '@/components/layout/Layout';
import Hero from '@/components/home/Hero';
import Categories from '@/components/home/Categories';
import FeaturedProducts from '@/components/home/FeaturedProducts';
import Testimonials from '@/components/home/Testimonials';
import Newsletter from '@/components/home/Newsletter';

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Paradise Nursery | Beautiful Indoor & Outdoor Plants</title>
        <meta
          name="description"
          content="Discover beautiful indoor and outdoor plants, decorative pots, and gardening accessories at Paradise Nursery. Transform your space with nature."
        />
      </Helmet>
      <Layout>
        <Hero />
        <Categories />
        <FeaturedProducts />
        <Testimonials />
        <Newsletter />
      </Layout>
    </>
  );
};

export default Index;
