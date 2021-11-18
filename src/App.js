import "./App.css";
import Navbar from "./components/Navbar";
import Texttransform from "./components/Texttransform/Texttransform";
function App() {
  return (
    <>
      <Navbar title="textTransform " home="Home" />
      <div className="container">
        <Texttransform heading="Enter Your Text" />
      </div>
    </>
  );
}

export default App;
