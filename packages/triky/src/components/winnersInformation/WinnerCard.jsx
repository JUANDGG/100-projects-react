import '../../assets/css/WinnerCard.css'

function WinnerCard({ game, winner, locer }) {
    return (
      <div className="winner-card">
        <header className="card-header">
          <h3>{game}</h3>
        </header>
  
        <div className="card-body">
          <div className="winner-info">
            <h4>Winner:</h4>
            <p>{winner}</p>
          </div>
  
          <div className="lucer-info">
            <h4>Lucer:</h4>
            <p>{locer}</p>
          </div>
        </div>
      </div>
    );
  }
  

  export default WinnerCard;