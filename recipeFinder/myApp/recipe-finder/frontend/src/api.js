import axios from 'axios';

const API_URL = "https://ideal-dollop-q7vgxjxg7rvxf4j7w-5000.app.github.dev/api/recipes";

export const getRecipes = async () => axios.get(API_URL);
export const getRecipe = async (id) => axios.get(`${API_URL}/${id}`);
export const addRecipe = async (recipe) => axios.post(API_URL, recipe);
export const updateRecipe = async (id, recipe) => axios.put(`${API_URL}/${id}`, recipe);
export const deleteRecipe = async (id) => axios.delete(`${API_URL}/${id}`);
