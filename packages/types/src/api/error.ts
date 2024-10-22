export type CustomErrorDetails = Record<string, unknown>;

export interface CustomError {
  error: {
    status: number;
    name: string;
    message: string;
    details: CustomErrorDetails;
  };
}
