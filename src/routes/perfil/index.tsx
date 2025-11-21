import React, { useEffect, useState } from "react";
import Button from "../../components/ui/button/Button";
import { Pencil, X, Save, User, Lock, Baby, Mail } from "lucide-react";
import { useForm } from "react-hook-form";
import { useLocation, useParams } from "react-router-dom";
import InputLogin from "@/components/ui/input/Input-login";
import IProfileData from "@/interfaces/IProfile-data";
import { maskPassword } from "@/utils/mask/mask-password";
import { listUsers, updateUser } from "@/services/login-service";
import Title from "@/components/ui/textos/Title";
import { Text } from "@/components/ui/textos/Text";
import { INameValues, INameValuesAllString } from "@/interfaces/IName-values";
import Loader from "@/components/ui/loader/Loader";

const Profile: React.FC = () => {

  const { id } = useParams();

  const [user, setUser] = useState<INameValues | null>({
    name: "",
    email: "",
    age: "",
    password: "",
  });

  const [profile, setProfile] = useState<INameValues | null>(null);
  const [updateExist, setUpdateExist] = useState<boolean>(false);
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);

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
  } = useForm<INameValues>();


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

      const update = await updateUser(data, id);

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
      const users = await listUsers(id);
      if (users) {
        setUser({
          name: users.name,
          email: users.email,
          age: users.age.toString(),
          password: users.password,
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
                      setIsLoading(true);
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
                      validate: (value: number) => value >= 18,
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
                      A idade mínima é de 18 anos.
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
                      pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    }}
                    icon={
                      <Mail
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
                      O email deve ser válido.
                    </p>
                  )}
                  {errors.email?.type === "pattern" && (
                    <p className="text-destructive text-sm">
                      Email deve ser válido.
                    </p>
                  )}
                </fieldset>

                {/* Password */}
                <fieldset className="flex flex-col gap-2">
                  <InputLogin
                    disabled={!isEditing}
                    register={register}
                    passwordExist={true}
                    rules={{ required: false, minLength: 8 }}
                    icon={
                      <Lock
                        size={20}
                        className="absolute left-3 top-12 text-gray-500"
                      />
                    }
                    id="password"
                    label="Senha *"
                    placeholder={maskPassword(user.password)}
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
                    onClick={() => setIsLoading(false)}
                    type="submit"
                    size="lg"
                    className="text-white w-full flex justify-center gap-3 items-center"
                  >
                    <Save size={20} />
                    {!isLoading ? "Salvando..." : "Salvar"}
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
          <Loader />
        )}
      </div>
    </div>
  );
};

export default Profile;
