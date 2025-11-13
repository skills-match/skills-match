// import React, { useEffect, useState } from "react";
// import Button from "../../components/ui/button/Button";
// import { Lock, FileUser, Pencil, X, Save, Baby, Loader, User } from "lucide-react";
// import H1 from "@/components/ui/textos/Title";
// import { Paragraph } from "@/components/ui/textos/Paragraph";
// import { useForm } from "react-hook-form";
// import { useLocation, useParams } from "react-router-dom";
// import InputLogin from "@/components/ui/input/Input-login";
// import { cpfMask } from "@/utils/mask/cpf-mask";
// import { listUsers, updateUser } from "@/services/api";
// import INameValues from "@/interfaces/IName-values";
// import IProfileData from "@/interfaces/IProfile-data";
// import { maskPassword } from "@/utils/mask/mask-password";

// const Profile: React.FC = () => {
//   const [profile, setProfile] = useState<IProfileData | null>(null);
//   const [cpf, setCpf] = useState<string | null>(null);
//   const [age, setAge] = useState<string>(null);
//   const [password, setPassword] = useState<string | null>(null);
//   const [name, setName] = useState<string | null>(null);
//   const [updateExist, setUpdateExist] = useState<boolean>(false);
//   const [isEditing, setIsEditing] = useState<boolean>(false);
//   const [isLoding, setIsLoading] = useState<boolean>(true);

//   const [notNull, setNotNull] = useState<boolean>(false);

//   const timeMessageUpdate = () => {
//     setTimeout(() => {
//       setUpdateExist(prev => !prev);
//     }, 2000)
//   }

//   const location = useLocation();
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm<IProfileData>();

//   const { id } = useParams();

//   const BASE_URL: string = `${import.meta.env.VITE_API_URL}/${id}`;

//   const onSubmit = async (data: IProfileData) => {
//     if (data) {

//       for (const key in data) {
//         if (!data[key as keyof INameValues].replace(/\s/g, '') || !data[key as keyof INameValues] || data[key as keyof INameValues] === "" ) {
//           setNotNull(true);

//           setTimeout(() => {
//             setNotNull(false);
//           }, 2000)
//           return;
//         }
//       }

//       const update = await updateUser(data, id!);

//       if (update) {
//         setProfile(update);
//         setIsEditing(false);
//         setUpdateExist(true);
//         timeMessageUpdate();
//       }

//     } else {
//       alert("error submit");
//     }
//   };

//   useEffect(() => {
//     const fetchProfile = async () => {
//       const users = await listUsers(BASE_URL);
//       if (users) {
//         setProfile(users);
//         setCpf(cpfMask(users.cpf));
//         setAge(users.age.toString());
//         setPassword(users.password);
//         setName(users.name);
//       }
//     };
//     fetchProfile();
//   }, [id]);

//   useEffect(() => {
//     console.error(
//       "404 Error: User attempted to access non-existent route:",
//       location.pathname
//     );
//   }, [location.pathname]);

//   return (
//     <div className="p-5 flex flex-col items-center justify-center gap-10 mb-10 mt-10">
//       <div className="flex flex-col items-center justify-center gap-10">
//         <div className="flex flex-col items-center">
//           <H1 gradient={true}>Informações Pessoais</H1>
//           <Paragraph>Gerencie suas informações de perfil</Paragraph>
//         </div>
//         {profile ? (
//           <div className="bg-surface rounded-xl p-8 shadow-md border border-border">
//             <div className="mb-8">
//               <div className="flex  items-center justify-between">
//                 <h2 className="text-2xl font-bold text-foreground mb-2">
//                   Alterar Perfil
//                 </h2>
//                 <div>
//                   <Button
//                     onClick={() => setIsEditing(true)}
//                     className={`flex justify-between items-center gap-3 ${isEditing && "hidden"
//                       }`}
//                     variant="outline"
//                     size="sm"
//                   >
//                     <Pencil size={20} />
//                     Editar
//                   </Button>
//                   <Button
//                     onClick={() => {
//                       setIsEditing(false);
//                       setCpf(cpfMask(profile.cpf));
//                       setAge(profile.age.toString());
//                       setPassword(profile.password);
//                       setUpdateExist(false);
//                     }}
//                     className={`flex justify-between items-center gap-3 ${!isEditing && "hidden"
//                       }`}
//                     variant="outline"
//                     size="sm"
//                   >
//                     <X size={20} />
//                     Cancelar
//                   </Button>
//                 </div>
//               </div>

//               <Paragraph>Atualize suas informações de perfil abaixo</Paragraph>
//             </div>

//             <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
//               <div key={profile.id} className="flex flex-col gap-6">

//                 <div className="flex flex-col gap-2">
//                   {/* NAME */}
//                   <InputLogin
//                     register={register}
//                     rules={{
//                       required: false
//                     }}
//                     icon={
//                       <User
//                         size={20}
//                         className="absolute left-3 top-12 text-gray-500"
//                       />
//                     }
//                     id="nome"
//                     label="Nome *"
//                     placeholder={name}
//                     disabled={!isEditing}
//                     onChange={(e) => {
//                       setName(e.target.value);
//                     }}
//                     name="name"
//                     type="text"
//                     value={name}
//                     errors={errors}
//                   />
//                 </div>

//                 {/* CPF */}
//                 <div className="flex flex-col gap-2 relative">
//                   <label className="block text-md font-medium text-foreground">
//                     Alterar CPF *
//                   </label>
//                   <FileUser
//                     size={20}
//                     className="absolute left-3 top-12 text-gray-500"
//                   />
//                   <input
//                     disabled={!isEditing}
//                     {...register("cpf", { required: false, maxLength: 14, validate: (value: string) => value.length === 14 })}
//                     onChange={(e) => {
//                       setCpf(cpfMask(e.target.value));
//                     }}
//                     type="text"
//                     id="cpf"
//                     name="cpf"
//                     value={cpf}
//                     className="w-full px-10 py-3 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
//                     placeholder={cpfMask(profile.cpf)}
//                   />
//                   {errors.cpf?.type === "maxLength" && (
//                     <p className="text-red-500 font-medium text-sm">
//                       Máximo de 11 caracteres permitido.
//                     </p>
//                   )}
//                   {errors.cpf?.type === "validate" && (
//                     <p className="text-red-500 font-medium text-sm">
//                       CPF precisa ter 11 dígitos.
//                     </p>
//                   )}
//                 </div>

//                 <div className="flex flex-col gap-2">
//                   {/* AGE */}
//                   <InputLogin
//                     disabled={!isEditing}
//                     register={register}
//                     rules={{
//                       required: false,
//                       validate: (value: number) => value > 15 && value <= 120,
//                     }}
//                     icon={
//                       <Baby
//                         size={20}
//                         className="absolute left-3 top-12 text-gray-500"
//                       />
//                     }
//                     id="age"
//                     label="Idade *"
//                     placeholder={profile.age.toString()}
//                     name="age"
//                     type="number"
//                     value={age}
//                     errors={errors}
//                     onChange={(e) => {
//                       setAge(e.target.value);
//                     }}
//                   />
//                   {errors.age?.type === "validate" && (
//                     <p className="text-red-500 font-medium text-sm">
//                       Idade deve ser entre 16 e 120 anos
//                     </p>
//                   )}
//                 </div>
//                 {/* Password */}
//                 <div className="flex flex-col gap-2">
//                   <InputLogin
//                     disabled={!isEditing}
//                     register={register}
//                     passwordExist={isEditing}
//                     rules={{ required: false, minLength: 8 }}
//                     icon={
//                       <Lock
//                         size={20}
//                         className="absolute left-3 top-12 text-gray-500"
//                       />
//                     }
//                     id="password"
//                     label="Alterar Senha *"
//                     placeholder={maskPassword(profile.password)}
//                     name="password"
//                     type="password"
//                     errors={errors}
//                     value={password}
//                     onChange={(e) => {
//                       setPassword(e.target.value);
//                     }}
//                   />
//                   {errors.password?.type === "minLength" && (
//                     <p className="text-red-500 font-medium text-sm">
//                       Mínimo de 8 caracteres.
//                     </p>
//                   )}
//                 </div>
//               </div>

//               {/* Submit Button */}
//               {isEditing && (
//                 <div className="flex w-full flex-col sm:flex-row gap-4">
//                   <Button
//                     onClick={() => setIsLoading(!true)}
//                     type="submit"
//                     size="lg"
//                     className="text-white w-full flex justify-center gap-3 items-center"
//                   >
//                     <Save size={20} />
//                     {!isLoding ? "Salvando..." : "Salvar"}
//                   </Button>
//                 </div>
//               )}
//             </form>
//             {updateExist && (
//               <div className="mt-8 text-green-500 font-medium text-sm">
//                 Alterações salvas com sucesso!
//               </div>
//             )}

//             {notNull && (
//               <div className="mt-8 text-red-500 font-medium text-sm">
//                 Preencha todos os campo antes de continuar.
//               </div>
//             )}
//           </div>

//         ) : (
//           <div className="text-center flex flex-row items-center justify-center gap-3">
//             <Loader size={20} className="text-blue-700" />
//             <h3 className="text-xl text-muted-foreground font-medium text-blue-700">
//               Preparando seu Perfil...
//             </h3>
//           </div>
//         )}

//       </div>
//     </div>
//   );
// };

// export default Profile;
