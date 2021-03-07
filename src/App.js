import './App.css';
import Sidebar2 from './Sidebar2';
import Feed from "./Feed";
import Widgets from "./Widgets";

function App() {
  return (
    <div className="App">
      <h1>
        
      </h1>

      {/* sidebar */}
      <Sidebar2/>
      {/* feed */}
      <Feed />
      {/* widgets */}
      <Widgets />

    </div>
  );
}

export default App;
