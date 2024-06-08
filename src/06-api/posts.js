export const getPosts = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users", {
    method: "GET",
  });
  return await response.json();
};

export const getImage = async () => {
  const response = "https://picsum.photos/200/300";
  return response;
};
