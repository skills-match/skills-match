import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { Lock, User, Baby, CheckCircle2, Sparkles, Mail } from "lucide-react";
import { createUser } from "@/services/login-service";

import Button from "@/components/ui/button/Button";
import Title from "@/components/ui/textos/Title";
import { Text } from "@/components/ui/textos/Text";
import Input from "@/components/ui/input/Input-login";
import { INameValues } from "@/interfaces/IName-values";

export default function Register() {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<INameValues>();

    const onSubmit = async (data: INameValues) => {
        try {
            setLoading(true);
            await createUser(data);
            navigate("/login");
        } catch {
            alert("Erro ao criar conta, tente novamente.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen w-full px-4 py-6 md:px-12 flex items-center justify-center bg-gradient-to-br from-primary/5 via-transparent to-primary/5">

            {/* GRID */}
            <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center mt-5">

                {/* MOBILE HEADER */}
                <div className="block md:hidden text-center mb-2">
                    <Text size="md" colors="primary" className="font-medium mb-2">
                        <Sparkles size={16} className="inline mr-1 mb-1" />
                        CRIE SUA CONTA
                    </Text>

                    <Title>
                        Comece sua <br />
                        <span className="text-primary">jornada profissional</span>
                    </Title>
                </div>

                {/* DESKTOP TEXTO ESQUERDO */}
                <div className="hidden md:block">
                    <Text size="md" colors="primary" className="font-medium mb-3">
                        <Sparkles size={16} className="inline mr-2 mb-1" />
                        CRIE SUA CONTA
                    </Text>

                    <Title>
                        Comece sua <br />
                        <span className="text-primary">jornada profissional</span>
                    </Title>

                    <Text size="md" colors="mutedForeground" className="mt-4 max-w-md">
                        Cadastre-se para desbloquear recomendações personalizadas,
                        análise de perfil e recursos exclusivos da plataforma.
                    </Text>

                    <div className="mt-8 space-y-3">
                        {[
                            "Acesso ao teste vocacional completo",
                            "Dashboard personalizado",
                            "Plano de carreira baseado no seu perfil",
                        ].map((item, index) => (
                            <div key={index} className="flex items-center gap-3">
                                <CheckCircle2 className="text-primary" size={22} />
                                <span className="text-foreground">{item}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="bg-white dark:bg-surface p-6 md:p-10 rounded-2xl shadow-xl border border-border w-full max-w-md mx-auto mb-5">

                    <div className="mb-6 md:mb-8 text-start md:text-left">
                        <Text size="lg" colors="primary" className="font-medium">Criar Conta</Text>
                        <Text size="md" colors="mutedForeground">
                            Preencha os dados para começar sua experiência
                        </Text>
                    </div>

                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 md:space-y-6">

                        {/* NOME */}
                        <fieldset className="flex flex-col gap-2">
                            <Input
                                register={register}
                                rules={{ required: true }}
                                icon={
                                    <User size={20} className="absolute left-3 top-12 text-gray-500" />
                                }
                                id="name"
                                label="Nome *"
                                placeholder="Seu Nome Completo"
                                name="name"
                                type="text"
                                errors={errors}
                            />

                            {errors.name && (
                                <p className="text-destructive text-sm">Nome é obrigatório.</p>
                            )}
                        </fieldset>

                        {/* IDADE */}
                        <fieldset className="flex flex-col gap-2">
                            <Input
                                register={register}
                                rules={{
                                    required: true,
                                    validate: (value: number) => value >= 18,
                                }}
                                icon={
                                    <Baby size={20} className="absolute left-3 top-12 text-gray-500" />
                                }
                                id="age"
                                label="Idade *"
                                placeholder="Sua Idade"
                                name="age"
                                type="number"
                                errors={errors}
                            />

                            {errors.age?.type === "required" && (
                                <p className="text-destructive text-sm">Idade é obrigatória.</p>
                            )}
                            {errors.age?.type === "validate" && (
                                <p className="text-destructive text-sm">
                                  A idade mínima é de 18 anos.
                                </p>
                            )}
                        </fieldset>

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
                                <p className="text-destructive text-sm">Email é obrigatório.</p>
                            )}
                            {errors.email?.type === "pattern" && (
                                <p className="text-destructive text-sm">
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
                                icon={
                                    <Lock size={20} className="absolute left-3 top-12 text-gray-500" />
                                }
                                id="password"
                                label="Senha *"
                                placeholder="Crie uma senha"
                                name="password"
                                type="password"
                                errors={errors}
                            />

                            {errors.password?.type === "required" && (
                                <p className="text-destructive text-sm">Senha é obrigatória.</p>
                            )}
                            {errors.password?.type === "minLength" && (
                                <p className="text-destructive text-sm">Mínimo de 8 caracteres.</p>
                            )}
                        </fieldset>

                        {/* BOTÃO */}
                        <Button
                            type="submit"
                            size="lg"
                            disabled={loading}
                            className="w-full text-white"
                        >
                            {loading ? "Criando conta..." : "Criar conta"}
                        </Button>

                        {/* LINK PARA LOGIN */}
                        <div className="text-center flex gap-2 justify-center mt-1">
                            <Text size="md" colors="mutedForeground">Já tem uma conta?</Text>

                            <button
                                type="button"
                                onClick={() => navigate("/login")}
                                className="text-primary underline font-medium"
                            >
                                Fazer login
                            </button>
                        </div>

                    </form>
                </div>

            </div>
        </div>
    );
}
