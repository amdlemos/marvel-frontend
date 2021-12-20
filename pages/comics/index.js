import { useState } from 'react'
import Comics from '../../components/comics'

export default function IndexPage() {
  const [pageIndex, setPageIndex ] = useState(0)  

  return (
    <div>
    <Comics indexPage={pageIndex} />
    <div style={{ display: 'none' }}><Comics indexPage={pageIndex + 1}/></div>
    <button onClick={() => setPageIndex(pageIndex - 1)}>Previous</button>
    <button onClick={() => setPageIndex(pageIndex + 1)}>Next</button>
    </div>
  )
}