const express = require('express');
const app = express();

require('./src/Route')(app);

app.use(express.json());
app.listen(3333);
