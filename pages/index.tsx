import Image from "next/image";
import { Inter } from "next/font/google";
import { Layout } from "@/components/Layout/Layout";
import { HeroSection } from "@/components/Hero/HeroSection";
import { Faq } from "@/components/Faq/Faq";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Layout>
      <HeroSection />
      <Faq />
    </Layout>
  );
}
