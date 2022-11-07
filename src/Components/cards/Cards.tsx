import './Cards.scss'

export default function Cards() {
    type DataType = {
        id: number,
        product: string,
        img: string,
        customer: string,
        date: string,
        amount: number ,
        method:string,
        status :string
      }[]
        
      const rows:DataType = [
          {
            id: 1143155,
            product: "Acer Nitro 5",
            img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
            customer: "John Smith",
            date: "1 March",
            amount: 785,
            method: "Cash on Delivery",
            status: "Approved",
          },
          {
            id: 2235235,
            product: "Playstation 5",
            img: "https://m.media-amazon.com/images/I/31JaiPXYI8L._AC_UY327_FMwebp_QL65_.jpg",
            customer: "Michael Doe",
            date: "1 March",
            amount: 900,
            method: "Online Payment",
            status: "Pending",
          },
          {
            id: 2342353,
            product: "Redragon S101",
            img: "https://m.media-amazon.com/images/I/71kr3WAj1FL._AC_UY327_FMwebp_QL65_.jpg",
            customer: "John Smith",
            date: "1 March",
            amount: 35,
            method: "Cash on Delivery",
            status: "Pending",
          },
          {
            id: 2357741,
            product: "Razer Blade 15",
            img: "https://m.media-amazon.com/images/I/71wF7YDIQkL._AC_UY327_FMwebp_QL65_.jpg",
            customer: "Jane Smith",
            date: "1 March",
            amount: 920,
            method: "Online",
            status: "Approved",
          },
          {
            id: 2342355,
            product: "ASUS ROG Strix",
            img: "https://m.media-amazon.com/images/I/81hH5vK-MCL._AC_UY327_FMwebp_QL65_.jpg",
            customer: "Harold Carol",
            date: "1 March",
            amount: 2000,
            method: "Online",
            status: "Pending",
          },
        ];
  return (
    <div className='cardsContainer'>
             {rows.map((e) => {
                return <div className='card' key={e.id}>
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
