import logo from './logo.svg';
import './App.css';
import HelloWorld from './components/HelloWorld';
import SayMyName from './components/SayMyName';


function App() {
  const name = "teste";
  const newName = name.toUpperCase();
  const img = "https://image.cachorrogato.com.br/thumb/1200/630/1/imagens/original/imagem858.jpg"

  const sum = (a, b) => {
    return a + b;
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <SayMyName name="Victor" />
        <HelloWorld />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <img src={img} alt="dog" width="250px" />
        {/* make a 5 times do */}
        <p>{sum(1, 2)}</p>

        <p>{newName}</p>
      </header>
    </div>
  );
}

export default App;
