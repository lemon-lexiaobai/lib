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

export function deleteBook() {}

export function getBorrow() {
  return storage.get(BORROW_KEY, [])
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
