import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Search from './Components/Search';
import IncDecCounter from './Components/IncDecCounter';
import {useState} from 'react';

function App() {
  let [toggleBtn, setToggleView]= useState(true);
  let toggleView = ()=> {
    setToggleView(!toggleBtn);
  };

  return (
    <div className='App mt-5'>
     <button type="button" className="btn btn-success" onClick={toggleView}>Toggle View</button>
      { toggleBtn ? <IncDecCounter /> : <Search />}
     </div>     
  );
}

export default App;
