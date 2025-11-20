import { INameValues } from "@/interfaces/IName-values";

const BASE_URL: string = `${import.meta.env.VITE_API_URL}`;

export const createUser = async (data: INameValues) => {

    const allData: INameValues = {
        ...data,
        name: data.name.charAt(0).toUpperCase() + data.name.slice(1),
    }

    try {
        const response = await fetch(`${BASE_URL}/usuarios`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(allData),
        });

        if (response.status != 201) {
            console.error('Failed to create post:', response.statusText);
        } else {
            const data = await response.json();
            return data;
        }
    } catch (error) {
        throw new Error(`Error create User: ${error}`);
    }
}

export const verifyUser = async (data: INameValues) => {
  
    const URL: string = `${BASE_URL}/usuarios/login?email=${data.email}&password=${data.password}`;
    try {
      const response = await fetch(URL, { method: "GET" });
      if (response.status === 200) {
        const user: INameValues = await response.json();
        localStorage.setItem("userId", user.id.toString());
        return user; 
      } else if (response.status === 404) {
        console.warn("Usuário não encontrado");
        return false;
      } else {
        console.error("Erro inesperado:", response.statusText);
        return false;
      }
    } catch (error) {
      console.log(`Erro ao verificar usuário: ${error}`);
      return false;
    }
  };

export const updateUser = async (data: INameValues, id: string) => {

    const URL: string = `${BASE_URL}/atualiza-paciente/${id}`;

    const dataUpdate: INameValues = {
        name: data.name.trim(),
        email: data.email.trim(),
        age: data.age,
        password: data.password.trim(),
    };

    try {
        const response = await fetch(URL, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(dataUpdate),
        });

        if (response.status !== 201) {
            console.error("Failed to update user:", response.statusText);
            return false;
        } else {
            const data = await response.json();
            return data;
        }
    } catch (error) {
        console.log(`Error update User: ${error}`);
    }
};

export const listUsers = async (url: string) => {  
    const response = await fetch(url, { method: "GET" });
    if (response.status !== 200) {
        console.error("Failed to Get profile:", response.statusText);
        return false;
    } else {
        const data = await response.json();
        return data;
    }
}