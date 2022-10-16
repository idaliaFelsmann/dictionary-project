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
          open-sourced{" "}
          <a
            href="https://github.com/idaliaFelsmann/dictionary-project"
            target="_blank"
            rel="noopener noreferrer"
          >


             on GitHub
          </a>{" "}
          and hosted {" "}
          <a
            href="https://shecodes-dictionary.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            on Netlify
          </a>

      </footer>
    </div>
  );
}




