import { StepsArray } from "@/interfaces/ISteps-form";

const BASE_URL: string = `${import.meta.env.VITE_API_URL_FORM}`;

export const createDataForm = async (data: StepsArray) => {

    try {
        const response = await fetch(BASE_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });

        if (response.status != 201) {
            console.error('Failed to create post:', response.statusText);
        } else {
            const data = await response.json();
            return data;
        }
    } catch (error) {
        console.log(`Error create User: ${error}`);
    }
}