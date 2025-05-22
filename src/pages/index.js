import Head from 'next/head';
import PropTypes from 'prop-types';
import { getAllItems, getFeaturedItems } from '../lib/items-util';
import HeaderOne from '../components/header/header-1';
import Hero from '../components/home-page/hero';
import Services from '../components/home-page/services';
import About from '../components/home-page/about';
import PricingTab from '../components/home-page/pricing-tab';
import Testimonial from '../components/home-page/testimonial';
import Brand from '../components/home-page/brand';
import FeaturedPost from '../components/home-page/featured-post';
import LatestProject from '../components/home-page/latest-project';

function HomePage({
    heroItems,
    services,
    projects,
    pricingItems,
    testimonialItems,
    brandItems,
    posts,
}) {
    return (
        <>
            <Head>
                <title> DIVYA Sshakti Realtors </title>
                <meta
                    name="description"
                    content="With over 7 years of experience in the real estate market, Divya Sshakti Realtor stands out as a trusted name in Nallasopara and Umroli East. Our dedicated team has successfully helped over 100 satisfied customers find their perfect homes, thanks to our deep understanding of the local market and our commitment to exceptional service. We proudly collaborate with Shreenath Enterprises, a leading developer partner, to bring you a wide range of high-quality properties that meet your needs and exceed your expectations. Whether you're looking for your first home, an investment property, or a new place to settle down, we offer personalized solutions tailored to your unique requirements. Explore our listings and experience the difference that expertise and dedication can make. At Divya Sshakti Realtor, your dream home is just a call away."
                />
            </Head>
            <HeaderOne />
            <Hero heroItems={heroItems} />
            <Services services={services} />
            <LatestProject projects={projects} />
            <About />
            <PricingTab pricingItems={pricingItems} />
            <Testimonial
                testimonialItems={testimonialItems}
                testimonialTitle="+1,250 Happy Clients"
            />
            <Brand brandItems={brandItems} />
            <FeaturedPost posts={posts} />
        </>
    );
}

export function getStaticProps() {
    const heroItems = getAllItems('heros');
    const posts = getAllItems('posts');
    const projects = getAllItems('projects');
    const services = getAllItems('services');
    const pricingItems = getAllItems('pricing');
    const testimonialItems = getAllItems('testimonial');
    const brandItems = getAllItems('brands');
    const LatestProject = getFeaturedItems(projects);
    const FeaturedPost = getFeaturedItems(posts);

    return {
        props: {
            heroItems,
            projects: LatestProject,
            posts: FeaturedPost,
            services,
            pricingItems,
            testimonialItems,
            brandItems,
        },
    };
}

HomePage.propTypes = {
    heroItems: PropTypes.instanceOf(Object).isRequired,
    services: PropTypes.instanceOf(Object).isRequired,
    projects: PropTypes.instanceOf(Object).isRequired,
    pricingItems: PropTypes.instanceOf(Object).isRequired,
    testimonialItems: PropTypes.instanceOf(Object).isRequired,
    brandItems: PropTypes.instanceOf(Object).isRequired,
    posts: PropTypes.instanceOf(Object).isRequired,
};

export default HomePage;
