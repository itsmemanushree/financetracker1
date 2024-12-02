# Expense Tracker API

## Overview

The Expense Tracker API is a simple Node.js application that helps users manage and analyze their expenses. It provides endpoints to log expenses, retrieve and filter them, analyze spending patterns, and generate automated summaries using scheduled tasks.

## Features

1. **Add an Expense**: Log a new expense with details like category, amount, and date.
2. **Retrieve Expenses**: Fetch expenses with optional filters like category or date range.
3. **Analyze Spending**: View insights, such as total spending by category or over a time period.
4. **Generate Summaries**: Automated reports for daily, weekly, or monthly expense summaries using a scheduled task (powered by `node-cron`).

## Endpoints

- **POST /expenses**: Log a new expense.  
- **GET /expenses**: Retrieve all expenses or filter by category/date.  
- **GET /expenses/analysis**: Analyze spending patterns, such as totals by category.  
- **GET /expenses/summary**: Generate a summary report of all expenses.  

## Key Highlights

- **In-Memory Storage**: Expenses are stored in an array for simplicity.
- **Data Validation**: Ensures categories are predefined, and amounts are positive numbers.
- **Automated Summaries**: Scheduled tasks generate summaries at defined intervals.
- **JSON Response Format**: All responses follow the format `{ status, data, error }`.

## Usage

1. Clone the repository.
2. Install dependencies using `npm install`.
3. Run the server with `node server.js`.
4. Test the API using tools like Postman or directly via a browser.

## Requirements

- **Node.js** (v14+)
- **Postman** (or any API testing tool)

---

This API is a lightweight solution for tracking and analyzing personal expenses, making it ideal for learning or simple use cases. Contributions are welcome!
