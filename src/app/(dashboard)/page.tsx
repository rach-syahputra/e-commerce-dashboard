import PageContainer from '@/components/container/page-container'
import DashboardSummary from './_components/dashboard-summary'
import SalesChart from './_components/sales-chart'

export default function Home() {
  return (
    <PageContainer>
      <DashboardSummary />
      <div className='gap-4 xl:grid xl:grid-cols-5'>
        <SalesChart className='col-span-3' />
      </div>
    </PageContainer>
  )
}
