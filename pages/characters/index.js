import { useState } from 'react'
import Characters from '../../components/characters'

export default function IndexPage() {
  const searchCharacters = event => {
    event.preventDefault()
    setNameStartsWith(event.target.search.value) // don't redirect the page
    // where we'll add our form logic
  }
  const [pageIndex, setPageIndex] = useState(0)
  const [nameStartsWith, setNameStartsWith] = useState("")


  const changeHandler = e => {
    alert(nameStartsWith)
    
  }
  return (
    <div>
      <form onSubmit={searchCharacters}>        
        <input id="search" type="text" autoComplete="search" required />
        <button type="submit">Search</button>
      </form>      
      <Characters pageIndex={pageIndex} nameStartsWith={nameStartsWith} />
      <div style={{ display: 'none' }}><Characters pageIndex={pageIndex + 1} nameStartsWith={nameStartsWith} /></div>
      <button onClick={() => setPageIndex(pageIndex - 1, nameStartsWith)}>Previous</button>
      <button onClick={() => setPageIndex(pageIndex + 1, nameStartsWith)}>Next</button>
    </div>
  )
}
