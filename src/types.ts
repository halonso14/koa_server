export enum ErrorCode {
  SUCCESS = 0,
  FAIL = 1,
  SERVICE_NOT_RUNNING = 11,
  SERVICE_KEY_INVALID = 21,
  SERVICE_NAME_INVALID = 31,
  SERVICE_ID_INVALID = 41,
}

type ErrorResponse = {
  errorCode: number;
  errorMessage?: string;
}

export type { ErrorResponse }
