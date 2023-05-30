import * as morgan from 'morgan';

morgan.token('headers', req => `Req Headers: ${JSON.stringify(req.headers)}`);
morgan.token('query', req => `Req Query: ${JSON.stringify(req.query)}`);
morgan.token('body', req => `Req Body: ${JSON.stringify(req.body)}`);

const loggerFormat = '[:date[clf]] ":method :url :status :response-time ms';
const loggerFormatError = `${loggerFormat}\n:headers\n:query\n:body`;

export const logger = morgan(loggerFormat, {
  skip: (req, res) => res.statusCode >= 400,
  stream: process.stdout,
});
export const loggerError = morgan(loggerFormatError, {
  skip: (req, res) => res.statusCode < 400,
  stream: process.stderr,
});
