import './NavBar.scss'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import FullscreenExitOutlinedIcon from '@mui/icons-material/FullscreenExitOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import ListOutlinedIcon from '@mui/icons-material/ListOutlined';
import avatar from '../../../public/avatar.jpg'

export default function NavBar() {
  return (
    <nav>
      <div className="wrapper">
        <section className="search">
          <input type="text" placeholder='Search...'/>
          <SearchOutlinedIcon />
        </section>
        <section className="items">
            <div className="item">
              <LanguageOutlinedIcon className='icon'/>
              English
            </div>
            <div className="item">
              <DarkModeOutlinedIcon className='icon'/>
            </div>
            <div className="item">
              <FullscreenExitOutlinedIcon className='icon'/>
            </div>
            <div className="item">
              <NotificationsNoneOutlinedIcon className='icon'/>
              <div className='counter'>1</div>
            </div>
            <div className="item">
              <ChatBubbleOutlineOutlinedIcon className='icon'/>
              <div className='counter'>2</div>
            </div>
            <div className="item">
              <ListOutlinedIcon className='icon'/>
            </div>
            <div className="item">
              <img src={avatar} alt="" className='avatar' />
            </div>
        </section>
      </div>
    </nav>
  )
}
