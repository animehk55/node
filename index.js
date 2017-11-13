const express = require ('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const bodyParser = require('body-parser');
const keys = require('./config/keys');
require('./models/User');
require('./services/passport');



mongoose.connect(keys.mongoURI);

const app = express();
app.use(bodyParser.json());
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
  })
);

app.use(passport.initialize());
app.use(passport.session());

require('./routes/authRoutes') (app);
require('./routes/billingRoutes')(app);

if (process.env.NODE_ENV === 'production') {
  // Express will serve up production asseets
  // like our main.js file, or main.css file!
  app.use(express.strict('client/build'));
  //Express will serve up the index.html file
  // if it dosen't recogmize the routes
  const path = require('path');
  app.get('*', (req, res) = >{
    res.sendFile(path.resolve(_dirname. 'client, 'build', 'index.html'));
  });
}

  const PORT = process.env.PORT || 5000;
app.listen(PORT);


// require('./routes/authRoutes',{useMongoClient: true}) (app);
