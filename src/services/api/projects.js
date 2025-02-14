import { api } from "./api";

export const getProjects = async () => {
    try {
        const response = await api.get("/projects");
        return response.data;
    } catch (error) {
        console.error("Erro ao buscar projetos:", error);
        return [];
    }
}

export const getProject = async (id) => {   
    try {
        const response = await api.get(`/projects/${id}`);
        return response.data;
    } catch (error) {
        console.error("Erro ao buscar projeto:", error);
        return null;
    }
}