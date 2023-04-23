import Image from "next/image";
import { Inter } from "next/font/google";
import { Layout } from "@/components/Layout/Layout";
import { HeroSection } from "@/components/Hero/HeroSection";
import { Faq } from "@/components/Faq/Faq";
import { About } from "@/components/About/About";
import { Products } from "@/components/Products/Products";
import { BlogsAll } from "@/components/Blogs/BlogsAll";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Layout>
      <HeroSection />
      <About />
      <Products />
      <BlogsAll />
      <Faq />
    </Layout>
  );
}
