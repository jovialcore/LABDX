const express = require('express');
const serveStatic = require("serve-static")
app = express();
var history = require('connect-history-api-fallback');
app.use(history());
const path = require('path');
app.use(serveStatic(path.join(__dirname, 'dist')));
const port = process.env.PORT || 3000;
app.listen(port);