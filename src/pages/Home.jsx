import Hero from '../components/home/Hero';
import WhyZapurse from '../components/home/WhyZapurse';
import ServicesGrid from '../components/home/ServicesGrid';
import PartnersAndTestimonials from '../components/home/PartnersAndTestimonials';
import { InteractiveGridPattern } from '../components/ui/interactive-grid-pattern';

export default function Home() {
    return (
        <>
            <Hero />
            <WhyZapurse />
            <ServicesGrid />
            <PartnersAndTestimonials />
        </>
    );
}
