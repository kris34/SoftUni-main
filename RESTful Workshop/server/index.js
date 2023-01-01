const express = require('express');
const mongoose = require('mongoose');
const cors = require('./middlewares/cors');
const authController = require('./controllers/authController');
const dataController = require('./controllers/dataController');
const trimBody = require('./middlewares/trimBody');
const session = require('./middlewares/session');

const connectionString = 'mongodb://localhost:27017/furniture';

start();

async function start() {
  await mongoose.connect(connectionString);

  const app = express();

  app.use(express.json());

  app.use(cors());
  app.use(trimBody());
  app.use(session());

  app.get('/', (req, res) => {
    res.json({ message: 'REST service operational' });
  });

  app.use('/users', authController);
  app.use('/data/catalog', dataController);

  app.listen(3030, () => console.log('Rest service operational'));
}
