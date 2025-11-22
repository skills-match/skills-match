import { ICarrer } from "@/interfaces/ICareer";

const BASE_URL: string = `${import.meta.env.VITE_API_URL_FORM}`;

export const createDataForm = async (data: ICarrer) => {
    try {
        const response = await fetch(`${BASE_URL}/recommend`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
        });

        if (!response.ok) {
            console.error("Failed:", response.status, response.statusText);
            return null;
        }

        return await response.json();

    } catch (error) {
        console.log(`Error create User: ${error}`);
    }
};