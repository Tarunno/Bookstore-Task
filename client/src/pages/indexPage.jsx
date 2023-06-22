import { useEffect, useState } from 'react';
import Card from "../components/Card";
import { GetBooks } from '../api/books';

const IndexPage = () => {
  const [books, setBooks] = useState([])

  const handleGetBooks = async () => {
    const data = await GetBooks()
    setBooks(data)
  }

  useEffect(() => {
    handleGetBooks()
  }, [])

  return (
    <div>
      <div className='p-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4'>
        {books && books.map(book => (
          <Card key={book.id} book={book} />
        ))}
      </div>
    </div>
  )
}

export default IndexPage