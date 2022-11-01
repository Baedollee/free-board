//Package import
import { Route, Routes } from 'react-router-dom';

//page import
import Main from './page/Main';
import ContentDetail from './page/ContentDetail';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Main />} />
      <Route path='/a-posts/:id' element={<ContentDetail />} />
      <Route path='/b-posts/:id' element={<ContentDetail />} />
    </Routes>
  );
}

export default App;
