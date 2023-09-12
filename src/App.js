import React from 'react';

import Users from './components/Users';

import './App.css';

const example = [ "a" , "b" , "c" ]

const App = () => {
  return (
    <div className="App">
      <Users users={example} className="clase-molona"/>
    </div>
  );
}

export default App;