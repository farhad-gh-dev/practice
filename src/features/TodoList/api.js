const fetchTodos = async () => {
  const data = await fetch("https://jsonplaceholder.typicode.com/todos").then(
    (res) => res.json()
  );
  return data;
};

const Api = {
  fetchTodos,
};

export default Api;
