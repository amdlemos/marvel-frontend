import { useState } from 'react'
import Characters from '../../components/characters'

export default function IndexPage() {
  const searchCharacters = event => {
    event.preventDefault()
    setNameStartsWith(event.target.search.value) 
  }
  const [pageIndex, setPageIndex] = useState(0)
  const [nameStartsWith, setNameStartsWith] = useState("")

  return (
    <div>
      <form onSubmit={searchCharacters}>        
        <input id="search" type="text" autoComplete="search" />
        <button type="submit">Search</button>
      </form>      
      <Characters pageIndex={pageIndex} nameStartsWith={nameStartsWith} />
      <div style={{ display: 'none' }}><Characters pageIndex={pageIndex + 1} nameStartsWith={nameStartsWith} /></div>
      <button onClick={() => setPageIndex(pageIndex - 1)}>Previous</button>
      <button onClick={() => setPageIndex(pageIndex + 1)}>Next</button>
    </div>
  )
}
