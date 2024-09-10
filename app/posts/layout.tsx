import Footer from "@/components/footer";
import Header from "@/components/header";
import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <main className="min-h-screen relative">
      <Header />
      <section className="py-32">{children}</section>
      <Footer />
    </main>
  );
}
