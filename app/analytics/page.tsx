import { AnalyticsCharts, PieSpend } from '@/components/BankComponents';
import { PageHeader } from '@/components/Layout';
export default function Analytics(){return <><PageHeader title="Spending analytics" subtitle="Interactive chart components visualize fictional customer spending."/><div className="mx-auto max-w-7xl space-y-8 px-4 py-10"><AnalyticsCharts/><PieSpend/></div></>}
