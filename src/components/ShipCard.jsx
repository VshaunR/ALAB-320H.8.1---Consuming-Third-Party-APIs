
import { Link } from 'react-router-dom';

function ShipCard({ship}){

  let all = ship.map((item,index)=>{
    
    return <Link to={`/individualShip/${index}/`}>
    <div className="card">
      
      <h3> {item.name}{index}</h3>

    </div>
    </Link>
  })

  return(
    <>
    {all}
    </>
  )
}

export default ShipCard;