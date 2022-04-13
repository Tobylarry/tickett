import Nav from './Nav'; //Navbar 
import Mainn from './Mainn'; //Main content
import './style/main.css';

function App() {
  return (
    <div className="App">
     <Nav className="nav" />
     <Mainn className="mainn" />
    </div>
  );
}

export default App;
