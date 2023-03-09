import './Header.css'
import { Filters } from './Filters.jsx'

export function Header({ changeFilter }) {
  return (
    <header>
      <h1>My Store 🛍️</h1>
      <Filters onChange={changeFilter} />
    </header>
  )
}
