import { Deck } from './decks-api.ts'

const initialState = {
  decks: [] as Deck[], //
  // searchParams: {
  //   name: '',
  // },
}

type DecksState = typeof initialState

export const decksReducer = (state: DecksState = initialState, action: DecksActions): DecksState => {
  switch (action.type) {
    case 'SET-DECKS': {
      return {...state, decks: action.decks}
    }
    case 'CREATE-DECKS':{


      return {...state, decks: [action.deck, ...state.decks]}
    }
    default:
      return state
  }
}

type DecksActions = ReturnType<typeof setDecksAC> | ReturnType<typeof createDeckAC >

export const setDecksAC = (decks: Deck[]) =>{
  return {
    type: "SET-DECKS",
    decks
  } as const
}
export const createDeckAC = (deck: Deck) =>{
  return {
    type: "CREATE-DECKS",
    deck
  } as const
}
