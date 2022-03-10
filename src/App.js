import Ellenah from './components/Ellenah';
import Component from './components/Component';
import Sheroh from './components/Sheroh';
import Teams from './components/teams';
  

function App() {
  return (
    <div className="App">
      <Ellenah props={{name: "Elinah Wanjiru"}} />
      <h3>It is good to be here.</h3>
      <p>Getting started with react.</p>
      <Component />
      <Sheroh /> 
      <Teams/>
    </div>
  );
}

export default App