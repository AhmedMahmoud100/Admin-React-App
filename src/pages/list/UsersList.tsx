import UsersCard from '../../Components/cards/UsersCard'
import DataTable from '../../Components/datatable/DataTable'
import './List.scss'
import { Link } from "react-router-dom";
export default function UsersList() {
  return (
    <>
      <div className="datatableTitle">
        Add New User
        <Link to="/users/new" className="link">
          Add New
        </Link>
      </div>
      <DataTable />
      <UsersCard />
    </>
  )
}
