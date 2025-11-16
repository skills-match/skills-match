import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Button from "@/components/ui/button/Button";
import { FileUser, Lock, CheckCircle2 } from "lucide-react";
import InputLogin from "@/components/ui/input/Input-login";
import { useForm } from "react-hook-form";
import { cpfMask } from "@/utils/mask/cpf-mask";
import { verifyUser } from "@/services/api";
import ILoginContext from "@/interfaces/ILogin-context";
import IProfileData from "@/interfaces/IProfile-data";
import { H3 } from "@/components/ui/textos/H3";
import { Text } from "@/components/ui/textos/Text";

const Login = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [loginExist, setLoginExist] = useState<boolean>(true);

  const [isLoggedIn, setIsLoggedIn] = useState<ILoginContext>(() => {
    const stored = localStorage.getItem("loggedIn");
    return { loggedIn: stored === "true" ? "true" : "false" };
  });

  const handleLogin = () => {
    setIsLoggedIn({ loggedIn: "true" });
    localStorage.setItem("loggedIn", "true");
  };

  const handleLogout = () => {
    setIsLoggedIn({ loggedIn: "false" });
    localStorage.setItem("loggedIn", "false");
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IProfileData>();

  const onSubmit = async (data: IProfileData) => {
    if (data) {
      const verify = await verifyUser(data);

      if (verify !== false) {
        handleLogin();
        navigate("/home");
      } else {
        setLoginExist(false);
      }
    } else {
      handleLogout();
    }
  };

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen w-full px-6 md:px-12 flex items-center justify-center bg-gradient-to-br from-primary/5 via-transparent to-primary/5">

      {/* GRID PRINCIPAL */}
      <div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

        {/* LADO ESQUERDO */}
        <div>
          <p className="text-sm font-medium text-primary mb-3">
            BEM-VINDO DE VOLTA
          </p>

          <h1 className="text-4xl md:text-5xl font-bold leading-tight text-foreground">
            Descubra sua <br />
            <span className="text-primary">carreira ideal</span>
          </h1>

          <p className="text-muted-foreground mt-4 max-w-md">
            Acesse sua conta para continuar explorando oportunidades
            personalizadas e receber recomendações baseadas em IA.
          </p>

          {/* LISTA DE BENEFÍCIOS */}
          <div className="mt-8 space-y-3">
            {[
              "Análise de perfil profissional",
              "Recomendações de cursos personalizadas",
              "Conversa com IA especialista",
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-3">
                <CheckCircle2 className="text-primary" size={22} />
                <span className="text-foreground">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CARD DE LOGIN */}
        <div className="bg-white dark:bg-surface p-10 rounded-2xl shadow-xl border border-border w-full max-w-md mx-auto">

          <div className="mb-8">
            <H3 isStronger={true}>Entrar</H3>
            <Text>Use suas credenciais para acessar a plataforma</Text>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">

            {/* CPF */}
            <fieldset className="flex flex-col gap-2 relative">
              <label className="text-md font-medium text-foreground">
                CPF *
              </label>

              <FileUser size={20} className="absolute left-3 top-12 text-gray-500" />

              <input
                {...register("cpf", { required: true, maxLength: 14 })}
                onChange={(e) => {
                  e.target.value = cpfMask(e.target.value);
                }}
                type="text"
                placeholder="123.456.789-00"
                className="w-full px-10 py-3 border border-input rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              />

              {errors.cpf?.type === "required" && (
                <p className="text-red-500 text-sm">CPF é obrigatório.</p>
              )}
              {errors.cpf?.type === "maxLength" && (
                <p className="text-red-500 text-sm">
                  Máximo de 11 caracteres permitido.
                </p>
              )}
            </fieldset>

            {/* SENHA */}
            <fieldset className="flex flex-col gap-2">
              <InputLogin
                register={register}
                passwordExist={true}
                rules={{ required: true, minLength: 8 }}
                icon={
                  <Lock size={20} className="absolute left-3 top-12 text-gray-500" />
                }
                id="password"
                label="Senha *"
                placeholder="Digite sua senha"
                name="password"
                type="password"
                errors={errors}
              />

              {errors.password?.type === "required" && (
                <p className="text-red-500 text-sm">Senha é obrigatória.</p>
              )}
              {errors.password?.type === "minLength" && (
                <p className="text-red-500 text-sm">
                  Mínimo de 8 caracteres.
                </p>
              )}
            </fieldset>

            {/* ERRO LOGIN */}
            {!loginExist && (
              <p className="text-red-500 text-sm -mt-2">
                CPF ou senha incorretos.
              </p>
            )}

            {/* BOTÃO */}
            <Button type="submit" size="lg" className="w-full text-white">
              Entrar
            </Button>

            {/* CRIAR CONTA */}
            <div className="text-center flex gap-2 justify-center mt-2">
              <Text>Não tem conta?</Text>
              <button
                type="button"
                onClick={() => navigate("/registrar")}
                className="text-primary font-medium hover:underline"
              >
                Criar conta agora
              </button>
            </div>
          </form>
        </div>

      </div>
    </div>
  );
};

export default Login;
