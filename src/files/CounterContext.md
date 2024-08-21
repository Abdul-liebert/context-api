import { createContext, useReducer } from 'react';

// Membuat context untuk counter
const CounterContext = createContext();

// Fungsi reducer untuk mengelola state counter
function counterReducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
}

// Provider untuk menyediakan state dan dispatch kepada komponen anak
export function CounterProvider(children) {
  const [state, dispatch] = useReducer(counterReducer, { count: 0 });

  return (
    <CounterContext.Provider value={{ state, dispatch }}>
      {children}
    </CounterContext.Provider>
  );
}

export default CounterContext;