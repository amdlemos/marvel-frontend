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
        <div className="relative text-gray-700">
          <input id="search" className="w-full h-10 pl-3 pr-8 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline" type="text" placeholder="Search" />
          <button className="absolute inset-y-0 right-0 flex items-center px-4 font-bold text-white bg-indigo-600 rounded-r-lg hover:bg-indigo-500 focus:bg-indigo-700" type="submit">Search</button>
        </div>
      </form>
      <Characters pageIndex={pageIndex} nameStartsWith={nameStartsWith} />
      <div style={{ display: 'none' }}><Characters pageIndex={pageIndex + 1} nameStartsWith={nameStartsWith} /></div>
      <div className='container'>
        <nav aria-label="Page navigation">
          <ul className="inline-flex">
            <li><button onClick={() => setPageIndex(pageIndex - 1)} className="h-10 px-5 text-indigo-600 transition-colors duration-150 bg-white rounded-l-lg focus:shadow-outline hover:bg-indigo-100">Prev</button></li>
            <li><button onClick={() => setPageIndex(pageIndex + 1)} className="h-10 px-5 text-indigo-600 transition-colors duration-150 bg-white rounded-r-lg focus:shadow-outline hover:bg-indigo-100">Next</button></li>
          </ul>
        </nav>
      </div>
    </div>
  )
}
