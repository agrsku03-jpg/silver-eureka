export const disclaimer = 'This is a fictional banking demonstration and does not process real financial transactions or connect to any banking systems.';
export const customer = { name: 'Maya Rivers', email: 'maya.rivers@example.com', tier: 'Emerald Private', creditScore: 748 };
export const accounts = [
  { type: 'Gradient Checking', number: '•••• 4829', balance: 12840.55, change: '+4.8%', color: 'from-blue-600 to-cyan-400' },
  { type: 'Grant Savings', number: '•••• 7712', balance: 46520.22, change: '+8.2%', color: 'from-emerald-500 to-teal-400' }
];
export const transactions = [
  { merchant: 'Payroll Deposit', category: 'Income', amount: 6200, date: 'Jun 28, 2026' },
  { merchant: 'City Utilities', category: 'Bills', amount: -184.32, date: 'Jun 27, 2026' },
  { merchant: 'Northstar Market', category: 'Groceries', amount: -96.18, date: 'Jun 26, 2026' },
  { merchant: 'Metro Card', category: 'Transport', amount: -42.0, date: 'Jun 25, 2026' },
  { merchant: 'CloudStream', category: 'Subscriptions', amount: -17.99, date: 'Jun 23, 2026' }
];
export const spend = [
  { name: 'Housing', value: 1800 }, { name: 'Food', value: 620 }, { name: 'Travel', value: 410 }, { name: 'Bills', value: 520 }, { name: 'Savings', value: 1200 }
];
export async function getCustomerSnapshot() { return { customer, accounts, transactions, spend }; }
