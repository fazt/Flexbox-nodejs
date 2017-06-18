const path = require('path');
const sassMiddleware = require('node-sass-middleware');

const express = require('express');
const app = express();

// Importing Routes
const index = require('./routes/index');

// express configurations
app.set('port', process.env.PORT || 3000);
app.engine('html', require('ejs').renderFile);
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs');

var srcPath = __dirname + '/sass';
var destPath = __dirname + '/public/css';

app.use('/css', sassMiddleware({
  src: srcPath,
  dest: destPath,
  debug: true,
  outputStyle: 'compressed'
}));

// express routes
app.use('/', index);

app.use(express.static(path.join(__dirname, '/public')));

// server initialization
app.listen(app.get('port'), () => {
  console.log(`server on port ${app.get('port')}`)
});
