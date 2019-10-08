const express = require('express');
const app = express();
const cors = require('cors');
const router = require('./routes');
const port = 3001;

app.use(cors());
app.use(router);
app.listen(port, () => console.log(`Server listening on port ${port}.`));
