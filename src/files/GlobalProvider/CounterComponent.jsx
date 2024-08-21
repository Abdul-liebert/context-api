import { useContext } from "react";
import GlobalContext from "./CounterContext";

function Component() {
  const {state, dispatch} = useContext(GlobalContext)

  const style = {
        backgroundColor: state.theme === 'light' ? '#fff' : '#333',
        color: state.theme === 'light' ? '#000' : '#fff',
        padding: '10px',
        textAlign: 'center'
    }

  return(
    <div>
    <div style={style}>
      <p>Current Theme: {state.theme}</p>
      <button onClick={() => dispatch({ type: 'setTheme', payload: 'light' })}>
        Set Dark Theme
      </button>
    </div>
      <p>Current Auth: {state.auth}</p>
      <button onClick={() => dispatch({ type: 'setAuth', payload: 'register' })}>
        Set Auth to Login
      </button>
    </div>
  )
}

export default Component