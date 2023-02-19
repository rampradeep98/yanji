import React from 'react';
import Main from './pages/Main';

const App = () => {
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-sm-6 offset-md-3'>
          <div className='wrapper'>
            <Main />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
