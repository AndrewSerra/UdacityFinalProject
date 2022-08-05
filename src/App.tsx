import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import { DefaultAppView } from './views/DefaultAppView';

function App() {

  const { isAuthenticated } = useAuth0();

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<DefaultAppView />} />
          {/* {
            isAuthenticated ? (

            ) : (
              
            )
          } */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
