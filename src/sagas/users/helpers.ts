export const parseUsers = (users: any[]) =>
  users.map((user) => ({
    id: typeof user.id === "number" ? user.id : 0,
    name: typeof user.name === "string" ? user.name : "",
    username: typeof user.username === "string" ? user.username : "",
  }));
