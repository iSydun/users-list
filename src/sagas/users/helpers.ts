export const parseUsers = (users: any[]) =>
  users
    .map((user) => ({
      id: typeof user.id === "number" ? user.id : null,
      name: typeof user.name === "string" ? user.name : null,
      username: typeof user.username === "string" ? user.username : null,
    }))
    .filter(
      (user) => user.id !== null && user.name !== null && user.username !== null
    );
