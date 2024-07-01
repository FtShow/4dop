import axios from 'axios'

export const instance = axios.create({
  baseURL: 'https://api.flashcards.andrii.es',
  headers: {
    'x-auth-skip': true,
  },
})
export const DecksApi = {
  fetchDecks() {
    return instance.get<FetchDecksResponse>('/v2/decks')
  },
}

export type FetchDecksResponse = {
  items: Deck[]
  pagination: Pagination
}

export type Deck = {
  isFavorite: boolean
  author: Author
  id: string
  userId: string
  name: string
  isPrivate: boolean
  cover: string
  created: string
  updated: string
  cardsCount: number
}
export type Author = {
  id: string
  name: string
}
export type Pagination = {
  currentPage: number
  itemsPerPage: number
  totalPages: number
  totalItems: number
}
