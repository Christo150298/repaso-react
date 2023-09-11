import './App.css';

const example = [ "a" , "b" , "c" ]

const App = () => {
  return (
    <div className="App">
      <ul>
        { example.map((item) => {
          return(
            <li>
              <input className='userName'/>
              <button>Eliminar {item} </button>
              <p>
                Dinero invertido <strong>{ (Math.random() * 10000).toFixed(2) }</strong>
              </p>
            </li>
          );
        }) }
      </ul>
    </div>
  );
}

export default App;
