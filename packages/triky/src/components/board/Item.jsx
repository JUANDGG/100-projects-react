const Item =({value,updateBoard,index})=>{

    const handleClick =()=>{
        updateBoard(index)
    }

    return (
      <div key={index} className='board--item'onClick={handleClick}>
        {value}
      </div>
    )
  }
  

  export default Item ;