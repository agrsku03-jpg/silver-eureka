import { AccountCards, AnalyticsCharts, QuickActions, TransactionTable } from '@/components/BankComponents';
import { customer } from '@/lib/mockData';
export default function Dashboard(){return <div className="mx-auto max-w-7xl space-y-8 px-4 py-10"><div><p className="text-emerald-600 font-bold">Welcome back, {customer.name}</p><h1 className="text-4xl font-black">Customer dashboard</h1></div><AccountCards/><QuickActions/><AnalyticsCharts/><TransactionTable/></div>}
