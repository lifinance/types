// Error codes emitted by the LI.FI API
export enum ErrorCode {
  DefaultError = 1000,
  FailedToBuildTransactionError = 1001,
  NoQuoteError = 1002,
  NotFoundError = 1003,
  NotProcessableError = 1004,
  RateLimitError = 1005,
  ServerError = 1006,
  SlippageError = 1007,
  ThirdPartyError = 1008,
  TimeoutError = 1009,
  UnauthorizedError = 1010,
  ValidationError = 1011,
  RpcFailure = 1012,
  MalformedSchema = 1013,
}
