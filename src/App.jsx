import { useState } from 'react'
import AllBattleShips from './pages/AllBattleShips';
import {Routes,Route} from 'react-router-dom';
import './App.css';
import IndividualShip from './components/IndividualShip';
function App() {


  return (
    <>
    <h1>STAR WARS BATTLESHIPS</h1>
   <AllBattleShips />
   <Routes>
    <Route path='/individualShip/:index/' element={<IndividualShip />}/>
   </Routes>
    </>
  )
}

export default App
