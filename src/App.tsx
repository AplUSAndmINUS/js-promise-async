import React from 'react';

import './App.scss';

export const App = () => {
  const Hello = <p>Hello!</p>

  // typescript error due to return--would need to be fixed in TSConfig
  const myFunction = async () => Hello;
  return (
    <div className="App">
      {myFunction()
        .then((value: any) => value)
        .error((error: any) => console.error(error))}
    </div>
  );
}

export default App;
