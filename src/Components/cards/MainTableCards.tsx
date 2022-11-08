import './Cards.scss'
import { rows } from '../../data/MainTableSource'

export default function MainTableCards() {
  return (
    <div className='cardsContainer'>
      {rows.map((e) => {
        return <div className='card shadow' key={e.id}>
          <div>
            <span>id: </span>
            <span>{e.id}</span>
          </div>
          <div>
            <span>product:</span>
            <figure>
              <img src={e.img} alt=''></img>
              {e.product}
            </figure>

          </div>
          <div>
            <span>customer: </span>
            <span>{e.customer}</span>
          </div>
          <div>
            <span>date:</span>
            <span>{e.date}</span>
          </div>
          <div>
            <span>amount:</span>
            <span>{e.amount}</span>
          </div>
          <div>
            <span>method: </span>
            <span>{e.method}</span>
          </div>
          <div>
            <span>status: </span>
            <span className={`cellWithStatus ${e.status}`}>{e.status}</span>
          </div>

        </div>
      })}
    </div>
  )
}
