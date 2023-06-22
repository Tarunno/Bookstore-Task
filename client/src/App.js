import { Route, Routes } from 'react-router-dom';
import IndexPage from './pages/indexPage';
import Header from './components/Header';
import AddPage from './pages/addPage';

const App = () => {

  return (
    <div className="App">
      <Header/>
      <div>
        <Routes>
          <Route path='' element={<IndexPage />}/>
          <Route path='/add' element={<AddPage />}/>
        </Routes>
      </div>
    </div>
  );
}

export default App
