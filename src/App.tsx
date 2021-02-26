import React from 'react';
import GlobalStyle from './styles/global';
import SignIn from './pages/SignIn/index';
import { AuthProvider } from './context/AuthContext';

function App() {
  return (
    <div>
      <AuthProvider>
        <SignIn />
      </AuthProvider>
      <GlobalStyle />
    </div>
  );
}

export default App;
