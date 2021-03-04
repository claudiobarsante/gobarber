import React from 'react';
import GlobalStyle from './styles/global';
import { AuthProvider } from './context/AuthContext';
import Routes from './routes/index';
import { BrowserRouter as Router } from 'react-router-dom';
import { ToastProvider } from 'react-toast-notifications';
function App() {
  return (
    <div>
      <Router>
        <ToastProvider>
          <AuthProvider>
            <Routes />
          </AuthProvider>
        </ToastProvider>
        <GlobalStyle />
      </Router>
    </div>
  );
}

export default App;
