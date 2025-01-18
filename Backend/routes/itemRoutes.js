const express = require('express');
const router = express.Router();
const Item = require('../models/itemModel');  // Import the Item model

// GET all items
router.get('/', async (req, res) => {
  try {
    const items = await Item.find();  // Get all items from MongoDB
    res.json(items);  // Send items as a JSON response
  } catch (err) {
    res.status(500).send('Server error');
  }
});

// GET an item by ID
router.get('/:id', async (req, res) => {
  try {
    const item = await Item.findById(req.params.id);  // Find item by ID
    if (!item) return res.status(404).send('Item not found');
    res.json(item);  // Send the item as a JSON response
  } catch (err) {
    res.status(500).send('Server error');
  }
});

// POST a new item
router.post('/', async (req, res) => {
  const { name, description } = req.body;
  try {
    const newItem = new Item({
      name,
      description,
    });
    await newItem.save();  // Save new item to MongoDB
    res.status(201).json(newItem);  // Return the created item
  } catch (err) {
    res.status(500).send('Server error');
  }
});

// PUT update an item by ID
router.put('/:id', async (req, res) => {
  const { name, description } = req.body;
  try {
    const item = await Item.findByIdAndUpdate(req.params.id, { name, description }, { new: true });
    if (!item) return res.status(404).send('Item not found');
    res.json(item);  // Return the updated item
  } catch (err) {
    res.status(500).send('Server error');
  }
});

// DELETE an item by ID
router.delete('/:id', async (req, res) => {
  try {
    const item = await Item.findByIdAndDelete(req.params.id);  // Delete item by ID
    if (!item) return res.status(404).send('Item not found');
    res.json(item);  // Return the deleted item
  } catch (err) {
    res.status(500).send('Server error');
  }
});

module.exports = router;
