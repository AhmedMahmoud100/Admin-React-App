import React from 'react'
import './Featured.scss'
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import { CircularProgressbar } from 'react-circular-progressbar';
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import "react-circular-progressbar/dist/styles.css"
export default function Featured() {
  return (
    <div className='featured'>
      <section className="top">
        <h3> Total Revenue</h3>
        <MoreVertOutlinedIcon fontSize='small' />
      </section>
      <section className="bottom">
        <div className="featuredChart">
          <CircularProgressbar value={70} text="70%" strokeWidth={5}/>
        </div>
        <h4>Total sales made today</h4>
        <p className='amount'>$420</p>
        <p className='desc'>
          Previous transactions processing. Last payments not be included.
        </p>
        <div className="summary">
          <div className="item">
            <h5>Target</h5>
            <div className="itemResult negative">
              <KeyboardArrowDownOutlinedIcon fontSize='small'/>
              <div className="resultAmount">$13.5k</div>
            </div>
          </div>
          <div className="item">
            <h5>Last Week</h5>
            <div className="itemResult positive">
              <KeyboardArrowUpOutlinedIcon fontSize='small'/>
              <div className="resultAmount">$13.5k</div>
            </div>
          </div>
          <div className="item">
            <h5>Last Month</h5>
            <div className="itemResult positive">
              <KeyboardArrowUpOutlinedIcon fontSize='small'/>
              <div className="resultAmount">$13.5k</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
