const express = require('express');
const routes = require('./routes');
const { logger } = require('./middleware/logger');
const { notFound, errorHandler } = require('./middleware/errorHandler');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(logger);

app.get('/', (req, res) => {
  res.json({ message: 'Welcome to Matopeni Community Hub - Group 5 - Mannam Season 12' });
});

app.use('/api', routes);

app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Matopeni Hub running on port ${PORT}`);
});

module.exports = app;
