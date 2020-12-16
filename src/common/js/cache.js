import storage from 'good-storage'

const BOOK_KEY = '__book__'
const BORROW_KEY = '__borrow__'
const CATEGORY_KEY = '__category__'

export function getBook() {
  return storage.get(BOOK_KEY, [])
}
export function insertBook(book) {
  let arr = getBook()
  arr.push(book)
  storage.set(BOOK_KEY, arr)
}

export function bookNotBorrow() {
  let arr = getBook()
  return arr.filter(item => item.state === 1)
}

export function updateBook(id, state) {
  let arr = getBook()
  let index = arr.findIndex(item => item.id === String(id))
  if (index >= 0) {
    let book = arr[index]
    book.state = state
    arr.splice(index, 1, book)
  }
  storage.set(BOOK_KEY, arr)
}

export function getBorrow() {
  return storage.get(BORROW_KEY, [])
}

export function insertBorrow(info) {
  let arr = getBorrow()
  arr.push(info)
  storage.set(BORROW_KEY, arr)
}

export function updateBorrow(personId, bookId, state) {
  let arr = getBorrow()
  let index = arr.findIndex(item => item.bookId === bookId && item.personId === personId)
  arr[index].state = state
  // storage(BORROW_KEY, arr)
}

export function clearBorrow() {
  storage.set(BORROW_KEY, [])
}

export function getCategory() {
  return storage.get(CATEGORY_KEY, [])
}

export function insertCategory(id, val) {
  let array = getCategory()
  let index = array.findIndex(item => item.id === id)
  if (index >= 0) {
    array.splice(index, 1, { id: id, name: val })
  } else {
    array.push({ id: id, name: val })
  }
  storage.set(CATEGORY_KEY, array)
}
