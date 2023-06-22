import Card from "../components/Card";

const IndexPage = ({books}) => {
  console.log(books);
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