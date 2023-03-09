import axios from "axios";

export const getGames = () => {
  return axios.get("https://denny2023.azurewebsites.net/api/juegos");
};

export const getCellphones = () => {
  return axios.get("https://denny2023.azurewebsites.net/api/celulares");
};
export const getLoadGames = (id) => {
  return axios.get("https://denny2023.azurewebsites.net/api/juegos/" + id);
};
export const getLoadPhones = (id) => {
  return axios.get("https://denny2023.azurewebsites.net/api/celulares/" + id);
};
export const getDelete = (id) => {
  return axios.delete("https://denny2023.azurewebsites.net/api/juegos?id=" + id);
};
export const getDeletePhone = (id) => {
  return axios.delete("https://denny2023.azurewebsites.net/api/celulares?id=" + id);
};
export const getEditar = (id, juego) => {
  return axios.put("https://denny2023.azurewebsites.net/api/juegos?id=" + id, juego);
};
export const getEditarPhone = (id, phone) => {
  return axios.put("https://denny2023.azurewebsites.net/api/celulares?id=" + id, phone);
};

export const getGuardar = (juego) => {
  return axios.post("https://denny2023.azurewebsites.net/api/juegos", juego);
};
export const getGuardarPhone = (phone) => {
  return axios.post("https://denny2023.azurewebsites.net/api/celulares", phone);
};
