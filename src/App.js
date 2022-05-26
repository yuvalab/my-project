import './App.css';
import Gallery from './Gallery';
import { CustomCursor } from './CustomCursor';


function App() {
  return (
    <div className="App">
      <CustomCursor>
        <Gallery />
       </CustomCursor>
    </div>
  );
}

export default App;
