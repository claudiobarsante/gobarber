import React from 'react';
import GlobalStyle from './styles/global';
import { AuthProvider } from './context/AuthContext';
import Routes from './routes/index';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <div>
      <Router>
        <AuthProvider>
          <Routes />
        </AuthProvider>
        <GlobalStyle />
      </Router>
    </div>
  );
}

export default App;
