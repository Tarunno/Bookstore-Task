import { Route, Routes } from 'react-router-dom';
import IndexPage from './pages/indexPage';
import { useEffect, useState } from 'react';
import { GetBooks } from './api/books';
import Header from './components/Header';
import AddPage from './pages/addPage';

const App = () => {

  const [books, setBooks] = useState([])

  const handleGetBooks = async () => {
    const data = await GetBooks()
    setBooks(data)
  }

  useEffect(() => {
    handleGetBooks()
  }, [])

  return (
    <div className="App">
      <Header/>
      <div>
        <Routes>
          <Route path='' element={<IndexPage books={books}/>}/>
          <Route path='/add' element={<AddPage />}/>
        </Routes>
      </div>
    </div>
  );
}

export default App
