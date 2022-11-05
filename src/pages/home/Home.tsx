import Chart from '../../Components/chart/Chart'
import Featured from '../../Components/featured/Featured'
import NavBar from '../../Components/NavBar/NavBar'
import SideBar from '../../Components/SideBar/SideBar'
import MainTable from '../../Components/table/Table'

import Widget from '../../Components/Widget/Widget'
import './Home.scss'

export default function Home() {
  return (
    <div className='home'>
        <SideBar />
        <section className='homeContainer'>
          <NavBar />
              <div className='widgets'>
                <Widget type='user'/>
                <Widget type='order'/>
                <Widget type='earning'/>
                <Widget type='balance'/>
              </div>
              <div className='charts'>
                <Featured />
                <Chart aspect={2 / 1} title="Last 6 Months (Revenue)"/>
              </div>
              <div className="listContainer">
                <h3>Latest Transactions</h3>
                <MainTable />
              </div>
        </section>
    </div>
  )
}
