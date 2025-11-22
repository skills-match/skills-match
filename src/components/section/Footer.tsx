import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Phone, Mail, MoveUp, ChevronUp } from "lucide-react";
import { LiFooter } from "./LiFooter";
import { Text } from "../ui/textos/Text";

const Footer: React.FC = () => {
  const navigate = useNavigate();

  return (
    <footer className="bg-background border-t border-border scroll-smooth text-foreground">
      <div className="max-w-7xl mx-auto px-8 sm:px-6 lg:px-8 py-12 flex flex-col justify-center">
        <div className="flex flex-col md:flex-row md:justify-around gap-8">
          {/* Brand */}
          <div className="flex flex-col items-start">
            <div className="flex items-center space-x-20 mb-4">
              <div className="w-full relative p-2 right-5 bg-gradient-primary rounded-lg flex flex-col items-start justify-start max-w-44 gap-5">
                <img className="h-14" src="/logo.png" alt="Logo HC Conecta" />
                <Text size="md" colors="mutedForeground">
                  Orientação vocacional inteligente com IA.
                </Text>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <Text size="md" colors="primary" className="mb-4 font-semibold">Links Úteis</Text>
            <ul className="space-y-2">
              <LiFooter onClick={() => navigate("/home")}>
               Home
              </LiFooter>
              <LiFooter onClick={() => navigate("/sobre")}>
                Sobre
              </LiFooter>
              <LiFooter onClick={() => navigate("/faq")}>
               FAQ
              </LiFooter>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center ">
          <Text size="sm" colors="mutedForeground">
            © 2025 Skills Match - Todos os direitos reservados.
          </Text>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
