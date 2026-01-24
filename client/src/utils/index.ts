import { v4 as uuidv4 } from "uuid";

export const generateShortId = () => {
  const id = uuidv4().split("-")[0].substring(0, 6);
  return id
    .split("")
    .map((char) =>
      Math.random() > 0.5 ? char.toUpperCase() : char.toLowerCase(),
    )
    .join("");
};
