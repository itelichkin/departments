const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 4200;
const app = express();

const appDir = path.join(__dirname, 'dist');

// Serve only the static files form the dist directory
app.use(express.static(appDir));

app.get('/*', function (req, res) {
  res.sendFile('index.html', { root: appDir, dotfiles: 'deny' });
});

// Start the app by listening on the default Heroku port
app.listen(PORT, function () {
  console.log('Express server listening on port ' + PORT);
});
