import { useState } from "react"
import { AddBook } from "../api/books"

const AddPage = () => {

  const [message, setMessage] = useState(null)

  const inputHeader = (primary, secondary) => {
    return (
      <div>
        <h1 className='text-[20px] font-semibold'>{primary}</h1>
        <h2 className='text-[13px] text-gray-600'>{secondary}</h2>
      </div>
    )
  } 

  const handleSubmit = async (e) => {
    e.preventDefault()
    const fromData = new FormData(e.target)
    console.log(Array.from(fromData));
    const res = await AddBook(fromData)
    if(res['message']){
      setMessage(res['message'])
    }
    else{
      setMessage('Something went wrong')
    }
  }

  return(
    <div className='p-6'>
      <h1 className='text-[24px] mb-4 font-semibold text-center'> Add a new book </h1>
      <form onSubmit={(e) => handleSubmit(e)} encType="multipart/form-data" className='p-6 border rounded-xl flex gap-4 max-w-[900px] m-auto shadow-xl'>
        <div className='flex flex-col gap-1 w-full'>
          {inputHeader('Name', 'The book name')}
          <input className='mb-4' type="text" name="name" placeholder="e.g. The Lord of the Rings, etc" />
          {inputHeader('Price', 'Price of the book')}
          <input className='mb-4' type="number" name="price" placeholder="e.g. 199" required/>
        </div>
        <div className='flex flex-col gap-1 w-full'>
          {inputHeader('Author', 'Name of the author')}
          <input className='mb-4' type="text" name="author" placeholder="e.g. John Ronald Reuel, etc" required/>
          {inputHeader('Category', 'Category of the book')}
          <select className='mb-4' name="category" required>
            <option selected disabled> Select category </option>
            <option value="Fiction"> Fiction </option>
            <option value="Fantasy"> Fantasy </option>
            <option value="Romance"> Romance </option>
            <option value="Thriller"> Thriller </option>
            <option value="Horror"> Horror </option>
            <option value="Comics"> Comics </option>
          </select>
        </div>
        <div className='flex flex-col gap-1 w-full'>
          {inputHeader('Image', 'Cover of the book')}
          <input className='mb-4' type="file" name="image" required/>
          {inputHeader('Seller', 'Seller of the book')}
          <select className='mb-4' name="seller" required>
            <option selected disabled> Select saller </option>
            <option value="Barnes & Noble"> Barnes & Noble </option>
            <option value="Indigo Books & Music"> Indigo Books & Music </option>
            <option value="Books-A-Million"> Books-A-Million </option>
          </select>
          <button type="submit" className='w-full bg-brand px-4 py-2 rounded-lg text-white font-semibold'>Add</button>
        </div>
      </form>
    </div>
  )
}

export default AddPage