import { baseApi } from "./apiUrl";

export const getServerData = async (url) => {
  const response = await fetch(baseApi + url, {
    next: {
      revalidate: 10,
    },
  });
  const repos = await response.json();
  return repos;
};
