import { useState,useEffect } from "react"
import ShipCard from "../components/ShipCard";
function AllBattleShips(){
  const [allShips,setAllShips] =useState(null)
  const url ='https://swapi.dev/api/starships'
  async function getShips(){
    try {
      const response = await fetch(url);
      const data = await response.json()
     
      // console.log(data.results)
      setAllShips(data.results)

    } catch (err) {
        console.error(err);
    }
  }

function loaded(){

  return <div className="card-container"><ShipCard ship ={allShips}/>
  

  </div>
}

function loading(){
  return <h1>Loading</h1>
}





  useEffect(()=>{
  
    getShips()

    return ()=>{}
  },[])

  return allShips? loaded() :loading()
}



export default AllBattleShips