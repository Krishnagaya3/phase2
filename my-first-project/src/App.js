import logo from './logo.svg';
import './App.css';
import First from './components/first/first';
import Second from './components/second/second';
import Third from './components/third/third';
import Four from './components/four/four';
import Five from './components/five/five';
import ButtonEx from './components/buttonex/ButtonEx';

function App() {
  return (
    <div className="App">
      Welcome to Functional Component.....Trainer Prasanna <br/>
      <First />
      <br />
      <Second /> 
      <br/>
      <Third firstName="Krishna" lastName="Kalaga" company="Wipro" /> <br/> 
      <br />
      <Four/>
      <br />
      <ButtonEx /> <hr />
      <Five />
      
   
    </div>
  );
}

export default App;
