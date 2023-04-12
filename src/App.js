import logo from './logo.svg';
import './App.css';
import HelloWorld from './components/HelloWorld';


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
        <img src={img} alt="image dog" width="250px" />
        <p>{sum(1, 2)}</p>
        <p>{newName}</p>
      </header>
    </div>
  );
}

export default App;
