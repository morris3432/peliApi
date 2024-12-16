const { config } = require('../../config/server');
const boom = require('@hapi/boom');

function withErrorStack(err,stack){
  if(config.dev){
    return{...err,stack}
  }
  return err
}

function LogErrors(err, req, res, next) {
  console.log(err)
  next(err)
}

function wrapError(err, req, res, next) {
  if(!err.isBoom){
    next(boom.badImplementation(err))
  }
  next(err)
}

function errorHandler(err, req, res, next) {
  const {out:{statusCode}}=err
  res.status(statusCode)
  res.json(withErrorStack(playload, err.stack))
}

module.exports = {
  LogErrors,
  errorHandler,
  wrapError,
};
