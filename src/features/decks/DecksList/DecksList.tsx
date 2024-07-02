import s from './DecksList.module.css'
import { useEffect } from 'react'
import { Deck, DecksApi } from '../decks-api.ts'
import { store, useAppDispatch, useAppSelector } from '../../../app/store.ts'
import { decksReducer, setDecksAC } from '../decks-reducer.ts'
import { useSelector } from 'react-redux'
import { DeckItem } from './DeckItem/DeckItem.tsx'
import { selectDecks } from '../decks-selectors.ts'
import { setDecksTC } from '../decks-thunks.ts'
import { createLogger } from 'vite'

export const DecksList = () => {
  const dispatch = useAppDispatch()
  const decks = useAppSelector(selectDecks)
  console.log(store.getState())
  useEffect(()=>{
    dispatch(setDecksTC())
  }, [dispatch])

  return (<ul className={s.list}>{decks.map((d: Deck)=><DeckItem key={d.id} deck={d}/>)}</ul>)
}
