const cron = require('cron');

let expenses = []; // Shared memory for the expenses array (mocked)

function startCronJobs() {
  const dailySummaryJob = new cron.CronJob('0 0 * * *', () => generateSummary('daily'));
  const weeklySummaryJob = new cron.CronJob('0 0 * * 0', () => generateSummary('weekly'));
  const monthlySummaryJob = new cron.CronJob('0 0 1 * *', () => generateSummary('monthly'));

  dailySummaryJob.start();
  weeklySummaryJob.start();
  monthlySummaryJob.start();
}

function generateSummary(period) {
  const totalSpent = expenses.reduce((sum, exp) => sum + exp.amount, 0);
  console.log(`[${period.toUpperCase()} SUMMARY] Total Expenses: ${totalSpent}`);
}

module.exports = { startCronJobs };
