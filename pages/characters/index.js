import { useState } from 'react'
import Characters from '../../components/characters'

export default function IndexPage() {
  const [pageIndex, setPageIndex ] = useState(0)
  const [nameStartsWith, setNameStartsWith] = useState("")  

  return (
    <div>
    <Characters pageIndex={pageIndex} nameStartsWith={nameStartsWith} />
    <div style={{ display: 'none' }}><Characters pageIndex={pageIndex + 1} nameStartsWith={nameStartsWith}/></div>
    <button onClick={() => setPageIndex(pageIndex - 1, nameStartsWith)}>Previous</button>
    <button onClick={() => setPageIndex(pageIndex + 1, nameStartsWith)}>Next</button>
    </div>
  )
}
