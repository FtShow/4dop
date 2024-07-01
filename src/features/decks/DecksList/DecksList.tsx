import s from './DecksList.module.css'
import { useEffect } from 'react'
import { Deck, DecksApi } from '../decks-api.ts'
import { store, useAppDispatch, useAppSelector } from '../../../app/store.ts'
import { decksReducer, setDecksAC } from '../decks-reducer.ts'
import { useSelector } from 'react-redux'
import { DeckItem } from './DeckItem/DeckItem.tsx'
import { selectDecks } from '../decks-selectors.ts'

export const DecksList = () => {
  const dispatch = useAppDispatch()
  const decks = useAppSelector(selectDecks)
  console.log(store.getState())
  console.log(decks)
  useEffect(()=>{
    DecksApi.fetchDecks()
        .then(res=>dispatch(setDecksAC(res.data.items)))
  }, [dispatch])

  return (<ul className={s.list}>{decks.map((d: Deck)=><DeckItem key={d.id} deck={d}/>)}</ul>)
}
