import './SideBar.scss'
import DashboardIcon from '@mui/icons-material/Dashboard';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import StoreIcon from '@mui/icons-material/Store';
import FilterFramesOutlinedIcon from '@mui/icons-material/FilterFramesOutlined';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import FaceIcon from '@mui/icons-material/Face';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import LogoutIcon from '@mui/icons-material/Logout';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

type SideBarPropsType = {
  dark: React.Dispatch<React.SetStateAction<boolean>>,
  setMode: boolean
}

export default function SideBar({ dark, setMode }: SideBarPropsType) {
  const [darkmode, setdarkmode] = useState(true)
  const [menu, setmenu] = useState(false)

  useEffect(() => {
    dark(darkmode)
  }, [darkmode])

  useEffect(() => {
    setdarkmode(setMode)
  }, [setMode])

  return (
    <>
      <aside className={menu ? "active" : "disable"}>
        <section className='top'>
          <Link to='/' onClick={() => setmenu(false)}>
            <span className="logo">Admin </span>
          </Link>
        </section>
        <hr />
        <section className='center'>
          <ul>
            <h2>MAIN</h2>
            <li>
              <DashboardIcon className='icon' />
              <span>Dashboard</span>
            </li>
            <h2>LISTS</h2>
            <Link to='/users' onClick={() => setmenu(false)}>
              <li>
                <Person2OutlinedIcon className='icon' />
                <span>Users</span>
              </li>
            </Link>
            <Link to='/products' onClick={() => setmenu(false)}>
              <li>
                <StoreIcon className='icon' />
                <span>Products</span>
              </li>
            </Link>
            <li>
              <FilterFramesOutlinedIcon className='icon' />
              <span>Orders</span>
            </li>
            <li>
              <LocalShippingIcon className='icon' />
              <span>Delivery</span>
            </li>
            <h2>USEFUL</h2>
            <li>
              <QueryStatsIcon className='icon' />
              <span>Stats</span>
            </li>
            <li>
              <NotificationsActiveIcon className='icon' />
              <span>Notifications</span>
            </li>
            <h2>SERVICE</h2>
            <li>
              <HealthAndSafetyIcon className='icon' />
              <span>System Health</span>
            </li>
            <li>
              <FaceIcon className='icon' />
              <span>Logs</span>
            </li>
            <li>
              <SettingsIcon className='icon' />
              <span>Settings</span>
            </li>
            <h2>USER</h2>
            <li>
              <AccountBoxIcon className='icon' />
              <span>Profile</span>
            </li>
            <li>
              <LogoutIcon className='icon' />
              <span>Logout</span>
            </li>
          </ul>
        </section>
        <section className='bottom'>
          <div className="colorOption" onClick={() => setdarkmode(false)}></div>
          <div className="colorOption" onClick={() => setdarkmode(true)}></div>
        </section>
      </aside>
      <div className='menu' onClick={() => setmenu(!menu)}>
        <p></p>
        <p></p>
        <p></p>
      </div>
    </>
  )
}
