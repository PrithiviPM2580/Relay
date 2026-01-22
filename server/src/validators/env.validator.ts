import { z } from "zod";

export const envValidator = z.object({
  NODE_ENV: z
    .enum(["development", "production", "test"])
    .default("development"),
  PORT: z.coerce.number().default(5000),
  LOG_LEVEL: z.string().default("info"),
  MONGO_URI: z.string().min(1, "MONGO_URI is required"),
});
