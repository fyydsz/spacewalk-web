import NavBar from "./components/NavBar/NavBar";
import "./App.css"
import Home from "./components/Pages/Home";

const App: React.FC = () => {
  return (
    <div className="App">
      <NavBar />
      <Home />
    </div>
  );
};

export default App;