import './App.css';
import React from 'react';
import AddToCapsule from './components/AddToCapsule';
import ViewCapsule from './components/ViewCapsule';
import VisualizeCapsule from './components/VisualizeCapsule';

function App() {
  let [currPage, setPage] = React.useState('home')
  if(currPage === 'home'){
    return (
      <div className="App">
        <h1>
          Find out what is going on in the world today!
        </h1>
        <br/><br/>
        <button className='button button1' onClick={() => setPage('addtocapsule')}>
          Add to the capsule
        </button>
        <button className='button button1' onClick={() => setPage('viewcapsule')}>
          View the capsule
        </button>
        <button className='button button1' onClick={() => setPage('visualizecapsule')}>
          Vizualize Capsule
        </button>
      </div>
    );
  }
  else if (currPage === 'addtocapsule'){
    return (
      <AddToCapsule setPage = {setPage}/>
    );
  }
  else if (currPage === 'viewcapsule'){
    return (
      <ViewCapsule setPage = {setPage}/>
    );
  }
  else if (currPage === 'visualizecapsule'){
    return (
      <VisualizeCapsule/>
    );
  }
  else{
    return (
      <div>
        refresh page if here
      </div>
    );
  }
}

export default App;
