"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomAPIError = exports.createCustomError = void 0;
class CustomAPIError extends Error {
    constructor(message, statusCode) {
        super(message);
        this.statusCode = statusCode;
        Object.setPrototypeOf(this, CustomAPIError.prototype);
    }
}
exports.CustomAPIError = CustomAPIError;
const createCustomError = (msg, statusCode) => {
    return new CustomAPIError(msg, statusCode);
};
exports.createCustomError = createCustomError;
