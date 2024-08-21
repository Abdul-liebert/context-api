import { useState } from 'react';
import ThemeContext from './ThemeContext';
import ThemedComponent from './ThemedComponent'

function App() {

    const [theme, setTheme] = useState('light')

    const toggleTheme = () => {
        setTheme(theme == 'light' ? 'dark' : 'light')
    }

    return (
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <ThemedComponent />
    </ThemeContext.Provider>
    )
}

export default App