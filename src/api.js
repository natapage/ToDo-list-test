const base = "http://localhost:1337";

const tasks = `${base}/api/to-do-items`;

export const getTasks = async () => {
  const response = await fetch(tasks);
  return await response.json();
};

export const createTask = async (body) =>
  (
    await fetch(tasks, {
      method: "POST",
      body: JSON.stringify({ data: body }),
      headers: {
        "Content-type": "application/json",
      },
    })
  ).json();

export const deleteTask = async (id) =>
  (await fetch(`${tasks}/${id}`, { method: "DELETE" })).json();

export const updateTask = async (body, id) =>
  (
    await fetch(`${tasks}/${id}`, {
      method: "PUT",
      body: JSON.stringify(body),
      headers: {
        "Content-type": "application/json",
      },
    })
  ).json();
