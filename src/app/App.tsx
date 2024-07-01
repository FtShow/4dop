import './App.css'
import { Decks } from '../features/decks/Decks.tsx'
import {DecksApi} from "../features/decks/decks-api.ts";

export const App = () => {

  return (
    <div>
      <Decks />
    </div>
  )
}
