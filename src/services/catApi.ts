const API_KEY = "live_CjPFz3vSInL49ytzj4CZ05qGX8cCnEfYVvVNtkHjJYShcbjgqxCa69c4QWTXbsCz";
const BASE_URL = "https://api.thecatapi.com/v1";

export interface CatImage {
  id: string;
  url: string;
  width: number;
  height: number;
}

export const getRandomCat = async (): Promise<CatImage> => {
  const response = await fetch(`${BASE_URL}/images/search`, {
    headers: {
      "x-api-key": API_KEY,
    },
  });
  const data = await response.json();
  return data[0];
};

export const getMultipleRandomCats = async (limit: number = 6): Promise<CatImage[]> => {
  const response = await fetch(`${BASE_URL}/images/search?limit=${limit}`, {
    headers: {
      "x-api-key": API_KEY,
    },
  });
  return response.json();
};