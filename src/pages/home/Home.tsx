import Cards from '../../Components/cards/Cards'
import Chart from '../../Components/chart/Chart'
import Featured from '../../Components/featured/Featured'
import MainTable from '../../Components/table/Table'
import Widget from '../../Components/Widget/Widget'
import './Home.scss'

export default function Home() {
  return (
    <div className='home'>
      <div className='widgets'>
        <Widget type='user' />
        <Widget type='order' />
        <Widget type='earning' />
        <Widget type='balance' />
      </div>
      <div className='charts'>
        <Featured />
        <Chart  title="Last 6 Months (Revenue)" />
      </div>
      <div className="listContainer shadow">
        <h3>Latest Transactions</h3>
        <MainTable />
      </div>
      <Cards/>
    </div>
  )
}
