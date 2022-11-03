//Package import
import { Route, Routes } from 'react-router-dom';

//page import
import Main from './page/Main';
import ContentDetail from './page/ContentDetail';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';
import Theme from './shared/Theme';
import store from './redux/config/Configstore';

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={Theme}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Main />} />
            <Route path='/a-posts/:id' element={<ContentDetail />} />
            <Route path='/b-posts/:id' element={<ContentDetail />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
