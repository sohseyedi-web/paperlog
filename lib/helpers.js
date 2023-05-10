import axios from "axios";

export const getPapers = async () => {
  const { data } = await axios.get("https://paperlog.vercel.app/api/papers");

  return data;
};

export const getPaper = async (paperId) => {
  const { data } = await axios.get(
    `https://paperlog.vercel.app/api/papers/${paperId}`
  );

  return data;
};

export const postPapers = async (form) => {
  const response = await axios.post(
    "https://paperlog.vercel.app/api/papers",
    form
  );

  return response.data;
};
