import { useState } from 'react'
import Comics from '../../components/comics'

export default function IndexPage() {
  const searchComics = event => {
    event.preventDefault()
    setTitleStartsWith(event.target.search.value) 
  }
  const [pageIndex, setPageIndex ] = useState(0) 
  const [titleStartsWith, setTitleStartsWith] = useState("") 

  return (
    <div>
      <form onSubmit={searchComics}>        
        <input id="search" type="text" autoComplete="search"/>
        <button type="submit">Search</button>
      </form>   
    <Comics pageIndex={pageIndex} titleStartsWith={titleStartsWith}/>
    <div style={{ display: 'none' }}><Comics pageIndex={pageIndex + 1} titleStartsWith={titleStartsWith}/></div>
    <button onClick={() => setPageIndex(pageIndex - 1)}>Previous</button>
    <button onClick={() => setPageIndex(pageIndex + 1)}>Next</button>
    </div>
  )
}