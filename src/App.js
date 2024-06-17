import Timer from "./components/Timer";
import List from "./components/List";
import Login from "./components/Login";

function App() {
  return (
      <div className="App">
          <h1>Tomato Groove</h1>
          <Timer />
          <div className="utility">
              <List />
              <Login />
          </div>
      </div>
  );
}

export default App;
