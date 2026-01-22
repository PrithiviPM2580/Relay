import { RateLimitInfo } from "express-rate-limit";

declare global {
  namespace Express {
    interface Request {
      rateLimit?: RateLimitInfo;
      session?: {
        user: {
          id: string;
        };
      };
    }
  }
}

export {};
