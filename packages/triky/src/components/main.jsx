import React from 'react'
import ReactDOM from 'react-dom/client'
//CSS  
import '../assets/css/index.css'


//COMPONENT Board
import Board from './board/Board.jsx'
import WinnersData from './winnersInformation/WinnersData.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Board />
    <WinnersData/>
  </React.StrictMode>,
)
