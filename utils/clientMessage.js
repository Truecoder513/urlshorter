module.exports = (res, statusCode, statusBoll, message, data) => {
  res.status(statusCode).send({
    success: statusBoll,
    message,
    data,
  });
};
