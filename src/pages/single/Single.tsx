import Chart from '../../Components/chart/Chart'
import MainTable from '../../Components/table/Table'
import './Single.scss'
import Cards from '../../Components/cards/MainTableCards'


export default function Single() {
  return (
    <div className="single">
      <div className="top">
        <div className="left shadow">
          <div className="editButton">Edit</div>
          <h1 className="title">Information</h1>
          <div className="item">
            <img
              src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
              alt=""
              className="itemImg"
            />
            <div className="details">
              <h1 className="itemTitle">Jane Doe</h1>
              <div className="detailItem">
                <span className="itemKey">Email:</span>
                <span className="itemValue">janedoe@gmail.com</span>
              </div>
              <div className="detailItem">
                <span className="itemKey">Phone:</span>
                <span className="itemValue">+1 2345 67 89</span>
              </div>
              <div className="detailItem">
                <span className="itemKey">Address:</span>
                <span className="itemValue">
                  Elton St. 234 Garden Yd. NewYork
                </span>
              </div>
              <div className="detailItem">
                <span className="itemKey">Country:</span>
                <span className="itemValue">USA</span>
              </div>
            </div>
          </div>
        </div>
        <div className="right">
          <Chart title="User Spending ( Last 6 Months)" />
        </div>
      </div>
      <div className="bottom shadow">
        <h1 className="title">Latest Transactions</h1>
        <MainTable />
        <Cards />
      </div>
    </div>
  )
}
