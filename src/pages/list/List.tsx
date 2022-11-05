import DataTable from '../../Components/datatable/DataTable'
import NavBar from '../../Components/NavBar/NavBar'
import SideBar from '../../Components/SideBar/SideBar'
import './List.scss'

export default function List() {
  return (
    <div className='list'>
      <SideBar />
      <div className="listContainer">
        <NavBar />
        <DataTable />
      </div>
    </div>
  )
}
