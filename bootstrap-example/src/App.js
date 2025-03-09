import logo from './logo.svg';
import './App.css';
import Four from './components/four/four';
import Five from './components/five/five';
import Six from './components/six/six';
import { First } from 'react-bootstrap/esm/PageItem';
import Second from './components/Second/second';
import Third from './third/third';

function App() {
  return (
    <div className="App">
      <First/>
      <Second />
      <Third />
      <Four />
      <Five/>
      <Six/>
    </div>
  );
}

export default App;
