const BASE_URL = 'http://localhost:8000/api/'


const getToken = (name) => {
  let cookieValue = null;
  if (document.cookie && document.cookie !== '') {
      const cookies = document.cookie.split(';')
      for (let i = 0; i < cookies.length; i++) {
          const cookie = cookies[i].trim()
          if (cookie.substring(0, name.length + 1) === (name + '=')) {
              cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
              break
          }
      }
     return cookieValue
  }
}

export const GetBooks = async () => {
  const res = await fetch(BASE_URL + 'books/')
  const data = await res.json()
  return data
}

export const AddBook = async (payload) => {
  const res = await fetch(BASE_URL + 'books/add/', {
    method: 'POST',
    headers: {
      'X-CSRFToken': getToken('csrftoken')
    },
    body: payload
  })
  const data = await res.json()
  return data
}