import s from './DecksList.module.css'
import {useEffect} from "react";
import {DecksApi} from "../decks-api.ts";

export const DecksList = () => {
  useEffect(()=>{
    DecksApi.getDecks()
        .then(res=>res.data)
  }, [])
  return <ul className={s.list}></ul>
}
