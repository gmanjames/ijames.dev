'use strict';

const express = require('express'),
      app     = express();

// .env file stuff
require('dotenv').config();

app.use('/', express.static('./public'));

app.get('/ping', (...args) => args[1].send('ping'));

app.listen(process.env.PORT, () => console.log(`listening on ${process.env.PORT}!`) );
