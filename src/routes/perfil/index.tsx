import React, { useEffect, useState } from "react";
import Button from "../../components/ui/button/Button";
import {
  Pencil,
  X,
  Save,
  User,
} from "lucide-react";
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

  const BASE_URL: string = `${import.meta.env.VITE_API_URL}/${id}`;

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
        // setProfile(users);
        // setCpf(cpfMask(users.cpf));
        // setAge(users.age.toString());
        // setPassword(users.password);
        // setName(users.name);

        setUser(() => (user.name = users.name));
        setUser(() => (user.email = users.email));
        setUser(() => (user.age = users.age.toString()));
        setUser(() => (user.password = users.password));
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
        <section className="max-w-5xl mx-auto flex flex-col gap-4 mb-16">
          <Title>Informações Pessoais</Title>
          <Text
            size="lg"
            colors="mutedForeground"
            className="text-lg md:text-2xl mb-8"
          >
            Gerencie suas informações de perfil
          </Text>
        </section>
        {profile && (
          <div className="bg-surface rounded-xl p-8 shadow-md border border-border">
            <div className="mb-8">
              <div className="flex  items-center justify-between">
                <h2 className="text-2xl font-bold text-foreground mb-2">
                  Alterar Perfil
                </h2>
                <div>
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
                      //   setCpf(cpfMask(profile.cpf));
                      //   setAge(profile.age.toString());
                      //   setPassword(profile.password);
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

              <Text>Atualize suas informações de perfil abaixo</Text>
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
              <div className="mt-8 text-red-500 font-medium text-sm">
                Preencha todos os campo antes de continuar.
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;
