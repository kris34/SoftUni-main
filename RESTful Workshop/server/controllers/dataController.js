const { hasUser } = require('../middlewares/guards');
const { getAll, create, getById, update } = require('../services/itemService');
const { parseError } = require('../util/parser');

const dataController = require('express').Router();

dataController.get('/', async (req, res) => {
  const items = await getAll();
  res.json(items);
});

dataController.post('/', hasUser(), async (req, res) => {
  try {
    const data = Object.assign({ _ownerId: req.user._id }, req.body);
    const item = await create(data);
    res.json(item);
  } catch (err) {
    const message = parseError(err);
    res.status(400).json({ message });
  }
});

dataController.get('/:id', async (req, res, next) => {
  const item = await getById(req.params.id);

  res.json(item);
});

dataController.put('/:id', async (req, res, next) => {
  const item = await getById(req.params.id);

  if (req.user._id != item._ownerId) {
    return res.status(403).json({ message: 'You cannot modify this record' });
  }

  try {
    const result = await update(req.params.id, req.body);
    res.json(result);
  } catch (err) {
    const message = parseError(err);
    res.status(400).json({ message });
  }
});

dataController.delete('/:id', async (req, res) => {
  const item = await getById(req.params.id);

  if (req.user._id != item._ownerId) {
    return res.status(403).json({ message: 'You cannot modify this record' });
  }

  
});
module.exports = dataController;
