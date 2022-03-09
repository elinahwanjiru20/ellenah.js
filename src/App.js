import Ellenah from './components/Ellenah';
import Component from './components/Component';
import './App.css';

function App() {
  return (
    <div className="App">
      <Ellenah props={{name: "Elinah Wanjiru"}} />
      <h3>It is good to be here.</h3>
      <p>Getting started with react.</p>
      <Component /> 
    </div>
  );
}

export default App;
