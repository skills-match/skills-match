import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import H1 from "@/components/ui/textos/Title";
import Button from "@/components/ui/button/Button";
import { Text } from "@/components/ui/textos/Text";

const NotFound = () => {
  const location = useLocation();

  const navigate = useNavigate();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center flex flex-col justify-center items-center">
        <Text colors="foreground" className="text-8xl font-extrabold mb-4">
          404
        </Text>

        <Text colors="mutedForeground" size="lg" className="mb-8 max-w-60">
        Parece que você chegou a um lugar vazio.
        </Text>
        <Button className="text-white" variant="primary" onClick={() => navigate("/home")}>
          Voltar para a Home
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
