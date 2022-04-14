class CustomAPIError extends Error {
  constructor(message: string, public statusCode: number) {
    super(message)
    Object.setPrototypeOf(this, CustomAPIError.prototype);
  }
}

const createCustomError = (msg: string, statusCode: number) => {
  return new CustomAPIError(msg, statusCode)
}

export { createCustomError, CustomAPIError }
