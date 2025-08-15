import GradientHero from '@/components/Hero';
import Services from '../components/Services';
import { NavbarExample } from '@/app/components/navbar-example';
import Globe from '@/app/components/ui/globe';
import ProductCards from '@/app/components/ui/product-cards';
import FooterGlow from '@/app/components/ui/footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <NavbarExample />
      <GradientHero />
      <Globe />
      <Services />
      <ProductCards />
      <FooterGlow />
    </div>
  );
}