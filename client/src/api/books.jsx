const BASE_URL = 'http://localhost:8000/api/'


const getCookie = (name) => {
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
      'X-CSRFToken': getCookie('csrftoken')
    },
    body: payload
  })
  const data = await res.json()
  return data
}

export const FilterBooks = async (payload) => {
  const res = await fetch(BASE_URL + 'books/filter/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-CSRFToken': getCookie('csrftoken')
    },
    body: JSON.stringify(payload)
  })
  const data = await res.json()
  return data
}


const setCookie = (name, value, daysToExpire) => {
  const date = new Date();
  date.setTime(date.getTime() + (daysToExpire * 24 * 60 * 60 * 1000));
  const expires = "expires=" + date.toUTCString();
  document.cookie = name + "=" + value + ";" + expires + ";path=/";
}

export const GetCart = async () => {
  let cart = JSON.parse(getCookie('cart')) 
  if(cart == null) setCookie('cart', JSON.stringify([]), 7)
  cart = JSON.parse(getCookie('cart'))
  return cart
}

export const AddToCart = async (book, action) => {
  let cart = JSON.parse(getCookie('cart')) 
  if(cart == null) setCookie('cart', JSON.stringify([]), 7)
  cart = JSON.parse(getCookie('cart'))

  if(action == "add"){
		if(cart[book.id] == undefined){
			cart[book.id] = {
        'id': book.id,
        'quentity':1, 
        'name': book.name,
        'image': book.image,
        'price': book.price,
        'author': book.author
       };
		}
		else{
			cart[book.id]['quentity'] += 1;
		}
	}
	else if(action == 'remove'){
		cart[book.id]['quentity'] -= 1;
		if(cart[book.id]['quentity'] <= 0){
			delete cart[book.id];
		}
  }

	setCookie('cart', JSON.stringify(cart), 7)
  return cart
}

export const PlaceOrder = async (cart, total_item, total_price) => {
  const res = await fetch(BASE_URL + 'order/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-CSRFToken': getCookie('csrftoken')
    },
    body: JSON.stringify({cart, total_item, total_price})
  })
  const data = await res.json()
  setCookie('cart', JSON.stringify([]), 0)
  return data
}


