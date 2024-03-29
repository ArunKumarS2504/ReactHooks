import logo from './logo.svg';
import './App.css';
import Apple from './Todo';
import Memo from './Memo';
import useRefRender from './UseRef';
import fetchApi from './Fetch';

function App() {
  return (
    <div className="App">
      
      {/* <Memo/><Apple/><useRefRender/> */}
      <fetchApi/>
    </div>
  );
}

export default App;
