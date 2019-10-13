const express = require('express');
const app = express();
const cors = require('cors');
const router = require('./routes');
const userRoutes = require('./routes/user');
const questionRoutes = require('./routes/question');
const commentRoutes = require('./routes/comment');
const answerRoutes = require('./routes/answer');
const tagRoutes = require('./routes/tag');
const port = 3001;

app.use(cors());
app.use(router);
app.use('/api',userRoutes);
app.use('/api',questionRoutes);
app.use('/api',commentRoutes);
app.use('/api',answerRoutes);
app.use('/api',tagRoutes);
app.listen(port, () => console.log(`Server listening on port ${port}.`));
