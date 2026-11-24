const express = require('express');
const cors = require('cors');
const path = require('path');

const logger = require('./middleware/logger');
const { notFound, errorHandler } = require('./middleware/error');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// handle both export styles
app.use(typeof logger === 'function' ? logger : logger.logger || ((req,res,next)=>next()));
app.use('/api', routes);
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 10000;
app.listen(PORT, () => {
  console.log(`Matopeni Hub running on port ${PORT}`);
});

module.exports = app;
