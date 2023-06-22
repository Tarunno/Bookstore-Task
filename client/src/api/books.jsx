const BASE_URL = 'http://localhost:8000/api/'

export const GetBooks = async () => {
  const res = await fetch(BASE_URL + 'books/')
  const data = await res.json()
  return data
}