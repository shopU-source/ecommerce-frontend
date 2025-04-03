export async function postData(url, formData) {
  const response = await fetch(import.meta.env.VITE_APP_URL + url, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`, // Include your API key in the Authorization
      "Content-Type": "application/json", // Adjust the content type as needed
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
