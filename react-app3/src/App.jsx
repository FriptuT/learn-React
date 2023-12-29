import Player from "./components/Player";
import GameBoard from "./components/GameBoard";

function App() {
  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <Player initialName="NET" symbol="X" />
          <Player initialName="ASP" symbol="O" />
        </ol>
        
        <GameBoard />
      </div>
      LOG
    </main>
  );
}

export default App;
