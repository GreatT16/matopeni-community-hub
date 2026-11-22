const express = require('express');
const path = require('path');
const routes = require('./routes');
const { logger } = require('./middleware/logger');
const { notFound, errorHandler } = require('./middleware/errorHandler');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(logger);
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api', routes);

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Matopeni Hub running on port ${PORT}`);
});

module.exports = app;
