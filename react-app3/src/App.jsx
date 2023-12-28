import Player from "./components/Player";

function App() {
  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <Player name="NET" symbol="X" />
          <Player name="NuGet" symbol="O" />
        </ol>
        
        GAME BOARD
      </div>
      LOG
    </main>
  );
}

export default App;
