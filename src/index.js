'use strict';

require('nomoreunhandledrejections')();

const express = require('express');
const cons = require('consolidate');
const path = require('path');
const morgan = require('morgan');
const scssMiddleware = require('./middleware/scss');
const staticMiddleware = require('./middleware/static');

const workdir = process.cwd();
const httpPort = process.env.HTTP_PORT || 3000;
const app = express();

const baseViewModel = {
  title: `Default title here`
};

//
// Setup
//
app.engine('dust', cons.dust);
cons.dust.helpers = require('dustjs-helpers');
app.set('view engine', 'dust');
app.set('views', path.join(workdir, 'views'));

app.use(morgan('combined'));
app.use(scssMiddleware);
app.use('/public', staticMiddleware);

//
// Routes
//
app.get('/', async (req, res) => {
  res.render('pages/index', baseViewModel);
});
app.get('/index', async (req, res) => {
  res.render('pages/index', baseViewModel);
});

//
// Run
//
app.listen(httpPort, () => console.log(`Listening on port ${httpPort}`));
