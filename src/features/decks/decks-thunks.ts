import { createDeckAC, setDecksAC } from './decks-reducer.ts'
import { useAppDispatch } from '../../app/store.ts'
import { Dispatch } from 'redux'
import { addDeckParams, DecksApi } from './decks-api.ts'

export const setDecksTC = () => (dispatch: Dispatch)=> {
  DecksApi.fetchDecks()
    .then(res=>dispatch(setDecksAC(res.data.items)))
}
export const createDecksTS = (params: addDeckParams) => (dispatch: Dispatch)=> {
  return DecksApi.createDeck(params)
    .then(res=>dispatch(createDeckAC(res.data)))
}
