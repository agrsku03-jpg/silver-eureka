import { AccountCards, TransactionTable } from '@/components/BankComponents';
import { PageHeader } from '@/components/Layout';
export default function Accounts(){return <><PageHeader title="Checking & Savings" subtitle="Review demo balances, account numbers, and recent activity."/><div className="mx-auto max-w-7xl space-y-8 px-4 py-10"><AccountCards/><TransactionTable/></div></>}
