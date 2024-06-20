const Item = require('../models/item');

const index = (req, res) => {
  Item.find()
    .sort({ name: 1 }) 
    .then(items => res.json(items))
    .catch(err => res.status(404).json({ success: false, error: err.message }));
}

const create = (req, res) => {
  const item = new Item(req.body);
  item.save()
    .then(item => res.json(item))
    .catch(err => res.status(400).json({ success: false, error: err.message }));
}

const update = (req, res) => {
  const id = req.params.id;
  Item.findByIdAndUpdate(id, req.body, { new: true })
    .then(item => res.json(item))
    .catch(err => res.status(404).json({ success: false, error: err.message }));
}

const details = (req, res) => {
  const id = req.params.id;
  Item.findById(id)
    .then(item => res.json(item))
    .catch(err => res.status(404).json({ success: false, error: err.message }));
}

const del = (req, res) => {
  const id = req.params.id;
  Item.findByIdAndDelete(id)
    .then(() => res.json({ success: true }))
    .catch(err => res.status(404).json({ success: false, error: err.message }));
}

module.exports = {
  index,
  create,
  update,
  details,
  del,
}
