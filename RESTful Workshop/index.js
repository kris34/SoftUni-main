const express = require('express');
const cors = require('./middlewares/cors');

const app = express();

app.use(express.json());

app.use(cors());

app.get('/', (req, res) => {
  res.json({ message: 'REST service operational' });
});

app.listen(3030, () => console.log('Rest service operational'));
