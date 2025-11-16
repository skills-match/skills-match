import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Button from "../ui/button/Button";
import {
  LogIn,
  LogOut,
  MenuIcon,
  UserCog,
  UserRoundPlus,
  UserRoundPlusIcon,
  X,
} from "lucide-react";
import { navigationItems } from "@/data/navigation-items";

const Header: React.FC = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  const [isLoggedIn] = useState<string>(localStorage.getItem("loggedIn"));

  const navigateProfile = (): void => {
    const userId: string | null = localStorage.getItem("userId");
    if (!userId) {
      alert("User not found");
      return;
    }
    navigate(`/perfil/${userId}`);
  };

  const navigate = useNavigate();

  return (
    <header className="shadow-md border-b bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-full bg-gradient-primary rounded-lg flex items-center justify-center">
              <img
                onClick={() => navigate("/home")}
                className="max-h-14 w-auto cursor-pointer"
                src="/logo.png"
                alt="Logo Skills Match"
              />
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-2 items-center">
            {navigationItems.map(
              (item) =>
                item.name !== "Entrar" &&
                item.name !== "Criar Conta" && (
                  <button
                    key={item.path}
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      navigate(item.path);
                    }}
                    className={`block px-2 py-3 rounded-lg text-base font-medium transition-colors ${
                      location.pathname === item.path
                        ? "text-foreground text-sm hover:text-primary font-semibold"
                        : "text-foreground text-sm hover:text-primary font-semibold"
                    }`}
                  >
                    {item.name}
                  </button>
                )
            )}

            {isLoggedIn !== "true" ? (
              <div className="flex gap-3">
                <Button
                  onClick={() => navigate("/login")}
                  size="sm"
                  className="hidden lg:flex gap-2 items-center justify-center "
                  variant="outline"
                >
                  {" "}
                  <i>
                    <LogIn size={18} />{" "}
                  </i>{" "}
                  Entrar{" "}
                </Button>
                <Button
                  onClick={() => navigate("/registrar")}
                  size="sm"
                  className="hidden lg:flex gap-2 items-center text-white justify-center"
                  variant="primary"
                >
                  {" "}
                  <i>
                    <UserRoundPlus size={18} className="text-white" />{" "}
                  </i>{" "}
                  Criar Conta{" "}
                </Button>
              </div>
            ) : (
              <div className="flex gap-3">
                <Button
                  size="sm"
                  onClick={() => {
                    navigate("/home");
                    localStorage.setItem("loggedIn", "false");
                    window.location.reload();
                  }}
                  variant="outline"
                  className="hidden xl:flex gap-2 items-center"
                >
                  <i>
                    {" "}
                    <LogOut size={18} />{" "}
                  </i>
                  <p className="font-medium "> Sair</p>
                </Button>
                <Button
                  size="sm"
                  onClick={() => navigateProfile()}
                  variant="primary"
                  className="hidden lg:flex gap-2 items-center"
                >
                  <i>
                    {" "}
                    <UserCog size={18} className="text-white" />{" "}
                  </i>
                  <p className="text-white font-medium "> Acessar Perfil </p>
                </Button>
              </div>
            )}
          </nav>

          {/* Mobile menu button */}
          {isMobileMenuOpen === false ? (
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text- text-foreground"
              aria-label="Abrir menu"
            >
              <MenuIcon />
            </button>
          ) : (
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-foreground"
              aria-label="Fechar menu"
            >
              <X />
            </button>
          )}
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border">
            <nav className="space-y-2">
              {navigationItems
                .filter(
                  (item) =>
                    item.name !== "Entrar" && item.name !== "Criar Conta"
                )
                .map((item) => (
                  <button
                    key={item.path}
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      navigate(item.path);
                    }}
                    className={`block px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                      location.pathname === item.path
                        ? "text-foreground text-sm hover:text-primary font-semibold"
                        : "text-foreground text-sm hover:text-primary font-semibold"
                    }`}
                  >
                    {item.name}
                  </button>
                ))}

              {isLoggedIn !== "true" ? (
                <>
                  <div className="flex items-center px-2 py-3 gap-2">
                    <i>
                      <LogIn size={20} className="text-primary" />
                    </i>
                    <button
                      onClick={() => {
                        setIsMobileMenuOpen(false);
                        navigate("/login");
                      }}
                      className="block rounded-lg font-medium text-sm transition-colors text-primary"
                    >
                      Entrar
                    </button>
                  </div>
                  <div className="flex items-center px-2 py-3 gap-2">
                    <i>
                      <UserRoundPlusIcon size={20} className="text-primary" />
                    </i>
                    <button
                      onClick={() => {
                        setIsMobileMenuOpen(false);
                        navigate("/registrar");
                      }}
                      className="block rounded-lg font-medium transition-colors text-sm text-primary"
                    >
                      Criar Conta
                    </button>
                  </div>
                </>
              ) : (
                <div className="flex flex-col justify-center items-start px-3 py-2 gap-5">
                  <div className="flex items-center gap-2">
                    <i>
                      <UserCog size={20} className="text-primary" />
                    </i>
                    <button
                      onClick={() => {
                        setIsMobileMenuOpen(false);
                        navigate(`perfil/${localStorage.getItem("userId")}`);
                      }}
                      className="block rounded-lg font-medium transition-colors text-primary"
                    >
                      Acessar Perfil
                    </button>
                  </div>
                  <div className="flex items-center gap-2">
                    <i>
                      <LogOut size={20} className="text-primary" />
                    </i>
                    <button
                      onClick={() => {
                        setIsMobileMenuOpen(false);
                        navigate("/home");
                        localStorage.setItem("loggedIn", "false");
                        window.location.reload();
                      }}
                      className="block rounded-lg font-medium transition-colors text-primary"
                    >
                      Sair
                    </button>
                  </div>
                </div>
              )}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
