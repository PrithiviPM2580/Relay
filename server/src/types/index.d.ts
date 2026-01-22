declare global {
  type ErrorDetails = {
    field?: string;
    message?: string;
  };

  type ErrorType = {
    type?: string;
    details?: ErrorDetails[];
  };

  type Errorresponse = string | ErrorType;

  interface RequestValidate {
    body?: ZodTypeAny;
    query?: ZodTypeAny;
    params?: ZodTypeAny;
  }
}

export {};
