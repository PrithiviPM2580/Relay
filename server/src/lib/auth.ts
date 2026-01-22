import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { PrismaClient } from "../../generated/prisma/client.js";
import config from "../config/env.config.js";

const prisma = new PrismaClient();

export const auth = betterAuth({
  database: prismaAdapter(prisma, {
    provider: "mongodb",
  }),
  advanced: {
    database: {
      generateId: false,
    },
    disableCSRFCheck: true,
  },
  socialProviders: {
    google: {
      clientId: config.GOOGLE_CLIENT_ID,
      clientSecret: config.GOOGLE_CLIENT_SECRET,
      redirectURI: config.GOOGLE_REDIRECT_URI,
    },
  },
  secret: config.BETTER_AUTH_SECRET,
  baseURL: config.BETTER_AUTH_URL,
  basePath: "/api/v1/auth",
  trustedOrigins: [config.CORS_ORIGIN, "*"],
  session: {
    expiresIn: 60 * 60 * 24 * 7, // 7 days - main session expiration
    updateAge: 60 * 60 * 24, // 1 day - session refresh interval
    cookieCache: {
      enabled: true,
      maxAge: 5 * 60, // 5 minutes - cookie cache duration
    },
  },
});
