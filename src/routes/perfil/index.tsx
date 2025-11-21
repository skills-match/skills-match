import React, { useEffect, useState } from "react";
import Button from "../../components/ui/button/Button";
import { Pencil, X, Save, User, Lock, Baby, Loader } from "lucide-react";
import { useForm } from "react-hook-form";
import { useLocation, useParams } from "react-router-dom";
import InputLogin from "@/components/ui/input/Input-login";
import IProfileData from "@/interfaces/IProfile-data";
import { maskPassword } from "@/utils/mask/mask-password";
import { listUsers, updateUser } from "@/services/login-service";
import Title from "@/components/ui/textos/Title";
import { Text } from "@/components/ui/textos/Text";
import { INameValues, INameValuesAllString } from "@/interfaces/IName-values";

const Profile: React.FC = () => {
  const [user, setUser] = useState<INameValues | null>({
    name: "",
    email: "",
    age: "",
    password: "",
  });

  const [profile, setProfile] = useState<INameValues | null>(null);
  //   const [email, setEmail] = useState<string | null>(null);
  //   const [age, setAge] = useState<string>(null);
  //   const [password, setPassword] = useState<string | null>(null);
  //   const [name, setName] = useState<string | null>(null);
  const [updateExist, setUpdateExist] = useState<boolean>(false);
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [isLoding, setIsLoading] = useState<boolean>(true);

  const [notNull, setNotNull] = useState<boolean>(false);

  const timeMessageUpdate = () => {
    setTimeout(() => {
      setUpdateExist((prev) => !prev);
    }, 2000);
  };

  const location = useLocation();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IProfileData>();

  const { id } = useParams();

  const BASE_URL: string = `${import.meta.env.VITE_API_URL}/usuarios/${id}`;

  const onSubmit = async (data: INameValuesAllString) => {
    if (data) {
      for (const key in data) {
        if (
          !data[key as keyof INameValuesAllString].replace(/\s/g, "") ||
          !data[key as keyof INameValuesAllString] ||
          data[key as keyof INameValuesAllString] === ""
        ) {
          setNotNull(true);

          setTimeout(() => {
            setNotNull(false);
          }, 2000);
          return;
        }
      }

      const update = await updateUser(data, id!);

      if (update) {
        setProfile(update);
        setIsEditing(false);
        setUpdateExist(true);
        timeMessageUpdate();
      }
    } else {
      alert("error submit");
    }
  };

  useEffect(() => {
    const fetchProfile = async () => {
      const users = await listUsers(BASE_URL);
      if (users) {
        setUser({
          name: users.name,
          email: users.email,
          age: users.age.toString(),
          password: maskPassword(users.password),
        });
        setProfile(users);
      }
    };
    fetchProfile();
  }, [id]);

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="p-5 flex flex-col items-center justify-center gap-10 mb-10 mt-10">
      <div className="flex flex-col items-center justify-center gap-10">
        <section className="max-w-5xl mx-auto flex flex-col gap-4">
          <Title>Informações Pessoais</Title>
          <Text
            size="lg"
            colors="mutedForeground"
            className="text-lg md:text-2xl mb-8"
          >
            Gerencie suas informações de perfil
          </Text>
        </section>
        {profile ? (
          <div className="bg-surface rounded-xl p-8 shadow-md border border-border">
            <div className="mb-8">
              <div className="flex  items-center justify-between">
                <Text
                  size="lg"
                  colors="primary"
                  className="text-2xl font-bold text-foreground mb-2"
                >
                  Alterar Perfil
                </Text>
                <div className="relative bottom-4 left-4">
                  <Button
                    onClick={() => setIsEditing(true)}
                    className={`flex justify-between items-center gap-3 ${
                      isEditing && "hidden"
                    }`}
                    variant="outline"
                    size="sm"
                  >
                    <Pencil size={20} />
                    Editar
                  </Button>
                  <Button
                    onClick={() => {
                      setIsEditing(false);
                      setUpdateExist(false);
                    }}
                    className={`flex justify-between items-center gap-3 ${
                      !isEditing && "hidden"
                    }`}
                    variant="outline"
                    size="sm"
                  >
                    <X size={20} />
                    Cancelar
                  </Button>
                </div>
              </div>

              <Text size="md" colors="mutedForeground" className="mb-4">
                Atualize suas informações de perfil abaixo
              </Text>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div key={profile.id} className="flex flex-col gap-6">
                <div className="flex flex-col gap-2">
                  {/* NAME */}
                  <InputLogin<INameValues>
                    register={register}
                    rules={{
                      required: false,
                    }}
                    icon={
                      <User
                        size={20}
                        className="absolute left-3 top-12 text-gray-500"
                      />
                    }
                    id="name"
                    label="Nome *"
                    placeholder="Digite seu nome"
                    disabled={!isEditing}
                    onChange={(e) => {
                      setUser({ ...user, name: e });
                      // setNamee.target.value);
                    }}
                    name="name"
                    type="text"
                    value={user.name}
                    errors={errors}
                  />
                </div>
                {/* AGE */}
                <fieldset className="flex flex-col gap-2">
                  {/* AGE */}
                  <InputLogin
                    disabled={!isEditing}
                    register={register}
                    rules={{
                      required: false,
                      validate: (value: number) => value > 15 && value <= 120,
                    }}
                    icon={
                      <Baby
                        size={20}
                        className="absolute left-3 top-12 text-gray-500"
                      />
                    }
                    id="age"
                    label="Idade *"
                    placeholder={profile.age.toString()}
                    name="age"
                    type="number"
                    value={user.age.toString()}
                    errors={errors}
                    onChange={(e) => {
                      setUser({ ...user, age: e });
                    }}
                  />
                  {errors.age?.type === "validate" && (
                    <p className="text-destructive text-sm">
                      Idade deve ser entre 16 e 120 anos
                    </p>
                  )}
                </fieldset>

                <fieldset className="flex flex-col gap-2">
                  {/* AGE */}
                  <InputLogin
                    disabled={!isEditing}
                    register={register}
                    rules={{
                      required: false,
                      validate: (value: number) => value > 15 && value <= 120,
                    }}
                    icon={
                      <Baby
                        size={20}
                        className="absolute left-3 top-12 text-gray-500"
                      />
                    }
                    id="email"
                    label="Email *"
                    placeholder={profile.email}
                    name="email"
                    type="text"
                    value={user.email}
                    errors={errors}
                    onChange={(e) => {
                      setUser({ ...user, email: e });
                    }}
                  />
                  {errors.email?.type === "validate" && (
                    <p className="text-destructive text-sm">
                      O email deve ser válido!
                    </p>
                  )}
                </fieldset>  


                {/* Password */}
                <fieldset className="flex flex-col gap-2">
                  <InputLogin
                    disabled={!isEditing}
                    register={register}
                    passwordExist={isEditing}
                    rules={{ required: false, minLength: 8 }}
                    icon={
                      <Lock
                        size={20}
                        className="absolute left-3 top-12 text-gray-500"
                      />
                    }
                    id="password"
                    label="Alterar Senha *"
                    placeholder={maskPassword(profile.password)}
                    name="password"
                    type="password"
                    errors={errors}
                    value={user.password}
                    onChange={(e) => {
                      setUser({ ...user, password: e });
                    }}
                  />
                  {errors.password?.type === "minLength" && (
                    <p className="text-destructive text-sm">
                      Mínimo de 8 caracteres.
                    </p>
                  )}
                </fieldset>
              </div>

              {/* Submit Button */}
              {isEditing && (
                <div className="flex w-full flex-col sm:flex-row gap-4">
                  <Button
                    onClick={() => setIsLoading(!true)}
                    type="submit"
                    size="lg"
                    className="text-white w-full flex justify-center gap-3 items-center"
                  >
                    <Save size={20} />
                    {!isLoding ? "Salvando..." : "Salvar"}
                  </Button>
                </div>
              )}
            </form>
            {updateExist && (
              <div className="mt-8 text-green-500 font-medium text-sm">
                Alterações salvas com sucesso!
              </div>
            )}

            {notNull && (
              <div className="mt-8 text-destructive text-sm">
                Preencha todos os campo antes de continuar.
              </div>
            )}
          </div>
        ) : (
          <div role="status" className="mt-10 mb-10">
            <svg
              aria-hidden="true"
              className="w-8 h-8 text-primary animate-spin fill-background"
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="currentColor"
              />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentFill"
              />
            </svg>
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;
