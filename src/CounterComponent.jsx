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

    const toggleTheme = () => {
      const theme = state.theme === 'light' ? 'dark' : 'light'
      dispatch({ type: 'setTheme', payload: theme })
    }

    const toggleAuth = () => {
      const auth =  state.auth === 'guess' ? 'user' : 'guess'
      dispatch({ type: 'setAuth', payload: auth })
    }

    const status = state.auth === 'guess' ? 'login' : 'logout'; 

  return(
    <div>
    <div style={style}> 
      <p>Current Theme: {state.theme}</p>
      <button onClick={toggleTheme}>
        Set Theme
      </button>
    </div>
      <p>Current Auth: {state.auth}</p>
      <button onClick={toggleAuth}>
        {status}
      </button>
    </div>
  )
}

export default Component