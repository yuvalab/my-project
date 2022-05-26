import './App.css';
import Gallery from './Gallery';
import { CustomCursor } from './CustomCursor';

function constructStyleCursor(){
  return(<CustomCursor/>)

}

function App() {
  return (
    <div className="App">
      {constructStyleCursor()}
        <Gallery>
        </Gallery>
    </div>
  );
}

export default App;
