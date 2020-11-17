import logo from './assets/images/logo.svg';
import './assets/css/App.css';
//importar componentes
import MiComponente from './components/MiComponente';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Prueba de pagina React
        </p>
        <section className="componentes">
        <MiComponente />
      </section>
      </header>

    </div>
  );
}

export default App;
