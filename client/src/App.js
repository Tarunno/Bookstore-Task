import {useEffect} from 'react'

const App = () => {

  useEffect(() => {
    fetch('http://localhost:8000/api/')
    .then(res => res.json())
    .then(data => console.log(data))
  }, [])

  return (
    <div className="App">
      <h1 className='text-red-500'>TESTING</h1>
    </div>
  );
}

export default App
