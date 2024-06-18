import useFact from "../hooks/useFact.js";
import useImageCat from "../hooks/useImageCat.js";


function App() {
  
  const {fact,refrestFact} =useFact();
  const {imageCat} = useImageCat(fact)
  
  const handleClick =()=>{
    return refrestFact();
  }

  return (
    <div>
  
      {fact && <h1 className='titleFact'>{fact["fact"]}</h1>}
      <div >
        <button onClick={handleClick} className="btnRefresh">Refresf </button>
      </div>
    
      <div className="listImage">
          {imageCat && imageCat.map((e,index)=>{
            return <img   src={e} key={index} alt={`cat${e}`} />
          })}

      </div>
      
      
    </div>
  );
}

export default App;
