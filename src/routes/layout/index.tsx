import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { ChevronUp } from "lucide-react";
import Header from "@/components/section/Header";
import Footer from "@/components/section/Footer";

export default function Layout() {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowScroll(window.scrollY > 200);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground relative overflow-x-hidden">
      {/* Header */}
      <Header />

      {/* Conteúdo principal */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Botão de voltar ao topo */}
      {showScroll && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-8 right-8 lg:right-16 p-3 rounded-full bg-primary text-white shadow-lg hover:bg-secondary transition-all duration-300 animate-bounce z-50"
          aria-label="Voltar ao topo"
        >
          <ChevronUp className="h-6 w-6" />
        </button>
      )}

      {/* Footer */}
      <Footer />
    </div>
  );
}
