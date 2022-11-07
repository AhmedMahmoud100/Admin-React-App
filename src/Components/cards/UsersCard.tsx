import { userRows } from '../../data/DataTableSource'
import { Link } from "react-router-dom";
import { useState } from 'react';

export default function UsersCard() {
    const [data, setData] = useState(userRows)

    function handleDelete(id: number) {
        setData(data.filter((item) => item.id !== id));
    }

    return (
        <div className='cardsContainer'>
            {data.map((e) => {
                return <div className='card shadow' key={e.id}>
                    <div>
                        <span className='title'>id: </span>
                        <span>{e.id}</span>
                    </div>
                    <div>
                        <span>user:</span>
                        <figure>
                            <img src={e.img} alt=''></img>
                            {e.username}
                        </figure>

                    </div>
                    <div>
                        <span>Email: </span>
                        <span>{e.email}</span>
                    </div>
                    <div>
                        <span>Age:</span>
                        <span>{e.age}</span>
                    </div>
                    <div>
                        <span>status: </span>
                        <span className={`cellWithStatus ${e.status}`}>{e.status}</span>
                    </div>
                    <div>
                        <span>Action: </span>
                        <section className="cellAction">
                            <Link to="/users/test" style={{ textDecoration: "none" }}>
                                <button className="viewButton">View</button>
                            </Link>
                            <button
                                className="deleteButton"
                                onClick={() => handleDelete(e.id)}
                            >
                                Delete
                            </button>
                        </section>
                    </div>
                </div>
            })}
        </div>
    )
}
