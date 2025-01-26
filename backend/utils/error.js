export const errorHandler = (statusCode, message) => {
  const error = new Error();

  const statusCode = error.statusCode;
  const message = error.message;

  return error;
};
