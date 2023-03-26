const itemModel = require('../models/itemModel');


// Create  a new Item
const createNewItem = async (req, res) => {
  try {
    const item = await itemModel.create({ name: req.body.name, price: req.body.price, type: req.body.type, quantity: req.body.quantity })
    res.send(item);
  } catch (error) {
    res.json({ message: error });
  }
};

// Read  all items
const findAllItems = async (req, res) => {
  try {
    const item = await itemModel.find();
    res.json(item);
  } catch (error) {
    res.json({ message: error });
  }
};

// Read a single item
const findOneItem = async (req, res) => {
  try {
    const item = await itemModel.findOne({ _id: req.params.itemId });
    res.json(item);
  } catch (error) {
    res.json({ message: error });
  }
};

// update product
const updateItem = async (req, res) => {
  try {
    const item = {
      name: req.body.name,
      price: req.body.price,
      type: req.body.type,
      quantity: req.body.quantity
    };

    const updatedItem = await itemModel.findOneAndUpdate(
      { _id: req.params.itemId },
      item, { new: true }
    );
    res.json(updatedItem);
  } catch (error) {
    res.json({ message: error });
  }
};

// delete an Item
const deleteItem = async (req, res) => {
  try {
    const removedItem = await itemModel.findByIdAndDelete(req.params.itemId);
    res.json(removedItem);
  } catch (error) {
    res.json({ message: error });
  }
};
module.exports = {
  createNewItem,
  findAllItems,
  findOneItem,
  updateItem,
  deleteItem
}