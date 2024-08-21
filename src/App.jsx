// App.jsx
import React from 'react';
import { GlobalProvider } from './CounterContext';
import Component from './CounterComponent';

function App() {
  return (
    <GlobalProvider>
      <Component />
    </GlobalProvider>
  );
}

export default App;
