import { useState ,useEffect  } from 'react'
import './assets/App.css'
import TwitterCard from './TwitterCard'


function App() {

  const [varData,setVarData] = useState([])


  useEffect(() => { 
    const getDataCards = async ()=>{
      const data =(await(await fetch("/data.json")).json())["users"]
      setVarData(data)
    }
    getDataCards()

  },[]);



  return (
    <section>
      {
        //la key es una forma unica de identificar a un componente es una prop especial
        varData.map(e=> <TwitterCard key={Object.keys(e)[0]} name={Object.keys(e)[0]}  isFollowing={Object.values(e)[0]} />)
      }     
    </section>
  )
}

export default App

