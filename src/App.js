import './App.css';
import { AppProvider } from "./Context/AppContext";
import Grid from './Components/Grid/Grid';
import Win from './Components/Win/Win';

function App() {
  return (
    <div className="all">
      <AppProvider>
        <Win/>
        <Grid/>
      </AppProvider>
    </div>
  );
}

export default App;
