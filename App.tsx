import React from 'react';
import { AuthProvider } from './src/context/AuthContext';
import RootNavigator from './src/navigation/RootNavigator';
import Toast from 'react-native-toast-message';

const App = () => {
  return (
    <AuthProvider>
      <RootNavigator />
       <Toast />
    </AuthProvider>
  );
};

export default App;
