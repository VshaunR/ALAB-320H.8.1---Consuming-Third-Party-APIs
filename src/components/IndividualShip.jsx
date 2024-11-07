import { useEffect,useState } from "react";
import { useParams } from "react-router-dom";


export default function IndividualShip(){

  const {index} = useParams()
  const [shipInfo,setShipInfo] = useState(null);
 let url =`https://swapi.dev/api/starships/${index}/`
  async function getInfo(){
    try {
        let response = await fetch(url)
        let data = await response.json();
        console.log(data)
        setShipInfo(data)

    } catch (err) {
      console.error(err)
    }
  }

  function loaded(){
  
 
  
 
  }
  function loading(){
    <h1>Click on a Ship</h1>
  }
  useEffect(()=>{
    getInfo()
 
  },[index])
return shipInfo ? loaded():loading()

}