const express = require('express');
const router = express.Router();

let expenses = []; // Temporary in-memory storage
const predefinedCategories = ["Food", "Travel", "Shopping", "Health", "Utilities"];

// 1. Add Expense
router.post('/', (req, res) => {
  const { category, amount, date } = req.body;

  if (!predefinedCategories.includes(category)) {
    return res.status(400).json({ status: 'error', data: null, error: 'Invalid category' });
  }
  if (amount <= 0 || typeof amount !== 'number') {
    return res.status(400).json({ status: 'error', data: null, error: 'Amount must be a positive number' });
  }
  const expense = { category, amount, date: new Date(date) };
  expenses.push(expense);

  res.json({ status: 'success', data: expense, error: null });
});

// 2. Get Expenses
router.get('/', (req, res) => {
  const { category, startDate, endDate } = req.query;
  const filters = {
    category,
    startDate: startDate ? new Date(startDate) : null,
    endDate: endDate ? new Date(endDate) : null,
  };

  const filteredExpenses = expenses.filter(exp => {
    const matchesCategory = !filters.category || exp.category === filters.category;
    const matchesDate =
      (!filters.startDate || exp.date >= filters.startDate) &&
      (!filters.endDate || exp.date <= filters.endDate);

    return matchesCategory && matchesDate;
  });

  res.json({ status: 'success', data: filteredExpenses, error: null });
});

// 3. Analyze Spending
router.get('/analysis', (req, res) => {
  const totalsByCategory = expenses.reduce((totals, exp) => {
    totals[exp.category] = (totals[exp.category] || 0) + exp.amount;
    return totals;
  }, {});

  const highestCategory = Object.keys(totalsByCategory).reduce(
    (max, category) => (totalsByCategory[category] > (totalsByCategory[max] || 0) ? category : max),
    null
  );

  res.json({
    status: 'success',
    data: { totalsByCategory, highestCategory },
    error: null,
  });
});

module.exports = router;
