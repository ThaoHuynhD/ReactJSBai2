import "./App.css";
import GlassLayout from "./Layout/GlassLayout";
import ModelLayout from "./Layout/ModelLayout";
import RenderWithMap from "./RenderWithMap/RenderWithMap";

function App() {
  return (
    <div className="App">
      <div className="content">
        <ModelLayout />
        <GlassLayout />
      </div>
    </div>
  );
}

export default App;
