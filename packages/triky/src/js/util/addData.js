const addData = (oneWinner, oneLucer) => {
    let trikyData = localStorage.getItem('triky');
    
    if (trikyData) {

      trikyData = JSON.parse(trikyData)
      const gameNumber = Object.keys(trikyData).length +1;

      trikyData[`game ${gameNumber}`] = {
        "winner": oneWinner,
        "locer": oneLucer
      };
  
      localStorage.setItem('triky', JSON.stringify(trikyData));
      
      
    } else {
      localStorage.setItem('triky',JSON.stringify({
        "game 1" :{
          "winner": oneWinner,
          "locer": oneLucer
        }
      }))
    
    }
  };

export default addData;