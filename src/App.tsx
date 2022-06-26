import { useState } from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';

import KanbanBoard from './components/KanbanBoard';
import { ModalProvider } from './hooks/useModal';
import store from './store';
import GlobalStyle from './common/styles/global';
import darkTheme from './common/styles/themes/dark';
import lightTheme from './common/styles/themes/light';

function App() {
  const [theme, setTheme] = useState(lightTheme);

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? darkTheme : lightTheme);
  }
  
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <ModalProvider>
          <div className="App">
            <GlobalStyle/>
            <KanbanBoard toggleTheme={toggleTheme}/>
          </div>
        </ModalProvider>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
