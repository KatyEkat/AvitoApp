import { API_URL } from "../consts";
import { getAccessToken } from "../fetch";

export const createAd = async ({ price, title, description, files }) => {
  const query = new URLSearchParams({ price, title, description });
  const formData = new FormData();
  formData.append("files", files);

  const token = await getAccessToken();
  const init = {
    method: "Post",
    headers: { Authorization: `Bearer ${token}` },
    body: formData,
  };

  const response = await fetch(`${API_URL}/ads?${query.toString()}`, init);
  const json = await response.json();

  return {
    json,
  };
};
