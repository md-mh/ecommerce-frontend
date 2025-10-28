import { baseApi } from "./apiUrl";

// The function to get the server data.
export const getServerData = async (url: string) => {
  const response = await fetch(baseApi + url, {
    next: {
      revalidate: 10,
    },
  });
  const repos = await response.json();
  return repos;
};
