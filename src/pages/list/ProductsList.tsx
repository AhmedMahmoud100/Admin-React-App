import UsersCard from '../../Components/cards/UsersCard'
import DataTable from '../../Components/datatable/DataTable'
import './List.scss'
import { Link } from "react-router-dom";
export default function ProductsList() {
  return (
    <>
     <div className="datatableTitle">
        Add New Product
        <Link to="/products/new" className="link">
          Add New
        </Link>
      </div>
      <DataTable />
      <UsersCard />
      </>
  )
}
