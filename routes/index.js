const express = require('express');
const router = express.Router();

const itemController = require('../controllers/itemController');

// Create a new Item
router.post('/', itemController.createNewItem);

// Read all Items
router.get('/', itemController.findAllItems);

// Retrieve a single Item with itemId
router.get('/:itemId', itemController.findOneItem);

// Update a Item with ItemId
router.put('/:itemId', itemController.updateItem);

// Delete a Note with ItemId
router.delete('/:itemId', itemController.deleteItem);

module.exports = router;