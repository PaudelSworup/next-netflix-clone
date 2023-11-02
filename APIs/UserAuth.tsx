import { API } from "@/config";

// login API
export const login = async (user: any) => {
  return await fetch(`${API}/login`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  })
    .then((res) => {
      return res.json();
    })
    .catch((err) => {
      return console.log(err);
    });
};
