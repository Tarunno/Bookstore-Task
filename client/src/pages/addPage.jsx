const AddPage = () => {

  const inputHeader = (primary, secondary) => {
    return (
      <div>
        <h1>{primary}</h1>
        <h2>{secondary}</h2>
      </div>
    )
  } 
  return(
    <div className='p-6'>
      <h1> Add a new book </h1>
      <form>
        <div>
          {inputHeader('Name', 'The book name')}
          <input type="text" placeholder="e.g. The Lord of the Rings, etc"/>
        </div>
        <div>
          {inputHeader('Author', 'Name of the author')}
          <input type="text" placeholder="e.g. John Ronald Reuel"/>
        </div>
      </form>
    </div>
  )
}

export default AddPage