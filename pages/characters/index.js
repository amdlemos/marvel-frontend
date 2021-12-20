import { useState } from 'react'
import Characters from '../../components/characters'

export default function IndexPage() {
  const [pageIndex, setPageIndex ] = useState(0)
  const [nameStartsWith, setNameStartsWith] = useState("sp")  

  return (
    <div>
    <Characters offset={pageIndex} nameStartsWith={nameStartsWith} />
    <div style={{ display: 'none' }}><Characters offset={pageIndex + 1} nameStartsWith={nameStartsWith}/></div>
    <button onClick={() => setPageIndex(pageIndex - 1, nameStartsWith)}>Previous</button>
    <button onClick={() => setPageIndex(pageIndex + 1, nameStartsWith)}>Next</button>
    </div>
  )
}
