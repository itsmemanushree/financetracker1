const express = require('express');
const bodyParser = require('body-parser');
const expenseRoutes = require('./project/routes/expenses');
const { startCronJobs } = require('./project/utils/cron');

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.json());

// Default Route for '/'
app.get('/', (req, res) => {
  res.json({
    message: 'Welcome to the Expense Tracker API!',
    endpoints: {
      addExpense: 'POST /expenses',
      getExpenses: 'GET /expenses',
      analyzeSpending: 'GET /expenses/analysis',
    },
  });
});

// API Routes
app.use('/expenses', expenseRoutes);

// Start Cron Jobs
startCronJobs();

// Start the Server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:3000`);
});
