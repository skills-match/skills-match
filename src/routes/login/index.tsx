// import { useLocation, useNavigate } from "react-router-dom";
// import { useEffect, useState } from "react";
// import H1 from "@/components/ui/textos/H1";
// import Button from "@/components/ui/button/Button";
// import { Paragraph } from "@/components/ui/textos/Paragraph";
// import { FileUser, Lock } from "lucide-react";
// import InputLogin from "@/components/ui/input/Input-login";
// import { useForm } from "react-hook-form";
// import { cpfMask } from "@/utils/mask/cpf-mask";
// import { verifyUser } from "@/services/api";
// import ILoginContext from "@/interfaces/ILogin-context";
// import IProfileData from "@/interfaces/IProfile-data";
// import { H3 } from "@/components/ui/textos/H3";

// const Login = () => {
//   const location = useLocation();

//   const [loginExist, setLoginExist] = useState<boolean>(true);

//   const [isLoggedIn, setIsLoggedIn] = useState<ILoginContext>(() => {
//     const stored = localStorage.getItem("loggedIn");
//     return { loggedIn: stored === "true" ? "true" : "false" };
//   });

//   const handleLogin = () => {
//     setIsLoggedIn({ loggedIn: "true" });
//     return localStorage.setItem("loggedIn", "true");
//   };

//   const handleLogout = () => {
//     setIsLoggedIn({ loggedIn: "false" });
//     return localStorage.setItem("loggedIn", "false");
//   };

//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm<IProfileData>();

//   const onSubmit = async (data: IProfileData) => {
//     if (data) {
//       const verify = await verifyUser(data);
//       if (verify != false) {
//         handleLogin();
//         navigate("/home");
//       } else {
//         setLoginExist(false);
//       }
//     } else {
//       alert("error submit");
//       handleLogout();
//     }
//   };

//   const navigate = useNavigate();

//   useEffect(() => {
//     console.error(
//       "404 Error: User attempted to access non-existent route:",
//       location.pathname
//     );
//   }, [location.pathname]);

//   return (
//     <div className="min-h-screen p-5 flex flex-col items-center justify-center bg-gray-100 gap-10">
//       <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//         <H1 gradient={true}>Bem-vindo de volta</H1>
//         <Paragraph>Entre na sua conta para continuar</Paragraph>
//       </div>
//       <div className="bg-surface rounded-xl p-8 shadow-md border border-border">
//         <div className="mb-8">
//           <H3 isStronger={true}>Entrar</H3>
//           <Paragraph>Digite suas credenciais para acessar sua conta</Paragraph>
//         </div>

//         <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
//           <div className="flex flex-col gap-6">
//             {/* CPF */}
//             <fieldset className="flex flex-col gap-2 relative">
//               {/* CPF */}
//               <label className="block text-md font-medium text-foreground">
//                 CPF *
//               </label>
//               <FileUser
//                 size={20}
//                 className="absolute left-3 top-12 text-gray-500"
//               />
//               <input
//                 {...register("cpf", { required: true, maxLength: 14 })}
//                 onChange={(e) => {
//                   e.target.value = cpfMask(e.target.value);
//                 }}
//                 type="text"
//                 id="cpf"
//                 name="cpf"
//                 className="w-full px-10 py-3 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
//                 placeholder="123.456.789-00"
//               />
//               {errors.cpf?.type === "required" && (
//                 <p className="text-red-500 font-medium text-sm">
//                   CPF é obrigatório.
//                 </p>
//               )}
//               {errors.cpf?.type === "maxLength" && (
//                 <p className="text-red-500 font-medium text-sm">
//                   Máximo de 11 caracteres permitido.
//                 </p>
//               )}
//             </fieldset>
//             {/* Password */}
//             <fieldset className="flex flex-col gap-2">
//               {/* Password */}
//               <InputLogin
//                 register={register}
//                 passwordExist={true}
//                 rules={{ required: true, minLength: 8 }}
//                 icon={
//                   <Lock
//                     size={20}
//                     className="absolute left-3 top-12 text-gray-500"
//                   />
//                 }
//                 id="password"
//                 label="Senha *"
//                 placeholder="Digite sua senha"
//                 name="password"
//                 type="password"
//                 errors={errors}
//               />
//               {errors.password?.type === "required" && (
//                 <p className="text-red-500 font-medium text-sm">
//                   Senha é obrigatório.
//                 </p>
//               )}
//               {errors.password?.type === "minLength" && (
//                 <p className="text-red-500 font-medium text-sm">
//                   Mínimo de 8 caracteres.
//                 </p>
//               )}
//             </fieldset>
//           </div>
//           {/* Submit Button */}
//           <fieldset className="flex w-full flex-col gap-4">
//             <Button type="submit" size="lg" className="text-white w-full">
//               Entrar
//             </Button>
//             {loginExist != true && (
//               <div>
//                 <p className="text-red-500 font-medium text-sm">
//                   {" "}
//                   Email ou senha inválidos!
//                 </p>
//               </div>
//             )}
//           </fieldset>
//           <div className="text-center mt-4 flex gap-2 justify-center">
//             <Paragraph>Não tem uma conta?</Paragraph>
//             <button
//               onClick={() => navigate("/registrar")}
//               type="button"
//               className="text-lg text-blue-700 font-medium hover:underline"
//             >
//               Criar Conta
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Login;
