export default class Book {
  constructor({ id, category, name, press }) {
    this.id = id
    this.category = category
    this.name = name
    this.press = press
    this.state = 1
  }
}

export function createBook(data) {
  return new Book({
    id: data.id,
    category: data.category,
    name: data.name,
    press: data.press
  })
}
