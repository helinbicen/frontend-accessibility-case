import "./App.css";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="description">
        It is a navbar that meets the accessibility requirements. Please use tab and enter keys to navigate.
      </div>
    </div>
  );
}

export default App;
