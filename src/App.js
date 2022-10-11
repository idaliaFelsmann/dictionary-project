import logo from "./logo.png";
import './App.css';
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
    
      <header>
       <div className="logo-dict" >
      <img src={logo} alt="logo" className="img-fluid"></img>
      </div>
      </header>
      <main>
        <Dictionary />
      </main>
      <footer>
        Coded by Idalia F. 
      </footer>
    </div>
  );
}


