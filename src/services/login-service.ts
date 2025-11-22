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
            throw new Error(`Failed to create user: ${response.statusText}`)
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
        throw new Error(`User not found`)
      } else {
       throw new Error("Unexpected error");
      }
    } catch (error) {
      console.log(`Erro ao verificar usuário: ${error}`);
      return false;
    }
  };

export const updateUser = async (data: INameValues, id: string) => {

    const URL: string = `${BASE_URL}/usuarios/atualiza-usuario/${id}`;

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
            throw new Error(`Failed to Update profile: ${response.statusText}`)
        } else {
            const data = await response.json();
            return data;
        }
    } catch (error) {
        console.log(`Error update User: ${error}`);
    }
};

export const listUsers = async (id: string) => {  

    const response = await fetch(`${BASE_URL}/usuarios/${id}`, { method: "GET" });
    if (response.status !== 200) {
        throw new Error(`Failed to Get profile: ${response.statusText}`)
    } else {
        const data = await response.json();
        return data;
    }
}