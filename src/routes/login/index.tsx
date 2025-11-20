import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Button from "@/components/ui/button/Button";
import { FileUser, Lock, CheckCircle2, Sparkles, Mail } from "lucide-react";
import { useForm } from "react-hook-form";
import { verifyUser } from "@/services/api";
import ILoginContext from "@/interfaces/ILogin-context";
import IProfileData from "@/interfaces/IProfile-data";
import { Text } from "@/components/ui/textos/Text";
import Title from "@/components/ui/textos/Title";
import Input from "@/components/ui/input/Input-login";

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
        <div className="min-h-screen w-full px-4 py-6 md:px-12 flex items-center justify-center bg-gradient-to-br from-primary/5 via-transparent to-primary/5">

            {/* GRID PRINCIPAL */}
            <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">

                {/* MOBILE HEADER */}
                <div className="block md:hidden text-center mb-2">
                    <Text size="md" colors="primary" className="font-medium mb-2">
                        <Sparkles size={16} className="inline mr-1 mb-1" />
                        BEM-VINDO DE VOLTA
                    </Text>

                    <Title>
                        Descubra sua <br />
                        <span className="text-primary">carreira ideal</span>
                    </Title>
                </div>

                {/* DESKTOP LADO ESQUERDO */}
                <div className="hidden md:block">
                    <Text size="md" colors="primary" className="font-medium mb-3">
                        <Sparkles size={16} className="inline mr-2 mb-1" />
                        BEM-VINDO DE VOLTA
                    </Text>

                    <Title>
                        Descubra sua <br />
                        <span className="text-primary">carreira ideal</span>
                    </Title>

                    <Text size="md" colors="mutedForeground" className="mt-4 max-w-md">
                        Acesse sua conta para continuar explorando oportunidades personalizadas e
                        receber recomendações baseadas em IA.
                    </Text>

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
                <div className="bg-white dark:bg-surface p-6 md:p-10 rounded-2xl shadow-xl border border-border w-full max-w-md mx-auto">

                    <div className="mb-6 md:mb-8 text-start md:text-left">
                        <Text size="lg" colors="primary" className="font-medium">Entrar</Text>
                        <Text size="md" colors="mutedForeground">
                            Use suas credenciais para acessar a plataforma
                        </Text>
                    </div>

                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 md:space-y-6">

                        {/* EMAIL */}
                        <fieldset className="flex flex-col gap-2">
                            <Input
                                register={register}
                                rules={{
                                    required: true,
                                    pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                }}
                                icon={
                                    <Mail size={20} className="absolute left-3 top-12 text-gray-500" />
                                }
                                id="email"
                                label="Email *"
                                placeholder="Seu Email"
                                name="email"
                                type="text"
                                errors={errors}
                            />

                            {errors.email?.type === "required" && (
                                <p className="text-red-500 text-sm">Email é obrigatório.</p>
                            )}
                            {errors.email?.type === "pattern" && (
                                <p className="text-red-500 text-sm">
                                    Email deve ser válido.
                                </p>
                            )}
                        </fieldset>

                        {/* SENHA */}
                        <fieldset className="flex flex-col gap-2">
                            <Input
                                register={register}
                                passwordExist={true}
                                rules={{ required: true, minLength: 8 }}
                                icon={<Lock size={20} className="absolute left-3 top-12 text-gray-500" />}
                                id="password"
                                label="Senha *"
                                placeholder="Digite sua senha"
                                name="password"
                                type="password"
                                errors={errors}
                            />
                        </fieldset>

                        {!loginExist && (
                            <p className="text-red-500 text-sm -mt-2">
                                CPF ou senha incorretos.
                            </p>
                        )}

                        <Button type="submit" size="lg" className="w-full text-white">
                            Entrar
                        </Button>

                        <div className="text-center flex gap-2 justify-center mt-1">
                            <Text size="md" colors="mutedForeground">Não tem conta?</Text>
                            <button
                                type="button"
                                onClick={() => navigate("/registrar")}
                                className="text-primary underline font-medium"
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