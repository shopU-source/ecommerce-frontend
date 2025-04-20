import axios from "axios";

export async function postData(url, formData) {
  const response = await fetch("https://ecommerce-backend-production-17d2.up.railway.app" + url, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  });
  if (response.ok) {
    const data = await response.json();
    return data;
  } else {
    const errorData = await response.json();
    return errorData;
  }
}

export async function fetchDataFromApi(url) {
  const params = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      "Content-Type": "application/json",
    },
  };
  const { data } = await axios.get(import.meta.env.VITE_APP_URL || import.meta.env.VITE_RAILWAY_BACKEND + url, params);
  return data;
}

export async function uploadImage(url, updatedData) {
  const params = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      "Content-Type": "multipart/form-data",
    },
  };

  var response;
  await axios
    .put(import.meta.env.VITE_APP_URL || import.meta.env.VITE_RAILWAY_BACKEND + url, updatedData, params)
    .then((res) => {
      console.log(res);
      response = res;
    });
  return response;
}

export async function editData(url, updatedData) {
  const params = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      "Content-Type": "application/json",
    },
  };

  var response;
  await axios
    .put(import.meta.env.VITE_APP_URL || import.meta.env.VITE_RAILWAY_BACKEND + url, updatedData, params)
    .then((res) => {
      response = res;
    });

  return response;
}

export async function deleteData(url) {
  const params = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      "Content-Type": "application/json"
    }
  }

  const { res } = await axios.delete(import.meta.env.VITE_APP_URL || import.meta.env.VITE_RAILWAY_BACKEND + url, params)
  return res;
}