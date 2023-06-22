import { useEffect, useState } from 'react';
import Card from "../components/Card";
import { GetBooks, FilterBooks } from '../api/books';
import Filter from '../components/Filter';


const IndexPage = ({setCart}) => {
  const [books, setBooks] = useState([])
  const [filter, setFilter] = useState({})

  const handleGetBooks = async () => {
    const data = await GetBooks()
    setBooks(data)
  }

  const handleFilter = async () => {
    const data = await FilterBooks(filter)
    setBooks(data)
  }

  useEffect(() => {
    handleFilter()
  }, [filter])

  useEffect(() => {
    handleGetBooks()
  }, [])

  return (
    <div className='p-6 flex flex-col gap-4'>
      <Filter setFilter={setFilter}/>
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4'>
        {books && books.map(book => (
          <Card key={book.id} book={book} setCart={setCart}/>
        ))}
      </div>
    </div>
  )
}

export default IndexPage