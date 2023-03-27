import { API_URL } from "../consts";
import { getAccessToken } from "../fetch";

export const uploadImage = async ({ file, adId }) => {
  const formData = new FormData();
  formData.append("file", file);

  const token = await getAccessToken();
  const init = {
    method: "Post",
    headers: { Authorization: `Bearer ${token}` },
    body: formData,
  };

  const response = await fetch(`${API_URL}/ads/${adId}/image`, init);
  const json = await response.json();

  return json;
};
