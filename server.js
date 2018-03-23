const express = require('express');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const cors = require('cors');
const stream = require('./app/routes/stream');
// const health = require('./app/routes/health');
// const errorHandler = require('./app/handlers/errors');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

/**
 * Enabling CORS
 */
app.use(cors());

const v1 = express.Router();

/**
 * Routes
 */
v1.use('/stream', stream);
// v1.use('/health', health);

app.use('/v1', v1);
app.use('/', v1);

app.use(methodOverride());
// app.use(errorHandler);

 /**
 * Backwards down the number line
 */
const port = process.env.PORT || 4321; 

app.listen(port);

console.log('Phrenzy has begun streaming on port ' + port);

module.exports = app;