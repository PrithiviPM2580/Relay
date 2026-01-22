import { auth } from "@/lib/auth.lib.js";
import APIError from "@/lib/api-error.lib.js";
import type { NextFunction, Request, Response } from "express";
import { logger } from "better-auth";

export async function authenticateMiddleware(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  try {
    const session = await auth.api.getSession({
      headers: Object.fromEntries(
        Object.entries(req.headers).map(([key, value]) => [key, String(value)]),
      ),
    });

    if (!session) {
      logger.info("No session found");
      return next(new APIError(401, "Unauthorized"));
    }

    req.session = {
      user: {
        id: session.user.id,
      },
    };
    next();
  } catch (error) {
    next(error);
  }
}
