const express = require('express');
const router = express.Router();
const Expense = require('../db/model');

// GET all expenses
router.get('/', async (req, res) => {
  try {
    const expenses = await Expense.find().sort({ createdAt: -1 });
    res.json(expenses);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST a new expense
router.post('/', async (req, res) => {
  const { description, amount } = req.body;
  if (!description || !amount) {
    return res.status(400).json({ message: 'Please provide description and amount' });
  }

  try {
    const newExpense = new Expense({ description, amount });
    const saved = await newExpense.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// DELETE an expense
router.delete('/:id', async (req, res) => {
  try {
    const deleted = await Expense.findByIdAndDelete(req.params.id);
    if (!deleted) {
      return res.status(404).json({ message: 'Expense not found' });
    }
    res.json({ message: 'Expense deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
