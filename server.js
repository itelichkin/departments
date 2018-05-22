const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 4200;
const app = express();

// Serve only the static files form the dist directory
app.use(express.static(`${__dirname}/front-end/dist/`));

app.get('/*', function (req, res) {

  res.sendFile(`./front-end/dist/index.html`);
});

// Start the app by listening on the default Heroku port
app.listen(PORT, function () {
  console.log('Express server listening on port ' + PORT);
});
