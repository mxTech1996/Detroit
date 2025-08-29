'use client';

import { useRouter } from 'next/navigation';
import Navbar from '../../components/organisms/Navbar';

import HeroSection from '@/components/organisms/Hero';
import AboutSection from '@/components/organisms/About';

export default function Home() {
  const navigate = useRouter();

  return (
    <div>
      <Navbar />
      <HeroSection />
      <AboutSection />
    </div>
  );
}
