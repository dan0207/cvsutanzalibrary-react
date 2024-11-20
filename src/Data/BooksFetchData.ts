import { faker } from '@faker-js/faker'

export type Book = {
  accessNumber: String
  title: string
  author: string
  genre: string
  series: string
  publisher: string
  bookFormat: string
  isbn: string
  img: string
  status: 'available' | 'not available' | 'room use only'
}

const range = (len: number) => {
  const arr: number[] = []
  for (let i = 0; i < len; i++) {
    arr.push(i)
  }
  return arr
}

const newBook = (): Book => {
  return {
    accessNumber: faker.finance.accountNumber(),
    title: faker.book.title(),
    author: faker.book.author(),
    genre: faker.book.genre(),
    series: faker.book.series(),
    publisher: faker.book.publisher(),
    bookFormat: faker.book.format(),
    isbn: faker.commerce.isbn(),
    img: "https://placehold.co/150x200",
    status: faker.helpers.shuffle<Book['status']>([
      'available',
      'not available',
      'room use only',
    ])[0]!,
  }
}

export function makeData(...lens: number[]) {
  const makeDataLevel = (depth = 0): Book[] => {
    const len = lens[depth]!
    return range(len).map((): Book => {
      return {
        ...newBook(),
      }
    })
  }

  return makeDataLevel()
}
