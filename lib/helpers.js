import axios from "axios";

export const getPapers = async () => {
  const { data } = await axios.get("http://localhost:3000/api/papers");

  return data;
};
export const postPapers = async (form) => {
  const response = await axios.post("http://localhost:3000/api/papers", form);

  return response.data;
};
