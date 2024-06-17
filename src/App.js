import Timer from "./components/Timer";
import List from "./components/List";
import Spotify from "./components/Spotify";

function App() {
  return (
      <div className="App">
          <h1>Tomato Groove</h1>
          <Timer />
          <div className="utility">
              <List />
              <Spotify />
          </div>
      </div>
  );
}

export default App;
