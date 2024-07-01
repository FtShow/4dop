import s from './DecksList.module.css'
import { useEffect } from 'react'
import { Deck, DecksApi } from '../decks-api.ts'
import { useAppDispatch } from '../../../app/store.ts'
import { setDecksAC } from '../decks-reducer.ts'
import { useSelector } from 'react-redux'
import { DeckItem } from './DeckItem/DeckItem.tsx'

export const DecksList = () => {
  const dispatch = useAppDispatch()
  // @ts-ignore
  const decks = useSelector<Deck[]>(state=>state.decksReducer)
  useEffect(()=>{
    DecksApi.fetchDecks()
        .then(res=>dispatch(setDecksAC(res.data.items)))
  }, [dispatch])

  console.log(decks)
  // @ts-ignore
  return (<ul className={s.list}>{decks.map((d: Deck)=> <DeckItem deck={d}/>)}</ul>)
}
