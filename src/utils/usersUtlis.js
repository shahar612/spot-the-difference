const USERS_KEY = "users";

export const readUsersData = () => {
  const data = localStorage.getItem(USERS_KEY);
  return data ? JSON.parse(data) : { users: [] };
};

export const writeUsersData = (data) => {
  localStorage.setItem(USERS_KEY, JSON.stringify(data));
};

export const addUser = (username) => {
  const usersData = readUsersData();
  if (usersData.users.some((u) => u.username === username)) {
    throw new Error("User already exists");
  }
  usersData.users.push({ username, images: [] });
  writeUsersData(usersData);
};

export const addImagesToUser = (username, imageSet, chosenImage) => {
  const usersData = readUsersData();
  const user = usersData.users.find((u) => u.username === username);
  if (!user) {
    throw new Error("User not found");
  }
  if (user.images.length >= 4) {
    throw new Error("User already has 4 sets of images");
  }
  user.images.push({ imageSet, chosenImage });
  writeUsersData(usersData);
};
