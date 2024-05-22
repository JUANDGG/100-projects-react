import { useEffect, useState } from 'react';
import WinnerCard from './WinnerCard.jsx'
import '../../assets/css/WinnerData.css'

const getDataLocalStorage=(key)=>{
  let data =localStorage.getItem(key)
  data = JSON.parse(data)
  return data
}



const loadTarget =(data)=>{
  const newData = [];

  for(let i in data){
    newData.push(
    <WinnerCard key={i} game={i} winner={data[i].winner} locer={data[i].locer}/>)
  }

  return newData;
}

const winnersData =()=>{

  const [data,setData] =useState([]);
  
  useEffect(()=>{
    setData(getDataLocalStorage('triky'))
  },[])


    return (
        <section className='winnerData'>
          {loadTarget(data)}
        </section>
      );
}

export default winnersData
