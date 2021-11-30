import './App.css';
import { AppProvider } from "./Context/AppContext";
import Grid from './Components/Grid/Grid';
import Win from './Components/Win/Win';
import Menu from './Components/Menu/Menu';

function App() {
  return (
    <div className="all">
      <AppProvider>
        <Menu/>
        <Win/>
        <Grid/>
      </AppProvider>
    </div>
  );
}

export default App;
