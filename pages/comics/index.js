import { useState } from 'react'
import Comics from '../../components/comics'

export default function IndexPage() {
  const [pageIndex, setPageIndex ] = useState(0)
  const [nameStartsWith, setNameStartsWith] = useState("")  

  return (
    <div>
    <Comics indexPage={pageIndex} nameStartsWith={nameStartsWith} />
    <div style={{ display: 'none' }}><Comics indexPage={pageIndex + 1} nameStartsWith={nameStartsWith}/></div>
    <button onClick={() => setPageIndex(pageIndex - 1, nameStartsWith)}>Previous</button>
    <button onClick={() => setPageIndex(pageIndex + 1, nameStartsWith)}>Next</button>
    </div>
  )
}